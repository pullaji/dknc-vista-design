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
      image: '/assets/1- MANEA_GACHBOWLI/1-title.webp',
      description: 'A sophisticated salon and wellness space featuring contemporary design with warm color palettes, premium materials, and thoughtful spatial planning.',
      images: [
        '/assets/1- MANEA_GACHBOWLI/1-title.webp',
        '/assets/1- MANEA_GACHBOWLI/2.webp',
        '/assets/1- MANEA_GACHBOWLI/3.webp',
        '/assets/1- MANEA_GACHBOWLI/4.webp',
        '/assets/1- MANEA_GACHBOWLI/6.webp',
        '/assets/1- MANEA_GACHBOWLI/7.webp',
        '/assets/1- MANEA_GACHBOWLI/8.webp',
        '/assets/1- MANEA_GACHBOWLI/5.webp',
        '/assets/1- MANEA_GACHBOWLI/9.webp',
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
        '/assets/2- PALLIATIVE CARE/5.webp',
        '/assets/2- PALLIATIVE CARE/4.webp',
        '/assets/2- PALLIATIVE CARE/6..webp',
        '/assets/2- PALLIATIVE CARE/4-1.webp',
        '/assets/2- PALLIATIVE CARE/8.JPG',
        '/assets/2- PALLIATIVE CARE/7.webp',
      ],
      location: 'Hyderabad',
      year: '2023',
      type: 'Healthcare Architecture'
    },
    {
      id: 3,
      title: 'Santhome Home',
      category: 'Architecture',
      image: '/assets/Chennai_Santhome/TITLE.webp',
      description: 'A modern home project located in Santhome, Chennai, blending contemporary design with local context.',
      images: [
        '/assets/Chennai_Santhome/TITLE.webp',
        '/assets/Chennai_Santhome/2.webp',
        '/assets/Chennai_Santhome/3.webp',
        '/assets/Chennai_Santhome/10 (2).webp',
        '/assets/Chennai_Santhome/4.webp',
        '/assets/Chennai_Santhome/11 (2).webp',
        '/assets/Chennai_Santhome/4 (2).webp',
        '/assets/Chennai_Santhome/8 (2).webp',
        '/assets/Chennai_Santhome/5.webp',
        '/assets/Chennai_Santhome/1.webp',
        '/assets/Chennai_Santhome/6 (2).webp',
        '/assets/Chennai_Santhome/9 (2).webp',
      ],
      location: 'Santhome, Chennai',
      year: '2023',
      type: 'Residential Architecture'
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
        '/assets/MANEA_MANIKONDA/6.webp',
        '/assets/MANEA_MANIKONDA/8.webp',
        '/assets/MANEA_MANIKONDA/13.jpg.webp',
        '/assets/MANEA_MANIKONDA/5.webp',
        '/assets/MANEA_MANIKONDA/9.webp',
        '/assets/MANEA_MANIKONDA/10.webp',
        '/assets/MANEA_MANIKONDA/12.jpg.webp',
        '/assets/MANEA_MANIKONDA/11.jpg.webp',
        '/assets/MANEA_MANIKONDA/7.webp',
        '/assets/MANEA_MANIKONDA/14.jpg.webp',
        '/assets/MANEA_MANIKONDA/13.webp',
      ],
      location: 'Manikonda, Hyderabad'
    },
    {
      id: 5,
      title: 'PRACHI & RACHIT',
      category: 'Architecture',
      image: '/assets/PRACHI_AND_RACHIT/tiltle.webp',
      description: 'A bespoke residential project for Prachi & Rachit, featuring elegant and functional spaces.',
      images: [
        '/assets/PRACHI_AND_RACHIT/tiltle.webp',
        '/assets/PRACHI_AND_RACHIT/10.webp',
        '/assets/PRACHI_AND_RACHIT/6.webp',
        '/assets/PRACHI_AND_RACHIT/14.webp',
        '/assets/PRACHI_AND_RACHIT/1.webp',
        '/assets/PRACHI_AND_RACHIT/12.webp',
        '/assets/PRACHI_AND_RACHIT/9.webp',
        '/assets/PRACHI_AND_RACHIT/8.webp',
        '/assets/PRACHI_AND_RACHIT/5.webp',
        '/assets/PRACHI_AND_RACHIT/13.webp',
        '/assets/PRACHI_AND_RACHIT/11.webp',
        '/assets/PRACHI_AND_RACHIT/4.webp',
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
        <div className={`mb-8 ${project.id === 3 ? 'max-w-6xl mx-auto' : project.id === 5 ? 'max-w-7xl mx-auto' : ''}`}>
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
                  className={`w-full h-auto object-cover rounded-lg shadow-lg transition duration-300 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'} ${
                    project.id === 1 ? 'max-h-[1000px]' : project.id === 3 ? 'max-h-[950px]' : project.id === 5 ? 'max-h-[800px]' : ''
                  }`}
                  style={{ 
                    maxHeight: project.id === 1 ? '1000px' : project.id === 3 ? '950px' : project.id === 5 ? '800px' : '95vh', 
                    contentVisibility: 'auto', 
                    objectPosition: 'center 60%' 
                  }}
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
              </div>
            );
          })()}
        </div>

        {/* All Project Images - Grid Layout: Hero, 2-grid, 3-grid, 3-grid */}
        {projectImages.length > 1 && (
          <div className="mb-16">
            {/* Second Row - 2 Images in Grid (3 for Project 3) */}
            {project.id === 3 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
                {projectImages.slice(1, 4).map((img, idx) => {
                  const [loaded, setLoaded] = useState(false);
                  const [error, setError] = useState(false);
                  return (
                    <div 
                      key={idx} 
                      className="relative rounded-lg overflow-visible"
                    >
                      {!loaded && !error && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                          <div className="text-gray-400">Loading...</div>
                        </div>
                      )}
                      <img
                        src={img}
                        alt={`${project.title} - Image ${idx + 2}`}
                        className={`w-full rounded-lg shadow-lg transition-all duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'} h-[400px] lg:h-[500px] object-cover`}
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
            ) : (
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 ${project.id === 3 ? 'max-w-6xl mx-auto' : ''}`}>
                {projectImages.slice(1, 3).map((img, idx) => {
                  const [loaded, setLoaded] = useState(false);
                  const [error, setError] = useState(false);
                  const isProject4 = project.id === 4;
                  const isProject4SecondImage = isProject4 && idx === 0;
                  return (
                  <div 
                    key={idx} 
                    className={`relative rounded-lg ${isProject4 || project.id === 5 || project.id === 3 ? 'overflow-visible' : 'overflow-hidden'}`}
                  >
                    {!loaded && !error && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                        <div className="text-gray-400">Loading...</div>
                      </div>
                    )}
                    <img
                      src={img}
                      alt={`${project.title} - Image ${idx + 2}`}
                      className={`w-full rounded-lg shadow-lg transition-all duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'} ${
                        isProject4SecondImage
                          ? 'h-[500px] lg:h-[700px] object-cover'
                          : (isProject4 && idx === 1)
                            ? 'h-[500px] lg:h-[700px] object-cover'
                            : isProject4 
                              ? 'h-64 lg:h-[230px] object-contain' 
                              : project.id === 2 && idx === 0
                                ? 'h-64 lg:h-[400px] object-cover'
                                : project.id === 2 && idx === 1 
                                  ? 'h-64 lg:h-[400px] object-cover' 
                                  : project.id === 3
                                    ? 'h-[400px] lg:h-[500px] object-cover'
                                    : project.id === 5 && idx === 0
                                      ? 'h-[500px] lg:h-[700px] object-cover'
                                      : project.id === 5 && idx === 1
                                        ? 'h-[500px] lg:h-[700px] object-cover'
                                        : project.id === 5
                                          ? 'h-80 lg:h-[500px] object-cover'
                                          : 'h-96 lg:h-[700px] object-cover'
                      }`}
                      loading="lazy"
                      decoding="async"
                      style={{ contentVisibility: 'auto' }}
                      onLoad={() => setLoaded(true)}
                      onError={() => setError(true)}
                    />
                    {error && !isProject4 && (
                      <div className="w-full h-96 lg:h-[500px] bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="text-gray-500">Image failed to load</div>
                      </div>
                    )}
                  </div>
                  );
                })}
              </div>
            )}

            {/* Third Row - 2 Images in Grid (or 3 for Project 4) */}
            {projectImages.length > 3 && (
              project.id === 4 ? (
                /* Project 4: 2 Column Grid with 8.webp and 13.jpg.webp */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {projectImages.slice(3, 5).map((img, idx) => {
                    const [loaded, setLoaded] = useState(false);
                    const [error, setError] = useState(false);
                    return (
                      <div 
                        key={idx + 3} 
                        className="relative rounded-lg overflow-visible"
                      >
                        {!loaded && !error && (
                          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                            <div className="text-gray-400">Loading...</div>
                          </div>
                        )}
                        <img
                          src={img}
                          alt={`${project.title} - Image ${idx + 4}`}
                          className={`w-full h-[230px] lg:h-[350px] rounded-lg shadow-lg object-cover transition-all duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
                          loading="lazy"
                          decoding="async"
                          style={{ contentVisibility: 'auto' }}
                          onLoad={() => setLoaded(true)}
                          onError={() => setError(true)}
                        />
                      </div>
                    );
                  })}
                          </div>
              ) : project.id === 5 ? (
                /* Project 5: 2 Column Grid with 1.webp and 14.webp (interchanged) */
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* First image - wider (2 columns) */}
                  {(() => {
                    const [loaded, setLoaded] = useState(false);
                    const [error, setError] = useState(false);
                    return (
                      <div 
                        key={4} 
                        className="relative rounded-lg overflow-visible md:col-span-2"
                      >
                        {!loaded && !error && (
                          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                            <div className="text-gray-400">Loading...</div>
                          </div>
                        )}
                        <img
                          src={projectImages[4]}
                          alt={`${project.title} - Image 5`}
                          className={`w-full h-[400px] lg:h-[500px] rounded-lg shadow-lg object-cover transition-all duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
                          loading="lazy"
                          decoding="async"
                          style={{ contentVisibility: 'auto' }}
                          onLoad={() => setLoaded(true)}
                          onError={() => setError(true)}
                        />
                        {error && (
                          <div className="w-full h-[400px] lg:h-[500px] bg-gray-100 rounded-lg flex items-center justify-center">
                            <div className="text-gray-500">Image failed to load</div>
                          </div>
                        )}
                      </div>
                    );
                  })()}
                  {/* Second image - normal width (1 column) */}
                  {(() => {
                    const [loaded, setLoaded] = useState(false);
                    const [error, setError] = useState(false);
                    return (
                      <div 
                        key={3} 
                        className="relative rounded-lg overflow-visible"
                      >
                        {!loaded && !error && (
                          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                            <div className="text-gray-400">Loading...</div>
                          </div>
                        )}
                        <img
                          src={projectImages[3]}
                          alt={`${project.title} - Image 4`}
                          className={`w-full h-[400px] lg:h-[500px] rounded-lg shadow-lg object-cover transition-all duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
                          loading="lazy"
                          decoding="async"
                          style={{ contentVisibility: 'auto' }}
                          onLoad={() => setLoaded(true)}
                          onError={() => setError(true)}
                        />
                        {error && (
                          <div className="w-full h-[400px] lg:h-[500px] bg-gray-100 rounded-lg flex items-center justify-center">
                            <div className="text-gray-500">Image failed to load</div>
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </div>
              ) : (
                project.id === 3 ? (
                  /* Project 3: 2 Column Grid with interchanged images */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-6xl mx-auto">
                    {/* First image - interchanged (was index 5, now first) */}
                    {(() => {
                      const [loaded, setLoaded] = useState(false);
                      const [error, setError] = useState(false);
                      return (
                        <div 
                          key={5} 
                          className="relative rounded-lg overflow-visible"
                        >
                          {!loaded && !error && (
                            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                              <div className="text-gray-400">Loading...</div>
                            </div>
                          )}
                          <img
                            src={projectImages[5]}
                            alt={`${project.title} - Image 6`}
                            className={`w-full rounded-lg shadow-lg transition-all duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'} h-[350px] lg:h-[450px] object-cover`}
                            loading="lazy"
                            decoding="async"
                            style={{ contentVisibility: 'auto' }}
                            onLoad={() => setLoaded(true)}
                            onError={() => setError(true)}
                          />
                          {error && (
                            <div className="w-full h-[350px] lg:h-[450px] bg-gray-100 rounded-lg flex items-center justify-center">
                              <div className="text-gray-500">Image failed to load</div>
                            </div>
                          )}
                        </div>
                      );
                    })()}
                    {/* Second image - interchanged (was index 4, now second) */}
                    {(() => {
                      const [loaded, setLoaded] = useState(false);
                      const [error, setError] = useState(false);
                      return (
                        <div 
                          key={4} 
                          className="relative rounded-lg overflow-visible"
                        >
                          {!loaded && !error && (
                            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                              <div className="text-gray-400">Loading...</div>
                            </div>
                          )}
                          <img
                            src={projectImages[4]}
                            alt={`${project.title} - Image 5`}
                            className={`w-full rounded-lg shadow-lg transition-all duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'} h-[350px] lg:h-[450px] object-cover`}
                            loading="lazy"
                            decoding="async"
                            style={{ contentVisibility: 'auto' }}
                            onLoad={() => setLoaded(true)}
                            onError={() => setError(true)}
                          />
                          {error && (
                            <div className="w-full h-[350px] lg:h-[450px] bg-gray-100 rounded-lg flex items-center justify-center">
                              <div className="text-gray-500">Image failed to load</div>
                            </div>
                          )}
                        </div>
                      );
                    })()}
                  </div>
                ) : (
                  /* Other Projects: 2 Column Grid */
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-8`}>
                    {projectImages.slice(3, 5).map((img, idx) => {
                      const [loaded, setLoaded] = useState(false);
                      const [error, setError] = useState(false);
                      return (
                        <div 
                          key={idx + 3} 
                          className="relative rounded-lg overflow-hidden"
                        >
                          {!loaded && !error && (
                            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                              <div className="text-gray-400">Loading...</div>
                            </div>
                          )}
                          <img
                            src={img}
                            alt={`${project.title} - Image ${idx + 4}`}
                            className={`w-full rounded-lg shadow-lg transition-all duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'} ${
                              project.id === 2 && idx === 1 
                                ? 'h-96 lg:h-[300px] object-cover' 
                                : project.id === 5 && idx === 0
                                  ? 'h-[350px] lg:h-[450px] object-cover'
                                  : project.id === 5 && idx === 1
                                    ? 'h-64 lg:h-[450px] object-cover'
                                    : project.id === 5
                                      ? 'h-64 lg:h-[400px] object-cover'
                                      : 'h-96 lg:h-[300px] object-cover'
                            }`}
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
                )
              )
            )}

            {/* Fourth Row - 3 Column Layout: Different for Project 2 vs others, 2 Column for Project 3 */}
            {projectImages.length > 5 && (
              project.id === 3 ? (
                /* Project 3: 2 Column Grid */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-6xl mx-auto">
                  {projectImages.slice(6, 8).map((img, idx) => {
                    const [loaded, setLoaded] = useState(false);
                    const [error, setError] = useState(false);
                    return (
                      <div 
                        key={idx + 6} 
                        className="relative rounded-lg overflow-visible"
                      >
                        {!loaded && !error && (
                          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                            <div className="text-gray-400">Loading...</div>
                          </div>
                        )}
                        <img
                          src={img}
                          alt={`${project.title} - Image ${idx + 7}`}
                          className={`w-full rounded-lg shadow-lg transition-all duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'} h-[350px] lg:h-[450px] object-cover`}
                          loading="lazy"
                          decoding="async"
                          style={{ contentVisibility: 'auto' }}
                          onLoad={() => setLoaded(true)}
                          onError={() => setError(true)}
                        />
                        {error && (
                          <div className="w-full h-[350px] lg:h-[450px] bg-gray-100 rounded-lg flex items-center justify-center">
                            <div className="text-gray-500">Image failed to load</div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
              <div className={`grid gap-6 mb-8 ${project.id === 5 ? 'grid-cols-1 md:grid-cols-2' : project.id === 3 ? 'grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto' : 'grid-cols-1 md:grid-cols-3'}`}>
                {/* Left Column - Single image (hidden for Project 5) */}
                {project.id !== 5 && (
                  <div className={`relative rounded-lg ${project.id === 4 || project.id === 3 ? 'overflow-visible' : 'overflow-hidden'}`}>
                    {(() => {
                      const [loaded, setLoaded] = useState(false);
                      const [error, setError] = useState(false);
                      const isProject4 = project.id === 4;
                      return (
                        <>
                          {!loaded && !error && (
                            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                              <div className="text-gray-400">Loading...</div>
                            </div>
                          )}
                          <img
                            src={projectImages[5]}
                            alt={`${project.title} - Image 6`}
                            className={`w-full rounded-lg shadow-lg transition-all duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'} ${
                              isProject4 ? 'h-[500px] lg:h-[700px] object-cover' 
                              : project.id === 3 ? 'h-[400px] lg:h-[400px] object-cover'
                              : 'h-96 lg:h-[500px] object-cover'
                            }`}
                            loading="lazy"
                            decoding="async"
                            style={{ contentVisibility: 'auto' }}
                            onLoad={() => setLoaded(true)}
                            onError={() => setError(true)}
                          />
                          {error && !isProject4 && (
                            <div className="w-full h-96 lg:h-[500px] bg-gray-100 rounded-lg flex items-center justify-center">
                              <div className="text-gray-500">Image failed to load</div>
                            </div>
                          )}
                        </>
                      );
                    })()}
                  </div>
                )}
                
                {/* Middle Column - Different layout for Project 2 */}
                {project.id === 2 ? (
                  /* Project 2: Single image (8.JPG) */
                  <div className="relative overflow-hidden rounded-lg">
                    {(() => {
                      const [loaded, setLoaded] = useState(false);
                      const [error, setError] = useState(false);
                      return (
                        <>
                          {!loaded && !error && (
                            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                              <div className="text-gray-400">Loading...</div>
                            </div>
                          )}
                          <img
                            src={projectImages[6]}
                            alt={`${project.title} - Image 7`}
                            className={`w-full h-96 lg:h-[500px] rounded-lg shadow-lg object-cover transition-all duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
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
                        </>
                      );
                    })()}
                  </div>
                ) : (
                  /* Other Projects: Two images stacked vertically (or single for Project 4/5) */
                  project.id === 4 ? (
                    /* Project 4: Single image (Image 8 - 5.webp) */
                    projectImages.length > 6 && (
                      <div className="relative rounded-lg overflow-visible">
                        {(() => {
                          const [loaded, setLoaded] = useState(false);
                          const [error, setError] = useState(false);
                          return (
                            <>
                              {!loaded && !error && (
                                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                                  <div className="text-gray-400">Loading...</div>
                                </div>
                              )}
                              <img
                                src={projectImages[6]}
                                alt={`${project.title} - Image 8`}
                                className={`w-full h-[500px] lg:h-[700px] rounded-lg shadow-lg object-cover transition-all duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
                                loading="lazy"
                                decoding="async"
                                style={{ contentVisibility: 'auto' }}
                                onLoad={() => setLoaded(true)}
                                onError={() => setError(true)}
                              />
                            </>
                          );
                        })()}
                      </div>
                    )
                  ) : project.id === 5 ? (
                    /* Project 5: Single image (9.webp) - 1st image in Row 4 */
                    projectImages.length > 6 && (
                      <div className="relative rounded-lg overflow-visible">
                        {(() => {
                          const [loaded, setLoaded] = useState(false);
                          const [error, setError] = useState(false);
                          return (
                            <>
                              {!loaded && !error && (
                                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                                  <div className="text-gray-400">Loading...</div>
                                </div>
                              )}
                              <img
                                src={projectImages[6]}
                                alt={`${project.title} - Image 7`}
                                className={`w-full h-[500px] lg:h-[700px] rounded-lg shadow-lg object-cover transition-all duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
                                style={{ contentVisibility: 'auto' }}
                                loading="lazy"
                                decoding="async"
                                onLoad={() => setLoaded(true)}
                                onError={() => setError(true)}
                              />
                            </>
                          );
                        })()}
                      </div>
                    )
                  ) : (
                  <div className="space-y-4">
                    {projectImages.slice(6, 8).map((img, idx) => {
                      const [loaded, setLoaded] = useState(false);
                      const [error, setError] = useState(false);
                      return (
                        <div 
                          key={idx + 6} 
                          className="relative overflow-hidden rounded-lg"
                        >
                          {!loaded && !error && (
                            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                              <div className="text-gray-400">Loading...</div>
                            </div>
                          )}
                            <img
                              src={img}
                              alt={`${project.title} - Image ${idx + 7}`}
                              className={`w-full rounded-lg shadow-lg object-cover transition-all duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'} ${
                                project.id === 3 ? 'h-32 lg:h-[160px]' : 'h-44 lg:h-[240px]'
                              }`}
                              loading="lazy"
                              decoding="async"
                              style={{ contentVisibility: 'auto' }}
                              onLoad={() => setLoaded(true)}
                              onError={() => setError(true)}
                            />
                          {error && (
                            <div className={`w-full bg-gray-100 rounded-lg flex items-center justify-center ${
                              project.id === 3 ? 'h-32 lg:h-[160px]' : 'h-44 lg:h-[240px]'
                            }`}>
                              <div className="text-gray-500">Image failed to load</div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  )
                )}
                
                {/* Right Column - Different for Project 2 vs others */}
                {project.id === 2 ? (
                  /* Project 2: Single image (7.webp) */
                  projectImages.length > 7 && (
                    <div className="relative overflow-hidden rounded-lg">
                      {(() => {
                        const [loaded, setLoaded] = useState(false);
                        const [error, setError] = useState(false);
                        return (
                          <>
                            {!loaded && !error && (
                              <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                                <div className="text-gray-400">Loading...</div>
                              </div>
                            )}
                            <img
                              src={projectImages[7]}
                              alt={`${project.title} - Image 8`}
                              className={`w-full h-96 lg:h-[500px] rounded-lg shadow-lg object-cover transition-all duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
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
                          </>
                        );
                      })()}
                    </div>
                  )
                ) : (
                  /* Other Projects: Single image (9.webp) */
                  projectImages.length > 8 && (
                    <div className={`relative rounded-lg ${project.id === 4 || project.id === 5 ? 'overflow-visible' : 'overflow-hidden'}`}>
                      {(() => {
                        const [loaded, setLoaded] = useState(false);
                        const [error, setError] = useState(false);
                        const isProject4 = project.id === 4;
                        return (
                          <>
                            {!loaded && !error && (
                              <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                                <div className="text-gray-400">Loading...</div>
                              </div>
                            )}
                            <img
                              src={isProject4 ? projectImages[7] : project.id === 5 ? projectImages[7] : projectImages[8]}
                              alt={`${project.title} - Image ${project.id === 5 ? '8' : '9'}`}
                              className={`w-full rounded-lg shadow-lg transition-all duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'} ${
                                isProject4 ? 'h-[500px] lg:h-[700px] object-cover' 
                                : project.id === 3 ? 'h-48 lg:h-[200px] object-contain'
                                : project.id === 5 ? 'h-[500px] lg:h-[700px] object-cover'
                                : 'h-96 lg:h-[500px] object-cover'
                              }`}
                              loading="lazy"
                              decoding="async"
                              style={{ contentVisibility: 'auto' }}
                              onLoad={() => setLoaded(true)}
                              onError={() => setError(true)}
                            />
                            {error && !isProject4 && (
                              <div className={`w-full bg-gray-100 rounded-lg flex items-center justify-center ${
                                project.id === 5 ? 'h-[450px] lg:h-[400px]' : 'h-96 lg:h-[900px]'
                              }`}>
                                <div className="text-gray-500">Image failed to load</div>
                              </div>
                            )}
                          </>
                        );
                      })()}
                    </div>
                  )
                )}
              </div>
              )
            )}

            {/* Fifth Row - Project 3: 2 Images */}
            {project.id === 3 && projectImages.length > 8 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-6xl mx-auto">
                {projectImages.slice(8, 10).map((img, idx) => {
                  const [loaded, setLoaded] = useState(false);
                  const [error, setError] = useState(false);
                  return (
                    <div 
                      key={idx + 8} 
                      className="relative rounded-lg overflow-visible"
                    >
                      {!loaded && !error && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                          <div className="text-gray-400">Loading...</div>
                        </div>
                      )}
                      <img
                        src={img}
                        alt={`${project.title} - Image ${idx + 9}`}
                        className={`w-full rounded-lg shadow-lg transition-all duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'} h-[450px] lg:h-[550px] object-cover`}
                        loading="lazy"
                        decoding="async"
                        style={{ contentVisibility: 'auto' }}
                        onLoad={() => setLoaded(true)}
                        onError={() => setError(true)}
                      />
                      {error && (
                        <div className="w-full h-[450px] lg:h-[550px] bg-gray-100 rounded-lg flex items-center justify-center">
                          <div className="text-gray-500">Image failed to load</div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Sixth Row - Project 3: 2 Images */}
            {project.id === 3 && projectImages.length > 10 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-6xl mx-auto">
                {projectImages.slice(10, 12).map((img, idx) => {
                  const [loaded, setLoaded] = useState(false);
                  const [error, setError] = useState(false);
                  return (
                    <div 
                      key={idx + 10} 
                      className="relative rounded-lg overflow-visible"
                    >
                      {!loaded && !error && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                          <div className="text-gray-400">Loading...</div>
                        </div>
                      )}
                      <img
                        src={img}
                        alt={`${project.title} - Image ${idx + 11}`}
                        className={`w-full rounded-lg shadow-lg transition-all duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'} h-[350px] lg:h-[450px] object-cover`}
                        loading="lazy"
                        decoding="async"
                        style={{ contentVisibility: 'auto' }}
                        onLoad={() => setLoaded(true)}
                        onError={() => setError(true)}
                      />
                      {error && (
                        <div className="w-full h-[350px] lg:h-[450px] bg-gray-100 rounded-lg flex items-center justify-center">
                          <div className="text-gray-500">Image failed to load</div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Fifth Row - Remaining Images (if any more than 9) */}
            {projectImages.length > 9 && project.id !== 3 && (
              project.id === 5 ? (
                /* Project 5: 3 column grid with 2nd image wider */
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* First image - normal width (1 column) */}
                  {(() => {
                    const [loaded, setLoaded] = useState(false);
                    const [error, setError] = useState(false);
                    return (
                      <div 
                        key={9} 
                        className="relative overflow-visible"
                      >
                        {!loaded && !error && (
                          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                            <div className="text-gray-400 text-xs">Loading...</div>
                          </div>
                        )}
                        <img
                          src={projectImages[9]}
                          alt={`${project.title} - Image 10`}
                          className={`w-full rounded-lg shadow-md transition duration-300 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'} h-80 md:h-96 object-cover`}
                          loading="lazy"
                          decoding="async"
                          style={{ contentVisibility: 'auto' }}
                          onLoad={() => setLoaded(true)}
                          onError={() => setError(true)}
                        />
                        {error && (
                          <div className="w-full h-80 md:h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                            <div className="text-gray-500 text-xs">Failed</div>
                          </div>
                        )}
                      </div>
                    );
                  })()}
                  {/* Second image - wider (2 columns) */}
                  {(() => {
                    const [loaded, setLoaded] = useState(false);
                    const [error, setError] = useState(false);
                    return (
                      <div 
                        key={10} 
                        className="relative overflow-visible md:col-span-2"
                      >
                        {!loaded && !error && (
                          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                            <div className="text-gray-400 text-xs">Loading...</div>
                          </div>
                        )}
                        <img
                          src={projectImages[10]}
                          alt={`${project.title} - Image 11`}
                          className={`w-full rounded-lg shadow-md transition duration-300 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'} h-80 md:h-96 object-cover`}
                          loading="lazy"
                          decoding="async"
                          style={{ contentVisibility: 'auto' }}
                          onLoad={() => setLoaded(true)}
                          onError={() => setError(true)}
                        />
                        {error && (
                          <div className="w-full h-80 md:h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                            <div className="text-gray-500 text-xs">Failed</div>
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </div>
              ) : (
                project.id === 4 ? (
                  /* Project 4: 3 column grid with 1st image wider */
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* First image - wider (2 columns) */}
                    {(() => {
                      const [loaded, setLoaded] = useState(false);
                      const [error, setError] = useState(false);
                      return (
                        <div 
                          key={9} 
                          className="relative overflow-visible md:col-span-2"
                        >
                          {!loaded && !error && (
                            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                              <div className="text-gray-400 text-xs">Loading...</div>
                            </div>
                          )}
                          <img
                            src={projectImages[9]}
                            alt={`${project.title} - Image 10`}
                            className={`w-full rounded-lg shadow-md transition duration-300 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'} h-48 md:h-56 object-cover`}
                            loading="lazy"
                            decoding="async"
                            style={{ contentVisibility: 'auto' }}
                            onLoad={() => setLoaded(true)}
                            onError={() => setError(true)}
                          />
                        </div>
                      );
                    })()}
                    {/* Second image - normal width (1 column) */}
                    {(() => {
                      const [loaded, setLoaded] = useState(false);
                      const [error, setError] = useState(false);
                      return (
                        <div 
                          key={10} 
                          className="relative overflow-visible"
                        >
                          {!loaded && !error && (
                            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                              <div className="text-gray-400 text-xs">Loading...</div>
                            </div>
                          )}
                          <img
                            src={projectImages[10]}
                            alt={`${project.title} - Image 11`}
                            className={`w-full rounded-lg shadow-md transition duration-300 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'} h-48 md:h-56 object-cover`}
                            loading="lazy"
                            decoding="async"
                            style={{ contentVisibility: 'auto' }}
                            onLoad={() => setLoaded(true)}
                            onError={() => setError(true)}
                          />
                        </div>
                      );
                    })()}
                  </div>
                ) : (
                  <div className={`grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}>
                    {projectImages.slice(9).map((img, idx) => {
                      const [loaded, setLoaded] = useState(false);
                      const [error, setError] = useState(false);
                      return (
                        <div 
                          key={idx + 9} 
                          className="relative"
                        >
                          {!loaded && !error && (
                            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                              <div className="text-gray-400 text-xs">Loading...</div>
                            </div>
                          )}
                          <img
                            src={img}
                            alt={`${project.title} - Image ${idx + 10}`}
                            className={`w-full rounded-lg shadow-md transition duration-300 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'} h-64 md:h-72 object-cover`}
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
                )
              )
            )}

            {/* Sixth Row - Project 5: 2 Images */}
            {project.id === 5 && projectImages.length > 11 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-10">
                {/* First image - wider (2 columns) */}
                {(() => {
                  const [loaded, setLoaded] = useState(false);
                  const [error, setError] = useState(false);
                  return (
                    <div 
                      key={0} 
                      className="relative rounded-lg overflow-visible md:col-span-2"
                    >
                      {!loaded && !error && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                          <div className="text-gray-400">Loading...</div>
                        </div>
                      )}
                      <img
                        src={projectImages[0]}
                        alt={`${project.title} - Image 12`}
                        className={`w-full h-[350px] lg:h-[450px] rounded-lg shadow-lg object-cover transition-all duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
                        loading="lazy"
                        decoding="async"
                        style={{ contentVisibility: 'auto' }}
                        onLoad={() => setLoaded(true)}
                        onError={() => setError(true)}
                      />
                      {error && (
                        <div className="w-full h-[350px] lg:h-[450px] bg-gray-100 rounded-lg flex items-center justify-center">
                          <div className="text-gray-500">Image failed to load</div>
                        </div>
                      )}
                    </div>
                  );
                })()}
                {/* Second image - normal width (1 column) */}
                {(() => {
                  const [loaded, setLoaded] = useState(false);
                  const [error, setError] = useState(false);
                  return (
                    <div 
                      key={1} 
                      className="relative rounded-lg overflow-visible"
                    >
                      {!loaded && !error && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                          <div className="text-gray-400">Loading...</div>
                        </div>
                      )}
                      <img
                        src={projectImages[11]}
                        alt={`${project.title} - Image 13`}
                        className={`w-full h-[350px] lg:h-[450px] rounded-lg shadow-lg object-cover transition-all duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
                        loading="lazy"
                        decoding="async"
                        style={{ contentVisibility: 'auto' }}
                        onLoad={() => setLoaded(true)}
                        onError={() => setError(true)}
                      />
                      {error && (
                        <div className="w-full h-[350px] lg:h-[450px] bg-gray-100 rounded-lg flex items-center justify-center">
                          <div className="text-gray-500">Image failed to load</div>
                        </div>
                      )}
                    </div>
                  );
                })()}
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
