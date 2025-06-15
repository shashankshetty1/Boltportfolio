import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatbotProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Shashank's AI assistant. I can help you learn more about his background, skills, projects, and experience. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  // Knowledge base about Shashank
  const knowledgeBase = {
    education: {
      keywords: ['education', 'college', 'university', 'degree', 'study', 'academic'],
      response: "Shashank is currently pursuing a Bachelor of Engineering in Computer Science from Visvesvaraya Technological University (2021-2025) with a CGPA of 8.5/10. He completed his Pre-University Course with 92% and Secondary School with 95% from Karnataka, India."
    },
    skills: {
      keywords: ['skills', 'technologies', 'programming', 'languages', 'tools'],
      response: "Shashank's technical skills include Java (90%), MySQL (85%), HTML/CSS (88%), JavaScript (82%), and GitHub (85%). He also excels in problem solving (92%), team leadership (88%), and communication (85%). Additional technologies include Spring Boot, React, Node.js, MongoDB, AWS, and Docker."
    },
    projects: {
      keywords: ['projects', 'work', 'built', 'developed', 'malware', 'gesture', 'keyboard'],
      response: "Shashank has developed impressive projects including a Malware Detection System using machine learning and behavioral analysis, and a Gesture-Based Virtual Keyboard using computer vision. Both projects showcase his expertise in Java, Python, machine learning, and innovative problem-solving."
    },
    experience: {
      keywords: ['experience', 'internship', 'work', 'job', 'besant', 'varcons'],
      response: "Shashank has completed internships at Besant Technologies (Java Full Stack Intern, Jan-May 2025) and Varcons Technologies (Full Stack Intern, Oct-Dec 2023). He gained hands-on experience in Java Spring Boot, web development, database design, and agile development practices."
    },
    achievements: {
      keywords: ['achievements', 'awards', 'winner', 'udaan', 'tournament', 'competition'],
      response: "Shashank won first place in UDAAN 2023 technical competition, competing against 200+ participants. He also led his team to victory in the VTU Inter-College Tournament and maintains consistent academic excellence with 8.5+ CGPA."
    },
    certifications: {
      keywords: ['certifications', 'certificates', 'aws', 'java', 'credentials'],
      response: "Shashank holds multiple certifications including AWS Cloud Foundations, Project Management from Great Learning, Java Full Stack from Besant Technologies, Data Visualization with Python from Infosys Springboard, and HTML & CSS Bootcamp from LetsUpgrade."
    },
    contact: {
      keywords: ['contact', 'email', 'phone', 'reach', 'hire', 'connect'],
      response: "You can reach Shashank at shettyshashank089@gmail.com or call +91 6361128305. He's also available on GitHub and LinkedIn. He's actively seeking internship and full-time opportunities in software development."
    },
    personal: {
      keywords: ['about', 'who', 'background', 'story', 'passion'],
      response: "Shashank Shetty is a passionate Software Developer and Computer Science student from Mangalore, Karnataka, India. He's dedicated to Java development, web technologies, and creating innovative solutions. He combines technical expertise with strong leadership skills."
    }
  };

  const getResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Check for greetings
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello! I'm here to help you learn about Shashank Shetty. You can ask me about his education, skills, projects, experience, achievements, certifications, or how to contact him. What interests you most?";
    }

    // Check for thanks
    if (input.includes('thank') || input.includes('thanks')) {
      return "You're welcome! Feel free to ask me anything else about Shashank's background, skills, or experience. I'm here to help!";
    }

    // Find matching knowledge base entry
    for (const [category, data] of Object.entries(knowledgeBase)) {
      if (data.keywords.some(keyword => input.includes(keyword))) {
        return data.response;
      }
    }

    // Default response with suggestions
    return "I'd be happy to help you learn about Shashank! You can ask me about:\n\n• His education and academic background\n• Technical skills and expertise\n• Projects he's worked on\n• Professional experience and internships\n• Achievements and awards\n• Certifications and credentials\n• How to contact him\n\nWhat would you like to know?";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getResponse(inputText),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What are Shashank's main skills?",
    "Tell me about his projects",
    "What's his educational background?",
    "How can I contact him?"
  ];

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
    setTimeout(() => handleSendMessage(), 100);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      className={`fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 ${
        isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
      } transition-all duration-300`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-xl">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white/20 rounded-lg">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Shashank AI</h3>
            <p className="text-xs text-blue-100">Portfolio Assistant</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-white/20 rounded transition-colors duration-200"
          >
            {isMinimized ? (
              <Maximize2 className="h-4 w-4 text-white" />
            ) : (
              <Minimize2 className="h-4 w-4 text-white" />
            )}
          </button>
          <button
            onClick={onToggle}
            className="p-1 hover:bg-white/20 rounded transition-colors duration-200"
          >
            <X className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[400px]">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${
                    message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'
                  }`}>
                    <div className={`p-2 rounded-lg ${
                      message.isBot 
                        ? 'bg-blue-100 dark:bg-blue-900/30' 
                        : 'bg-gray-100 dark:bg-gray-700'
                    }`}>
                      {message.isBot ? (
                        <Bot className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      ) : (
                        <User className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      )}
                    </div>
                    <div className={`p-3 rounded-lg ${
                      message.isBot
                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                        : 'bg-blue-600 text-white'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.isBot ? 'text-gray-500 dark:text-gray-400' : 'text-blue-100'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="flex items-start space-x-2">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Bot className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors duration-200"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about Shashank..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                disabled={isTyping}
              />
              <motion.button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors duration-200"
              >
                <Send className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Chatbot;