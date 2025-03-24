
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface ReviewCardProps {
  name: string;
  date: string;
  rating: number;
  content: string;
}

const ReviewCard = ({ name, date, rating, content }: ReviewCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 h-full flex flex-col"
      whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="font-medium text-lg">{name}</h4>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <div className="bg-gray-50 px-2 py-1 rounded-full">
          <span className="text-[#62c7fc] font-medium">Google</span>
        </div>
      </div>
      
      <div className="flex items-center mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
      
      <p className="text-gray-600 flex-grow">{content}</p>
      
      <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
          <span className="text-sm text-gray-500">Verifierad kund</span>
        </div>
        <button className="text-[#62c7fc] text-sm font-medium hover:underline transition-colors">
          Läs mer
        </button>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
