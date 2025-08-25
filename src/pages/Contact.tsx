
import { Instagram } from 'lucide-react';

const Contact = () => {
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
                    123 Design District<br />
                    Creative Quarter, Suite 400<br />
                    New York, NY 10001
                  </p>
                </div>
                
                <div>
                  <h3 className="font-inter font-semibold text-charcoal-800 mb-2">Contact</h3>
                  <p className="text-charcoal-600">
                    <a href="mailto:hello@dknc.studio" className="hover:text-blush-500 transition-colors">
                      hello@dknc.studio
                    </a>
                  </p>
                  <p className="text-charcoal-600">
                    <a href="tel:+1234567890" className="hover:text-blush-500 transition-colors">
                      +1 (234) 567-8900
                    </a>
                  </p>
                </div>
                
                <div>
                  <h3 className="font-inter font-semibold text-charcoal-800 mb-2">Follow Us</h3>
                  <a href="#" className="inline-flex items-center text-charcoal-600 hover:text-blush-500 transition-colors">
                    <Instagram size={20} className="mr-2" />
                    @dknc.studio
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="font-playfair text-3xl font-semibold text-charcoal-800 mb-8">
                Start a Conversation
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-charcoal-600 font-inter font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-cream-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal-600 font-inter font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-cream-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-400 transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-charcoal-600 font-inter font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-cream-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-400 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-charcoal-600 font-inter font-medium mb-2">
                    Project Type
                  </label>
                  <select className="w-full px-4 py-3 border border-cream-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-400 transition-colors">
                    <option value="">Select a project type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="interior">Interior Design</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-charcoal-600 font-inter font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-cream-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-400 transition-colors"
                    placeholder="Tell us about your project, timeline, and vision..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
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
