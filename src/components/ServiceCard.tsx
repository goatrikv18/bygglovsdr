
import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <div className="service-card bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col h-full">
      <div className="rounded-full bg-brand-50 w-14 h-14 flex items-center justify-center mb-4 text-brand-500">
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-brand-500 font-medium hover:text-brand-600 group mt-auto"
      >
        <span>Läs mer</span>
        <ArrowRight 
          size={16} 
          className="ml-1 transform group-hover:translate-x-1 transition-transform" 
        />
      </Link>
    </div>
  );
};

export default ServiceCard;
