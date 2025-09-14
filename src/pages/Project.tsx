import { useParams, Navigate } from 'react-router-dom';
import React, { useState } from 'react';

const Project = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  
  // Project data (same as in Work.tsx - in a real app this would come from a data source)
  const projects = [
    {
      id: 1,
      title: 'MANEA',
      category: 'ARCHITECTURE',
      image: '/assets/1- MANEA_GACHBOWLI/1-title.webp',
      description: 'A sophisticated salon and wellness space featuring contemporary design with warm color palettes, premium materials, and thoughtful spatial planning.',
      images: [
        '/assets/1- MANEA_GACHBOWLI/1-title.webp',
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
      image: '/assets/2- PALLIATIVE CARE/1-TITLE.webp',
      description: 'A thoughtfully designed healthcare facility focused on comfort and healing, featuring warm neutral tones, natural light, and carefully planned spaces for patients and families.',
      images: [
        '/assets/2- PALLIATIVE CARE/1-TITLE.webp',
        '/assets/2- PALLIATIVE CARE/2.webp',
        '/assets/2- PALLIATIVE CARE/3.webp',
        '/assets/2- PALLIATIVE CARE/4-1.webp',
        '/assets/2- PALLIATIVE CARE/4.webp',
        '/assets/2- PALLIATIVE CARE/5.webp',
        '/assets/2- PALLIATIVE CARE/6..webp',
        '/assets/2- PALLIATIVE CARE/7.webp',
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
      image: '/assets/Chennai Santhome/TITLE.webp',
      description: 'A modern home project located in Santhome, Chennai, blending contemporary design with local context.',
      images: [
        '/assets/Chennai Santhome/TITLE.webp',
        '/assets/Chennai Santhome/1.webp',
        '/assets/Chennai Santhome/2.webp',
        '/assets/Chennai Santhome/3.webp',
        '/assets/Chennai Santhome/4.webp',
        '/assets/Chennai Santhome/5.webp',
      ],
      location: 'Santhome, Chennai'
    },
    {
      id: 4,
      title: 'MANEA MANIKONDA',
      category: 'Interior',
      image: '/assets/MANEA_MANIKONDA/1- TITLE.webp',
      description: 'A contemporary salon project in Manikonda, Hyderabad, designed for modern beauty and wellness services with elegant spaces.',
      images: [
        '/assets/MANEA_MANIKONDA/1- TITLE.webp',
        '/assets/MANEA_MANIKONDA/3.webp',
        '/assets/MANEA_MANIKONDA/5.webp',
        '/assets/MANEA_MANIKONDA/6.webp',
        '/assets/MANEA_MANIKONDA/7.webp',
        '/assets/MANEA_MANIKONDA/8.webp',
        '/assets/MANEA_MANIKONDA/9.webp',
        '/assets/MANEA_MANIKONDA/10.webp',
        '/assets/MANEA_MANIKONDA/11.jpg.JPG',
        '/assets/MANEA_MANIKONDA/12.jpg.jpg',
        '/assets/MANEA_MANIKONDA/13.webp',
        '/assets/MANEA_MANIKONDA/13.jpg.jpg',
        '/assets/MANEA_MANIKONDA/14.jpg.jpg',
      ],
      location: 'Manikonda, Hyderabad'
    },
    {
      id: 5,
      title: 'PRACHI & RACHIT',
      category: 'Architecture',
      image: '/assets/PRACHI_AND_RACHIT/TITLE.webp',
      description: 'A bespoke residential project for Prachi & Rachit, featuring elegant and functional spaces.',
      images: [
        '/assets/PRACHI_AND_RACHIT/TITLE.webp',
        '/assets/PRACHI_AND_RACHIT/1.webp',
        '/assets/PRACHI_AND_RACHIT/4.webp',
        '/assets/PRACHI_AND_RACHIT/5.webp',
        '/assets/PRACHI_AND_RACHIT/6.webp',
        '/assets/PRACHI_AND_RACHIT/8.webp',
        '/assets/PRACHI_AND_RACHIT/9.webp',
        '/assets/PRACHI_AND_RACHIT/10.webp',
        '/assets/PRACHI_AND_RACHIT/10.jpg.jpg',
        '/assets/PRACHI_AND_RACHIT/11.webp',
        '/assets/PRACHI_AND_RACHIT/12.webp',
        '/assets/PRACHI_AND_RACHIT/13.jpg.jpg',
      ],
      location: 'Hyderabad'
    }
  ];

  const project = projects.find(p => p.id === parseInt(id || ''));

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const projectImages = project.images || [project.image];

  const openImageModal = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc);
    setSelectedImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setSelectedImageIndex(0);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = selectedImageIndex;
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : projectImages.length - 1;
    } else {
      newIndex = currentIndex < projectImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(projectImages[newIndex]);
    setSelectedImageIndex(newIndex);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeImageModal();
    } else if (e.key === 'ArrowLeft') {
      navigateImage('prev');
    } else if (e.key === 'ArrowRight') {
      navigateImage('next');
    }
  };

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
              <div 
                className="relative cursor-pointer group"
                onClick={() => openImageModal(projectImages[0], 0)}
              >
                {!loaded && !error && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                    <div className="text-gray-400">Loading...</div>
                  </div>
                )}
                <img
                  src={projectImages[0]}
                  alt={project.title}
                  className={`w-full h-auto object-cover rounded-lg shadow-lg transition duration-300 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'} group-hover:opacity-90`}
                  style={{ maxHeight: '80vh', contentVisibility: 'auto' }}
                  loading="eager"
                  {...{ fetchpriority: "high" }}
                  onLoad={() => setLoaded(true)}
                  onError={() => setError(true)}
                />
                {error && (
                  <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-gray-500">Image failed to load</div>
                  </div>
                )}
                {/* Click indicator */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-full p-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                    </svg>
                  </div>
                </div>
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
                <div 
                  key={idx} 
                  className="relative cursor-pointer group"
                  onClick={() => openImageModal(img, idx + 1)}
                >
                  {!loaded && !error && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                      <div className="text-gray-400">Loading...</div>
                    </div>
                  )}
                  <img
                    src={img}
                    alt={`${project.title} - Image ${idx + 2}`}
                    className={`w-full h-96 lg:h-[500px] rounded-lg shadow-lg object-cover transition duration-300 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'} group-hover:opacity-90`}
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
                  {/* Click indicator */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-full p-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                      </svg>
                    </div>
                  </div>
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
                    <div 
                      key={idx + 3} 
                      className="relative cursor-pointer group"
                      onClick={() => openImageModal(img, idx + 4)}
                    >
                      {!loaded && !error && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                          <div className="text-gray-400">Loading...</div>
                        </div>
                      )}
                      <img
                        src={img}
                        alt={`${project.title} - Image ${idx + 5}`}
                        className={`w-full h-80 lg:h-96 rounded-lg shadow-lg object-cover transition duration-300 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'} group-hover:opacity-90`}
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
                      {/* Click indicator */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-full p-2">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                          </svg>
                        </div>
                      </div>
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
                    <div 
                      key={idx + 6} 
                      className="relative cursor-pointer group"
                      onClick={() => openImageModal(img, idx + 7)}
                    >
                      {!loaded && !error && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                          <div className="text-gray-400 text-xs">Loading...</div>
                        </div>
                      )}
                      <img
                        src={img}
                        alt={`${project.title} - Image ${idx + 8}`}
                        className={`w-full h-64 md:h-72 rounded-lg shadow-md object-cover transition duration-300 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'} group-hover:opacity-90`}
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
                      {/* Click indicator */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-full p-1.5">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                          </svg>
                        </div>
                      </div>
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

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-3 transition-all duration-300"
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Navigation Buttons */}
            {projectImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('prev');
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-3 transition-all duration-300"
                  aria-label="Previous image"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15,18 9,12 15,6"></polyline>
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('next');
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-3 transition-all duration-300"
                  aria-label="Next image"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                </button>
              </>
            )}

            {/* Image */}
            <div 
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt={`${project.title} - Image ${selectedImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
                style={{ maxHeight: '90vh' }}
              />
            </div>

            {/* Image Counter */}
            {projectImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm">
                {selectedImageIndex + 1} / {projectImages.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;