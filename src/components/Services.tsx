import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Bygglovsritningar",
      description:
        "Vi hjälper dig förverkliga din idé till verklighet, genom våra arkitektritningar/bygglovsritningar. Ingår allt du behöver, såsom situationsplan, fasadritning, planritning och sektionsritning. Som tack för ditt förtroende i oss, skickar vi in allt underlag till din kommun åt dig, så att du kan göra annat kul.",
      link: "/tjanster/bygglovsritningar",
      icon: "🏠",
    },
    {
      title: "Konstruktionsritningar",
      description:
        "Vi hjälper dig med alla dina konstruktionsritningar och beräkningar som din kommun och byggare behöver. Detaljritningar (till väggar, tak & grund), konstruktionsberäkningar, dimensionering, konstruktionsdokumentation och övriga konstruktionshandlingar.",
      link: "/tjanster/konstruktionsritningar",
      icon: "📐",
    },
    {
      title: "Kontrollansvarig",
      description:
        "Våra kontrollansvariga som finns utspridda över hela landet kommer hjälpa dig i just din stad. Allt du behöver gällande ditt bygglov finns under ett och samma tak med oss på Bygglovsexperten.",
      link: "/tjanster/kontrollansvarig",
      icon: "✓",
    },
    {
      title: "VVS-ritningar",
      description:
        "Vi hjälper dig med alla VVS-ritningar som krävs, såsom värme, ventilation och sanitet.",
      link: "/tjanster/vvs-ritningar",
      icon: "🔧",
    },
    {
      title: "Elritningar",
      description:
        "En elritning är en ritning som visar befintliga och/eller planerade elinstallationer i en bostad. Den visar antalet lampor, uttag och ledningar i hemmet. Den visar även bredbandsuttag och teleledningar samt elledningar till och från huset.",
      link: "/tjanster/elritningar",
      icon: "⚡",
    },
  ];

  const extraServices = [
    "Konstruktionsdokumentation",
    "Dimensioneringskontroll",
    "Energiberäkning",
    "Brandskyddsbeskrivning",
    "Fuktskyddsbeskrivning",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Våra Tjänster
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Vi erbjuder alla tjänster du behöver för ditt byggprojekt
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.link}
            className="group relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{service.icon}</span>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-2 rounded-full bg-[#62c7fc]/10 text-[#62c7fc] group-hover:bg-[#62c7fc] group-hover:text-white transition-all duration-300"
                >
                  <ArrowUpRight size={20} />
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#62c7fc]/0 to-[#62c7fc]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        ))}
      </div>

      <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Extra Tjänster</h3>
        <p className="text-gray-600 mb-8">
          Vi är Sveriges enda företag som erbjuder allt under ett och samma tak.
          Förutom ovan handlingar, så erbjuder vi även:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {extraServices.map((service, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-gray-700"
            >
              <span className="text-[#62c7fc]">•</span>
              <span>{service}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 bg-[#62c7fc]/5 p-8 rounded-2xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Bygg</h3>
        <p className="text-gray-600 leading-relaxed">
          Vi har nu tagit steget och blir det första svenska företaget som erbjuder
          dig allt från bygglovsritningar, konstruktionsritningar,
          kontrollansvarig till byggare, allt under ett och samma tak. I samarbete
          med Dryft hjälper vi dig att förverkliga dina byggdrömmar på riktigt.
          Dryft har snickare, elektriker, rörmokare, målare och plattsättare -
          alla anställda på Dryft med kollektivavtal - och är redo att hjälpa dig.
        </p>
      </div>
    </div>
  );
};

export default Services; 