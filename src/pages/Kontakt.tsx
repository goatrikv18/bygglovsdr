import { useEffect } from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock, Check } from 'lucide-react';

const KontaktPage = () => {
  useEffect(() => {
    // Reset scroll position when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Header Section */}
      <section className="bg-brand-50 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="slide-up">
            <h1 className="heading-xl text-center mb-6">Kontakta oss</h1>
            <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
              Har du frågor eller vill veta mer om hur vi kan hjälpa dig med ditt bygglov eller byggprojekt? Vi på Bygglovsexperten är stolta över våra många positiva recensioner – de speglar vår passion för att erbjuda skräddarsydda lösningar och personlig service.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Contact Information */}
            <AnimateOnScroll animation="slide-in-left">
              <div>
                <h2 className="heading-md mb-6">Vi ser fram emot att höra från dig</h2>
                <p className="text-gray-600 mb-8">
                  Oavsett om du funderar på att bygga nytt, renovera eller bara behöver rådgivning, finns vårt erfarna team redo att svara på dina frågor och hjälpa dig att göra dina byggdrömmar till verklighet.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#62c7fc]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Phone className="h-5 w-5 text-[#62c7fc]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Telefon</h3>
                      <a href="tel:0104051000" className="text-gray-600 hover:text-[#62c7fc] transition-colors">
                        010-405 1000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#62c7fc]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Mail className="h-5 w-5 text-[#62c7fc]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">E-post</h3>
                      <a href="mailto:info@bygglovsexperten.se" className="text-gray-600 hover:text-[#62c7fc] transition-colors">
                        info@bygglovsexperten.se
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#62c7fc]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="h-5 w-5 text-[#62c7fc]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Öppettider</h3>
                      <p className="text-gray-600">
                        Alla helgfria vardagar mellan kl. 08:00 och 17:00
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#62c7fc]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="h-5 w-5 text-[#62c7fc]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Täckning</h3>
                      <p className="text-gray-600">
                        Vi hjälper dig i hela Sverige, oavsett vilken kommun du tillhör.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold text-lg mb-4">Varför välja oss?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#62c7fc] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Kostnadsfri rådgivning innan projektet startar</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#62c7fc] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Fast pris utan överraskningar</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#62c7fc] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Erfarna arkitekter och konstruktörer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#62c7fc] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Snabba leveranser, oftast inom 1-2 veckor</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#62c7fc] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Vi hjälper dig med hela bygglovsprocessen</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Contact Form */}
            <AnimateOnScroll animation="slide-in-right">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <h2 className="heading-md mb-6">Skicka ett meddelande</h2>
                <ContactForm />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="slide-up">
            <h2 className="heading-lg text-center mb-12">Vanliga frågor</h2>
          </AnimateOnScroll>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                question: "Hur snabbt kan ni leverera ritningar?",
                answer: "Vi levererar vanligtvis ritningar inom 1-2 veckor, beroende på projektets omfattning och vår aktuella arbetsbelastning. Vid brådskande ärenden kan vi ofta hjälpa dig med snabbare leverans – kontakta oss för att diskutera dina specifika behov."
              },
              {
                question: "Vad kostar era tjänster?",
                answer: "Vi erbjuder transparenta priser baserade på projektets storlek. Se vår prissida för detaljerad information eller kontakta oss för en skräddarsydd offert för ditt specifika projekt."
              },
              {
                question: "Arbetar ni i hela Sverige?",
                answer: "Ja, vi hjälper kunder i hela Sverige och har erfarenhet av att arbeta med alla landets 290 kommuner och deras olika krav på bygglovshandlingar."
              },
              {
                question: "Får jag göra ändringar i ritningarna?",
                answer: "Absolut! Vi gör kostnadsfria revideringar tills du är helt nöjd med ritningarna. Din tillfredsställelse är vår högsta prioritet."
              },
              {
                question: "Hjälper ni till med bygglovsansökan?",
                answer: "Ja, som en extra service hjälper vi dig kostnadsfritt att skicka in dina ritningar och bygglovshandlingar till kommunen. Vi guidar dig genom hela processen för att göra den så smidig som möjligt."
              }
            ].map((faq, index) => (
              <AnimateOnScroll 
                key={index} 
                animation="slide-up" 
                delay={index * 100}
              >
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-display text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll animation="slide-up">
            <div className="max-w-2xl mx-auto">
              <h2 className="heading-lg mb-6">Föredrar du att ringa?</h2>
              <p className="text-xl text-gray-700 mb-8">
                Vi finns tillgängliga på telefon alla vardagar. Ring oss direkt!
              </p>
              <a 
                href="tel:0104051000" 
                className="button-primary inline-flex items-center justify-center gap-2 text-xl px-10 py-4"
              >
                <Phone size={24} />
                <span>010-405 1000</span>
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
};

export default KontaktPage;
