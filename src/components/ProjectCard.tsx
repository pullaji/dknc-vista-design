
import React, { useState, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
  index?: number;
  onClick?: () => void;
}

const ProjectCard = ({ project, index = 0, onClick }: ProjectCardProps) => {
  const [loaded, setLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  // Generate optimized image URLs
  const generateImageSrc = () => {
    if (project.image.includes('unsplash.com')) {
      // Optimize Unsplash images
      return `${project.image}?w=600&h=400&fit=crop&auto=format&q=80`;
    } else if (project.image.includes('/assets/')) {
      // Local assets - use original
      return project.image;
    } else {
      return project.image;
    }
  };

  // Set image source on mount
  useEffect(() => {
    setImageSrc(generateImageSrc());
  }, [project.image]);

  return (
    <div 
      className="group cursor-pointer animate-fade-in overflow-hidden transition-all duration-300"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden h-full">
        {/* Placeholder skeleton */}
        {!loaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        )}
        
        <img
          src={imageSrc}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:scale-110 group-hover:blur-sm block ${loaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => {
            // Fallback to original image if optimized version fails
            setImageSrc(project.image);
          }}
        />
        
        {/* Name Only Overlay */}
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out flex items-center justify-center transform scale-95 group-hover:scale-100">
          <div className="text-center">
            <h3 className="font-playfair text-xl lg:text-2xl font-semibold text-charcoal-800 px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
              {project.title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
