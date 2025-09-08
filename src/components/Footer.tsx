
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal-800 text-cream-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-playfair text-3xl font-semibold mb-4">DKnC.</h3>
            <p className="text-cream-100 text-sm leading-relaxed max-w-md mb-4">
              Architecture & Interior Design Studio
              <br />
              Contextual Design. Timeless Execution.
            </p>
            <div className="space-y-2 text-cream-100 text-sm">
              <div className="flex items-start space-x-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <p>Jubilee Hills 1 main road, Hyderabad</p>
                  <p>Telangana, India 500033</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:+917799391131" className="hover:text-cream-50 transition-colors">
                  +91 7799391131
                </a>
              </div>
            </div>
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
            <div className="space-y-3">
              <a 
                href="https://www.instagram.com/divyakruthidesigns?igsh=MXZqYnV6NnVvY0dkaWEQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-cream-200 hover:text-cream-50 transition-colors text-sm"
              >
                <Instagram size={16} />
                <span>divyakruthidesigns</span>
              </a>
              <a 
                href="mailto:Designs@divyakruthi.com"
                className="flex items-center space-x-2 text-cream-200 hover:text-cream-50 transition-colors text-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>Designs@divyakruthi.com</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-charcoal-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream-200 text-sm">
            © 2021 DKnC Architecture. All rights reserved.
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
