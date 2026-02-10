
export interface Plan {
  id: string;
  name: string;
  price: string;
  data: string;
  voice: string;
  description: string;
  color: string;
  popular?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
