import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  images?: string[];
  location?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Use project images array if available, otherwise fallback to single image
  const projectImages = project ? (project.images || [project.image]) : [];

  if (!isOpen || !project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg max-w-7xl w-full max-h-[95vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-cream-200 bg-white sticky top-0 z-10">
          <div>
            <h2 className="font-playfair text-3xl font-semibold text-charcoal-800">
              {project.title}
            </h2>
            <p className="text-charcoal-600 font-inter mt-1">{project.category}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-cream-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-charcoal-600" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(95vh-88px)] scrollbar-thin scrollbar-thumb-cream-300 scrollbar-track-cream-100">
          {/* Hero Image - Full Width */}
          {projectImages.length > 0 && (
            <div className="relative bg-cream-100">
              <img
                src={projectImages[0]}
                alt={`${project.title} - Hero Image`}
                className="w-full h-auto object-contain max-h-[70vh]"
              />
            </div>
          )}

          {/* Image Grid Layout */}
          {projectImages.length > 1 && (
            <div className="p-4 md:p-8">
              <div className="max-w-6xl mx-auto">
                <div className="columns-1 md:columns-2 gap-4 space-y-4 mb-8">
                  {projectImages.slice(1).map((image, index) => (
                    <div key={index} className="break-inside-avoid">
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 2}`}
                        className="w-full h-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-300 border border-gray-100"
                        onClick={() => setCurrentImageIndex(index + 1)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Project Description - Full Width at Bottom */}
          <div className="bg-cream-50 p-8">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Project Overview */}
              <section>
                <h3 className="font-playfair text-2xl font-semibold text-charcoal-800 mb-4">
                  Project Overview
                </h3>
                <p className="text-charcoal-600 leading-relaxed font-inter text-lg">
                  {project.description}
                </p>
              </section>

              {/* Project Details */}
              <section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-inter font-medium text-charcoal-800 mb-2">Category</h4>
                    <p className="text-charcoal-600">{project.category}</p>
                  </div>
                  <div>
                    <h4 className="font-inter font-medium text-charcoal-800 mb-2">Year</h4>
                    <p className="text-charcoal-600">2024</p>
                  </div>
                  <div>
                    <h4 className="font-inter font-medium text-charcoal-800 mb-2">Location</h4>
                    <p className="text-charcoal-600">{project.location || 'New York, NY'}</p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Image Gallery Modal Overlay */}
          {currentImageIndex > 0 && (
            <div 
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
              onClick={() => setCurrentImageIndex(0)}
            >
              <div className="relative max-w-[90vw] max-h-[90vh] mx-4 flex items-center justify-center">
                <img
                  src={projectImages[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
                
                {/* Close Gallery */}
                <button
                  onClick={() => setCurrentImageIndex(0)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
                >
                  <X className="w-6 h-6 text-charcoal-800" />
                </button>
                
                {/* Gallery Navigation */}
                {projectImages.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6 text-charcoal-800" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6 text-charcoal-800" />
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;