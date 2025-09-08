import { useParams, Navigate } from 'react-router-dom';
import React, { useState } from 'react';

const Project = () => {
  const { id } = useParams();
  
  // Project data (same as in Work.tsx - in a real app this would come from a data source)
  const projects = [
    {
      id: 1,
      title: 'MANEA',
      category: 'ARCHITECTURE',
      image: '/assets/1- MANEA_GACHBOWLI/1- TITLE.webp',
      description: 'A sophisticated salon and wellness space featuring contemporary design with warm color palettes, premium materials, and thoughtful spatial planning.',
      images: [
        '/assets/1- MANEA_GACHBOWLI/1- TITLE.webp',
        '/assets/1- MANEA_GACHBOWLI/2.webp',
        '/assets/1- MANEA_GACHBOWLI/3.webp',
        '/assets/1- MANEA_GACHBOWLI/4.webp',
        '/assets/1- MANEA_GACHBOWLI/5.webp',
        '/assets/1- MANEA_GACHBOWLI/6.webp',
        '/assets/1- MANEA_GACHBOWLI/7.webp',
        '/assets/1- MANEA_GACHBOWLI/8.webp',
      ],
      location: 'Gachibowli, Hyderabad',
      year: '2024',
      type: 'Commercial Interior'
    },
    {
      id: 2,
      title: 'Palliative Care',
      category: 'ARCHITECTURE',
      image: '/assets/2- PALLIATIVE CARE/1Title.webp',
      description: 'A thoughtfully designed healthcare facility focused on comfort and healing, featuring warm neutral tones, natural light, and carefully planned spaces for patients and families.',
      images: [
        '/assets/2- PALLIATIVE CARE/1Title.webp',
        '/assets/2- PALLIATIVE CARE/2 (2).webp',
        '/assets/2- PALLIATIVE CARE/4 (2).webp',
        '/assets/2- PALLIATIVE CARE/4 (3).webp',
        '/assets/2- PALLIATIVE CARE/5 (2).webp',
        '/assets/2- PALLIATIVE CARE/6 (2).webp',
        '/assets/2- PALLIATIVE CARE/7 (3).webp',
        '/assets/2- PALLIATIVE CARE/8.JPG',
        '/assets/2- PALLIATIVE CARE/9.jpg',
      ],
      location: 'Hyderabad',
      year: '2023',
      type: 'Healthcare Architecture'
    },
    {
      id: 3,
      title: 'Santhome Home',
      category: 'Architecture',
      image: '/assets/Chennai Santhome/TiTitle.webp',
      description: 'A modern home project located in Santhome, Chennai, blending contemporary design with local context.',
      images: [
        '/assets/Chennai Santhome/TiTitle.webp',
        '/assets/Chennai Santhome/1.webp',
        '/assets/Chennai Santhome/2.webp',
        '/assets/Chennai Santhome/3.webp',
        '/assets/Chennai Santhome/4.webp',
        '/assets/Chennai Santhome/5.webp',
        '/assets/Chennai Santhome/6.webp',
      ],
      location: 'Santhome, Chennai'
    },
    {
      id: 4,
      title: 'MANEA MANIKONDA',
      category: 'Architecture',
      image: '/assets/MANEA_MANIKONDA/Title.jpTitle.webp',
      description: 'A contemporary residential project in Manikonda, Hyderabad, designed for modern living with elegant spaces.',
      images: [
        '/assets/MANEA_MANIKONDA/Title.jpTitle.webp',
        '/assets/MANEA_MANIKONDA/1.webp',
        '/assets/MANEA_MANIKONDA/2.webp',
        '/assets/MANEA_MANIKONDA/3.webp',
        '/assets/MANEA_MANIKONDA/4.webp',
        '/assets/MANEA_MANIKONDA/6.webp',
        '/assets/MANEA_MANIKONDA/7.webp',
        '/assets/MANEA_MANIKONDA/8.webp',
        '/assets/MANEA_MANIKONDA/9.webp',
        '/assets/MANEA_MANIKONDA/10.webp',
        '/assets/MANEA_MANIKONDA/11.jpg.JPG',
        '/assets/MANEA_MANIKONDA/12.jpg.jpg',
        '/assets/MANEA_MANIKONDA/13.jpg.jpg',
        '/assets/MANEA_MANIKONDA/14.jpg.jpg',
      ],
      location: 'Manikonda, Hyderabad'
    },
    {
      id: 5,
      title: 'PRACHI & RACHIT',
      category: 'Architecture',
      image: '/assets/PRACHI & RACHIT/Title.webp',
      description: 'A bespoke residential project for Prachi & Rachit, featuring elegant and functional spaces.',
      images: [
        '/assets/PRACHI & RACHIT/Title.webp',
        '/assets/PRACHI & RACHIT/1.webp',
        '/assets/PRACHI & RACHIT/3.webp',
        '/assets/PRACHI & RACHIT/4.webp',
        '/assets/PRACHI & RACHIT/5.webp',
        '/assets/PRACHI & RACHIT/6.webp',
        '/assets/PRACHI & RACHIT/7.webp',
        '/assets/PRACHI & RACHIT/8.webp',
        '/assets/PRACHI & RACHIT/9.webp',
        '/assets/PRACHI & RACHIT/10.jpg.jpg',
        '/assets/PRACHI & RACHIT/11.webp',
        '/assets/PRACHI & RACHIT/13.jpg.jpg',
        '/assets/PRACHI & RACHIT/14.webp',
      ],
      location: 'Hyderabad'
    }
  ];

  const project = projects.find(p => p.id === parseInt(id || ''));

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const projectImages = project.images || [project.image];

  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Project Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-800 mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-charcoal-600 font-inter uppercase tracking-wider">
            {project.category}
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-8">
          {(() => {
            const [loaded, setLoaded] = useState(false);
            const [error, setError] = useState(false);
            return (
              <div className="relative">
                {!loaded && !error && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                    <div className="text-gray-400">Loading...</div>
                  </div>
                )}
                <img
                  src={projectImages[0]}
                  alt={project.title}
                  className={`w-full h-auto object-cover rounded-lg shadow-lg transition duration-300 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
                  style={{ maxHeight: '80vh', contentVisibility: 'auto' }}
                  loading="eager"
                  fetchPriority="high"
                  onLoad={() => setLoaded(true)}
                  onError={() => setError(true)}
                />
                {error && (
                  <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-gray-500">Image failed to load</div>
                  </div>
                )}
              </div>
            );
          })()}
        </div>

        {/* All Project Images - Row Layout */}
        {projectImages.length > 1 && (
          <div className="mb-16">
            {/* First Row - 2 Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {projectImages.slice(1, 3).map((img, idx) => {
                const [loaded, setLoaded] = useState(false);
                const [error, setError] = useState(false);
                return (
                  <div key={idx} className="relative">
                    {!loaded && !error && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                        <div className="text-gray-400">Loading...</div>
                      </div>
                    )}
                    <img
                      src={img}
                      alt={`${project.title} - Image ${idx + 2}`}
                      className={`w-full h-96 lg:h-[500px] rounded-lg shadow-lg object-cover transition duration-300 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
                      loading="lazy"
                      decoding="async"
                      style={{ contentVisibility: 'auto' }}
                      onLoad={() => setLoaded(true)}
                      onError={() => setError(true)}
                    />
                    {error && (
                      <div className="w-full h-96 lg:h-[500px] bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="text-gray-500">Image failed to load</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Second Row - 3 Images */}
            {projectImages.length > 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {projectImages.slice(3, 6).map((img, idx) => {
                  const [loaded, setLoaded] = useState(false);
                  const [error, setError] = useState(false);
                  return (
                    <div key={idx + 3} className="relative">
                      {!loaded && !error && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                          <div className="text-gray-400">Loading...</div>
                        </div>
                      )}
                      <img
                        src={img}
                        alt={`${project.title} - Image ${idx + 5}`}
                        className={`w-full h-80 lg:h-96 rounded-lg shadow-lg object-cover transition duration-300 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
                        loading="lazy"
                        decoding="async"
                        style={{ contentVisibility: 'auto' }}
                        onLoad={() => setLoaded(true)}
                        onError={() => setError(true)}
                      />
                      {error && (
                        <div className="w-full h-80 lg:h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                          <div className="text-gray-500">Image failed to load</div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Third Row - Remaining Images */}
            {projectImages.length > 6 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {projectImages.slice(6).map((img, idx) => {
                  const [loaded, setLoaded] = useState(false);
                  const [error, setError] = useState(false);
                  return (
                    <div key={idx + 6} className="relative">
                      {!loaded && !error && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                          <div className="text-gray-400 text-xs">Loading...</div>
                        </div>
                      )}
                      <img
                        src={img}
                        alt={`${project.title} - Image ${idx + 8}`}
                        className={`w-full h-64 md:h-72 rounded-lg shadow-md object-cover transition duration-300 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
                        loading="lazy"
                        decoding="async"
                        style={{ contentVisibility: 'auto' }}
                        onLoad={() => setLoaded(true)}
                        onError={() => setError(true)}
                      />
                      {error && (
                        <div className="w-full h-64 md:h-72 bg-gray-100 rounded-lg flex items-center justify-center">
                          <div className="text-gray-500 text-xs">Failed</div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Project Description */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="font-playfair text-3xl font-semibold text-charcoal-800 mb-6">
              Project Details
            </h2>
            
            {/* Project Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {project.year && (
                <div>
                  <h3 className="font-inter font-semibold text-charcoal-700 mb-2">Year</h3>
                  <p className="text-charcoal-600">{project.year}</p>
                </div>
              )}
              {project.location && (
                <div>
                  <h3 className="font-inter font-semibold text-charcoal-700 mb-2">Location</h3>
                  <p className="text-charcoal-600">{project.location}</p>
                </div>
              )}
              {project.type && (
                <div>
                  <h3 className="font-inter font-semibold text-charcoal-700 mb-2">Project Type</h3>
                  <p className="text-charcoal-600">{project.type}</p>
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="font-playfair text-xl font-semibold text-charcoal-800 mb-4">
                Design Approach
              </h3>
              <p className="text-charcoal-600 leading-relaxed font-inter text-lg">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;