import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Activity, Droplet, Zap, Award, SquareCheck } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import ServiceCard from '@/components/ServiceCard';
import CallToAction from '@/components/CallToAction';

const TjansterPage = () => {
  useEffect(() => {
    // Reset scroll position when the page loads
    window.scrollTo(0, 0);
  }, []);
  
  const serviceItems = [
    {
      title: 'Bygglovsritningar',
      description: 'Vi hjälper dig förverkliga din idé till verklighet, genom våra arkitektritningar/bygglovsritningar. Ingår allt du behöver, såsom situationsplan, fasadritning, planritning och sektionsritning. Som tack för ditt förtroende i oss, skickar vi in allt underlag till din kommun åt dig, så att du kan göra annat kul.',
      icon: <FileText size={24} />,
      link: '/tjanster/bygglovsritningar'
    },
    {
      title: 'VVS-ritningar',
      description: 'På Bygglovsexperten.se erbjuder vi bygglovsvänliga VVS-ritningar som uppfyller alla krav för att säkerställa ett smidigt och effektivt bygglovsprocess. Våra ritningar är noggrant utformade för att möta både tekniska och regelmässiga standarder, vilket gör att du kan känna dig trygg i att ditt projekt går igenom utan onödiga förseningar.',
      icon: <Droplet size={24} />,
      link: '/tjanster/vvs-ritningar'
    },
    {
      title: 'Konstruktionsritningar',
      description: 'Vi hjälper dig med alla dina konstruktionsritningar och beräkningar som din kommun och byggare behöver. Detaljritningar (till väggar, tak & grund), konstruktionsberäkningar, dimensionering, konstruktionsdokumentation och övriga konstruktionshandlingar.',
      icon: <Activity size={24} />,
      link: '/tjanster/konstruktionsritningar'
    },
    {
      title: 'Elritningar',
      description: 'En elritning är en ritning som visar befintliga och/eller planerade elinstallationer i en bostad. Den visar antalet lampor, uttag och ledningar i hemmet. Den visar även bredbandsuttag och teleledningar samt elledningar till och från huset.',
      icon: <Zap size={24} />,
      link: '/tjanster/elritningar'
    },
    {
      title: 'Kontrollansvarig',
      description: 'Våra kontrollansvariga som finns utspridda över hela landet kommer hjälpa dig i just din stad. Allt du behöver gällande ditt bygglov finns under ett och samma tak med oss på Bygglovsexperten.',
      icon: <Award size={24} />,
      link: '/tjanster/kontrollansvarig'
    },
    {
      title: 'Extra tjänster',
      description: 'Vi är Sveriges enda företag som erbjuder allt under ett och samma tak. Förutom ovan handlingar, så erbjuder vi även: Konstruktionsdokumentation, Dimensioneringskontroll, Energiberäkning, Brandskyddsbeskrivning, Fuktskyddsbeskrivning.',
      icon: <SquareCheck size={24} />,
      link: '/tjanster/extra-tjanster'
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-brand-50 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="slide-up">
            <h1 className="heading-xl text-center mb-6">Våra Tjänster</h1>
            <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
              Vi erbjuder kompletta lösningar för din bygglovsprocess - från idé till färdiga ritningar som godkänns av kommunen.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {serviceItems.map((service, index) => (
              <AnimateOnScroll 
                key={index} 
                animation="slide-up" 
                delay={index * 100}
                className="h-full"
              >
                <ServiceCard {...service} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Building Permit Info */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="slide-in-left">
              <div>
                <h2 className="heading-lg mb-6">Bygglovsritningar för alla behov</h2>
                <div className="space-y-4">
                  <p className="paragraph">
                    Dags att bygga nytt, bygga om eller renovera? Då behöver du bygglovsritningar till din bygglovsansökan. Bygglovsritningar är ett samlingsbegrepp för flera olika typer av ritningar. Ett krav som ställs vid bygglovsansökan är att bygglovsritningar ska vara fackmannamässigt utförda.
                  </p>
                  <p className="paragraph">
                    När du vänder dig till oss kan du lita på att våra bygglovsritningar håller de högt ställda krav din kommun har. Vi erbjuder kompletta tjänster när det kommer till bygglov och har målsättningen att erbjuda den bästa service i Sverige.
                  </p>
                  <p className="paragraph">
                    Vi ser till att inga detaljer missas och att du får en smidig bygglovsansökan. Det gäller oavsett om det är en altan som ska byggas eller en helt ny bostad. Vi har lösningar och tjänster som passar alla privatpersoner som vill förverkliga ett drömprojekt.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="slide-in-right">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80" 
                  alt="Ritningar och planer"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                  style={{ maxHeight: '500px' }}
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Expert Advice */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="slide-in-left" className="order-2 md:order-1">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1626271763156-78f688fd86a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80" 
                  alt="Expertis inom bygglov"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                  style={{ maxHeight: '500px' }}
                />
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="slide-in-right" className="order-1 md:order-2">
              <div>
                <h2 className="heading-lg mb-6">Expertis för ett godkänt bygglov</h2>
                <div className="space-y-4">
                  <p className="paragraph">
                    Bygglovsritningarna ska ge detaljerad information vilka ändringar som ska göras på en befintlig byggnad eller hur ett byggprojekt kommer se ut när det är klart. Många gånger krävs det mycket detaljerad information och många olika ritningar som ska ingå i bygglovshandlingarna.
                  </p>
                  <p className="paragraph">
                    Att ansöka om bygglov kan kännas komplicerat och invecklat men när du anlitar oss går processen smidigt. Bygglovsritningar ska finnas med i samband med att du skickar in din bygglovsansökan till kommun. Vi kan alla typer av bygglovsritningar och du får hjälp med bygglovsansökan oavsett vilken kommun du ska ansöka hos.
                  </p>
                  <p className="paragraph">
                    Ritningar kan även behövas även vid bygglovsanmälan. För att göra det lätt för dig tar vi hand om hela processen och ser till att precis rätt dokument är på rätt plats. Det gör att processen går smidigt och utan bekymmer. Vi ser till att dina bygglovsritningar leder till en godkänd bygglovsansökan.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction 
        title="Redo att starta ditt byggprojekt?" 
        description="Kontakta oss idag så hjälper vi dig med alla ritningar du behöver för ditt bygglov."
      />
    </div>
  );
};

export default TjansterPage;
