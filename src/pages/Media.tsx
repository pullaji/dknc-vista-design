
const Media = () => {
  const pressMentions = [
    {
      publication: 'Architectural Digest',
      title: 'Rising Stars in Contemporary Architecture',
      year: '2024',
      description: 'DKnC featured as one of the most promising emerging studios.',
      logo: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=100&h=60&fit=crop'
    },
    {
      publication: 'Dezeen',
      title: 'Contextual Design Approach Transforms Urban Living',
      year: '2023',
      description: 'In-depth feature on our residential project methodology.',
      logo: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=100&h=60&fit=crop'
    },
    {
      publication: 'Interior Design Magazine',
      title: 'The New Minimalism: DKnC\'s Interior Philosophy',
      year: '2023',
      description: 'Exploring our approach to interior spaces and material selection.',
      logo: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=100&h=60&fit=crop'
    }
  ];

  const awards = [
    {
      title: 'AIA Design Excellence Award',
      year: '2024',
      project: 'Modern Residence'
    },
    {
      title: 'Interior Design Best of Year',
      year: '2023',
      project: 'Urban Loft Interior'
    },
    {
      title: 'Sustainable Design Recognition',
      year: '2023',
      project: 'Community Center'
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 px-6 bg-gradient-to-br from-cream-50 to-blush-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-5xl font-bold text-charcoal-800 mb-8">
            Media & Recognition
          </h1>
          <p className="text-xl text-charcoal-600 leading-relaxed">
            Our work has been recognized by leading publications and institutions 
            in architecture and design.
          </p>
        </div>
      </section>

      {/* Press Mentions */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl font-semibold text-charcoal-800 mb-12 text-center">
            Press Mentions
          </h2>
          
          <div className="space-y-8">
            {pressMentions.map((mention, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={mention.logo}
                      alt={mention.publication}
                      className="w-24 h-16 object-cover rounded grayscale"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair text-xl font-semibold text-charcoal-800 mb-2">
                      {mention.title}
                    </h3>
                    <p className="text-blush-500 font-inter font-medium mb-2">
                      {mention.publication} • {mention.year}
                    </p>
                    <p className="text-charcoal-600 text-sm">
                      {mention.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 px-6 bg-blush-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl font-semibold text-charcoal-800 mb-12 text-center">
            Awards & Recognition
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-blush-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blush-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-lg font-semibold text-charcoal-800 mb-2">
                  {award.title}
                </h3>
                <p className="text-blush-500 font-inter font-medium mb-2">
                  {award.year}
                </p>
                <p className="text-charcoal-600 text-sm">
                  {award.project}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
