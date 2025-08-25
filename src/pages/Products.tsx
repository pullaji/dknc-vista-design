
import { useState } from 'react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  
  const categories = ['All', 'Furniture', 'Lighting', 'Decor'];
  
  const products = [
    {
      id: 1,
      name: 'Minimal Dining Table',
      category: 'Furniture',
      price: 'Enquire',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      description: 'Handcrafted solid oak dining table with clean lines and natural finish.'
    },
    {
      id: 2,
      name: 'Pendant Light Series',
      category: 'Lighting',
      price: 'Enquire',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      description: 'Architectural pendant lights with brass accents and warm LED technology.'
    },
    {
      id: 3,
      name: 'Ceramic Vase Collection',
      category: 'Decor',
      price: 'Enquire',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      description: 'Hand-thrown ceramic vessels in matte earth tones.'
    },
    {
      id: 4,
      name: 'Lounge Chair',
      category: 'Furniture',
      price: 'Enquire',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      description: 'Ergonomic lounge chair with Italian leather upholstery.'
    },
    {
      id: 5,
      name: 'Floor Lamp',
      category: 'Lighting',
      price: 'Enquire',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      description: 'Minimalist floor lamp with adjustable height and dimming function.'
    },
    {
      id: 6,
      name: 'Wall Art Series',
      category: 'Decor',
      price: 'Enquire',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      description: 'Abstract compositions inspired by architectural forms.'
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 px-6 bg-gradient-to-br from-cream-50 to-blush-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-5xl font-bold text-charcoal-800 mb-8">
            Products
          </h1>
          <p className="text-xl text-charcoal-600 leading-relaxed">
            Carefully curated objects that embody our design philosophy, 
            available for residential and commercial spaces.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-inter font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-charcoal-800 text-cream-50'
                    : 'bg-cream-100 text-charcoal-600 hover:bg-blush-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-charcoal-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-charcoal-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-blush-500 font-inter font-medium">
                      {product.price}
                    </span>
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="bg-charcoal-800 text-cream-50 px-4 py-2 rounded-full text-sm font-inter font-medium hover:bg-charcoal-700 transition-colors"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="font-playfair text-2xl font-semibold text-charcoal-800 mb-4">
              Enquire about {selectedProduct.name}
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-charcoal-600 font-inter font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-cream-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-400"
                />
              </div>
              <div>
                <label className="block text-charcoal-600 font-inter font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-cream-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-400"
                />
              </div>
              <div>
                <label className="block text-charcoal-600 font-inter font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-cream-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-400"
                  placeholder="Tell us about your project..."
                />
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 btn-ghost"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 btn-primary"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
