import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
}

const FeatureCard = ({ icon, title, description, link }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className="p-6 flex-grow">
        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-green-100 mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="px-6 pb-4">
        <Link
          to={link}
          className="inline-flex items-center text-green-700 hover:text-green-800"
        >
          Learn more
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;