
import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 h-full flex flex-col"
      whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="rounded-full bg-gray-50 w-14 h-14 flex items-center justify-center mb-6 text-[#62c7fc]">
        {icon}
      </div>
      
      <h3 className="font-display text-xl font-semibold mb-4">{title}</h3>
      
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      
      <Link 
        to={link} 
        className="inline-flex items-center text-[#62c7fc] font-medium group mt-auto"
      >
        <span>Läs mer</span>
        <motion.div
          className="ml-2"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight size={16} />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
