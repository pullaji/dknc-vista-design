
import { Instagram } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { FormData, submitToGoogleSheets, submitToGoogleSheetsFormData } from '../utils/formSubmission';

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // IMPORTANT: Replace this URL with your actual Google Apps Script web app URL
  // After deploying your Apps Script, paste the Web App URL here
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyP5don6k2S1gJ3iB7n-lcCSS9aaySW4zYd6Qi8HGprBg7zzS5WOXy5QZR3SKOVszlYVQ/exec';
  
  // Example of what your URL should look like:
  // const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/1ABC123XYZ456.../exec';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Submitting form data:', formData);
      console.log('Using URL:', GOOGLE_SCRIPT_URL);
      
      // Check if URL is properly set
      if (GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
        toast.error('Please set up your Google Apps Script URL first!');
        setIsSubmitting(false);
        return;
      }
      
      // Try the more reliable form data method first
      const success = await submitToGoogleSheetsFormData(formData, GOOGLE_SCRIPT_URL);
      
      if (success) {
        toast.success('Message sent successfully! We\'ll get back to you soon.');
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          projectType: '',
          message: ''
        });
      } else {
        toast.error('Failed to send message. Please try again.');
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 px-6 bg-gradient-to-br from-cream-50 to-blush-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-5xl font-bold text-charcoal-800 mb-8">
            Get in Touch
          </h1>
          <p className="text-xl text-charcoal-600 leading-relaxed">
            Ready to create your own place? Let's discuss your vision and bring it to life.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="font-playfair text-3xl font-semibold text-charcoal-800 mb-8">
                Studio Information
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-inter font-semibold text-charcoal-800 mb-2">Address</h3>
                  <p className="text-charcoal-600 leading-relaxed">
                    Jubilee Hills 1 main road, Hyderabad<br />
                    Telangana, India 500033
                  </p>
                </div>
                
                <div>
                  <h3 className="font-inter font-semibold text-charcoal-800 mb-2">Contact</h3>
                  <p className="text-charcoal-600">
                    <a href="mailto:hello@dknc.studio" className="hover:text-blush-500 transition-colors">
                      Designs@divyakruthi.com
                    </a>
                  </p>
                  <p className="text-charcoal-600">
                    <a href="tel:+1234567890" className="hover:text-blush-500 transition-colors">
                     +91 7799391131
                    </a>
                  </p>
                </div>
                
                <div>
                  <h3 className="font-inter font-semibold text-charcoal-800 mb-2">Follow Us</h3>
                  <a href="https://www.instagram.com/divyakruthidesigns" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-charcoal-600 hover:text-blush-500 transition-colors">
                    <Instagram size={20} className="mr-2" />
                    divyakruthidesigns
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="font-playfair text-3xl font-semibold text-charcoal-800 mb-8">
                Start a Conversation
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-charcoal-600 font-inter font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-cream-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal-600 font-inter font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-cream-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-400 transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-charcoal-600 font-inter font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-cream-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-400 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-charcoal-600 font-inter font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+91 9876543210"
                    className="w-full px-4 py-3 border border-cream-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-400 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-charcoal-600 font-inter font-medium mb-2">
                    Project Type *
                  </label>
                  <select 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-cream-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-400 transition-colors"
                  >
                    <option value="">Select a project type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="interior">Interior Design</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-charcoal-600 font-inter font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-cream-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-400 transition-colors"
                    placeholder="Tell us about your project, timeline, and vision..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
