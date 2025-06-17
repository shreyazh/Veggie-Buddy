import { Link } from 'react-router-dom';
import { ChevronRight, Leaf, Cloud, Users, Grid, BookOpen, HelpCircle, Video, Mail } from 'lucide-react';
import FeatureCard from '../components/home/FeatureCard';
import TestimonialCard from '../components/home/TestimonialCard';
import PlantPreview from '../components/home/PlantPreview';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6231753/pexels-photo-6231753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Grow Fresh Vegetables on Your Rooftop
            </h1>
            <p className="mt-6 text-xl text-green-100 max-w-2xl">
              Veggie Buddy helps you design, plant, and maintain your own rooftop garden — 
              even if you've never gardened before.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link 
                to="/layout-designer" 
                className="px-6 py-3 bg-white text-green-700 rounded-md font-medium hover:bg-green-50 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Design Your Garden
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/plants" 
                className="px-6 py-3 bg-green-600 text-white rounded-md font-medium hover:bg-green-500 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Explore Plants
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">How Veggie Buddy Helps You</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to create a thriving rooftop garden, right at your fingertips.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard 
              icon={<Grid className="h-8 w-8 text-green-600" />}
              title="Rooftop Layout Designer"
              description="Design your garden layout with our interactive tool. Drag and drop plants to create your perfect garden."
              link="/layout-designer"
            />
            <FeatureCard 
              icon={<Leaf className="h-8 w-8 text-green-600" />}
              title="Plant Information"
              description="Detailed care instructions for a wide variety of vegetables, herbs, and companion plants."
              link="/plants"
            />
            <FeatureCard 
              icon={<Cloud className="h-8 w-8 text-green-600" />}
              title="Weather Integration"
              description="Get personalized plant care recommendations based on local weather conditions."
              link="/tips"
            />
            <FeatureCard 
              icon={<Users className="h-8 w-8 text-green-600" />}
              title="Community Forum"
              description="Connect with other gardeners, share experiences, and get help with your gardening challenges."
              link="/community"
            />
          </div>
        </div>
      </section>

      {/* Popular Plants Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Popular Plants for Rooftop Gardens</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              These vegetables thrive in container gardens and are perfect for beginners.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PlantPreview 
              name="Cherry Tomatoes"
              image="https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              difficulty="Easy"
              sunlight="Full Sun"
              waterNeeds="Medium"
            />
            <PlantPreview 
              name="Bell Peppers"
              image="https://images.healthshots.com/healthshots/en/uploads/2024/07/24112903/1-40.jpg"
              difficulty="Medium"
              sunlight="Full Sun"
              waterNeeds="Medium"
            />
            <PlantPreview 
              name="Lettuce"
              image="https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              difficulty="Easy"
              sunlight="Partial Sun"
              waterNeeds="High"
            />
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              to="/plants" 
              className="inline-flex items-center text-green-700 font-medium hover:text-green-800"
            >
              View all plants
              <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">What Our Gardeners Say</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of urban gardeners who are growing their own food with Veggie Buddy.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <TestimonialCard 
              quote="Veggie Buddy transformed my empty rooftop into a thriving garden. I'm harvesting fresh vegetables every week!"
              author="Sarah J."
              location="New York"
              image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <TestimonialCard 
              quote="As a complete beginner, I was intimidated by gardening. The step-by-step guides made it so easy to get started."
              author="Michael T."
              location="Chicago"
              image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <TestimonialCard 
              quote="The layout designer helped me maximize my small rooftop space. Now I grow enough vegetables to share with neighbors."
              author="Elena R."
              location="Miami"
              image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Resources & Support</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to succeed in your rooftop gardening journey.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard 
              icon={<BookOpen className="h-8 w-8 text-green-600" />}
              title="Blog"
              description="Stay updated with the latest gardening tips, success stories, and expert advice."
              link="/blog"
            />
            <FeatureCard 
              icon={<Video className="h-8 w-8 text-green-600" />}
              title="Tutorials"
              description="Step-by-step video guides and articles to help you master rooftop gardening."
              link="/tutorials"
            />
            <FeatureCard 
              icon={<HelpCircle className="h-8 w-8 text-green-600" />}
              title="FAQs"
              description="Find answers to common questions about rooftop gardening and plant care."
              link="/faqs"
            />
            <FeatureCard 
              icon={<Mail className="h-8 w-8 text-green-600" />}
              title="Contact Support"
              description="Get help from our gardening experts and support team."
              link="/contact"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Start Your Rooftop Garden?</h2>
          <p className="mt-4 text-xl text-green-100 max-w-2xl mx-auto">
            Join our community of urban gardeners and start growing your own fresh, sustainable produce today.
          </p>
          <div className="mt-10">
            <Link 
              to="/layout-designer" 
              className="px-8 py-4 bg-white text-green-700 rounded-md font-medium text-lg hover:bg-green-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Design Your Garden Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;