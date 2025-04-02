import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Index from "./pages/Index";
import Tjanster from "./pages/Tjanster";
import Priser from "./pages/Priser";
import Kunder from "./pages/Kunder";
import Projekt from "./pages/Projekt";
import Kontakt from "./pages/Kontakt";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IntroLoader from "./components/IntroLoader";
import ScrollProgress from "./components/ScrollProgress";
import { Phone } from "lucide-react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Create a client
const queryClient = new QueryClient();

function App() {
  const [loading, setLoading] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Ställ in overflow: hidden på body under laddning
    document.body.style.overflow = loading ? 'hidden' : '';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [loading]);

  const handleIntroComplete = () => {
    // När IntroLoader är klar, ställ in introComplete till true
    setIntroComplete(true);
    // Se till att ta bort loading direkt
    setLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <div className="min-h-screen bg-ocean-blue">
            {loading ? (
              <IntroLoader onComplete={handleIntroComplete} />
            ) : (
              <>
                <ScrollProgress />
                <Navbar />
                <main className="pt-0">
                  <Routes>
                    <Route path="/" element={<Index introComplete={introComplete} />} />
                    <Route path="/tjanster" element={<Tjanster />} />
                    <Route path="/priser" element={<Priser />} />
                    <Route path="/kunder" element={<Kunder />} />
                    <Route path="/projekt" element={<Projekt />} />
                    <Route path="/kontakt" element={<Kontakt />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />

                {/* Floating Phone Button - Right Side */}
                <a 
                  href="tel:0104051000"
                  className="fixed bottom-6 right-6 z-50 bg-[#FF6B35] hover:bg-[#e55b2a] text-white p-3 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105"
                  aria-label="Ring oss"
                >
                  <Phone size={22} />
                </a>

                {/* Chat Widget - Left Side */}
                <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start">
                  {/* Chat Popup */}
                  {chatOpen && (
                    <div className="mb-4 w-[320px] bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 transform translate-y-0 opacity-100" 
                         style={{transformOrigin: 'bottom left'}}>
                      {/* Chat Header */}
                      <div className="bg-[#FF9A6D] p-4 flex justify-between items-center">
                        <div className="flex items-center">
                          <img src="/logo.svg" alt="Bygglovsexperten" className="h-6 mr-2" />
                          <span className="text-white font-medium">Bygglovsexperten</span>
                        </div>
                        <button 
                          onClick={() => setChatOpen(false)}
                          className="text-white hover:bg-white/10 rounded-full p-1"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                      </div>
                      
                      {/* Chat Body */}
                      <div className="p-4 bg-white">
                        <p className="text-orange-500 font-medium mb-2">Har du några frågor, så är vi alltid redo att hjälpa dig!</p>
                        <div className="bg-[#49C9FF] text-white p-3 rounded-lg rounded-tl-none mt-4 inline-block">
                          Hej, kan jag hjälpa dig med något?
                        </div>
                      </div>
                      
                      {/* Chat Input */}
                      <div className="bg-gray-50 p-3 border-t border-gray-200 flex items-center">
                        <input 
                          type="text" 
                          placeholder="Skriv ditt meddelande här..." 
                          className="flex-grow bg-transparent focus:outline-none text-sm text-gray-600"
                        />
                        <button className="ml-2 bg-[#FF6B35] text-white rounded-full p-2 hover:bg-[#e55b2a] transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {/* Online indicator - show only when chat is closed */}
                  {!chatOpen && (
                    <div className="relative mb-2 bg-[#FF9A6D] text-white px-4 py-2 rounded-full shadow-lg flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                      <span className="text-sm font-medium">Vi är online</span>
                      <div className="absolute -top-2 -left-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">1</div>
                    </div>
                  )}
                  
                  {/* Chat button */}
                  <button
                    className="bg-[#FF6B35] hover:bg-[#e55b2a] text-white p-3 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105"
                    aria-label="Öppna chatt"
                    onClick={() => setChatOpen(!chatOpen)}
                  >
                    {chatOpen ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    )}
                  </button>
                </div>
              </>
            )}
            <Toaster />
            <Sonner />
          </div>
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
