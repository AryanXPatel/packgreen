import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getPackGreenAssistant = async (prompt: string): Promise<string> => {
  if (!apiKey) {
    return "Demo mode: API key not configured. Please set up your Gemini API key to chat with PackGreen Assistant.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are PackGreen Assistant, a helpful and professional packaging expert for PackGreen Australia — a food packaging supplier. Help customers find the right packaging (cups, containers, bags, cutlery, etc.), answer questions about custom printing and branding, wholesale orders, and delivery. Be concise, friendly, and knowledgeable. Keep responses under 60 words.",
      }
    });
    return response.text || "Let me look into that for you. Could you try asking again?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting right now. Please call us at 1300 PACK GRN for immediate help.";
  }
};
