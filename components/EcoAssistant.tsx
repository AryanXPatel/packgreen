import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Package, Sparkles } from 'lucide-react';
import { getPackGreenAssistant } from '../services/gemini';
import { ChatMessage } from '../types';

export const EcoAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I\'m your PackGreen Assistant. Ask me about packaging products, custom printing, wholesale orders, or deliveries!' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const responseText = await getPackGreenAssistant(inputValue);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-pg-forest p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-pg-emerald" />
              <span className="font-display font-bold">PackGreen Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 h-80 overflow-y-auto bg-pg-cream/50 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex mb-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'model' && (
                  <div className="w-8 h-8 rounded-full bg-pg-emerald/10 flex items-center justify-center mr-2 flex-shrink-0">
                    <Package className="w-4 h-4 text-pg-forest" />
                  </div>
                )}
                <div className={`p-3 rounded-2xl max-w-[80%] text-sm ${
                  msg.role === 'user' 
                    ? 'bg-pg-forest text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 shadow-sm rounded-tl-none border border-gray-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                 <div className="w-8 h-8 rounded-full bg-pg-emerald/10 flex items-center justify-center mr-2">
                    <Package className="w-4 h-4 text-pg-forest animate-pulse" />
                  </div>
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about packaging, orders..."
              className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pg-emerald/30"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !inputValue.trim()}
              className="p-2 bg-pg-forest text-white rounded-full hover:bg-pg-emerald disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-pg-forest text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-xl group"
        >
          <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-2 -right-2 w-4 h-4 bg-pg-emerald rounded-full border-2 border-white"></span>
        </button>
      )}
    </div>
  );
};
