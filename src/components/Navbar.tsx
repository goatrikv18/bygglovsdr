import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  ChevronUp,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

// Hårdkodade data för dropdown-menyer
const serviceItems = [
  {
    title: "Konstruktionsritningar",
    description: "Tekniska underlag för konstruktionens utformning och hållfasthet.",
    icon: "🏛️",
    link: "/tjanster/konstruktionsritningar",
  },
  {
    title: "Bygglovsritningar",
    description: "Ritningar som specificerar byggnadens yttre och funktionella detaljer.",
    icon: "🏠",
    link: "/tjanster/bygglovsritningar",
  },
  {
    title: "VVS-ritningar",
    description: "Tekniska underlag för planering av VVS-system.",
    icon: "🚿",
    link: "/tjanster/vvs-ritningar",
  },
  {
    title: "Energiberäkningar",
    description: "Beräkningar av byggnadens energianvändning.",
    icon: "⚡",
    link: "/tjanster/energiberakningar",
  },
  {
    title: "Kontrollplaner",
    description: "Underlag för kontroll av byggnation.",
    icon: "📋",
    link: "/tjanster/kontrollplaner",
  }
];

const priceItems = [
  {
    title: "Bygglovsritningar",
    description: "Priser för olika typer av bygglovsritningar.",
    link: "/priser/bygglovsritningar",
  },
  {
    title: "Konstruktionsritningar", 
    description: "Priser för konstruktionsritningar och beräkningar.",
    link: "/priser/konstruktionsritningar",
  },
  {
    title: "VVS-tjänster",
    description: "Priser för VVS-planering och ritningar.",
    link: "/priser/vvs",
  },
  {
    title: "Energiberäkningar",
    description: "Priser för olika typer av energiberäkningar.",
    link: "/priser/energiberakningar",
  }
];

