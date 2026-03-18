import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

export const ChatFeature = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! I'm your MERIDIAN GLOBAL AI Assistant. Which country are you planning to study in?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { role: 'user', text: input }]);
    setInput("");

    // Mock bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: "That's a great choice! Let me connect you with an expert counselor for that region." }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-darkGold via-accent to-lightGold text-black rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:shadow-[0_0_50px_rgba(255,230,150,0.7)] border border-lightGold/50 z-50"
      >
        <MessageSquare />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-80 glass-dark rounded-2xl overflow-hidden z-50 flex flex-col shadow-2xl border border-white/20"
          >
            {/* Header */}
            <div className="bg-primary p-4 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="font-poppins font-semibold">AI Counselor</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 h-64 overflow-y-auto flex flex-col gap-3">
              {messages.map((msg, i) => (
                <div key={i} className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'bot' ? 'bg-white/10 self-start rounded-tl-sm' : 'bg-accent text-primary self-end rounded-tr-sm font-medium'}`}>
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 border-t border-white/10 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-accent"
              />
              <button type="submit" className="w-10 h-10 bg-accent text-primary rounded-full flex items-center justify-center">
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
