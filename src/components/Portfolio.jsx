import { ExternalLink, Globe, ShoppingCart, Brain, BarChart3 } from 'lucide-react';

const projects = [
  {
    title: 'MbCrackers — Premium Crackers Shop',
    description: 'Complete e-commerce solution developed for a local crackers business, enabling customers to browse products, place orders online, and receive instant updates. The system is integrated with Excel for automated order record management and WhatsApp for real-time notifications, ensuring seamless operations and enhanced customer communication.',
    category: 'E-commerce',
    icon: ShoppingCart,
    features: ['Online Ordering', 'Mobile-Responsive Design', 'Excel Order Management', 'WhatsApp Order Notifications'],
    images: [
      'crac1.png',
      'crac2.png',
      'crac3.png',
      'crac4.png',
    ],
    color: 'orange'
  },
  
];

const colorClasses = {
  green: 'bg-green-100 text-green-600',
  blue: 'bg-blue-100 text-blue-600',
  purple: 'bg-purple-100 text-purple-600',
  orange: 'bg-orange-100 text-orange-600'
};

export default function Portfolio() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how we've helped small businesses transform their operations with modern web solutions and smart technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const colorClass = colorClasses[project.color];
            
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
              <div className="flex overflow-x-auto aspect-video space-x-2 scrollbar-hide">
  {project.images?.map((img, imgIndex) => (
    <img
      key={imgIndex}
      src={img}
      alt={`${project.title} ${imgIndex + 1}`}
      className="w-full h-full object-cover rounded-lg flex-shrink-0 hover:scale-105 transition-transform duration-300"
    />
  ))}
</div>


                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${colorClass}`}>
                      {project.category}
                    </span>
                    <Icon className={`h-6 w-6 ${project.color === 'green' ? 'text-green-600' : 
                      project.color === 'blue' ? 'text-blue-600' : 
                      project.color === 'purple' ? 'text-purple-600' : 'text-orange-600'}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  {/* <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center space-x-1">
                    <span>View Case Study</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>*/}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center bg-gray-50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join dozens of successful small businesses that have transformed their operations with our digital solutions. 
            Let's discuss how we can help your business grow.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
}