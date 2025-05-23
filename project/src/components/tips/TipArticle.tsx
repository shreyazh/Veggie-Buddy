import { Tip } from '../../types/tips';

interface TipArticleProps {
  tip: Tip;
}

const TipArticle = ({ tip }: TipArticleProps) => {
  return (
    <article className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{tip.title}</h2>
      
      {tip.image && (
        <img 
          src={tip.image} 
          alt={tip.title} 
          className="w-full h-48 object-cover rounded-lg mb-6"
        />
      )}
      
      <div className="prose max-w-none">
        {tip.content.map((paragraph, index) => (
          <p key={index} className="mb-4 text-gray-600">
            {paragraph}
          </p>
        ))}
        
        {tip.steps && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Step-by-Step Guide</h3>
            <ol className="space-y-4">
              {tip.steps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center text-sm">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
        
        {tip.dosDonts && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-green-800 mb-2">Do's</h4>
              <ul className="text-sm text-green-700 list-disc list-inside space-y-1">
                {tip.dosDonts.dos.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-medium text-red-800 mb-2">Don'ts</h4>
              <ul className="text-sm text-red-700 list-disc list-inside space-y-1">
                {tip.dosDonts.donts.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default TipArticle;