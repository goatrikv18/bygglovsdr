import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronRight, ChevronLeft } from 'lucide-react';
// Importera Swiper och dess moduler
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Importera Swiper-stilar
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const googleReviews = [
  {
    name: "Marina Michanova",
    date: "2025-02-05",
    content: "Att något så krångligt som bygglov och konstruktionsritningar kunde bli så enkelt och smidigt? Sylvester på Bygglovsexperten var så hjälpsam och tillmötesgående. Rekommenderar starkt!"
  },
  {
    name: "Anders Eloff",
    date: "2025-01-16",
    content: "Bygglovsexperten levererar snabbt med hög kvalitét. Vid ett plötsligt akut behov att snabbt uppdatera/verifiera den energiberäkning de levererat två år tidigare ställde de upp på ett mycket kort varsel och levererade på ett och ett halvt dygn. Helt otrolig service!"
  },
  {
    name: "Friida Lynard",
    date: "2025-01-10",
    content: "Proffsiga och snabba och hjälpte oss med enkelhet med allt vi behövde till vårt bygglov. Kan varmt rekommendera!"
  },
  {
    name: "Katarina Bondeson",
    date: "2024-12-27",
    content: "Otroligt snabb hjälp med att få både prisuppgift och bygglovsritning på bara någon dag. Sylvester och Jesper var otroligt tillmötesgående och hade ett trevligt och proffsigt bemötande. Kunde inte vara mer nöjd."
  },
  {
    name: "Karl Waltre",
    date: "2024-12-09",
    content: "Trevligt bemötande och professionellt jobb till ett bra pris!"
  },
  {
    name: "Coffe Svensson",
    date: "2024-12-03",
    content: "Snabbt och proffsigt! Kommer absolut använda mig av bygglovsexperten nästa gång jag ska bygga igen."
  },
  {
    name: "Tommy Northun",
    date: "2024-11-28",
    content: "Mycket bra och snabbt jobbat inför mitt garagebygge med ritningar. Kan bara rekomendera."
  },
  {
    name: "Staffan Bergquist",
    date: "2024-11-25",
    content: "Trevliga, kunniga och lojala!"
  },
  {
    name: "Thomas Bergman",
    date: "2024-11-21",
    content: "Snabbt, smidigt och professionellt."
  }
];

// Review card component
const ReviewCard: React.FC<{ review: typeof googleReviews[0] }> = ({ review }) => (
  <div className="h-full">
    <div className="bg-white rounded-lg shadow-sm hover:shadow overflow-hidden h-full transition-shadow duration-300 border border-gray-100">
      {/* Google logo at top */}
      <div className="p-2 border-b border-gray-100">
        <img 
          src="https://cdn.trustindex.io/assets/platform/Google/logo.svg" 
          alt="Google" 
          className="h-4"
        />
      </div>
      
      {/* Reviewer info with stars */}
      <div className="px-3 py-2">
        <div className="flex items-center mb-1">
          {/* Circle with first letter of name */}
          <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-2 flex-shrink-0">
            <span className="text-gray-700 font-medium text-xs">{review.name.charAt(0)}</span>
          </div>
          <div className="min-w-0">
            <h4 className="font-medium text-gray-800 text-sm truncate">{review.name}</h4>
            <div className="text-[10px] text-gray-500">{review.date}</div>
          </div>
        </div>
        
        {/* Star rating */}
        <div className="flex mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        
        {/* Review content */}
        <p className="text-gray-700 text-xs leading-relaxed line-clamp-3">{review.content}</p>
        {review.content.length > 70 && (
          <div className="mt-1">
            <Link className="text-[#4285F4] text-[10px] hover:underline" to="#">Läs mer</Link>
          </div>
        )}
      </div>
    </div>
  </div>
);

const GoogleReviews: React.FC = () => {
  // Anpassade navigationsknappar för Swiper
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  
  return (
    <section className="py-12 bg-white relative z-10 overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/lined-paper.png')]"></div>
      <div className="w-full max-w-[1800px] mx-auto relative z-10 px-4">
        <div className="mb-12 text-center">
          <h2 className="text-[#62c7fc] text-sm font-medium uppercase tracking-wider mb-2">RECENSIONER</h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Vad våra kunder säger om oss</h3>
          
          {/* Google Rating Header */}
          <div className="bg-white rounded-xl shadow-md max-w-sm mx-auto p-6 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex flex-col items-center justify-center">
              {/* Google Logo at top */}
              <div className="mb-5">
                <img 
                  src="https://cdn.trustindex.io/assets/platform/Google/logo.svg" 
                  alt="Google" 
                  className="h-10" 
                />
              </div>
              
              {/* Divider */}
              <div className="w-16 h-[2px] bg-gray-200 mb-5"></div>
              
              {/* Rating */}
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex items-center justify-center h-6 w-6 mx-0.5">
                      <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                    </div>
                  ))}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">UTMÄRKT</div>
                <div className="text-sm text-gray-600">Baserat på 191 recensioner</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Swiper Carousel för recensioner */}
        <div className="relative mx-auto max-w-7xl mb-6">
          {/* Navigation knappar */}
          <button 
            ref={navigationPrevRef}
            className="absolute left-[-10px] md:left-[-20px] top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-gray-700 hover:text-[#62c7fc] hover:shadow transition-all duration-300 focus:outline-none"
            aria-label="Föregående recensioner"
          >
            <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
          </button>
          
          <button 
            ref={navigationNextRef}
            className="absolute right-[-10px] md:right-[-20px] top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-gray-700 hover:text-[#62c7fc] hover:shadow transition-all duration-300 focus:outline-none"
            aria-label="Nästa recensioner"
          >
            <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
          </button>
          
          <div className="px-4 py-1">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              pagination={{ 
                clickable: true,
                el: '.swiper-pagination' 
              }}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 16,
                },
              }}
              onInit={(swiper) => {
                // @ts-expect-error Navigation is not properly typed in Swiper
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                // @ts-expect-error Navigation is not properly typed in Swiper
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              className="pb-10"
            >
              {googleReviews.map((review, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <div className="h-full px-1">
                    <ReviewCard review={review} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Anpassade paginationspunkter */}
            <div className="swiper-pagination flex justify-center mt-4"></div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="flex justify-center">
          <Link 
            to="/recensioner" 
            className="inline-flex items-center justify-center py-2 px-4 bg-[#FF6B35] hover:bg-[#e55b2a] text-white rounded-lg text-sm font-medium transition-all duration-300 shadow-sm"
          >
            <span>Se alla recensioner</span>
            <ChevronRight size={14} className="ml-1" />
          </Link>
        </div>
      </div>
      
      {/* CSS för att anpassa Swiper paginering */}
      <style>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #ccc;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #62c7fc;
        }
      `}</style>
    </section>
  );
};

export default GoogleReviews; 