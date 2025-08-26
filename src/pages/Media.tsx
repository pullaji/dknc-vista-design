import React from 'react';

const Media = () => {
  const mediaMentions = [
    {
      id: 1,
      title: "This Hyderabad holiday home is immersed in a mango plantation",
      description: "Spacefiction Studio creates a contemporary home that seamlessly blends with nature.",
      publication: "Architectural Digest",
      date: "September 2021",
      type: "WEB",
      mainImage: "/assets/1- MANEA_GACHBOWLI/5.jpg",
      category: "Residential"
    },
    {
      id: 2,
      title: "ID HONOURS 2021 - CURO2",
      description: "Recognized for excellence in interior design and architectural innovation.",
      publication: "ID HONOURS",
      date: "March 2021",
      type: "WEB",
      mainImage: "/assets/2- PALLIATIVE CARE/1-TITLE.jpg",
      category: "Awards"
    },
    {
      id: 3,
      title: "Brick Mask House / Spacefiction Studio",
      description: "Best Architectural Drawings - A contemporary residence showcasing innovative design.",
      publication: "Archdaily",
      date: "April 2021",
      type: "WEB",
      mainImage: "/assets/Chennai Santhome/2.jpg.jpg",
      category: "Architecture"
    },
    {
      id: 4,
      title: "MGB Headquarters / Spacefiction Studio",
      description: "Corporate headquarters featuring sustainable design and modern aesthetics.",
      publication: "Archdaily",
      date: "July 2021",
      type: "WEB",
      mainImage: "/assets/MANEA_MANIKONDA/Title.jpg.jpg",
      category: "Commercial"
    },
    {
      id: 5,
      title: "THE VIVEK EADARA SHOW #4 SEASON 1 EPISODE 4",
      description: "IN CONVERSATION WITH BABA SASHANK & VINDHYA GUDURU - ARCHITECTURE PODCAST SERIES",
      publication: "YouTube",
      date: "March 2021",
      type: "WEB",
      mainImage: "/assets/PRACHI & RACHIT/Title.jpg.jpg",
      category: "Podcast"
    },
    {
      id: 6,
      title: "Looking Inwards - Contextual Residence Hyderabad",
      description: "A residential project that reflects the local context and cultural heritage.",
      publication: "Design Pataki",
      date: "June 2021",
      type: "WEB",
      mainImage: "/assets/1- MANEA_GACHBOWLI/1- TITLE PAGE.jpg",
      category: "Residential"
    },
    {
      id: 7,
      title: "MGB Headquarters - Eenadu Feature",
      description: "Print media coverage of our corporate headquarters project.",
      publication: "Eenadu",
      date: "July 2020",
      type: "PRINT",
      mainImage: "/assets/2- PALLIATIVE CARE/2.jpg",
      category: "Commercial"
    },
    {
      id: 8,
      title: "Brick Mask House - Design Pataki",
      description: "Featured project showcasing contemporary residential architecture.",
      publication: "Design Pataki",
      date: "June 2021",
      type: "WEB",
      mainImage: "/assets/Chennai Santhome/1.jpg.jpg",
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
              <div key={item.id} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                                 {/* Main Image */}
                 <div className="relative h-48 overflow-hidden">
                   <img
                     src={item.mainImage}
                     alt={item.title}
                     className="w-full h-full object-cover"
                    />
                  </div>

                {/* Content */}
                <div className="p-6">
                  {/* Publication and Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-blush-500 font-inter font-semibold text-sm uppercase tracking-wide">
                      {item.publication}
                    </span>
                    <span className="text-charcoal-500 text-sm">
                      {item.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-playfair text-lg font-semibold text-charcoal-800 mb-3 leading-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-charcoal-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  

                  
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

