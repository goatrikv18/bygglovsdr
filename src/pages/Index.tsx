import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Phone, FileText, Activity, Droplet, Zap, Award, SquareCheck, CheckCircle, Star, Calendar, ChevronRight, ArrowUpRight } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import PriceCard from '@/components/PriceCard';
import ReviewCard from '@/components/ReviewCard';
import CallToAction from '@/components/CallToAction';
import StepProcess from '@/components/StepProcess';
import ParallaxHero from '@/components/ParallaxHero';
import AnimatedSection from '@/components/AnimatedSection';
import IntroLoader from '@/components/IntroLoader';
import ScrollAnimations from '@/components/ScrollAnimations';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import * as React from 'react';
import ReactDOM from 'react-dom';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const [introCompleted, setIntroCompleted] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (introCompleted && mainRef.current) {
      // Slide the main content in from bottom when intro is completed
      gsap.fromTo(
        mainRef.current,
        { y: '20vh', opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2,
          ease: 'power3.out',
          clearProps: 'all'
        }
      );
    }
  }, [introCompleted]);
  
  const services = [
    {
      title: "Bygglovsritningar",
      description:
        "Vi hjälper dig förverkliga din idé till verklighet, genom våra arkitektritningar/bygglovsritningar. Ingår allt du behöver, såsom situationsplan, fasadritning, planritning och sektionsritning. Som tack för ditt förtroende i oss, skickar vi in allt underlag till din kommun åt dig, så att du kan göra annat kul.",
      link: "/tjanster/bygglovsritningar",
      icon: <FileText size={20} />,
    },
    {
      title: "Konstruktionsritningar",
      description:
        "Vi hjälper dig med alla dina konstruktionsritningar och beräkningar som din kommun och byggare behöver. Detaljritningar (till väggar, tak & grund), konstruktionsberäkningar, dimensionering, konstruktionsdokumentation och övriga konstruktionshandlingar.",
      link: "/tjanster/konstruktionsritningar",
      icon: <Activity size={20} />,
    },
    {
      title: "Kontrollansvarig",
      description:
        "Våra kontrollansvariga som finns utspridda över hela landet kommer hjälpa dig i just din stad. Allt du behöver gällande ditt bygglov finns under ett och samma tak med oss på Bygglovsexperten.",
      link: "/tjanster/kontrollansvarig",
      icon: <SquareCheck size={20} />,
    },
    {
      title: "VVS-ritningar",
      description:
        "Vi hjälper dig med alla VVS-ritningar som krävs, såsom värme, ventilation och sanitet.",
      link: "/tjanster/vvs-ritningar",
      icon: <Droplet size={20} />,
    },
    {
      title: "Elritningar",
      description:
        "En elritning är en ritning som visar befintliga och/eller planerade elinstallationer i en bostad. Den visar antalet lampor, uttag och ledningar i hemmet. Den visar även bredbandsuttag och teleledningar samt elledningar till och från huset.",
      link: "/tjanster/elritningar",
      icon: <Zap size={20} />,
    },
    {
      title: "Extra Tjänster",
      description:
        "Vi är Sveriges enda företag som erbjuder allt under ett och samma tak. Förutom ovan handlingar, så erbjuder vi även konstruktionsdokumentation, dimensioneringskontroll, energiberäkning, brandskyddsbeskrivning och fuktskyddsbeskrivning.",
      link: "/tjanster/extra-tjanster",
      icon: <Award size={20} />,
    },
    {
      title: "Bygg",
      description:
        "Vi har nu tagit steget och blir det första svenska företaget som erbjuder dig allt från bygglovsritningar, konstruktionsritningar, kontrollansvarig till byggare, allt under ett och samma tak. I samarbete med Dryft hjälper vi dig att förverkliga dina byggdrömmar på riktigt. Dryft har snickare, elektriker, rörmokare, målare och plattsättare - alla anställda på Dryft med kollektivavtal - och är redo att hjälpa dig.",
      link: "/tjanster/bygg",
      icon: <Award size={20} />,
    }
  ];

  const priceItems = [
    {
      title: 'Bygglovsritningar',
      priceItems: [
        { size: '1 kvm - 25 kvm', price: '3900:-' },
        { size: '26 kvm - 70 kvm', price: '5900:-' },
        { size: '71 kvm - 150 kvm', price: '8900:-' },
        { size: '150+ kvm', price: 'Offert' }
      ],
      description: 'Priser gäller för Bygglovsritningar (Fasadritning, sektionsritning, planritningar, situationsplan & markplaneringsritning).'
    },
    {
      title: 'Konstruktionsritningar',
      priceItems: [
        { size: '1 kvm - 25 kvm', price: '3900:-' },
        { size: '26 kvm - 70 kvm', price: '5900:-' },
        { size: '71 kvm - 150 kvm', price: '8900:-' },
        { size: '150+ kvm', price: 'Offert' }
      ],
      description: 'Priser gäller för Konstruktionsritningar (Detaljritningar, beräkningar, dimensionering & dokumentation).'
    },
    {
      title: 'VVS-Ritningar',
      priceItems: [
        { size: '1 kvm - 25 kvm', price: '3900:-' },
        { size: '26 kvm - 70 kvm', price: '5900:-' },
        { size: '71 kvm - 150 kvm', price: '8900:-' },
        { size: '150+ kvm', price: 'Offert' }
      ],
      description: 'Priser gäller för VVS-ritningar (VA-plan, ventilationsplan och värmeplan).'
    },
    {
      title: 'Kontrollansvarig',
      priceItems: [
        { size: '1 kvm - 25 kvm', price: '3900:-' },
        { size: '26 kvm - 70 kvm', price: '5900:-' },
        { size: '71 kvm - 150 kvm', price: '8900:-' },
        { size: '150+ kvm', price: 'Offert' }
      ],
      description: 'Priser gäller för kontrollansvarig (KA) enligt PBL.'
    }
  ];

  const processSteps = [
    {
      title: 'Offert',
      description: 'Ring oss på 010-405 1000 och berätta vad du vill ha hjälp med. Kort därefter får du en offert. Projektstart inom 24h.',
      icon: <FileText size={24} />
    },
    {
      title: 'Uppstart',
      description: 'Din personliga projektledare ringer dig för en förstudie och tar reda på din idé som vi ska göra till verklighet.',
      icon: <Phone size={24} />
    },
    {
      title: 'Ritningar',
      description: 'Våra arkitekter, konstruktörer och vvs konsulter tar fram ritningarna du önskat inom 1-2 veckor.',
      icon: <FileText size={24} />
    },
    {
      title: 'Leverans',
      description: 'Vi hjälper dig kostnadsfritt att skicka in ritningarna till kommunen som en extra tjänst.',
      icon: <CheckCircle size={24} />
    }
  ];

  const reviews = [
    {
      name: 'Marina Michanova',
      date: '2025-02-05',
      rating: 5,
      content: 'Att något så krångligt som bygglov och konstruktionsritningar kunde bli så enkelt och smidigt? Sylvester på Bygglovsexperten var så hjälpsam och tillmötesgående. Rekommenderar starkt!'
    },
    {
      name: 'Anders Eloff',
      date: '2025-01-16',
      rating: 5,
      content: 'Bygglovsexperten levererar snabbt med hög kvalitét. Vid ett plötsligt akut behov att snabbt uppdatera/verifiera den energiberäkning de levererat två år tidigare ställde de upp på ett mycket kort varsel och levererade på ett och ett halvt dygn. Helt otrolig service!'
    },
    {
      name: 'Friida Lynard',
      date: '2025-01-10',
      rating: 5,
      content: 'Proffsiga och snabba och hjälpte oss med enkelhet med allt vi behövde till vårt bygglov. Kan varmt rekommendera!'
    }
  ];

  const companyInfo = [
    {
      title: '2021',
      subtitle: 'Grundades',
      description: 'Vi startade med målet att förenkla bygglovsprocessen för alla.'
    },
    {
      title: '6 st',
      subtitle: 'Anställda',
      description: 'Ett litet men dedikerat team av experter inom bygglov.'
    },
    {
      title: '200+',
      subtitle: 'Projekt',
      description: 'Över 200 slutförda projekt runt om i Sverige.'
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Initialize scroll animations */}
      <ScrollAnimations />
      
      {/* Intro Loader */}
      <IntroLoader onComplete={() => setIntroCompleted(true)} />
      
      <div 
        ref={mainRef} 
        style={{ opacity: 0 }} 
        className="transition-all duration-1000"
      >
        {/* Hero Section */}
        <ParallaxHero />

        {/* Services Section */}
        <section className="relative z-10 bg-white rounded-t-[40px] mt-[-100px] py-20 shadow-lg overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="w-full max-w-[1800px] mx-auto relative z-10">
            <div className="mb-12 ml-8 md:ml-12">
              <h2 className="text-[#62c7fc] text-sm font-medium uppercase tracking-wider mb-2">TJÄNSTER</h2>
              <h3 className="text-2xl md:text-3xl font-bold">Våra Tjänster</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`relative ${index % 2 === 0 ? 'md:pr-4' : 'md:pl-4'}`}
                >
                  <Link
                    to={service.link}
                    className="group flex items-center justify-between py-7 px-8 md:px-12 border-t border-gray-100 hover:bg-gray-50 transition-all duration-300 h-full"
                  >
                    <motion.div 
                      className="flex items-center space-x-5"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <div className="text-[#62c7fc] flex-shrink-0">
                        {service.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-0 group-hover:text-[#62c7fc] transition-colors duration-300">
                          {service.title}
                        </h3>
                        <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-20 opacity-0 group-hover:opacity-100 group-hover:mt-2">
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 pr-4">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <div className="flex-shrink-0 flex items-center relative">
                      <motion.div
                        className="text-[#62c7fc] transform transition-all duration-300"
                        initial="default"
                        whileHover="hover"
                        variants={{
                          default: { opacity: 1 },
                          hover: { opacity: 0, transition: { duration: 0.2 } }
                        }}
                      >
                        <ArrowUpRight size={22} />
                      </motion.div>
                      <motion.div
                        className="text-[#62c7fc] transform transition-all duration-300 absolute"
                        initial="default"
                        whileHover="hover"
                        variants={{
                          default: { opacity: 0, x: -5 },
                          hover: { opacity: 1, x: 0, transition: { duration: 0.2 } }
                        }}
                      >
                        <ChevronRight size={22} />
                      </motion.div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider Section with Parallax Effect */}
        <section className="h-96 relative overflow-hidden z-10 rounded-b-[40px] shadow-lg mt-[-2px] bg-white">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&auto=format&fit=crop&q=80)',
              transform: 'translateZ(0)'
            }}
          >
            <div className="absolute inset-0 bg-[#62c7fc]/50"></div>
            <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          </div>
          <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
            <div className="w-full max-w-[1800px] mx-auto">
              <div className="text-center text-white gsap-reveal-scale max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Vi hjälper dig hela vägen</h2>
                <p className="text-xl md:text-2xl mb-8">Från första idé till godkänt bygglov</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:0104051000" 
                    className="button-cta bg-white hover:bg-gray-100 text-gray-900 transform hover:-translate-y-1 hover:shadow-xl"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Ring oss</span>
                  </a>
                  <Link 
                    to="/kontakt" 
                    className="button-cta bg-[#62c7fc] hover:bg-[#4ba5dc] text-white transform hover:-translate-y-1 hover:shadow-xl"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Boka ett möte</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section with Scroll-Activated Brightness Effect */}
        <section className="py-20 bg-[#3a3a3a] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagonal-noise.png')]"></div>
          <div className="w-full max-w-[1800px] mx-auto relative z-10 px-4">
            <div className="mb-12 ml-8 md:ml-12">
              <h2 className="text-[#62c7fc] text-sm font-medium uppercase tracking-wider mb-2">OM OSS</h2>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Bygglovsexperten</h3>
            </div>
            
            <div className="relative ml-8 md:ml-12 mr-8 md:mr-12">
              <div className="w-full">
                {/* Main content with Brightness Effect */}
                <div className="mb-16">
                  <BrightnessScrollText className="text-[32px] md:text-[42px] lg:text-[48px] leading-tight font-bold mb-8">
                    Vi kombinerar expertis, precision och kreativitet för att leverera bygglösningar som både inspirerar och skapar <span className="text-[#62c7fc]">trygghet</span> från första ritning till färdigt projekt.
                  </BrightnessScrollText>
                    
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/kontakt"
                      className="bg-[#62c7fc] hover:bg-[#4ba5dc] text-white px-6 py-3 rounded-full text-center font-medium transition-all duration-300"
                    >
                      Begär offert
                    </Link>
                    <Link
                      to="/om-oss"
                      className="inline-flex items-center justify-center border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-full text-center font-medium transition-all duration-300"
                    >
                      <span>Läs mer om oss</span>
                      <ChevronRight className="ml-1" size={18} />
                    </Link>
                  </div>
                </div>
                
                {/* Statistics section */}
                <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-6">
                  <div className="text-center">
                    <div className="text-[52px] md:text-[68px] font-bold text-white">4424</div>
                    <div className="text-white/60 text-lg">Genomförda projekt</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[52px] md:text-[68px] font-bold text-white">2023</div>
                    <div className="text-white/60 text-lg">Grundades vi</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[52px] md:text-[68px] font-bold text-white">8 st</div>
                    <div className="text-white/60 text-lg">Medarbetare</div>
                  </div>
                </div>
                
                {/* Feature boxes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <FadeInFeature delay={0} className="border-t border-white/20 pt-8">
                    <h3 className="font-bold text-[#62c7fc] text-xl mb-2">Kvalitet till rimliga priser</h3>
                    <p className="text-white/80">Vi levererar högkvalitativa ritningar och lösningar utan att spräcka din budget.</p>
                  </FadeInFeature>
                  <FadeInFeature delay={0.2} className="border-t border-white/20 pt-8">
                    <h3 className="font-bold text-[#62c7fc] text-xl mb-2">Personlig och snabb service</h3>
                    <p className="text-white/80">Vi anpassar varje projekt efter dina behov och säkerställer snabba leveranser med hög kvalitet.</p>
                  </FadeInFeature>
                  <FadeInFeature delay={0.4} className="border-t border-white/20 pt-8">
                    <h3 className="font-bold text-[#62c7fc] text-xl mb-2">Hjälp till alla</h3>
                    <p className="text-white/80">Vi erbjuder våra tjänster till privatpersoner, företag och myndigheter med samma höga engagemang.</p>
                  </FadeInFeature>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section with Parallax Effect */}
        <section className="py-20 bg-[#f5faff] relative z-10 overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="w-full max-w-[1800px] mx-auto relative z-10 px-4">
            <div className="mb-8 ml-8 md:ml-12">
              <h2 className="text-[#62c7fc] text-sm font-medium uppercase tracking-wider mb-2">PROJEKT</h2>
              <h3 className="text-2xl md:text-3xl font-bold">Ett urval av tidigare projekt</h3>
              <p className="text-gray-600 mt-2 max-w-2xl">Ta en titt på några av våra projekt och se hur vi förvandlar idéer till verklighet.</p>
            </div>
            
            <div className="mx-8 md:mx-12">
              <ParallaxProjects />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white"></div>
        </section>

        {/* Process Steps Section */}
        <section className="py-20 bg-white relative z-10 overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/arches.png')]"></div>
          <div className="w-full max-w-[1800px] mx-auto relative z-10 px-4">
            <div className="mb-12 ml-8 md:ml-12">
              <h2 className="text-[#62c7fc] text-sm font-medium uppercase tracking-wider mb-2">PROCESS</h2>
              <h3 className="text-2xl md:text-3xl font-bold">Vår process</h3>
              <p className="text-gray-600 mt-2 max-w-2xl">En smidig och effektiv process från start till mål.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-8 md:mx-12">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex items-start mb-4">
                      <div className="h-14 w-14 rounded-lg bg-[#eef7ff] flex items-center justify-center mr-4 flex-shrink-0">
                        <div className="text-[#62c7fc]">{step.icon}</div>
                      </div>
                      <div className="h-14 flex items-center">
                        <span className="text-4xl font-bold text-[#62c7fc]/20">0{index + 1}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#eef7ff]"></div>
        </section>

        {/* Price Section */}
        <section className="py-16 bg-[#eef7ff] relative z-10 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-[#62c7fc]/20 via-transparent to-[#62c7fc]/10"></div>
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
          
          <div className="w-full max-w-[1800px] mx-auto relative z-10 px-4">
            <div className="mb-8 ml-8 md:ml-12">
              <h2 className="text-[#62c7fc] text-sm font-medium uppercase tracking-wider mb-2">PRISER</h2>
              <h3 className="text-2xl md:text-3xl font-bold">Våra Priser</h3>
              <p className="text-gray-600 mt-2 max-w-2xl">Vi erbjuder konkurrenskraftiga priser med fokus på kvalitet och service. Våra priser är transparenta utan dolda kostnader.</p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-8 md:mx-12">
              {priceItems.map((price, index) => (
                <div 
                  key={index} 
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#62c7fc] to-[#4ba5dc] rounded-xl blur opacity-0 group-hover:opacity-70 transition-opacity duration-300 -z-10"></div>
                  
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:translate-y-[-8px] transition-all duration-500 h-full flex flex-col relative z-0 border border-gray-100">
                    <div className="p-5 border-b border-gray-100">
                      <span className="inline-block w-10 h-10 rounded-full bg-[#eef7ff] mb-2 flex items-center justify-center">
                        <FileText className="text-[#62c7fc]" size={18} />
                      </span>
                      <h3 className="font-bold text-lg mb-1">{price.title}</h3>
                    </div>
                    
                    <div className="p-5 flex-grow">
                      <ul className="space-y-3">
                        {price.priceItems.map((item, idx) => (
                          <li key={idx} className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-0">
                            <span className="text-gray-600 text-sm">{item.size}</span>
                            <span className="font-bold text-gray-900">{item.price}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <p className="mt-3 text-xs text-gray-500 italic">{price.description}</p>
                    </div>
                    
                    <div className="px-5 pb-5 pt-0">
                      <Link 
                        to="/kontakt" 
                        className="w-full inline-flex items-center justify-center px-4 py-2.5 border border-transparent rounded-full text-sm font-medium text-white bg-[#62c7fc] hover:bg-[#4ba5dc] transition-colors duration-300 shadow-sm"
                      >
                        Begär offert
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-10">
              <a 
                href="tel:0104051000" 
                className="inline-flex items-center justify-center py-2.5 px-5 border border-gray-300 rounded-full bg-white hover:bg-gray-50 transition-all duration-300 shadow-sm"
              >
                <Phone className="mr-2" size={16} />
                <span>Ring för specialoffert</span>
              </a>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white"></div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white relative z-10 overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/lined-paper.png')]"></div>
          <div className="w-full max-w-[1800px] mx-auto relative z-10 px-4">
            <div className="mb-8 ml-8 md:ml-12">
              <h2 className="text-[#62c7fc] text-sm font-medium uppercase tracking-wider mb-2">REKOMMENDATIONER</h2>
              <h3 className="text-2xl md:text-3xl font-bold">Vad våra kunder säger</h3>
              <p className="text-gray-600 mt-2 max-w-2xl">Vi på Bygglovsexperten är stolta över att ha hjälpt hundratals kunder att förverkliga sina byggprojekt.</p>
            </div>
            
            <div className="flex justify-center mb-8 mx-8 md:mx-12">
              <div className="bg-white rounded-full py-1.5 px-4 flex items-center shadow-md border border-gray-100">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="ml-2 text-gray-700 text-xs">
                  <span className="font-semibold">5.0 utmärkt</span> • Baserat på 194 omdömen
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mx-8 md:mx-12">
              {reviews.map((review, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 border border-[#d9ebfd] flex flex-col h-full"
                >
                  <div className="p-4 flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-base text-gray-800">{review.name}</h4>
                        <div className="flex items-center mt-0.5">
                          <div className="w-4 h-4 rounded-full bg-[#d9ebfd] flex items-center justify-center mr-1">
                            <CheckCircle size={9} className="text-[#62c7fc]" />
                          </div>
                          <p className="text-xs text-gray-500">Verifierad kund</p>
                        </div>
                      </div>
                      <div className="flex space-x-0.5">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-2 italic">
                      <span className="text-[#62c7fc]/30 text-lg font-serif">"</span>
                      {review.content}
                      <span className="text-[#62c7fc]/30 text-lg font-serif">"</span>
                    </p>
                  </div>
                  
                  <div className="py-2 px-4 border-t border-[#d9ebfd] bg-gradient-to-r from-[#eef7ff] to-white mt-auto">
                    <div className="flex items-center justify-between">
                      <Link to={`/rekommendationer/${review.name.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center text-[#62c7fc] text-xs group-hover:underline">
                        <span>Läs mer</span>
                        <ChevronRight size={12} className="ml-1" />
                      </Link>
                      <div className="inline-flex items-center space-x-1 text-gray-500 text-xs">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(review.date).toLocaleDateString('sv-SE').split('-').slice(0, 2).join('-')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-center">
              <Link 
                to="/rekommendationer" 
                className="inline-flex items-center justify-center py-2 px-5 border border-gray-300 rounded-full bg-white hover:bg-gray-50 transition-all duration-300 shadow-sm text-sm"
              >
                <span className="mr-1.5">Läs fler omdömen</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#fafcff]"></div>
        </section>

        {/* FAQ Section */}
        <section className="relative z-10 bg-white rounded-t-[40px] mb-[-30px] py-16 shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-[#fafcff] opacity-50"></div>
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/arches.png')]"></div>
          <div className="w-full max-w-[1800px] mx-auto relative z-10">
            <div className="mb-8 ml-8 md:ml-12">
              <h2 className="text-[#62c7fc] text-sm font-medium uppercase tracking-wider mb-2">FRÅGOR & SVAR</h2>
              <h3 className="text-2xl md:text-3xl font-bold">Vanliga frågor</h3>
              <p className="text-gray-600 mt-2 max-w-2xl">Här hittar du svar på de vanligaste frågorna kring våra tjänster.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
              {[
                {
                  question: "Hur lång tid tar bygglovsprocessen?",
                  answer: "Bygglovsprocessen varierar beroende på kommun och projektets komplexitet. Normalt tar det 6-10 veckor från ansökan till besked. Vi hjälper dig genom hela processen och ser till att alla handlingar är korrekta från start för att undvika onödiga förseningar."
                },
                {
                  question: "Vad kostar ett bygglov?",
                  answer: "Kostnaden för bygglov varierar beroende på projektets storlek och omfattning. Kontakta oss för en personlig offert anpassad efter dina behov. Vi erbjuder alltid transparenta priser utan dolda avgifter."
                },
                {
                  question: "Behöver jag en kontrollansvarig?",
                  answer: "För de flesta byggprojekt krävs en kontrollansvarig enligt Plan- och bygglagen. Vi kan tillhandahålla certifierade kontrollansvariga för alla typer av projekt, oavsett storlek och komplexitet."
                },
                {
                  question: "Hur snabbt kan ni leverera bygglovsritningar?",
                  answer: "Vi levererar normalt bygglovsritningar inom 1-2 veckor, beroende på projektets komplexitet och vår aktuella arbetsbörda. Vi erbjuder även expresstjänst för brådskande ärenden."
                },
                {
                  question: "Vad ingår i era bygglovsritningar?",
                  answer: "I våra bygglovsritningar ingår situationsplan, fasadritningar, planritningar och sektionsritningar. Allt anpassat efter kommunens krav och dina behov."
                },
                {
                  question: "Hjälper ni till med bygglovsansökan?",
                  answer: "Ja, vi hjälper dig kostnadsfritt att skicka in alla ritningar och handlingar till kommunen som en del av vårt åtagande. Vi ser till att allt blir rätt från början."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className={`relative ${index % 2 === 0 ? 'md:pr-4' : 'md:pl-4'}`}
                >
                  <motion.div
                    initial="collapsed"
                    whileHover="expanded"
                    className="group py-5 px-6 md:px-10 border-t border-gray-100 hover:bg-[#f0f7ff] transition-all duration-300 h-full rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-base md:text-lg font-medium text-gray-800 group-hover:text-[#62c7fc] transition-colors duration-300">
                        {faq.question}
                      </h3>
                      <div className="text-[#62c7fc] flex-shrink-0 bg-[#eef7ff] p-1.5 rounded-full transform transition-all duration-300 group-hover:rotate-90 group-hover:bg-[#d9ebfd]">
                        <ChevronRight 
                          size={16} 
                          className="transform transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <motion.div
                      variants={{
                        collapsed: { opacity: 0, height: 0, overflow: 'hidden' },
                        expanded: { opacity: 1, height: 'auto', overflow: 'visible' }
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-600 text-sm pr-4"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  </motion.div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <Link 
                to="/fragor-och-svar" 
                className="inline-flex items-center justify-center py-2 px-5 border border-gray-300 rounded-full hover:bg-gray-50 transition-all duration-300 shadow-sm text-sm"
              >
                <span className="mr-1.5">Se alla frågor</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#4ba5dc] to-[#62c7fc] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          
          <div className="w-full max-w-[1800px] mx-auto relative z-10 px-4">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between mx-8 md:mx-12">
              <div className="max-w-xl text-left mb-10 md:mb-0 md:pr-8">
                <h2 className="text-[#f0f7ff] text-sm font-medium uppercase tracking-wider mb-2">TA NÄSTA STEG</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Redo att förverkliga ditt projekt?</h3>
                <p className="text-white/90 text-lg">
                  Kontakta oss idag för en kostnadsfri konsultation. Vi hjälper dig genom hela processen från idé till färdigt bygglov.
                </p>
              </div>
              
              <div className="flex flex-col space-y-4 md:min-w-[260px]">
                <a 
                  href="tel:0104051000" 
                  className="button-cta bg-white hover:bg-gray-100 text-gray-900 transform hover:-translate-y-1 hover:shadow-xl w-full justify-center"
                >
                  <Phone className="w-5 h-5" />
                  <span>Ring oss nu</span>
                </a>
                
                <Link 
                  to="/kontakt" 
                  className="button-cta bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 transform hover:-translate-y-1 hover:shadow-xl w-full justify-center"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Boka ett möte</span>
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-20 border-t border-white/20 pt-16 mx-8 md:mx-12">
              {companyInfo.map((info, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-white mb-2">{info.title}</h3>
                  <p className="text-lg font-semibold text-white mb-1">{info.subtitle}</p>
                  <p className="text-white/80">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const ParallaxProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  
  // Projekt data
  const projects = [
    {
      id: 1,
      title: "Villa i Täby",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      link: "/projekt/villa-taby",
      position: "left",
    },
    {
      id: 2,
      title: "Carport i Danderyd",
      image: "https://images.unsplash.com/photo-1623298317883-6b70254edf31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      link: "/projekt/carport-danderyd",
      position: "center",
    },
    {
      id: 3,
      title: "Villa i Danderyd",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      link: "/projekt/villa-danderyd",
      position: "right",
    },
    {
      id: 4,
      title: "Attefallshus i Haninge",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      link: "/projekt/attefallshus-haninge",
      position: "left",
    },
    {
      id: 5,
      title: "Villa i Åre",
      image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      link: "/projekt/villa-are",
      position: "center",
    },
    {
      id: 6,
      title: "Villa i Göteborg",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      link: "/projekt/villa-goteborg",
      position: "right",
    },
  ];

  useEffect(() => {
    if (!containerRef.current || !sectionRef.current || !buttonRef.current) return;
    
    // GSAP ScrollTrigger setup
    const setupScrollTriggers = () => {
      // Rensa bort befintliga animationer
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Hämta mittenprojekten som individuella element
      const centerItems = document.querySelectorAll('.center-column .project-item');
      
      if (!centerItems.length) return;
      
      // Första animationen: Alla projekt jämnas ut till samma nivå
      gsap.to('.project-side', {
        y: -15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "center center", 
          scrub: 0.8
        }
      });
      
      // Olika animationer för mittenspaltsbilderna
      centerItems.forEach((item, index) => {
        gsap.to(item, {
          y: index === 0 ? 20 : -20, // Första bilden rör sig nedåt, andra uppåt
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "center 40%",
            scrub: 0.5
          }
        });
      });
    };
    
    // Kör setup
    setupScrollTriggers();
    
    // Reset på fönsterändring för responsivitet
    const handleResize = () => {
      // Fördröj uppdateringen för att undvika flimmer
      setTimeout(setupScrollTriggers, 50);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      // Rensa upp
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 overflow-visible">
        {/* Left column */}
        <div className="space-y-8 md:space-y-12 py-4">
          {projects.filter(p => p.position === "left").map(project => (
            <div key={project.id} className="project-item project-side">
              <Link to={project.link} className="group block relative">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5">
                    <h3 className="text-white text-xl font-medium">{project.title}</h3>
                  </div>
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 p-4 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-2 w-full h-full">
                      <div className="bg-gray-100 rounded overflow-hidden">
                        <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                          <rect x="20" y="20" width="160" height="110" fill="none" stroke="#333" strokeWidth="1" />
                          <line x1="20" y1="60" x2="180" y2="60" stroke="#333" strokeWidth="1" />
                        </svg>
                      </div>
                      <div className="bg-gray-100 rounded overflow-hidden">
                        <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                          <path d="M20,130 L100,50 L180,130" fill="none" stroke="#333" strokeWidth="1" />
                          <rect x="60" y="90" width="30" height="40" fill="none" stroke="#333" strokeWidth="1" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Center column with sticky items */}
        <div className="center-column flex flex-col space-y-16 md:space-y-24 py-4">
          {projects.filter(p => p.position === "center").map((project, index) => (
            <div 
              key={project.id} 
              className={`project-item project-center`}
            >
              <Link to={project.link} className="group block relative">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5">
                    <h3 className="text-white text-xl font-medium">{project.title}</h3>
                  </div>
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 p-4 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-2 w-full h-full">
                      <div className="bg-gray-100 rounded overflow-hidden">
                        <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                          <rect x="20" y="20" width="160" height="110" fill="none" stroke="#333" strokeWidth="1" />
                          <line x1="20" y1="60" x2="180" y2="60" stroke="#333" strokeWidth="1" />
                        </svg>
                      </div>
                      <div className="bg-gray-100 rounded overflow-hidden">
                        <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                          <path d="M20,130 L100,50 L180,130" fill="none" stroke="#333" strokeWidth="1" />
                          <rect x="60" y="90" width="30" height="40" fill="none" stroke="#333" strokeWidth="1" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Right column */}
        <div className="space-y-8 md:space-y-12 py-4">
          {projects.filter(p => p.position === "right").map(project => (
            <div key={project.id} className="project-item project-side">
              <Link to={project.link} className="group block relative">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5">
                    <h3 className="text-white text-xl font-medium">{project.title}</h3>
                  </div>
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 p-4 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-2 w-full h-full">
                      <div className="bg-gray-100 rounded overflow-hidden">
                        <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                          <rect x="20" y="20" width="160" height="110" fill="none" stroke="#333" strokeWidth="1" />
                          <line x1="20" y1="60" x2="180" y2="60" stroke="#333" strokeWidth="1" />
                        </svg>
                      </div>
                      <div className="bg-gray-100 rounded overflow-hidden">
                        <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                          <path d="M20,130 L100,50 L180,130" fill="none" stroke="#333" strokeWidth="1" />
                          <rect x="60" y="90" width="30" height="40" fill="none" stroke="#333" strokeWidth="1" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      {/* Button reference */}
      <div ref={buttonRef} className="flex justify-center">
        <Link 
          to="/projekt" 
          className="inline-flex items-center justify-center py-3 px-6 border border-gray-300 rounded-full hover:bg-gray-50 transition-all duration-300"
        >
          <span className="mr-2">Se alla projekt</span>
          <ChevronRight size={18} />
        </Link>
      </div>
    </div>
  );
};

// Brightness effect text component
const BrightnessScrollText = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState<string>('');
  const [chars, setChars] = useState<Array<{char: string, brightness: number}>>([]);
  
  // Extract plain text and handle span elements manually
  useEffect(() => {
    let extractedText = '';
    
    if (typeof children === 'string') {
      extractedText = children;
    } else {
      // For handling children with spans and other elements
      try {
        // Recursively extract text content from React elements
        const extractTextFromChildren = (children: React.ReactNode): string => {
          if (!children) return '';
          
          if (typeof children === 'string') return children;
          
          if (typeof children === 'number') return children.toString();
          
          if (Array.isArray(children)) {
            return children.map(extractTextFromChildren).join('');
          }
          
          if (React.isValidElement(children)) {
            const childrenProps = children.props as {children?: React.ReactNode};
            if (childrenProps.children) {
              return extractTextFromChildren(childrenProps.children);
            }
          }
          
          return '';
        };
        
        extractedText = extractTextFromChildren(children);
      } catch (error) {
        console.error('Error extracting text:', error);
        extractedText = 'Vi kombinerar expertis, precision och kreativitet för att leverera bygglösningar som både inspirerar och skapar trygghet från första ritning till färdigt projekt.';
      }
    }
    
    setText(extractedText);
    
    // Initialize characters with starting brightness
    const initialChars = extractedText.split('').map(char => ({
      char,
      brightness: 0.2 // Start very dark
    }));
    
    setChars(initialChars);
  }, [children]);
  
  useEffect(() => {
    if (!containerRef.current || chars.length === 0) return;
    
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate how far into the viewport the element is (0 to 1)
        const scrollProgress = 1 - (rect.top / windowHeight);
        const visiblePortion = Math.min(Math.max(scrollProgress, 0), 1);
        
        // Update each character brightness based on scroll position
        setChars(prev => {
          return prev.map((charObj, index) => {
            // Calculate brightness based on character position and scroll
            // This creates a wave effect from left to right
            const charPosition = index / prev.length;
            const scrollOffset = charPosition * 0.3; // Offset the effect for a wave
            const targetBrightness = Math.min(Math.max((visiblePortion - scrollOffset) * 3, 0.2), 1);
            
            return {
              ...charObj,
              brightness: targetBrightness
            };
          });
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [chars.length]);
  
  // Render the text with varying brightness
  const renderBrightnessText = () => {
    const renderedChars = [];
    const highlightColor = "#62c7fc";
    let insideHighlight = false;
    
    for (let i = 0; i < chars.length; i++) {
      const charObj = chars[i];
      
      // Special handling for spaces
      if (charObj.char === ' ') {
        renderedChars.push(' ');
        continue;
      }
      
      // Special handling for the word "trygghet"
      const nextChars = text.substring(i, i + 8).toLowerCase();
      if (nextChars === 'trygghet' || insideHighlight) {
        if (!insideHighlight && nextChars === 'trygghet') {
          insideHighlight = true;
        }
        
        if (insideHighlight && charObj.char.toLowerCase() === 't' && text.substring(i-7, i).toLowerCase() === 'trygghe') {
          insideHighlight = false;
        }
      }
      
      // Calculate the brightness as CSS filter and opacity
      const filterValue = `brightness(${charObj.brightness * 1.5})`;
      const opacityValue = 0.6 + (charObj.brightness * 0.4);
      
      // Use the highlight color if inside the "trygghet" word
      const color = insideHighlight 
        ? highlightColor 
        : charObj.brightness > 0.7 ? 'white' : '#e0e0e0';
      
      renderedChars.push(
        <span 
          key={i}
          style={{ 
            filter: filterValue,
            opacity: opacityValue,
            color: color,
            transition: 'filter 0.1s ease-out, color 0.1s ease-out',
            display: 'inline-block',
            willChange: 'filter, color'
          }}
        >
          {charObj.char}
        </span>
      );
    }
    
    return (
      <div className={className}>
        {renderedChars}
      </div>
    );
  };
  
  // Provide fallback content in case of issues
  if (chars.length === 0) {
    return (
      <div className={className} ref={containerRef}>
        Vi kombinerar expertis, precision och kreativitet för att leverera bygglösningar som både inspirerar och skapar <span className="text-[#62c7fc]">trygghet</span> från första ritning till färdigt projekt.
      </div>
    );
  }
  
  return (
    <div ref={containerRef}>
      {renderBrightnessText()}
    </div>
  );
};

// FadeIn feature component
const FadeInFeature = ({ children, delay, className }: { children: React.ReactNode, delay: number, className?: string }) => {
  const featureRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (featureRef.current) {
      observer.observe(featureRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div 
      ref={featureRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
        transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`
      }}
    >
      {children}
    </div>
  );
};

export default HomePage;
