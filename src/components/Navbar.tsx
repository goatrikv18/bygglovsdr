  import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import { motion } from "framer-motion";

// Hårdkodade data för dropdown-menyer
const serviceItems = [
  {
    title: "Konstruktionsritningar",
    description: "Tekniska underlag för konstruktionens utformning och hållfasthet.",
    link: "/tjanster/konstruktionsritningar",
  },
  {
    title: "Bygglovsritningar",
    description: "Ritningar som specificerar byggnadens yttre och funktionella detaljer.",
    link: "/tjanster/bygglovsritningar",
  },
  {
    title: "VVS-ritningar",
    description: "Tekniska underlag för planering av VVS-system.",
    link: "/tjanster/vvs-ritningar",
  },
  {
    title: "Energiberäkningar",
    description: "Beräkningar av byggnadens energianvändning.",
    link: "/tjanster/energiberakningar",
  },
  {
    title: "Kontrollplaner",
    description: "Underlag för kontroll av byggnation.",
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle dropdown på klick
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      <style>
        {`
          /* Dropdown styling för hover-effekt på desktop */
          @media (min-width: 768px) {
            .dropdown-container:hover .dropdown-menu {
              display: block;
              opacity: 1;
              transform: translateY(0);
              visibility: visible;
            }
            
            .dropdown-menu {
              display: block;
              opacity: 0;
              transform: translateY(-10px);
              visibility: hidden;
              transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
            }
            
            .dropdown-container:hover .chevron-icon {
              transform: rotate(180deg);
            }
            
            .chevron-icon {
              transition: transform 0.2s;
            }
          }
        `}
      </style>

      {/* Navbar positioned to the right */}
      <header className={`fixed top-0 w-full z-[9999] transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="flex items-center justify-end px-4 md:px-6">
          {/* Desktop navigation - pill shape */}
          <nav className="hidden md:block">
            <div className={`${scrolled ? 'bg-white shadow-md' : 'bg-white/10 backdrop-blur-sm'} rounded-full`}>
              <ul className="flex items-center">
                {/* Tjänster dropdown */}
                <li className="relative dropdown-container">
                  <button
                    className={`flex items-center gap-1 px-4 py-2 ${scrolled ? 'text-gray-700 hover:text-[#62c7fc]' : 'text-white hover:text-white/80'} text-sm font-medium`}
                  >
                    <span>Tjänster</span>
                    <ChevronDown size={14} className="chevron-icon" />
                  </button>
                  
                  {/* Dropdown-meny för tjänster */}
                  <div className="dropdown-menu absolute right-0 top-full mt-1 w-[600px] bg-white shadow-lg rounded-lg p-6 z-[9999]">
                    <div className="grid grid-cols-2 gap-6">
                      {serviceItems.map((item, index) => (
                        <Link 
                          key={index} 
                          to={item.link}
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div>
                            <h3 className="text-gray-800 font-medium hover:text-[#62c7fc] flex items-center">
                              {item.title}
                              <ChevronRight className="ml-1 h-3 w-3" />
                            </h3>
                            <p className="text-xs text-gray-500 mt-2">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                      <Link 
                        to="/kontakt" 
                        className="text-[#62c7fc] hover:underline text-sm inline-flex items-center"
                      >
                        <span>Vill du starta ditt projekt?</span>
                        <span className="ml-1 font-medium">Boka ett möte</span>
                        <ChevronRight size={14} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </li>

                {/* Priser dropdown */}
                <li className="relative dropdown-container">
                  <button
                    className={`flex items-center gap-1 px-4 py-2 ${scrolled ? 'text-gray-700 hover:text-[#62c7fc]' : 'text-white hover:text-white/80'} text-sm font-medium`}
                  >
                    <span>Priser</span>
                    <ChevronDown size={14} className="chevron-icon" />
                  </button>
                  
                  {/* Dropdown-meny för priser */}
                  <div className="dropdown-menu absolute right-0 top-full mt-1 w-[500px] bg-white shadow-lg rounded-lg p-6 z-[9999]">
                    <div className="grid grid-cols-2 gap-6">
                      {priceItems.map((item, index) => (
                        <Link 
                          key={index}
                          to={item.link}
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div>
                            <h3 className="text-gray-800 font-medium hover:text-[#62c7fc] flex items-center justify-between">
                              <span>{item.title}</span>
                              <ChevronRight size={14} className="text-gray-400" />
                            </h3>
                            <p className="text-xs text-gray-500 mt-2">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                      <Link 
                        to="/kontakt" 
                        className="text-[#62c7fc] hover:underline text-sm inline-flex items-center"
                      >
                        <span>Vill du veta mer om våra priser?</span>
                        <span className="ml-1 font-medium">Begär offert</span>
                        <ChevronRight size={14} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </li>

                {/* Regular links */}
                <li>
                  <Link 
                    to="/projekt" 
                    className={`px-4 py-2 ${scrolled ? 'text-gray-700 hover:text-[#62c7fc]' : 'text-white hover:text-white/80'} text-sm font-medium block`}
                  >
                    Projekt
                  </Link>
                </li>
                
                <li>
                  <Link 
                    to="/kunder" 
                    className={`px-4 py-2 ${scrolled ? 'text-gray-700 hover:text-[#62c7fc]' : 'text-white hover:text-white/80'} text-sm font-medium block`}
                  >
                    Kunder
                  </Link>
                </li>

                {/* Kontakt dropdown */}
                <li className="relative dropdown-container">
                  <button
                    className={`flex items-center gap-1 px-4 py-2 ${scrolled ? 'text-gray-700 hover:text-[#62c7fc]' : 'text-white hover:text-white/80'} text-sm font-medium`}
                  >
                    <span>Kontakt</span>
                    <ChevronDown size={14} className="chevron-icon" />
                  </button>
                  
                  {/* Dropdown-meny för kontakt */}
                  <div className="dropdown-menu absolute right-0 top-full mt-1 w-[450px] bg-white shadow-lg rounded-lg p-6 z-[9999]">
                    <div className="grid grid-cols-2 gap-6">
                      {contactItems.map((item, index) => (
                        <Link 
                          key={index}
                          to={item.link}
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div>
                            <h3 className="text-gray-800 font-medium hover:text-[#62c7fc] flex items-center justify-between">
                              <span>{item.title}</span>
                              <ChevronRight size={14} className="text-gray-400" />
                            </h3>
                            <p className="text-xs text-gray-500 mt-2">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>

                {/* Phone button */}
                <li>
                  <a
                    href="tel:0104051000"
                    className={`${scrolled ? 'bg-[#62c7fc] text-white' : 'bg-white text-[#62c7fc]'} hover:bg-[#4ba5dc] hover:text-white px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-1 hover:shadow-md text-sm font-medium ml-2 mr-0`}
                  >
                    <Phone size={14} />
                    <span>010-405 10 00</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Mobile menu button - positioned to the right */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 ${scrolled ? 'bg-white text-gray-700' : 'bg-white/10 backdrop-blur-sm text-white'} hover:text-[#62c7fc] transition-all duration-300 flex items-center justify-center rounded-full`}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile navigation menu */}
        {isOpen && (
          <div className="fixed inset-0 top-[60px] bg-white z-50 md:hidden overflow-y-auto">
            <nav className="container mx-auto p-4">
              <ul className="space-y-4">
                <li className="border-b pb-3">
                  <button
                    className="flex items-center justify-between w-full text-gray-700 py-2.5 px-1"
                    onClick={() => toggleDropdown('tjanster')}
                  >
                    <span className="font-medium">Tjänster</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        activeDropdown === 'tjanster' ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeDropdown === 'tjanster' && (
                    <div className="bg-gray-50 rounded-lg mt-2 py-2">
                      <ul className="pl-4 space-y-2">
                        {serviceItems.map((item, index) => (
                          <li key={index}>
                            <Link
                              to={item.link}
                              className="flex items-start py-2.5 px-2 text-gray-700 hover:text-[#62c7fc] rounded-md hover:bg-white"
                              onClick={() => setIsOpen(false)}
                            >
                              <div>
                                <div className="font-medium">{item.title}</div>
                                <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>

                <li className="border-b pb-3">
                  <button
                    className="flex items-center justify-between w-full text-gray-700 py-2.5 px-1"
                    onClick={() => toggleDropdown('priser')}
                  >
                    <span className="font-medium">Priser</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        activeDropdown === 'priser' ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeDropdown === 'priser' && (
                    <div className="bg-gray-50 rounded-lg mt-2 py-2">
                      <ul className="pl-4 space-y-2">
                        {priceItems.map((item, index) => (
                          <li key={index}>
                            <Link
                              to={item.link}
                              className="block py-2.5 px-2 text-gray-700 hover:text-[#62c7fc] rounded-md hover:bg-white"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="font-medium">{item.title}</div>
                              <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>

                <li className="border-b pb-3">
                  <Link
                    to="/projekt"
                    className="flex items-center justify-between w-full py-2.5 px-1 text-gray-700 hover:text-[#62c7fc] font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>Projekt</span>
                    <ChevronRight size={16} className="text-gray-400" />
                  </Link>
                </li>

                <li className="border-b pb-3">
                  <Link
                    to="/kunder"
                    className="flex items-center justify-between w-full py-2.5 px-1 text-gray-700 hover:text-[#62c7fc] font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>Kunder</span>
                    <ChevronRight size={16} className="text-gray-400" />
                  </Link>
                </li>

                <li className="border-b pb-3">
                  <button
                    className="flex items-center justify-between w-full text-gray-700 py-2.5 px-1"
                    onClick={() => toggleDropdown('kontakt')}
                  >
                    <span className="font-medium">Kontakt</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        activeDropdown === 'kontakt' ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeDropdown === 'kontakt' && (
                    <div className="bg-gray-50 rounded-lg mt-2 py-2">
                      <ul className="pl-4 space-y-2">
                        {contactItems.map((item, index) => (
                          <li key={index}>
                            <Link
                              to={item.link}
                              className="block py-2.5 px-2 text-gray-700 hover:text-[#62c7fc] rounded-md hover:bg-white"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="font-medium">{item.title}</div>
                              <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>

                <li className="pt-3">
                  <a
                    href="tel:0104051000"
                    className="bg-[#62c7fc] hover:bg-[#4ba5dc] text-white py-3.5 px-4 rounded-lg flex items-center justify-center gap-2 shadow-md w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone size={18} />
                    <span className="font-medium">Ring oss: 010-405 10 00</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>

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
