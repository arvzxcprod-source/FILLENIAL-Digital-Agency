
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Sup! I’m the FILLENIAL Lead Strategist. Ready to hack the attention economy and scale your ROAS? What’s on your mind?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: 'You are a professional, high-energy digital lead strategist for FILLENIAL Agency. We specialize in dominating the attention economy for Millennial and Gen Z demographics. Your tone is bold, edgy, helpful, and results-oriented. Use industry jargon frequently: ROAS, UGC, retargeting, viral loops, algorithmic optimization, social proof, and trend-jacking. We focus on "authenticity-first" strategies and high-converting lo-fi content. Keep answers punchy and concise. If users ask about pricing, refer to the "Starter" at $999/mo or "Custom" for high-scale needs. Always push for a "Growth Audit" via the contact form for serious inquiries. We don’t just post content; we engineer market domination.',
        }
      });

      const response = await chat.sendMessage({ message: userMessage });
      const text = response.text || "My signal dropped—even the best algorithms glitch sometimes. Try that again, or let's jump on a strategy call!";
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'model', text: "Looks like the algorithm hit a snag. Let's try that again, or hit up our contact form for a manual sync!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-primary text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-all group border-4 border-white"
        >
          <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform">bolt</span>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
        </button>
      ) : (
        <div className="w-80 sm:w-96 h-[500px] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl flex flex-col border border-gray-100 dark:border-white/10 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-primary p-4 text-white flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined filled-icon">bolt</span>
              <span className="font-bold tracking-tight">Growth Strategist AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-lg transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex-grow p-4 overflow-y-auto space-y-4 bg-gray-50/50 dark:bg-jet/50"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm font-medium shadow-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-white dark:bg-gray-800 text-jet dark:text-white border border-gray-100 dark:border-white/5 rounded-tl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl border border-gray-100 dark:border-white/5 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-100 dark:border-white/10 bg-white dark:bg-gray-900">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Scale your brand..."
                className="w-full pr-12 rounded-xl border-gray-200 dark:border-white/10 dark:bg-jet dark:text-white focus:border-primary focus:ring-primary py-2.5 text-sm font-medium transition-colors"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:bg-red-50 dark:hover:bg-red-900/20 p-1.5 rounded-lg transition-colors disabled:opacity-30"
              >
                <span className="material-symbols-outlined filled-icon">send</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AIChat;
