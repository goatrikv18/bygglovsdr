
import { Link } from 'react-router-dom';
import { Phone, FileText, Activity, Droplet, Zap, Award, SquareCheck, CheckCircle } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import ServiceCard from '@/components/ServiceCard';
import PriceCard from '@/components/PriceCard';
import ReviewCard from '@/components/ReviewCard';
import CallToAction from '@/components/CallToAction';
import StepProcess from '@/components/StepProcess';
import { cn } from '@/lib/utils';

const HomePage = () => {
  const serviceItems = [
    {
      title: 'Bygglovsritningar',
      description: 'Vi hjälper dig förverkliga din idé till verklighet, genom våra arkitektritningar/bygglovsritningar.',
      icon: <FileText size={24} />,
      link: '/tjanster/bygglovsritningar'
    },
    {
      title: 'VVS-ritningar',
      description: 'Vi erbjuder bygglovsvänliga VVS-ritningar som uppfyller alla krav för ett smidigt bygglovsprocessen.',
      icon: <Droplet size={24} />,
      link: '/tjanster/vvs-ritningar'
    },
    {
      title: 'Konstruktionsritningar',
      description: 'Vi hjälper dig med alla konstruktionsritningar och beräkningar som din kommun och byggare behöver.',
      icon: <Activity size={24} />,
      link: '/tjanster/konstruktionsritningar'
    },
    {
      title: 'Elritningar',
      description: 'En elritning visar befintliga och/eller planerade elinstallationer i en bostad, inklusive uttag och ledningar.',
      icon: <Zap size={24} />,
      link: '/tjanster/elritningar'
    },
    {
      title: 'Kontrollansvarig',
      description: 'Våra kontrollansvariga som finns utspridda över hela landet kommer hjälpa dig i just din stad.',
      icon: <Award size={24} />,
      link: '/tjanster/kontrollansvarig'
    },
    {
      title: 'Extra tjänster',
      description: 'Vi erbjuder även konstruktionsdokumentation, dimensioneringskontroll, energiberäkning och mer.',
      icon: <SquareCheck size={24} />,
      link: '/tjanster/extra-tjanster'
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10 mt-[-100px]">
          <div className="max-w-2xl mx-auto text-center text-white">
            <AnimateOnScroll animation="fade-in">
              <span className="inline-block bg-brand-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                Söker du bygglov?
              </span>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="slide-up" delay={200}>
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
                Din dröm. Våra ritningar.
              </h1>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="slide-up" delay={400}>
              <p className="text-xl md:text-2xl mb-8">
                Tillsammans skapar vi ditt hem.
              </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="slide-up" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:0104051000" 
                  className="button-primary text-lg py-4 px-8"
                >
                  Ring oss
                </a>
                <Link 
                  to="/tjanster" 
                  className="button-secondary text-lg py-4 px-8 border-white border text-white bg-transparent hover:bg-white/20"
                >
                  Våra tjänster
                </Link>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fade-in" delay={800}>
              <div className="mt-12">
                <div className="flex flex-col items-center">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm mt-1">
                    UTMÄRKT • Baserat på 191 recensioner
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="slide-up">
            <p className="text-xl text-center text-gray-700 max-w-4xl mx-auto">
              Vi är det första svenska företaget som erbjuder dig allt från bygglovsritningar, konstruktionsritningar, kontrollansvarig till byggare, allt under ett och samma tak.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="slide-up">
            <h2 className="heading-lg text-center mb-4">Tjänster</h2>
            <p className="text-xl text-center text-gray-700 max-w-4xl mx-auto mb-12">
              Oavsett ditt byggprojekt, har vi tjänsterna du behöver för en lyckad bygglovsprocess.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceItems.map((service, index) => (
              <AnimateOnScroll 
                key={index} 
                animation="slide-up" 
                delay={index * 100}
              >
                <ServiceCard {...service} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="slide-up">
            <h2 className="heading-lg text-center mb-4">Priser</h2>
            <p className="text-xl text-center text-gray-700 max-w-4xl mx-auto mb-12">
              Transparenta och konkurrenskraftiga priser för alla våra tjänster.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {priceItems.map((price, index) => (
              <AnimateOnScroll 
                key={index} 
                animation="slide-up" 
                delay={index * 100}
              >
                <PriceCard {...price} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="slide-up">
            <h2 className="heading-lg text-center mb-4">Vad våra kunder säger om oss</h2>
            <p className="text-xl text-center text-gray-700 max-w-4xl mx-auto mb-12">
              Vi på Bygglovsexperten är stolta över att ha hjälpt hundratals kunder att förverkliga sina byggprojekt – och ännu stoltare över de fina omdömen vi fått.
            </p>
          </AnimateOnScroll>

          <div className="flex items-center justify-center mb-8">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
              ))}
            </div>
            <p className="ml-2 text-gray-700">
              <span className="font-semibold">UTMÄRKT</span> • Baserat på 191 recensioner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <AnimateOnScroll 
                key={index} 
                animation="slide-up" 
                delay={index * 100}
              >
                <ReviewCard {...review} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <StepProcess 
        title="Hur går det till?" 
        steps={processSteps}
      />

      {/* Company Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="slide-up">
            <h2 className="heading-lg text-center mb-4">Om oss</h2>
            <p className="text-xl text-center text-gray-700 max-w-4xl mx-auto mb-12">
              Lär känna oss och vår historia
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {companyInfo.map((info, index) => (
              <AnimateOnScroll 
                key={index} 
                animation="slide-up" 
                delay={index * 100}
              >
                <div className="text-center p-6">
                  <h3 className="text-4xl font-bold text-brand-500 mb-2">{info.title}</h3>
                  <p className="text-lg font-semibold mb-2">{info.subtitle}</p>
                  <p className="text-gray-600">{info.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Promise */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="slide-up">
            <h2 className="heading-lg text-center mb-4">Våra kundlöften</h2>
            <p className="text-xl text-center text-gray-700 max-w-4xl mx-auto mb-12">
              Vi på Bygglovsexperten fokuserar 110% på service och det viktigaste för vårt team och
              arkitekter/konstruktörer är att överleverera och att du som kund ska känna en wooooow-känsla
              när vi är klara med ritningarna.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              "Vi hjälper dig som kund i hela Sverige och alla dess 290 kommuner.",
              "Garanterar dig beviljat bygglov!",
              "Vi jobbar enbart med fasta priser på alla ritningar och tjänster.",
              "Alla ritningar utförs av våra certifierade arkitekter & konstruktörer.",
              "Garanterar dig bäst pris i Sverige genom vår prisgaranti.",
              "Du kan känna dig trygg, vi har alla ansvarsförsäkringar som krävs."
            ].map((promise, index) => (
              <AnimateOnScroll 
                key={index} 
                animation="slide-up" 
                delay={index * 100}
              >
                <div className="flex items-start gap-4 p-4">
                  <div className="bg-brand-500 rounded-full p-1 flex-shrink-0 mt-1">
                    <CheckCircle size={18} className="text-white" />
                  </div>
                  <p className="text-gray-700">{promise}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction />
    </div>
  );
};

export default HomePage;
