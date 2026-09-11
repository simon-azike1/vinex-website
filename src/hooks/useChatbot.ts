import { useState, useRef, useEffect, useCallback } from 'react';

export const useChatbot = () => {
  const [messages, setMessages] = useState<{id: string; text: string; isUser: boolean; timestamp: string}[]>([]);
  const [input, setInput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!initializedRef.current) {
      initializedRef.current = true;
      addMessage("Hi! I'm VNEX AI 👋 I can help you build a website, ticketing system, or digital tools. What are you working on?", false);
    }
  }, []);

  const addMessage = useCallback((text: string, isUser: boolean) => {
    setMessages(prev => [
      ...prev,
      {
        id: Math.random().toString(36).substr(2, 9),
        text,
        isUser,
        timestamp: new Date().toTimeString().slice(0, 5),
      }
    ]);
  }, []);

  const mockChat = useCallback((userMessage: string) => {
    // TODO: Replace mockChat() with RAG API call: POST /api/chat { query, history, embeddings }
    // TODO: Connect to vector DB (Pinecone/Supabase)
    // TODO: Add streaming response
    const lowerMsg = userMessage.toLowerCase();
    if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('pricing')) {
      return "We launch in 3-6 weeks, starting from... Want me to connect you on WhatsApp for a quote?";
    }
    if (lowerMsg.includes('service') || lowerMsg.includes('offer') || lowerMsg.includes('do')) {
      return "We build websites, ticketing systems, and digital tools for businesses in Nigeria & Morocco. What specific service are you interested in?";
    }
    if (lowerMsg.includes('contact') || lowerMsg.includes('reach') || lowerMsg.includes('talk')) {
      return "You can reach us via WhatsApp, LinkedIn, or Instagram. WhatsApp is the fastest way to get a quote.";
    }
    return "I'm here to help you build your online presence. For more details, let's chat on WhatsApp.";
  }, []);

  const sendMessage = useCallback(async () => {
    if (!input.trim()) return;
    const userMessage = input;
    setInput('');
    addMessage(userMessage, true);
    setIsTyping(true);
    // Simulate API delay
    setTimeout(() => {
      const botResponse = mockChat(userMessage);
      addMessage(botResponse, false);
      setIsTyping(false);
    }, 1000);
  }, [input, mockChat, addMessage]);

  return {
    messages,
    input,
    setInput,
    isTyping,
    isOpen,
    setIsOpen,
    sendMessage,
  };
};