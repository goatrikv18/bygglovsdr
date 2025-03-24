
import { Phone } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface CallToActionProps {
  title?: string;
  description?: string;
}

const CallToAction = ({ 
  title = "Redo att förverkliga dina drömmar?", 
  description = "Ring oss idag så berättar vi mer om hur vi kan hjälpa dig!" 
}: CallToActionProps) => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#62c7fc]/20 to-[#4ba5dc]/20 z-0"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatedSection>
          <h2 className="heading-lg mb-4 max-w-2xl mx-auto">{title}</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={0.1}>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">{description}</p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <a 
            href="tel:0104051000" 
            className="button-cta bg-[#62c7fc] hover:bg-[#4ba5dc] text-white inline-flex mx-auto"
          >
            <Phone size={20} />
            <span>Ring oss: 010-405 1000</span>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CallToAction;
