
import React, { memo } from 'react';
import { useImageLoader } from '../hooks/useImageLoader';

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

const ProjectCard = memo(({ project, index = 0, onClick }: ProjectCardProps) => {
  const { imageSrc, loaded, handleLoad, handleError } = useImageLoader({
    src: project.image,
    isPriority: index < 3, // First 3 images are priority
    width: 600,
    height: 400,
    quality: 75
  });

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
          className={`w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-105 block ${loaded ? 'opacity-100' : 'opacity-0'}`}
          loading={index < 3 ? "eager" : "lazy"}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
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
});

export default ProjectCard;
