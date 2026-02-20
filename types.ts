import { LucideIcon } from 'lucide-react';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface CategoryProps {
  title: string;
  items: string[];
  icon: LucideIcon;
  color: string;
  itemCount: number;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
}

export interface QuickCategoryProps {
  label: string;
  icon: string;
}

export interface StatProps {
  value: string;
  label: string;
  accent?: boolean;
}

export interface TrustPointProps {
  icon: LucideIcon;
  title: string;
  description: string;
}
