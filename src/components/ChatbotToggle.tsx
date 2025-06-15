import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Bot } from 'lucide-react';

interface ChatbotToggleProps {
  onClick: () => void;
  isOpen: boolean;
}

const ChatbotToggle: React.FC<ChatbotToggleProps> = ({ onClick, isOpen }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`fixed bottom-4 right-4 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-40 ${
        isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      initial={{ scale: 0 }}
      animate={{ scale: isOpen ? 0 : 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Bot className="h-6 w-6" />
      </motion.div>
      
      {/* Notification dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.5, delay: 2 }}
        className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
      >
        <span className="text-xs text-white font-bold">!</span>
      </motion.div>

      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-blue-600"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.button>
  );
};

export default ChatbotToggle;