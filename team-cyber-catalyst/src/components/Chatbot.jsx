import { useState, useEffect, useRef } from 'react';
import '../styles/Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I\'m CyberAssist AI, your cybersecurity assistant. How can I help you today?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // This would normally call the OpenRouter API, but for the hackathon demo we'll simulate responses
  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    // Add user message to chat
    const userMessage = { role: 'user', content: inputMessage };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate API delay
    setTimeout(() => {
      let botResponse = '';
      
      // Simple response logic based on keywords
      const lowercaseInput = inputMessage.toLowerCase();
      
      if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi')) {
        botResponse = 'Hello! How can I assist you with cybersecurity today?';
      } 
      else if (lowercaseInput.includes('ransomware')) {
        botResponse = 'Ransomware is a type of malicious software that encrypts your files and demands payment for the decryption key. To protect against ransomware: 1) Keep regular backups, 2) Use updated antivirus software, 3) Be cautious with email attachments, and 4) Keep your systems patched and updated.';
      }
      else if (lowercaseInput.includes('phishing')) {
        botResponse = 'Phishing attacks attempt to steal sensitive information by disguising as trustworthy entities. Always verify the sender\'s email address, don\'t click suspicious links, and never provide sensitive information unless you\'re certain of the recipient\'s identity.';
      }
      else if (lowercaseInput.includes('password') || lowercaseInput.includes('passwords')) {
        botResponse = 'Strong passwords are crucial for security. Use a combination of uppercase and lowercase letters, numbers, and special characters. Consider using a password manager and enabling two-factor authentication whenever possible.';
      }
      else if (lowercaseInput.includes('zero day') || lowercaseInput.includes('zero-day')) {
        botResponse = 'A zero-day vulnerability is a software security flaw that is unknown to the vendor and has not yet been patched. These are particularly dangerous as there are no available fixes when they are exploited. Defense in depth and threat intelligence services can help protect against zero-day attacks.';
      }
      else if (lowercaseInput.includes('services') || lowercaseInput.includes('solutions')) {
        botResponse = 'Cyber Catalyst offers a range of enterprise security solutions including AI-Powered Threat Intelligence, Enterprise Network Security, Data Protection & Compliance, Secure Cloud Transformation, Identity & Access Management, and 24/7 Security Operations Center services. Would you like more information about any specific service?';
      }
      else {
        botResponse = 'Thank you for your question. Our security experts would be happy to provide more detailed information. Would you like to speak with a specialist about this topic?';
      }

      // Add bot response to chat
      setMessages(prevMessages => [...prevMessages, { role: 'assistant', content: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      <button 
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`} 
        onClick={toggleChatbot}
        aria-label="Toggle chatbot"
      >
        {isOpen ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-comment-dots"></i>
        )}
      </button>

      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-title">
            <i className="fas fa-robot"></i>
            <h3>CyberAssist AI</h3>
          </div>
          <p>Powered by OpenRouter LLM</p>
        </div>

        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`message ${message.role === 'user' ? 'user-message' : 'bot-message'}`}
            >
              {message.role === 'assistant' && (
                <div className="bot-avatar">
                  <i className="fas fa-shield-alt"></i>
                </div>
              )}
              <div className="message-content">
                <p>{message.content}</p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="message bot-message">
              <div className="bot-avatar">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="message-content typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chatbot-input">
          <input
            type="text"
            placeholder="Ask about cybersecurity..."
            value={inputMessage}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSendMessage} disabled={inputMessage.trim() === ''}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
