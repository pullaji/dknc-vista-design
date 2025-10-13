import React, { memo } from 'react';
import OptimizedImageWithLoader from './OptimizedImageWithLoader';

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

/**
 * EXAMPLE: Updated ProjectCard using OptimizedImageWithLoader
 * 
 * This example shows how to replace the regular <img> tag with
 * the OptimizedImageWithLoader component for WebP support
 */
const ProjectCardExample = memo(({ project, index = 0, onClick }: ProjectCardProps) => {
  return (
    <div 
      className="group cursor-pointer animate-fade-in overflow-hidden transition-all duration-300"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden h-full">
        {/* 
          OptimizedImageWithLoader includes:
          - Built-in placeholder/skeleton (no need for separate div)
          - WebP with fallback to original format
          - Progressive loading with fade-in
          - Error handling
        */}
        <OptimizedImageWithLoader
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-105 block"
          loading={index < 3 ? "eager" : "lazy"}
          isPriority={index < 3}
          quality={75}
          showPlaceholder={true}
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

export default ProjectCardExample;

