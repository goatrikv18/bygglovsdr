
import { Phone } from 'lucide-react';

interface CallToActionProps {
  title?: string;
  description?: string;
}

const CallToAction = ({ 
  title = "Redo att förverkliga dina drömmar?", 
  description = "Ring oss idag så berättar vi mer om hur vi kan hjälpa dig!" 
}: CallToActionProps) => {
  return (
    <section className="bg-brand-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="heading-lg mb-4 max-w-2xl mx-auto">{title}</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">{description}</p>
        <a 
          href="tel:0104051000" 
          className="button-primary inline-flex items-center gap-2 text-lg px-8 py-4"
        >
          <Phone size={20} />
          <span>Ring oss: 010-405 1000</span>
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
