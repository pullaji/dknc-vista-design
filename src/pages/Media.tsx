import React from 'react';

const Media = () => {
  const mediaMentions = [
    {
      id: 1,
      title: "India's Top 50 Under 40 - Divya Kruthi",
      description: "Divya Kruthi recognized as one of India's top architects and designers under 40, featured in Architect and Interiors India's prestigious Gen 2022 list.",
      publication: "Architect and Interiors India",
      date: "2022",
      type: "WEB",
      mainImage: "/assets/Profiles/1.jpg.png",
      category: "Awards",
      link: "https://www.architectandinteriorsindia.com/lists/divya-kruthi"
    },
    {
      id: 2,
      title: "This Hyderabad holiday home is immersed in a mango plantation",
      description: "Dknc Studio creates a santhome home that seamlessly blends with nature.",
      publication: "Architectural Digest",
      date: "September 2021",
      type: "WEB",
      mainImage: "/assets/Chennai_Santhome/TITLE.webp",
      category: "Residential"
    },
    {
      id: 3,
      title: "Palliative Care",
      description: "Recognized for excellence in interior design and architectural innovation.",
      publication: "ID HONOURS",
      date: "March 2021",
      type: "WEB",
      mainImage: "/assets/2- PALLIATIVE CARE/1-TITLE.webp",
      category: "Awards"
    },
    {
      id: 4,
      title: "Santhome Home / DKNC Studio",
      description: "Best Architectural Drawings - A contemporary residence showcasing innovative design.",
      publication: "Archdaily",
      date: "April 2021",
      type: "WEB",
      mainImage: "/assets/Chennai_Santhome/2.webp",
      category: "Architecture"
    },
    {
      id: 5,
      title: "MGB Headquarters / Dknc Studio",
      description: "Office Headquarters featuring sustainable design and modern aesthetics.",
      publication: "Archdaily",
      date: "July 2021",
      type: "WEB",
      mainImage: "/assets/MANEA_MANIKONDA/1- TITLE.webp",
      category: "Commercial"
    },
    {
      id: 6,
      title: "Prachi & Rachit for residents",
      description: "Hybrid Form - Intersection of three themed neighborhoods",
      publication: "Archdaily",
      date: "March 2021",
      type: "WEB",
      mainImage: "/assets/PRACHI_AND_RACHIT/TITLE.webp",
      category: "Podcast"
    },
    {
      id: 7,
      title: "Looking Inwards - Contextual Residence Hyderabad",
      description: "A residential project that reflects the local context and cultural heritage.",
      publication: "Design Pataki",
      date: "June 2021",
      type: "WEB",
      mainImage: "/assets/1- MANEA_GACHBOWLI/1-title.webp",
      category: "Residential"
    },
    {
      id: 8,
      title: "MGB house  - Feature",
      description: "Print media coverage of our corporate headquarters project.",
      publication: "Archdaily",
      date: "July 2020",
      type: "PRINT",
      mainImage: "/assets/2- PALLIATIVE CARE/2.webp",
      category: "Commercial"
    },
    {
      id: 9,
      title: " Design Pataki",
      description: "Featured project showcasing contemporary residential architecture.",
      publication: "Design Pataki",
      date: "June 2021",
      type: "WEB",
      mainImage: "/assets/Chennai_Santhome/1.webp",
      category: "Residential"
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal-800 mb-6 text-center">
            Media & Recognition
          </h1>
          <p className="text-lg text-charcoal-600 max-w-3xl mx-auto text-center leading-relaxed">
            Our work has been featured in leading publications and recognized by prestigious institutions worldwide.
          </p>
        </div>
      </section>

      {/* Media Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaMentions.map((item, index) => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group"
                onClick={() => {
                  if (item.link) {
                    window.open(item.link, '_blank', 'noopener,noreferrer');
                  }
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    if (item.link) {
                      window.open(item.link, '_blank', 'noopener,noreferrer');
                    }
                  }
                }}
              >
                {/* Main Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.mainImage}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Link indicator overlay */}
                  {item.link && (
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-2">
                        <svg className="w-5 h-5 text-charcoal-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Publication and Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-blush-500 font-century-gothic font-semibold text-sm uppercase tracking-wide">
                      {item.publication}
                    </span>
                    <span className="text-charcoal-500 text-sm">
                      {item.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-century-gothic text-lg font-semibold text-charcoal-800 mb-3 leading-tight group-hover:text-blush-600 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-charcoal-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Link indicator */}
                  {item.link && (
                    <div className="flex items-center text-blush-600 text-sm font-medium">
                      <span>View Article</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;

