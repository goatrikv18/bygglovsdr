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

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Create a client
const queryClient = new QueryClient();

function App() {
  const [loading, setLoading] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);

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
          <div className="min-h-screen bg-white">
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
