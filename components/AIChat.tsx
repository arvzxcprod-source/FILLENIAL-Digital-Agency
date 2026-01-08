
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Yo! I’m the FILLENIAL Growth Architect. Ready to stop the scroll and turn vibes into high-margin revenue? Whether it\'s UGC strategies or aggressive ROAS scaling, I\'ve got the blueprint. What\'s the mission?' }
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
          systemInstruction: `You are the "Growth Architect" for FILLENIAL Agency. You are an elite strategist at capturing Millennial and Gen Z attention and converting it into brand equity and high-margin revenue.
          
Tone: Bold, aggressive, hyper-modern, and results-obsessed. You talk like someone who lives in the TikTok algorithm and the Meta Ads Manager. You don't "help," you "dominate."

Jargon to prioritize: UGC (User Generated Content), ROAS, CPA, hook rate, scroll-stoppers, lo-fi aesthetic, brand affinity, algorithmic tailwinds, social commerce, creator-led growth, trend-jacking, community-first distribution, hyper-niche targeting, first-party data capture, conversion-led storytelling, vibe-check, low-friction funnels, shadow-ban defense.

Core Philosophies:
- "Attention is the only currency that matters."
- "Authenticity scales; gloss fails."
- "Vibes are the entry fee, but attribution is the king."

Pricing:
- Starter Package: $999/mo (Social, basic content, reporting).
- Custom Package: High-scale needs, enterprises, and total market domination.

Call to Action: Always pivot serious business inquiries toward a "Growth Audit" via the contact form at the bottom of the page. 

Keep answers punchy, concise, and high-energy. No fluff.`,
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
        <div className="w-80 sm:w-96 h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col border border-gray-100 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-primary p-4 text-white flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined filled-icon">bolt</span>
              <span className="font-bold tracking-tight">Growth Architect AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-lg transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex-grow p-4 overflow-y-auto space-y-4 bg-gray-50/50"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm font-medium shadow-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-white text-jet border border-gray-100 rounded-tl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl border border-gray-100 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-100 bg-white">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Scale your brand..."
                className="w-full pr-12 rounded-xl border-gray-200 focus:border-primary focus:ring-primary py-2.5 text-sm font-medium transition-colors"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:bg-red-50 p-1.5 rounded-lg transition-colors disabled:opacity-30"
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
