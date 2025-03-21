
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PriceCardProps {
  title: string;
  priceItems: {
    size: string;
    price: string;
  }[];
  description?: string;
}

const PriceCard = ({ title, priceItems, description }: PriceCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-6 border-b border-gray-100">
        <h3 className="font-display text-xl font-semibold text-center mb-4">{title}</h3>
        {description && <p className="text-gray-600 text-center text-sm">{description}</p>}
      </div>
      
      <div className="p-6">
        <ul className="space-y-3">
          {priceItems.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check size={18} className="text-brand-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{item.size}: <strong>{item.price}</strong></span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-6 bg-gray-50">
        <Link to="/kontakt" className="button-primary w-full flex justify-center">
          Läs mer
        </Link>
      </div>
    </div>
  );
};

export default PriceCard;
