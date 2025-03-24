
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, FileText, Activity, Droplet, Zap, Award, SquareCheck, CheckCircle, Star } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import PriceCard from '@/components/PriceCard';
import ReviewCard from '@/components/ReviewCard';
import CallToAction from '@/components/CallToAction';
import StepProcess from '@/components/StepProcess';
import ParallaxHero from '@/components/ParallaxHero';
import AnimatedSection from '@/components/AnimatedSection';
import IntroLoader from '@/components/IntroLoader';

const HomePage = () => {
  const [introCompleted, setIntroCompleted] = useState(false);
  
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Intro Loader */}
      <IntroLoader onComplete={() => setIntroCompleted(true)} />
      
      {/* Hero Section */}
      <ParallaxHero />

      {/* Intro Section */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up" className="max-w-4xl mx-auto">
            <p className="text-xl text-center text-gray-700">
              Vi är det första svenska företaget som erbjuder dig allt från bygglovsritningar, konstruktionsritningar, kontrollansvarig till byggare, allt under ett och samma tak.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 relative z-10">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="heading-lg mb-4">Tjänster</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Oavsett ditt byggprojekt, har vi tjänsterna du behöver för en lyckad bygglovsprocess.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceItems.map((service, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                direction="up"
                once={false}
              >
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="heading-lg mb-4">Priser</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Transparenta och konkurrenskraftiga priser för alla våra tjänster.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {priceItems.map((price, index) => (
              <AnimatedSection 
                key={index}
                delay={index * 0.1}
                direction="up"
                once={false}
              >
                <PriceCard {...price} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50 relative z-10">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up" className="text-center mb-8">
            <h2 className="heading-lg mb-4">Vad våra kunder säger om oss</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
              Vi på Bygglovsexperten är stolta över att ha hjälpt hundratals kunder att förverkliga sina byggprojekt – och ännu stoltare över de fina omdömen vi fått.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1} className="flex items-center justify-center mb-12">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="ml-2 text-gray-700">
              <span className="font-semibold">UTMÄRKT</span> • Baserat på 191 recensioner
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <AnimatedSection 
                key={index}
                delay={index * 0.1}
                direction="up"
                once={false}
              >
                <ReviewCard {...review} />
              </AnimatedSection>
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
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="heading-lg mb-4">Om oss</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Lär känna oss och vår historia
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {companyInfo.map((info, index) => (
              <AnimatedSection 
                key={index}
                delay={index * 0.1}
                direction="up"
                once={false}
              >
                <div className="text-center p-6 hover-lift bg-white rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-4xl font-bold text-[#62c7fc] mb-2">{info.title}</h3>
                  <p className="text-lg font-semibold mb-2">{info.subtitle}</p>
                  <p className="text-gray-600">{info.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Promise */}
      <section className="py-24 bg-gray-50 relative z-10">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="heading-lg mb-4">Våra kundlöften</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Vi på Bygglovsexperten fokuserar 110% på service och det viktigaste för vårt team och
              arkitekter/konstruktörer är att överleverera och att du som kund ska känna en wooooow-känsla
              när vi är klara med ritningarna.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              "Vi hjälper dig som kund i hela Sverige och alla dess 290 kommuner.",
              "Garanterar dig beviljat bygglov!",
              "Vi jobbar enbart med fasta priser på alla ritningar och tjänster.",
              "Alla ritningar utförs av våra certifierade arkitekter & konstruktörer.",
              "Garanterar dig bäst pris i Sverige genom vår prisgaranti.",
              "Du kan känna dig trygg, vi har alla ansvarsförsäkringar som krävs."
            ].map((promise, index) => (
              <AnimatedSection 
                key={index}
                delay={index * 0.05}
                direction="up"
                once={false}
              >
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md border border-gray-100 hover-lift h-full">
                  <div className="bg-[#62c7fc] rounded-full p-1 flex-shrink-0 mt-1">
                    <CheckCircle size={18} className="text-white" />
                  </div>
                  <p className="text-gray-700">{promise}</p>
                </div>
              </AnimatedSection>
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
