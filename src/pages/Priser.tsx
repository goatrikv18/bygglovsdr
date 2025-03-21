
import AnimateOnScroll from '@/components/AnimateOnScroll';
import PriceCard from '@/components/PriceCard';
import CallToAction from '@/components/CallToAction';
import { Check } from 'lucide-react';

const PriserPage = () => {
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

  const benefits = [
    'Fasta priser utan överraskningar',
    'Prisgaranti - vi matchar alla seriösa konkurrenter',
    'Inkluderar alla revideringar tills du är nöjd',
    'Fri rådgivning under hela projektet',
    'Vi skickar in ansökan till kommunen åt dig',
    'Betalning först när du är nöjd med ritningarna'
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="bg-brand-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="slide-up">
            <h1 className="heading-xl text-center mb-6">Våra Priser</h1>
            <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
              Transparenta priser utan överraskningar. Vi erbjuder fast pris på alla våra tjänster.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Price Cards Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="slide-up" className="mb-16">
            <h2 className="heading-lg text-center mb-6">Bygglovsritningar för alla behov</h2>
            <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
              Oavsett storlek på ditt projekt har vi konkurrenskraftiga priser. Välj det paket som passar ditt projekt bäst.
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

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="slide-in-left">
              <div>
                <h2 className="heading-lg mb-6">Fördelar med våra priser</h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-brand-500 rounded-full p-1 flex-shrink-0 mt-1">
                        <Check size={16} className="text-white" />
                      </div>
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="slide-in-right">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="font-display text-2xl font-semibold mb-4">Prisgaranti</h3>
                <p className="text-gray-700 mb-6">
                  Vi garanterar dig bäst pris i Sverige. Om du hittar en likvärdig tjänst till ett lägre pris hos en konkurrent, matchar vi priset och ger dig ytterligare 5% rabatt.
                </p>
                <div className="bg-brand-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Vad ingår i priset?</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-brand-500 mt-1 flex-shrink-0" />
                      <span>Alla ritningar kommunen kräver</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-brand-500 mt-1 flex-shrink-0" />
                      <span>Obegränsade revideringar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-brand-500 mt-1 flex-shrink-0" />
                      <span>Personlig projektledare</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-brand-500 mt-1 flex-shrink-0" />
                      <span>Hjälp med bygglovsansökan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-brand-500 mt-1 flex-shrink-0" />
                      <span>Fri rådgivning under hela processen</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="slide-up">
            <h2 className="heading-lg text-center mb-6">Vanliga frågor om våra priser</h2>
            <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Här har vi samlat svar på de vanligaste frågorna om våra priser och vad som ingår.
            </p>
          </AnimateOnScroll>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                question: "Varför är priset baserat på kvadratmeter?",
                answer: "Storleken på ett projekt påverkar komplexiteten och tiden det tar att skapa detaljerade ritningar. Genom att basera priset på kvadratmeter kan vi erbjuda rättvisa och transparenta priser som motsvarar arbetsinsatsen för varje specifikt projekt."
              },
              {
                question: "Vad händer om mina ritningar behöver ändras?",
                answer: "Alla revideringar av ritningarna ingår i priset tills du är helt nöjd. Vi fortsätter arbeta med dina ritningar tills de är precis som du vill ha dem och uppfyller alla kommunens krav."
              },
              {
                question: "Finns det några dolda kostnader?",
                answer: "Nej, vi tror på full transparens. Priset du ser är det pris du betalar. Inga överraskningar eller tilläggsavgifter. Vi ger dig ett fast pris som inkluderar allt som behövs för ditt projekt."
              },
              {
                question: "Vad händer om kommunen kräver kompletteringar?",
                answer: "Om kommunen kräver kompletteringar eller ändringar av dina ritningar efter inlämning, så gör vi dessa utan extra kostnad. Vi står vid din sida genom hela bygglovsprocessen."
              }
            ].map((item, index) => (
              <AnimateOnScroll 
                key={index} 
                animation="slide-up" 
                delay={index * 100}
              >
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-display text-xl font-semibold mb-2">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction 
        title="Redo att komma igång?" 
        description="Kontakta oss idag för en kostnadsfri konsultation och prisoffert."
      />
    </div>
  );
};

export default PriserPage;
