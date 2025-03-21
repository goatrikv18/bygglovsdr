
import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  date: string;
  rating: number;
  content: string;
}

const ReviewCard = ({ name, date, rating, content }: ReviewCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-medium">{name}</h4>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
      
      <p className="text-gray-600 flex-grow">{content}</p>
      
      <div className="mt-4 pt-4 border-t border-gray-100 text-right">
        <button className="text-brand-500 text-sm hover:text-brand-600 transition-colors">
          Läs mer
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
