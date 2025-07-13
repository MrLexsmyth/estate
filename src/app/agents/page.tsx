'use client';

import { useEffect, useRef, useState } from 'react';
import api from '../../../utils/axios'; // Adjust path if needed

export default function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom when new message is added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    setLoading(true);

    try {
      const res = await api.post('/chat', { message: input });
      const reply = res.data.reply;

      setMessages(prev => [...prev, { sender: 'bot', text: reply }]);
      setInput('');
    } catch (err: unknown) {
      console.error('Chat error:', err);
      setMessages(prev => [...prev, { sender: 'bot', text: 'Something went wrong. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission if wrapped in a form
      sendMessage();
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 p-4 bg-white shadow-md rounded font-jakarta">
      <h2 className="text-2xl font-bold mb-4 text-blue">Chat with our Assistant</h2>

      <div className="space-y-2 mb-4 h-64 overflow-y-auto border p-3 rounded bg-gray-50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-md max-w-xs ${
              msg.sender === 'user'
                ? 'bg-blue-100 self-end ml-auto text-right'
                : 'bg-gray-100 text-left'
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && <p className="text-sm text-gray-500">Thinking...</p>}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
}
