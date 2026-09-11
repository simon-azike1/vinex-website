"use client";

import { useChatbot } from '@/hooks/useChatbot';
import { Bot, X, MessageSquare, Mail } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

const AIChatbot = () => {
  const { messages, input, setInput, isTyping, isOpen, setIsOpen, sendMessage } = useChatbot();
  const [isInitialized, setIsInitialized] = useState(false);

  // Add entrance animation after 2 sec: subtle bounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialized(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const whatsAppLink = `https://wa.me/212751780853?text=Hi%20VNEX%2C%20I%20was%20chatting%20with%20your%20AI...`;

  return (
    <div className="fixed bottom-4 right-4 z-50">
{/* Floating Button */}
      <button
        onClick={toggleChat}
        className={`${!isOpen ? 'p-1' : 'hidden'} glass-strong rounded-full border-nexus-border hover:lime-glow transition-all duration-300 ${isInitialized ? 'animate-bounce' : ''}`}
        aria-label="Open chatbot"
      >
        <Bot className="h-4 w-4 text-[#D6FF57]" />
      </button>

      {/* Chat Window */}
      <div className={`${isOpen ? 'block' : 'hidden'} fixed bottom-16 right-4 w-[340px] h-[440px] max-w-[90vw] max-h-[70vh] flex flex-col bg-background border-nexus-border rounded-2xl shadow-lg z-50 transform transition-transform duration-300 ${isInitialized ? 'scale-100' : 'scale-95'} `}>
        {/* Header */}
        <div className="flex flex-row items-center justify-between px-4 py-3 bg-nexus-bg-secondary rounded-t-2xl border-b border-nexus-border">
          <div className="flex flex-row items-center gap-3">
            <div className="h-8 w-8 flex items-center justify-center bg-nexus-lime text-black rounded-full">
              <span className="text-xs">V</span>
            </div>
            <div>
              <p className="font-syne font-bold text-foreground">VNEX Assistant</p>
              <p className="font-mono text-xs text-gradient-lime">AI • Online</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <button onClick={toggleChat} className="p-1 rounded-full hover:bg-nexus-bg-tertiary">
              <X className="h-4 w-4 text-foreground" />
            </button>
            <a href={whatsAppLink} target="_blank" rel="noopener noreferrer" className="p-1 rounded-full hover:bg-nexus-bg-tertiary">
              <MessageSquare className="h-4 w-4 text-foreground" />
            </a>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex flex-col ${
              msg.isUser ? 'ml-auto' : 'mr-auto'
            } max-w-[80%] `}>
              <div className={`flex flex-row items-start gap-2 ${
                msg.isUser
                  ? 'bg-nexus-lime text-black rounded-2xl rounded-tr-sm px-3 py-2'
                  : 'glass bg-nexus-bg-tertiary rounded-2xl rounded-tl-sm px-3 py-2'
              }`}>
                {(!msg.isUser) && (
                  <div className="h-6 w-6 flex items-center justify-center bg-nexus-lime text-black rounded-full">
                    <span className="text-xs">V</span>
                  </div>
                )}
                <div className="flex-1">
                  <p className={msg.isUser ? 'font-inter' : 'font-syne'}>{msg.text}</p>
                  <p className="font-mono text-xs text-nexus-text-muted">{msg.timestamp}</p>
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex flex-col mr-auto max-w-[80%]">
              <div className="glass bg-nexus-bg-tertiary rounded-2xl rounded-tl-sm px-3 py-2">
                <div className="flex flex-row items-start gap-2">
                  <div className="h-6 w-6 flex items-center justify-center bg-nexus-lime text-black rounded-full">
                    <span className="text-xs">V</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-syne">Typing...</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="flex flex-row items-center px-4 py-3 bg-nexus-bg-secondary rounded-b-2xl border-t border-nexus-border">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="flex-1 bg-nexus-bg-tertiary border-nexus-border rounded-full px-4 py-3 text-foreground placeholder-nexus-text-muted focus:outline-none focus:border-nexus-border"
          />
          <button onClick={sendMessage} className="ml-2 bg-nexus-lime text-black rounded-full px-4 py-3 hover:bg-nexus-lime-hover transition-colors">
            Send
          </button>
        </div>

        {/* Footer */}
        <div className="px-4 py-2 text-center text-xs font-mono text-nexus-text-muted bg-nexus-bg-secondary rounded-b-2xl">
          Powered by VNEX AI •{' '}
          <a href={whatsAppLink} target="_blank" rel="noopener noreferrer" className="text-gradient-lime hover:underline">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default AIChatbot;