const contactItems = [
  {
    title: "Kontakta oss",
    description: "Få hjälp av våra experter.",
    link: "/kontakt",
  },
  {
    title: "Om oss",
    description: "Lär känna vår historia och vårt team.",
    link: "/om-oss",
  },
  {
    title: "Karriär",
    description: "Jobba med oss på Bygglovsexperten.",
    link: "/karriar",
  },
  {
    title: "Våra kontor",
    description: "Hitta ditt närmaste kontor.",
    link: "/kontor",
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  
  // Refs för dropdown-menyer, för att identifiera klick utanför
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Lyssna på scroll-event
    window.addEventListener("scroll", handleScroll);
    
    // Lyssna på klick utanför för att stänga dropdowns
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle dropdown på klick
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-6 right-6 z-[9999]">
        <div className="flex items-center bg-white rounded-full shadow-xl overflow-hidden">
          {/* Desktop navigation */}
          <nav className="hidden md:block" ref={dropdownRef}>
            <ul className="flex items-center py-2 pl-5 pr-2">
              {/* Tjänster dropdown */}
              <li className="relative">
                <button
                  onClick={() => toggleDropdown('tjanster')}
                  className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-[#62c7fc] text-sm font-medium"
                >
                  <span>Tjänster</span>
                  <ChevronDown 
                    size={14}
                    className={`transition-transform duration-200 ${
                      activeDropdown === 'tjanster' ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                {/* Dropdown-meny för tjänster */}
                {activeDropdown === 'tjanster' && (
                  <div className="absolute left-0 top-10 w-[500px] bg-white shadow-lg rounded-lg p-4 z-[9999]">
                    <div className="grid grid-cols-2 gap-4">
                      {serviceItems.map((item, index) => (
                        <Link 
                          key={index} 
                          to={item.link} 
                          className="flex p-2 rounded-lg hover:bg-gray-50 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className="text-2xl mr-3">{item.icon}</span>
                          <div>
                            <h3 className="text-gray-800 font-medium hover:text-[#62c7fc] flex items-center">
                              {item.title}
                              <ChevronRight className="ml-1 h-3 w-3" />
                            </h3>
                            <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100 text-center">
                      <Link 
                        to="/kontakt" 
                        className="text-[#62c7fc] hover:underline text-sm inline-flex items-center"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <span>Vill du starta ditt projekt?</span>
                        <span className="ml-1 font-medium">Boka ett möte</span>
                        <ChevronRight size={14} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                )}
              </li>

              {/* Priser dropdown */}
              <li className="relative">
                <button
                  onClick={() => toggleDropdown('priser')}
                  className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-[#62c7fc] text-sm font-medium"
                >
                  <span>Priser</span>
                  <ChevronDown 
                    size={14}
                    className={`transition-transform duration-200 ${
                      activeDropdown === 'priser' ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                {/* Dropdown-meny för priser */}
                {activeDropdown === 'priser' && (
                  <div className="absolute left-0 top-10 w-[320px] bg-white shadow-lg rounded-lg p-4 z-[9999]">
                    <ul className="space-y-2">
                      {priceItems.map((item, index) => (
                        <li key={index}>
                          <Link 
                            to={item.link} 
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-gray-800">{item.title}</span>
                              <ChevronRight size={14} className="text-gray-400" />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>

              {/* Regular links */}
              <li>
                <Link to="/portfolio" className="px-3 py-2 text-gray-700 hover:text-[#62c7fc] text-sm font-medium block">
                  Portfolio
                </Link>
              </li>
              
              <li>
                <Link to="/blogg" className="px-3 py-2 text-gray-700 hover:text-[#62c7fc] text-sm font-medium block">
                  Blogg
                </Link>
              </li>

              {/* Kontakt dropdown */}
              <li className="relative">
                <button
                  onClick={() => toggleDropdown('kontakt')}
                  className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-[#62c7fc] text-sm font-medium"
                >
                  <span>Kontakt</span>
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-200 ${
                      activeDropdown === 'kontakt' ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                {/* Dropdown-meny för kontakt */}
                {activeDropdown === 'kontakt' && (
                  <div className="absolute left-0 top-10 w-[280px] bg-white shadow-lg rounded-lg p-4 z-[9999]">
                    <ul className="space-y-2">
                      {contactItems.map((item, index) => (
                        <li key={index}>
                          <Link 
                            to={item.link} 
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-gray-800">{item.title}</span>
                              <ChevronRight size={14} className="text-gray-400" />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>

              {/* Phone button */}
              <li className="ml-3 mr-1">
                <a
                  href="tel:0104051000"
                  className="bg-[#62c7fc] hover:bg-[#4ba5dc] text-white px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-1 hover:shadow-md"
                >
                  <Phone size={14} />
                  <span>010-405 10 00</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3.5 text-gray-700 hover:text-[#62c7fc] transition-all duration-300 flex items-center justify-center"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile navigation menu */}
        {isOpen && (
          <div className="fixed top-16 right-4 left-4 bg-white shadow-xl rounded-xl overflow-hidden z-50 md:hidden">
            <nav className="p-4">
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/"
                    className="flex items-center text-gray-900 font-bold"
                    onClick={() => setIsOpen(false)}
                  >
                    Bygglovsexperten
                  </Link>
                </li>

                <li className="border-t pt-2">
                  <button
                    className="flex items-center justify-between w-full text-gray-700 py-2"
                    onClick={() => toggleDropdown('tjanster')}
                  >
                    <span>Tjänster</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        activeDropdown === 'tjanster' ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeDropdown === 'tjanster' && (
                    <ul className="pl-4 mt-2 space-y-2">
                      {serviceItems.map((item, index) => (
                        <li key={index}>
                          <Link
                            to={item.link}
                            className="flex items-start py-2 text-gray-700 hover:text-[#62c7fc]"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="mr-2">{item.icon}</span>
                            <span>{item.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <li>
                  <button
                    className="flex items-center justify-between w-full text-gray-700 py-2"
                    onClick={() => toggleDropdown('priser')}
                  >
                    <span>Priser</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        activeDropdown === 'priser' ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeDropdown === 'priser' && (
                    <ul className="pl-4 mt-2 space-y-2">
                      {priceItems.map((item, index) => (
                        <li key={index}>
                          <Link
                            to={item.link}
                            className="block py-2 text-gray-700 hover:text-[#62c7fc]"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <li>
                  <Link
                    to="/portfolio"
                    className="block py-2 text-gray-700 hover:text-[#62c7fc]"
                    onClick={() => setIsOpen(false)}
                  >
                    Portfolio
                  </Link>
                </li>

                <li>
                  <Link
                    to="/blogg"
                    className="block py-2 text-gray-700 hover:text-[#62c7fc]"
                    onClick={() => setIsOpen(false)}
                  >
                    Blogg
                  </Link>
                </li>

                <li>
                  <button
                    className="flex items-center justify-between w-full text-gray-700 py-2"
                    onClick={() => toggleDropdown('kontakt')}
                  >
                    <span>Kontakt</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        activeDropdown === 'kontakt' ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeDropdown === 'kontakt' && (
                    <ul className="pl-4 mt-2 space-y-2">
                      {contactItems.map((item, index) => (
                        <li key={index}>
                          <Link
                            to={item.link}
                            className="block py-2 text-gray-700 hover:text-[#62c7fc]"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <li className="pt-2">
                  <a
                    href="tel:0104051000"
                    className="bg-[#62c7fc] hover:bg-[#4ba5dc] text-white py-3 px-4 rounded-full flex items-center justify-center gap-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone size={16} />
                    <span>Ring oss: 010-405 10 00</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>

      {/* Back to top button */}
      {scrolled && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 bg-white p-3 rounded-full shadow-xl text-gray-700 hover:text-[#62c7fc] transition-all duration-300 hover:scale-105"
        >
          <ChevronUp size={20} />
        </motion.button>
      )}
    </>
  );
};

export default Navbar;
