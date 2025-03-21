
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-bold">Bygglovsdr</h3>
            <p className="text-gray-400 max-w-xs">
              Vi hjälper dig förverkliga din idé till verklighet, genom våra arkitektritningar och bygglovsritningar.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:0104051000" className="flex items-center gap-2 text-gray-300 hover:text-brand-500 transition-colors">
                <Phone size={16} />
                <span>010-405 1000</span>
              </a>
              <a href="mailto:info@bygglovsexperten.se" className="flex items-center gap-2 text-gray-300 hover:text-brand-500 transition-colors">
                <Mail size={16} />
                <span>info@bygglovsexperten.se</span>
              </a>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Öppettider: Alla helgfria vardagar mellan kl. 08:00 och 17:00</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold">Snabblänkar</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/tjanster" className="text-gray-300 hover:text-brand-500 transition-colors flex items-center gap-1">
                  <ArrowRight size={14} />
                  <span>Tjänster</span>
                </Link>
              </li>
              <li>
                <Link to="/priser" className="text-gray-300 hover:text-brand-500 transition-colors flex items-center gap-1">
                  <ArrowRight size={14} />
                  <span>Priser</span>
                </Link>
              </li>
              <li>
                <Link to="/kunder" className="text-gray-300 hover:text-brand-500 transition-colors flex items-center gap-1">
                  <ArrowRight size={14} />
                  <span>Kunder</span>
                </Link>
              </li>
              <li>
                <Link to="/projekt" className="text-gray-300 hover:text-brand-500 transition-colors flex items-center gap-1">
                  <ArrowRight size={14} />
                  <span>Projekt</span>
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-gray-300 hover:text-brand-500 transition-colors flex items-center gap-1">
                  <ArrowRight size={14} />
                  <span>Kontakta oss</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold">Våra Tjänster</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/tjanster/bygglovsritningar" className="text-gray-300 hover:text-brand-500 transition-colors flex items-center gap-1">
                  <ArrowRight size={14} />
                  <span>Bygglovsritningar</span>
                </Link>
              </li>
              <li>
                <Link to="/tjanster/konstruktionsritningar" className="text-gray-300 hover:text-brand-500 transition-colors flex items-center gap-1">
                  <ArrowRight size={14} />
                  <span>Konstruktionsritningar</span>
                </Link>
              </li>
              <li>
                <Link to="/tjanster/vvs-ritningar" className="text-gray-300 hover:text-brand-500 transition-colors flex items-center gap-1">
                  <ArrowRight size={14} />
                  <span>VVS-ritningar</span>
                </Link>
              </li>
              <li>
                <Link to="/tjanster/elritningar" className="text-gray-300 hover:text-brand-500 transition-colors flex items-center gap-1">
                  <ArrowRight size={14} />
                  <span>Elritningar</span>
                </Link>
              </li>
              <li>
                <Link to="/tjanster/kontrollansvarig" className="text-gray-300 hover:text-brand-500 transition-colors flex items-center gap-1">
                  <ArrowRight size={14} />
                  <span>Kontrollansvarig</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold">Kontakta oss</h3>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Namn" 
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-white"
              />
              <input 
                type="email" 
                placeholder="E-postadress" 
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-white"
              />
              <textarea 
                placeholder="Meddelande" 
                rows={3}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-white resize-none"
              ></textarea>
              <button 
                type="submit" 
                className="button-primary w-full"
              >
                Skicka
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Bygglovsdr. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
