
import { useState } from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import ReviewCard from '@/components/ReviewCard';
import CallToAction from '@/components/CallToAction';
import { Star } from 'lucide-react';

const KunderPage = () => {
  const [activeTab, setActiveTab] = useState<'reviews' | 'projects'>('reviews');

  const clientLogos = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/800px-Microsoft_logo.svg.png" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png" },
    { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/800px-Facebook_f_logo_%282019%29.svg.png" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/800px-Netflix_2015_logo.svg.png" },
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
    },
    {
      name: 'Katarina Bondeson',
      date: '2024-12-27',
      rating: 5,
      content: 'Otroligt snabb hjälp med att få både prisuppgift och bygglovsritning på bara någon dag. Sylvester och Jesper var otroligt tillmötesgående och hade ett trevligt och proffsigt bemötande. Kunde inte vara mer nöjd.'
    },
    {
      name: 'Karl Waltre',
      date: '2024-12-09',
      rating: 5,
      content: 'Trevligt bemötande och professionellt jobb till ett bra pris!'
    },
    {
      name: 'Coffe Svensson',
      date: '2024-12-03',
      rating: 5,
      content: 'Snabbt och proffsigt! Kommer absolut använda mig av bygglovsexperten nästa gång jag ska bygga igen.'
    },
    {
      name: 'Tommy Northun',
      date: '2024-11-28',
      rating: 5,
      content: 'Mycket bra och snabbt jobbat inför mitt garagebygge med ritningar. Kan bara rekomendera.'
    },
    {
      name: 'Staffan Bergquist',
      date: '2024-11-25',
      rating: 5,
      content: 'Trevliga, kunniga och lojala!'
    },
    {
      name: 'Thomas Bergman',
      date: '2024-11-21',
      rating: 5,
      content: 'Snabbt, smidigt och professionellt.'
    },
  ];

  const projectGallery = [
    { id: 1, title: 'Villa Sjöblick', image: 'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80', description: 'Bygglovsritningar för nybyggnation av villa' },
    { id: 2, title: 'Attefallshus Skogsdunge', image: 'https://images.unsplash.com/photo-1534237710287-1196d6fc1971?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80', description: 'Komplett bygglovspaket för attefallshus' },
    { id: 3, title: 'Lägenhet Södermalm', image: 'https://images.unsplash.com/photo-1594708053861-53215dc0da14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80', description: 'Planlösningsändring och badrumsrenovering' },
    { id: 4, title: 'Kontorslokaler Kista', image: 'https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80', description: 'Ombyggnation av kontorsytor' },
    { id: 5, title: 'Tillbyggnad Villastaden', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80', description: 'Tillbyggnad av existerande villa' },
    { id: 6, title: 'Fritidshus Skärgården', image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80', description: 'Nybyggnation av fritidshus' },
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="bg-brand-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="slide-up">
            <h1 className="heading-xl text-center mb-6">Våra Kunder</h1>
            <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
              Vi har hjälpt hundratals nöjda kunder att förverkliga sina byggprojekt. Här kan du ta del av deras berättelser och se exempel på projekt vi har genomfört.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg bg-gray-100 p-1">
              <button
                className={`px-6 py-3 rounded-lg text-sm md:text-base font-medium transition-all ${
                  activeTab === 'reviews'
                    ? 'bg-white shadow-sm text-brand-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab('reviews')}
              >
                Omdömen
              </button>
              <button
                className={`px-6 py-3 rounded-lg text-sm md:text-base font-medium transition-all ${
                  activeTab === 'projects'
                    ? 'bg-white shadow-sm text-brand-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab('projects')}
              >
                Referensprojekt
              </button>
            </div>
          </div>

          {/* Reviews Tab */}
          <div className={`${activeTab === 'reviews' ? 'block' : 'hidden'}`}>
            {/* Rating Summary */}
            <div className="flex items-center justify-center mb-12">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-xl font-semibold">
                  UTMÄRKT • Baserat på 191 recensioner
                </p>
              </div>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

          {/* Projects Tab */}
          <div className={`${activeTab === 'projects' ? 'block' : 'hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectGallery.map((project, index) => (
                <AnimateOnScroll 
                  key={project.id} 
                  animation="slide-up" 
                  delay={index * 100}
                >
                  <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg group">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="slide-up">
            <h2 className="heading-lg text-center mb-12">Här hittar du företag vi gjort handlingar åt tidigare</h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <AnimateOnScroll 
                key={index} 
                animation="fade-in" 
                delay={index * 100}
                className="flex justify-center"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-12 md:h-16 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Assurance Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="slide-up">
            <h2 className="heading-lg text-center mb-12">Du är i trygga händer</h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Bistår med ritningar",
                description: "Vi bistår med ritningar till ombyggnad av deras fastigheter."
              },
              {
                title: "Kundomhändertagande",
                description: "Vi tar personligen hand om alla deras kunder och hjälper dem igenom bygglovsprocessen, det gäller alla handlingar kommunen kräver."
              },
              {
                title: "Konstruktionshandlingar",
                description: "Hjälper dem med alla bygghandlingar och produktionsritningar till deras flerbostadshus."
              },
              {
                title: "Tekniska handlingar",
                description: "Vi gör deras bygglovsritningar och konstruktionshandlingar."
              },
              {
                title: "CAD-modeller",
                description: "Vi hjälper dem att ta fram CAD modeller för deras komponenter."
              },
              {
                title: "Flerbostadshus",
                description: "Vi gör deras bygglovshandlingar och tekniska handlingar vid byggnation av bostäder till flera av Sveriges största industri projekt."
              },
            ].map((item, index) => (
              <AnimateOnScroll 
                key={index} 
                animation="slide-up" 
                delay={index * 100}
              >
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-full">
                  <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="text-center mt-12">
            <AnimateOnScroll animation="slide-up">
              <h3 className="text-2xl font-semibold mb-4">Är ert företag näst på listan?</h3>
              <p className="text-gray-700 mb-6">Kontakta oss idag så berättar vi mer!</p>
              <a 
                href="tel:0104051000" 
                className="button-primary inline-flex items-center gap-2"
              >
                Ring oss!
              </a>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction 
        title="Vill du bli en av våra nöjda kunder?" 
        description="Kontakta oss idag för att diskutera ditt projekt."
      />
    </div>
  );
};

export default KunderPage;
