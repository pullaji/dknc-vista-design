
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { useImageLoader } from '../hooks/useImageLoader';

// Separate component for project cards to avoid hooks in map
interface ProjectCardWithImageProps {
  project: any;
  idx: number;
  navigate: any;
}

const ProjectCardWithImage = React.memo(({ project, idx, navigate }: ProjectCardWithImageProps) => {
  const { imageSrc, loaded, handleLoad, handleError } = useImageLoader({
    src: project.image,
    isPriority: idx < 3,
    width: 800,
    height: 600,
    quality: 75
  });

  return (
    <div
      key={project.id}
      className={
        (idx === 0 || idx === 4)
          ? 'aspect-[3/4] overflow-hidden w-full h-full relative group cursor-pointer'
          : 'aspect-[4/3] overflow-hidden w-full h-full relative group cursor-pointer'
      }
      onClick={() => navigate(`/project/${project.id}`)}
      tabIndex={0}
      role="button"
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') navigate(`/project/${project.id}`); }}
    >
      {/* Placeholder skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
      )}
      
      <img
        src={imageSrc}
        alt={project.title}
        loading={idx < 3 ? "eager" : "lazy"}
        decoding="async"
        {...(idx < 3 ? { fetchpriority: "high" } : {})}
        className={`w-full h-full object-cover rounded-lg transition-all duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'} group-hover:opacity-0 group-hover:scale-105`}
        onLoad={handleLoad}
        onError={handleError}
      />
      {/* Name Only Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white transition-all duration-700 ease-in-out rounded-lg opacity-0 group-hover:opacity-100 focus:opacity-100 transform scale-95 group-hover:scale-100">
        <span className="text-charcoal-800 text-lg md:text-xl font-semibold text-center px-4 font-playfair transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-in-out">{project.title}</span>
      </div>
    </div>
  );
});

const Work = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const categories = ['All', 'Architecture', 'Interior', 'Urban'];
  
  const projects = [
    {
      id: 1,
      title: 'MANEA',
      category: 'Architecture',
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
      location: 'Gachibowli, Hyderabad'
    },
    {
      id: 2,
      title: 'Palliative Care',
      category: 'Architecture',
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
      location: 'Hyderabad'
    },
    {
      id: 3,
      title: 'Santhome Home',
      category: 'Urban',
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
      title: 'MANEA MANIKONDA',
      category: 'Interior',
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
      category: 'Interior',
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
    },
    {
      id: 6,
      title: 'Executive Office',
      category: 'Urban',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      description: 'Sophisticated workspace design for modern business.'
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === selectedCategory.toLowerCase());


  const handleProjectClick = (project) => {
    navigate(`/project/${project.id}`);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Helper to safely get an image from images array or fallback to image or placeholder
  const getImage = (project, idx = 0) =>
    project && Array.isArray(project.images) && project.images[idx]
      ? project.images[idx]
      : project && project.image
        ? project.image
        : '/placeholder.svg'; // fallback to a placeholder image

  // Fixed 2x3 featured grid: 2 rows, 3 columns, portrait column narrower, landscape columns wider
  const featuredGrid = [
    // Row 1
    projects[0] ? { ...projects[0], aspect: 'portrait' } : null, // Portrait (narrow col)
    projects[1] ? { ...projects[1], aspect: 'landscape' } : null, // Landscape (wide col)
    projects[2] ? { ...projects[2], aspect: 'landscape' } : null, // Landscape (wide col)
    // Row 2
    projects[3] ? { ...projects[3], aspect: 'landscape' } : null, // Landscape (wide col)
    projects[4] ? { ...projects[4], aspect: 'portrait' } : null, // Portrait (narrow col)
    projects[5] ? { ...projects[5], aspect: 'landscape' } : null, // Landscape (wide col)
  ].filter(Boolean);

  return (
    <div className="pt-20">
      {/* Featured Projects */}
      <section id="projects-section" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-semibold text-charcoal-800 mb-4">
              Featured Projects
            </h2>
            <p className="text-charcoal-600 max-w-2xl mx-auto">
              A selection of our work showcasing our approach to creating timeless, 
              contextual architecture across residential and commercial spaces.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-inter font-medium transition-all duration-500 ease-in-out transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-charcoal-800 text-cream-50 shadow-lg'
                    : 'bg-cream-100 text-charcoal-600 hover:bg-blush-100 hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Responsive Featured Projects Section - 2 rows, 3 cols, no vertical gap, responsive, with overlays */}
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 auto-rows-[1fr] gap-4 items-stretch transition-all duration-700 ease-in-out">
              {/* Row 1 */}
              {filteredProjects.slice(0, 6).map((project, idx) => (
                <ProjectCardWithImage 
                  key={project.id}
                  project={project}
                  idx={idx}
                  navigate={navigate}
                />
              ))}
            </div>
          </div>

          {/* Any remaining projects in a simple grid */}
          {filteredProjects.length > 9 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
              {filteredProjects.slice(9).map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index + 9}
                  onClick={() => handleProjectClick(project)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Work;
