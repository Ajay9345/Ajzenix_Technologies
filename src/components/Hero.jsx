import { ArrowRight, Star, Users, Award } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your <span className="text-blue-600">Business</span> with AI-Driven Web Solutions
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Helping small businesses thrive online with custom websites, e-commerce solutions, and cutting-edge AI technology. From grocery shops to local stores, we create digital experiences that drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={scrollToServices}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                View Our Services
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">25+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">30+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">5.0</div>
                <div className="text-sm text-gray-600">Client Rating</div>
              </div>
            </div>
          </div>

          <div className="relative">
  <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
    <div className="bg-gray-100 rounded-lg p-6 mb-4">
      <img 
        src="/ajzenix-technologies-high-resolution-logo-transparent.png" 
        alt="Ajzenix Technologies Logo" 
        className="max-h-24 object-contain"
      />
    </div>
    <div className="text-center">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Ajzenix Technologies</h3>
      <p className="text-gray-600 text-sm">Built for performance and user experience</p>
    </div>
  </div>
</div>


        </div>
      </div>
    </section>
  );
}