interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  image: string;
}

const TestimonialCard = ({ quote, author, location, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={author} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium text-gray-900">{author}</h4>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">"{quote}"</p>
    </div>
  );
};

export default TestimonialCard;