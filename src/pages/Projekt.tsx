import { useState, useEffect } from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CallToAction from '@/components/CallToAction';
import { Search, Filter, ArrowRight } from 'lucide-react';

const ProjektPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    // Reset scroll position when the page loads
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    'Alla',
    'Villor',
    'Attefallshus',
    'Tillbyggnader',
    'Industri',
    'Kommersiellt',
    'Flerbostadshus'
  ];

  const projects = [
    {
      id: 1,
      title: 'Villa Sjöblick',
      category: 'Villor',
      description: 'Nybyggnation av modern villa med sjöutsikt.',
      services: ['Bygglovsritningar', 'Konstruktionsritningar', 'Kontrollansvarig'],
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    },
    {
      id: 2,
      title: 'Attefallshus Skogsdunge',
      category: 'Attefallshus',
      description: 'Kompakt och funktionellt attefallshus i naturnära miljö.',
      services: ['Bygglovsritningar', 'VVS-ritningar'],
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    },
    {
      id: 3,
      title: 'Kontorslokaler Kista',
      category: 'Kommersiellt',
      description: 'Ombyggnation av kontorsytor för techjätte.',
      services: ['Bygglovsritningar', 'Konstruktionsritningar', 'Elritningar'],
      image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    },
    {
      id: 4,
      title: 'Tillbyggnad Villastaden',
      category: 'Tillbyggnader',
      description: 'Stilren tillbyggnad av sekelskiftesvilla.',
      services: ['Bygglovsritningar', 'Konstruktionsritningar'],
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    },
    {
      id: 5,
      title: 'Industrihall Hallsberg',
      category: 'Industri',
      description: 'Nybyggnation av industrilokal för tillverkningsindustri.',
      services: ['Bygglovsritningar', 'Konstruktionsritningar', 'VVS-ritningar', 'Elritningar'],
      image: 'https://images.unsplash.com/photo-1574883052806-413e0927a4d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    },
    {
      id: 6,
      title: 'Radhus Bromma',
      category: 'Flerbostadshus',
      description: 'Nybyggnation av 6 moderna radhus.',
      services: ['Bygglovsritningar', 'Konstruktionsritningar', 'VVS-ritningar', 'Kontrollansvarig'],
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    },
    {
      id: 7,
      title: 'Fritidshus Gotland',
      category: 'Villor',
      description: 'Modernt fritidshus med traditionella influenser.',
      services: ['Bygglovsritningar', 'Konstruktionsritningar'],
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    },
    {
      id: 8,
      title: 'Lager Arlanda',
      category: 'Industri',
      description: 'Lagerbyggnad med kontor för logistikföretag.',
      services: ['Bygglovsritningar', 'Konstruktionsritningar', 'Elritningar'],
      image: 'https://images.unsplash.com/photo-1586528116019-aef634c8e8f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    },
    {
      id: 9,
      title: 'Lägenhetskomplex Solna',
      category: 'Flerbostadshus',
      description: 'Exklusivt lägenhetskomplex med 32 bostäder.',
      services: ['Bygglovsritningar', 'Konstruktionsritningar', 'VVS-ritningar', 'Elritningar', 'Kontrollansvarig'],
      image: 'https://images.unsplash.com/photo-1545324418-de4f698c3c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === null || activeCategory === 'Alla' || project.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Header Section */}
      <section className="bg-brand-50 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="slide-up">
            <h1 className="heading-xl text-center mb-6">Våra Projekt</h1>
            <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
              En samling av våra senaste projekt som visar bredden av vårt kunnande.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              <Filter size={16} className="text-gray-500 flex-shrink-0" />
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-1 rounded-full text-sm whitespace-nowrap transition-all ${
                    activeCategory === category || (category === 'Alla' && activeCategory === null)
                      ? 'bg-[#62c7fc] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category === 'Alla' ? null : category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Sök projekt..."
                className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62c7fc] focus:border-[#62c7fc]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <AnimateOnScroll 
                  key={project.id} 
                  animation="slide-up" 
                  delay={index * 100}
                >
                  <div className="card group h-full flex flex-col">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded mb-2">
                        {project.category}
                      </span>
                      <h3 className="font-display text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      
                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.services.map((service, i) => (
                            <span key={i} className="inline-block bg-[#62c7fc]/10 text-[#62c7fc] text-xs font-medium px-2 py-1 rounded">
                              {service}
                            </span>
                          ))}
                        </div>
                        
                        <button className="inline-flex items-center text-[#62c7fc] font-medium hover:text-[#4ba5dc] group">
                          <span>Se detaljer</span>
                          <ArrowRight 
                            size={16} 
                            className="ml-1 transform group-hover:translate-x-1 transition-transform" 
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">Inga projekt hittades</h3>
              <p className="text-gray-600">Försök med andra sökord eller filtreringar.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <AnimateOnScroll animation="slide-up">
              <div>
                <h3 className="text-4xl font-bold mb-2">2023</h3>
                <p className="text-gray-400">Året vi grundades</p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="slide-up" delay={100}>
              <div>
                <h3 className="text-4xl font-bold mb-2">700+</h3>
                <p className="text-gray-400">Genomförda projekt</p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="slide-up" delay={200}>
              <div>
                <h3 className="text-4xl font-bold mb-2">8.8/10</h3>
                <p className="text-gray-400">Kundnöjdhet</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Project Types Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="slide-up">
            <h2 className="heading-lg text-center mb-12">Ett urval av våra tidigare projekt</h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "3D-modellering",
                description: "Detaljerade 3D-modeller som hjälper dig visualisera ditt projekt innan det byggs.",
                image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              },
              {
                title: "Bygglovshandlingar",
                description: "Kompletta bygglovshandlingar som uppfyller kommunens krav.",
                image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              },
              {
                title: "K-ritningar",
                description: "Detaljerade konstruktionsritningar för säkra och hållbara byggnader.",
                image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              },
              {
                title: "VVS-planering",
                description: "Komplett planering av vatten, värme och sanitet för moderna och effektiva system.",
                image: "https://images.unsplash.com/photo-1631443298907-dc4a3774839e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              },
              {
                title: "Elplanering",
                description: "Smartare elektriska lösningar för moderna boenden och verksamheter.",
                image: "https://images.unsplash.com/photo-1558389186-438424b00de9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              },
              {
                title: "Prefab-komponenter",
                description: "Specialdesignade prefabkomponenter för effektivt byggande.",
                image: "https://images.unsplash.com/photo-1553867669-05e92dcb0c6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              },
            ].map((item, index) => (
              <AnimateOnScroll 
                key={index} 
                animation="slide-up" 
                delay={index * 100}
              >
                <div className="card overflow-hidden group h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction 
        title="Har du ett nytt projekt på gång?" 
        description="Vi hjälper dig från idé till verklighet. Kontakta oss idag för en kostnadsfri konsultation."
      />
    </div>
  );
};

export default ProjektPage;
