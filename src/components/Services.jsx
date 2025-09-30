import { 
  Globe, 
  ShoppingCart, 
  Wrench, 
  Search, 
  Brain, 
  Zap, 
  BarChart3,
  ArrowRight 
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom, mobile-friendly, and professional websites tailored to your business needs.',
    features: ['Responsive Design', 'Fast Loading', 'SEO Optimized', 'User-Friendly'],
    color: 'blue'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Complete online stores with product catalogs, shopping carts, and secure payment processing.',
    features: ['Product Management', 'Payment Integration', 'Inventory Tracking', 'Order Management'],
    color: 'green'
  },
  {
    icon: Search,
    title: 'GenAI Bots',
    description: 'Advanced conversational AI bots powered by latest generative models for customer support and engagement.',
    features: ['24/7 Customer Support', 'Multi-language Support', 'Context-aware Responses'],
    color: 'orange'
  },
  {
    icon: Brain,
    title: 'NLP Solutions',
    description: 'Natural Language Processing solutions for text analysis, sentiment analysis, and document processing.',
    features: ['Text Classification', 'Sentiment Analysis', 'Named Entity Recognition'],
    color: 'indigo'
  },
  {
    icon: Zap,
    title: 'Computer Vision',
    description: 'Advanced image and video analysis solutions for object detection and recognition.',
    features: ['Object Detection', 'Face Recognition', 'Video Analytics'],
    color: 'yellow'
  },
  {
    icon: BarChart3,
    title: 'Dashboard Solutions',
    description: 'Interactive and real-time dashboards for monitoring and analyzing business metrics.',
    features: ['Custom Dashboards', 'Real-time Updates', 'Interactive Reports'],
    color: 'red'
  },
  {
    icon: Wrench,
    title: 'Website Maintenance & Support',
    description: 'Ongoing updates, bug fixes, security patches, and technical support for your website.',
    features: ['Regular Updates', 'Security Monitoring', '24/7 Support', 'Performance Optimization'],
    color: 'purple'
  },
  {
    icon: BarChart3,
    title: 'Custom AI Solutions',
    description: 'Tailored AI solutions designed to meet your specific business requirements.',
    features: ['Custom Development', 'Integration Support', 'Scalable Solutions'],
    color: 'red'
  }
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-600',
    border: 'border-blue-200',
    hover: 'hover:border-blue-300'
  },
  green: {
    bg: 'bg-green-100',
    text: 'text-green-600',
    border: 'border-green-200',
    hover: 'hover:border-green-300'
  },
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-600',
    border: 'border-purple-200',
    hover: 'hover:border-purple-300'
  },
  orange: {
    bg: 'bg-orange-100',
    text: 'text-orange-600',
    border: 'border-orange-200',
    hover: 'hover:border-orange-300'
  },
  indigo: {
    bg: 'bg-indigo-100',
    text: 'text-indigo-600',
    border: 'border-indigo-200',
    hover: 'hover:border-indigo-300'
  },
  yellow: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-600',
    border: 'border-yellow-200',
    hover: 'hover:border-yellow-300'
  },
  red: {
    bg: 'bg-red-100',
    text: 'text-red-600',
    border: 'border-red-200',
    hover: 'hover:border-red-300'
  }
};

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions to help small businesses succeed online. 
            From traditional websites to cutting-edge AI implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorClasses[service.color];
            
            return (
              <div
                key={index}
                className={`bg-white border-2 ${colors.border} ${colors.hover} rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                <div className={`${colors.bg} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                  <Icon className={`h-8 w-8 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className={`w-2 h-2 ${colors.bg} rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
          >
            <span>Get a Custom Quote</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}