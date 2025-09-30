import { Code2, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
  src="/ajzenix-technologies-high-resolution-logo.png" 
  alt="Ajzenix Technologies Logo" 
  className="h-8 w-auto object-contain" 
/>
              <span className="text-2xl font-bold">Ajzenix Technologies</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Transforming small businesses with modern web solutions, e-commerce platforms, and cutting-edge AI technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">
                  Website Development
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">
                  E-commerce Solutions
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">
                  AI & ML Solutions
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">
                  Business Automation
                </button>
              </li>
              
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('portfolio')} className="hover:text-white transition-colors">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-0.5 text-blue-400" />
                <div>
                  <p>ajzenixtechnologies@gmail.com</p>
                  <p className="text-sm">24-hour response</p>
                </div>
              </div>
              {/*<div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-0.5 text-blue-400" />
                <div>
                  <p>+1 (555) 123-4567</p>
                  <p className="text-sm">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>*/}
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-blue-400" />
                <div>
                  <p>Remote & On-site</p>
                  <p className="text-sm">Nationwide service</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Ajzenix Technologies. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Built with ❤️ for small businesses
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}