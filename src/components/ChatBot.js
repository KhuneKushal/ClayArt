import React, { useState } from 'react';
import './ChatBot.css';

function ChatBot({ isControlled = false, isOpen: controlledIsOpen = false, onClose = null }) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;
  
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi! I\'m here to help you find the perfect pottery piece. Ask me anything!', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    if (isControlled && onClose) {
      onClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  const handleOpen = () => {
    if (isControlled) return;
    setInternalIsOpen(true);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), text: input, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `You are a helpful pottery shop assistant for ClayArt. Answer questions about pottery, products, care instructions, custom orders, shipping, and opening hours. Keep responses concise. Customer: ${input}`
              }]
            }]
          })
        }
      );

      const data = await response.json();
      
      // Log response for debugging
      console.log('API Response:', data);
      
      if (!response.ok) {
        throw new Error(data.error?.message || 'API error');
      }
      
      const botText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I couldn\'t respond. Please try again.';
      setMessages(prev => [...prev, { id: Date.now(), text: botText, sender: 'bot' }]);
    } catch (error) {
      console.error('ChatBot Error:', error);
      setMessages(prev => [...prev, { id: Date.now(), text: `Error: ${error.message}`, sender: 'bot' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <button onClick={handleOpen} className="chatbot-toggle">💬</button>
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>ClayArt Assistant</h3>
            <button className="close-btn" onClick={handleClose}>✕</button>
          </div>
          <div className="chatbot-messages">
            {messages.map(msg => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                <div className="message-content">{msg.text}</div>
              </div>
            ))}
            {loading && <div className="message bot"><div className="message-content"><div className="loading"><span></span><span></span><span></span></div></div></div>}
          </div>
          <form className="chatbot-form" onSubmit={sendMessage}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              disabled={loading}
            />
            <button type="submit" disabled={loading || !input.trim()}>Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ChatBot;
