
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getAIResponse = async (history: ChatMessage[], message: string) => {
  const model = "gemini-3-flash-preview";
  
  const chat = ai.chats.create({
    model,
    config: {
      systemInstruction: `Você é o Assistente Virtual da Unitel Next. 
      Seu objetivo é ajudar clientes da Unitel (Angola) com informações sobre planos, suporte técnico e serviços digitais.
      Mantenha um tom profissional, amigável e eficiente. 
      Os planos atuais são: 
      - Net Casa (Fibra): 20Mbps, 50Mbps, 100Mbps.
      - Planos Móveis: Mais (Voz + Net), Net (Dados puros), Roaming.
      - Serviços: Unitel Money (Pagamentos), Unitel Video.
      Responda sempre em Português de Angola quando apropriado.`,
    },
  });

  try {
    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Desculpe, ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.";
  }
};
