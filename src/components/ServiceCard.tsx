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
      whileHover={{ y: -8, boxShadow: '0 25px 30px -12px rgba(0, 0, 0, 0.15)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="rounded-xl bg-[#f0f7ff] w-20 h-20 flex items-center justify-center mb-6 text-[#62c7fc]">
        <div className="text-3xl">
          {icon}
        </div>
      </div>
      
      <h3 className="font-display text-2xl font-semibold mb-4">{title}</h3>
      
      <p className="text-gray-600 mb-6 flex-grow text-base">{description}</p>
      
      <Link 
        to={link} 
        className="inline-flex items-center text-[#FF6B35] font-medium group mt-auto"
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
