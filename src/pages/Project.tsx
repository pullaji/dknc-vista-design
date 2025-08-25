import { useParams, Navigate } from 'react-router-dom';
import React, { useState } from 'react';

const Project = () => {
  const { id } = useParams();
  
  // Project data (same as in Work.tsx - in a real app this would come from a data source)
  const projects = [
    {
      id: 1,
      title: 'MANEA – GACHIBOWLI',
      category: 'ARCHITECTURE',
      image: '/assets/1- MANEA_GACHBOWLI/1- TITLE PAGE.jpg',
      description: 'A sophisticated salon and wellness space featuring contemporary design with warm color palettes, premium materials, and thoughtful spatial planning.',
      images: [
        '/assets/1- MANEA_GACHBOWLI/1- TITLE PAGE.jpg',
        '/assets/1- MANEA_GACHBOWLI/2.jpg',
        '/assets/1- MANEA_GACHBOWLI/3.jpg',
        '/assets/1- MANEA_GACHBOWLI/4 .jpg',
        '/assets/1- MANEA_GACHBOWLI/5.jpg',
        '/assets/1- MANEA_GACHBOWLI/6.jpg',
        '/assets/1- MANEA_GACHBOWLI/7.jpg',
        '/assets/1- MANEA_GACHBOWLI/8.jpg',
      ],
      location: 'Gachibowli, Hyderabad',
      year: '2024',
      type: 'Commercial Interior'
    },
    {
      id: 2,
      title: 'Palliative Care – Hyderabad',
      category: 'ARCHITECTURE',
      image: '/assets/2- PALLIATIVE CARE/1-TITLE.jpg',
      description: 'A thoughtfully designed healthcare facility focused on comfort and healing, featuring warm neutral tones, natural light, and carefully planned spaces for patients and families.',
      images: [
        '/assets/2- PALLIATIVE CARE/1-TITLE.jpg',
        '/assets/2- PALLIATIVE CARE/2.jpg',
        '/assets/2- PALLIATIVE CARE/3.gif',
        '/assets/2- PALLIATIVE CARE/4-1.jpg',
        '/assets/2- PALLIATIVE CARE/4.jpg',
        '/assets/2- PALLIATIVE CARE/5.jpg',
        '/assets/2- PALLIATIVE CARE/6.jpg',
        '/assets/2- PALLIATIVE CARE/7.jpg',
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
      image: '/assets/Chennai Santhome/Tittle.jpg.jpg',
      description: 'A modern home project located in Santhome, Chennai, blending contemporary design with local context.',
      images: [
        '/assets/Chennai Santhome/Tittle.jpg.jpg',
        '/assets/Chennai Santhome/1.jpg.jpg',
        '/assets/Chennai Santhome/2.jpg.jpg',
        '/assets/Chennai Santhome/3.jpg.jpg',
        '/assets/Chennai Santhome/4.jpg.jpg',
        '/assets/Chennai Santhome/5.jpg.jpg',
        '/assets/Chennai Santhome/6.jpg.jpg',
      ],
      location: 'Santhome, Chennai'
    },
    {
      id: 4,
      title: 'MANEA – MANIKONDA',
      category: 'Architecture',
      image: '/assets/MANEA_MANIKONDA/Title.jpg.jpg',
      description: 'A contemporary residential project in Manikonda, Hyderabad, designed for modern living with elegant spaces.',
      images: [
        '/assets/MANEA_MANIKONDA/Title.jpg.jpg',
        '/assets/MANEA_MANIKONDA/1.jpg.jpg',
        '/assets/MANEA_MANIKONDA/2.jpg.jpg',
        '/assets/MANEA_MANIKONDA/3.jpg.jpg',
        '/assets/MANEA_MANIKONDA/4.jpg.jpg',
        '/assets/MANEA_MANIKONDA/6.jpg.jpg',
        '/assets/MANEA_MANIKONDA/7.jpg.jpg',
        '/assets/MANEA_MANIKONDA/8.jpg.jpg',
        '/assets/MANEA_MANIKONDA/9.jpg.jpg',
        '/assets/MANEA_MANIKONDA/10.jpg.jpg',
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
      image: '/assets/PRACHI & RACHIT/Title.jpg.jpg',
      description: 'A bespoke residential project for Prachi & Rachit, featuring elegant and functional spaces.',
      images: [
        '/assets/PRACHI & RACHIT/Title.jpg.jpg',
        '/assets/PRACHI & RACHIT/1.jpg.jpg',
        '/assets/PRACHI & RACHIT/3.jpg.jpg',
        '/assets/PRACHI & RACHIT/4.jpg.jpg',
        '/assets/PRACHI & RACHIT/5.jpg.jpg',
        '/assets/PRACHI & RACHIT/6.jpg.jpg',
        '/assets/PRACHI & RACHIT/7.jpg.jpg',
        '/assets/PRACHI & RACHIT/8.jpg.jpg',
        '/assets/PRACHI & RACHIT/9.jpg.jpg',
        '/assets/PRACHI & RACHIT/10.jpg.jpg',
        '/assets/PRACHI & RACHIT/11.jpg.jpg',
        '/assets/PRACHI & RACHIT/12.jpg.jpg',
        '/assets/PRACHI & RACHIT/13.jpg.jpg',
        '/assets/PRACHI & RACHIT/14.jpg.jpg',
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
            return (
              <img
                src={projectImages[0]}
                alt={project.title}
                className={`w-full h-auto object-cover rounded-lg shadow-lg transition duration-300 ease-in-out ${loaded ? '' : 'blur-sm'}`}
                style={{ maxHeight: '70vh' }}
                fetchPriority="high"
                onLoad={() => setLoaded(true)}
                srcSet={projectImages[0].endsWith('.webp') ? undefined : projectImages[0].replace(/\.(jpg|jpeg|png)$/i, '.webp') + ' 1x, ' + projectImages[0] + ' 2x'}
              />
            );
          })()}
        </div>

        {/* All Project Images Masonry Grid */}
        {projectImages.length > 1 && (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 mb-16">
            {projectImages.slice(1).map((img, idx) => {
              const [loaded, setLoaded] = useState(false);
              return (
                <img
                  key={idx}
                  src={img}
                  alt={`${project.title} - Image ${idx + 2}`}
                  className={`w-full mb-6 rounded-lg shadow-md object-contain transition duration-300 ease-in-out ${loaded ? '' : 'blur-sm'}`}
                  loading="lazy"
                  onLoad={() => setLoaded(true)}
                  srcSet={img.endsWith('.webp') ? undefined : img.replace(/\.(jpg|jpeg|png)$/i, '.webp') + ' 1x, ' + img + ' 2x'}
                />
              );
            })}
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