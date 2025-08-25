
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal-800 text-cream-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-playfair text-3xl font-semibold mb-4">DKnC.</h3>
            <p className="text-cream-100 text-sm leading-relaxed max-w-md">
              Architecture & Interior Design Studio
              <br />
              Contextual Design. Timeless Execution.
            </p>
          </div>
          
          <div>
            <h4 className="font-inter font-medium mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-cream-200 hover:text-cream-50 transition-colors text-sm">
                Work
              </Link>
              <Link to="/us" className="block text-cream-200 hover:text-cream-50 transition-colors text-sm">
                Us
              </Link>
              <Link to="/media" className="block text-cream-200 hover:text-cream-50 transition-colors text-sm">
                Media
              </Link>
              <Link to="/products" className="block text-cream-200 hover:text-cream-50 transition-colors text-sm">
                Products
              </Link>
              <Link to="/contact" className="block text-cream-200 hover:text-cream-50 transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-inter font-medium mb-4">Connect</h4>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-cream-200 hover:text-cream-50 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-charcoal-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream-200 text-sm">
            © 2024 DKnC Architecture. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-cream-200 hover:text-cream-50 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-cream-200 hover:text-cream-50 transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
