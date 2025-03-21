
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-lg w-full text-center">
        <AnimateOnScroll animation="slide-up">
          <h1 className="text-9xl font-bold text-brand-500 mb-6">404</h1>
          <h2 className="text-3xl font-display font-bold mb-4">Sidan kunde inte hittas</h2>
          <p className="text-lg text-gray-600 mb-8">
            Sidan du sökte finns tyvärr inte. Den kan ha flyttats eller tagits bort.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="button-primary flex items-center justify-center gap-2"
            >
              <Home size={18} />
              <span>Till startsidan</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="button-secondary flex items-center justify-center gap-2"
            >
              <ArrowLeft size={18} />
              <span>Gå tillbaka</span>
            </button>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default NotFound;
