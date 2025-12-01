import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const teamMembers = [
    {
      id: 'chaitanya',
      name: 'CHAITANYA GARIKIPATI',
      title: 'CO-FOUNDER & PRINCIPAL ARCHITECT',
      image: '/assets/Profiles/chaitanya.jpg',
      studioName: 'DKNC STUDIO',
      founded: '2018',
      founder: 'Chaitanya Garikipati',
      companyOverview: 'Divya Kruthi & Chaitanya studio (DKNC) is a forward-thinking architectural firm established in 2018. We are committed to excellence, sustainable practices, and community-driven solutions. Our diverse project range focuses on balancing creative vision with practical implementation to ensure high standards of architecture and environmental stewardship.',
      about: 'As a seasoned professional with a diverse background in architecture, Environmental Design and Project management, Chaitanya Garikipati brings a unique blend of creativity and strategic thinking to the table. He holds Bachelor\'s and Master\'s degree in Architecture and Environmental Design, along with extensive experience in Construction Project Management. Throughout his 11-year career, Chaitanya Garikipati has worked with some of the most prestigious architecture firms in the the industry, refining his technical expertise and building a diverse portfolio. His experience on large-scale projects, covering over 800,000 sq. ft. of built environments, has equipped him with extensive knowledge across multiple sectors, further strengthening his proficiency in delivering complex architectural and environmental design solutions. His experience includes overseeing diverse projects from conception to completion, always with an emphasis on client satisfaction and design excellence. Chaitanya\'s ability to communicate effectively with stakeholders across all levels of the construction industry has been instrumental in ensuring the smooth execution of projects. His strategic thinking and strong people management skills have resulted in the successful delivery of numerous initiatives, earning him a reputation for reliability and innovation. At DKNC STUDIO, his responsibilities included managing design consultants, contractors, and authorities to achieve set outcomes. Key tasks involved contract negotiation, budgeting, resource allocation, risk mitigation, and compliance with standards. Additionally, ensured project timelines, quality benchmarks, and smooth project closure. His approach integrates environmental sensitivity, ensuring that designs are not only aesthetically compelling but also aligned with ecological and sustainable principles.',
      education: [
        {
          period: 'Jan 2021 - Oct 2023',
          institution: 'Jawaharlal Nehru Architecture and Fine Arts University (Erstwhile JNTU)',
          location: 'Hyderabad, India',
          degree: 'Masters in Environmental design'
        },
        {
          period: 'Aug 2009 - May 2014',
          institution: 'Jawaharlal Nehru Architecture and Fine Arts University (Erstwhile JNTU)',
          location: 'Hyderabad, India',
          degree: 'Graduation in Bachelors of Architecture'
        }
      ],
      specialties: ['Architecture', 'Environmental Design', 'Project Management', 'Construction Management', 'Strategic Planning', 'Stakeholder Communication', 'People Management'],
      projects: ['Large-scale projects covering over 800,000 sq. ft. of built environments', 'Complex architectural and environmental design solutions', 'Diverse projects from conception to completion'],
      location: 'Hyderabad, India',
      yearsExperience: 11,
      achievements: ['11 years of professional experience in architecture and environmental design', 'Extensive experience in Construction Project Management', 'Worked with prestigious architecture firms', 'Managed large-scale projects over 800,000 sq. ft.', 'Strong reputation for reliability and innovation', 'Expert in stakeholder communication and people management'],
      professionalMemberships: [
        'Council of Architects, COA, New Delhi, India',
        'Indian Institute of Architects, IIA, Hyderabad Chapter',
        'Indian Institute of Interior Designers, IIID, Hyderabad chapter'
      ],
      contact: {
        email: 'Designs@divyakruthi.com',
        phone: '+91 7799391131',
        instagram: 'https://www.instagram.com/divyakruthidesigns?gh-MX2qYV6NV-YNGdaQ-'
      }
    },
    {
      id: 'divya',
      name: 'DIVYA KRUTHI',
      title: 'FOUNDER & PRINCIPAL ARCHITECT',
      image: '/assets/Profiles/divya.jpg',
      studioName: 'DKNC STUDIO',
      founded: '2018',
      founder: 'Divya Kruthi Rangisetty',
      companyOverview: 'Divya Kruthi & Chaitanya studio (DKNC) is a forward-thinking architectural firm established in 2018. We are committed to excellence, sustainable practices, and community-driven solutions. Our diverse project range focuses on balancing creative vision with practical implementation to ensure high standards of architecture and environmental stewardship.',
      about: 'Divya Kruthi is an accomplished architect with over 11 years of professional experience, founding DKNC Studio in 2018. She is a forward-thinking architectural firm that has been redefining spaces through innovative design, sustainable practices, and community-driven solutions. Divya is highly regarded for her meticulous attention to detail and unwavering commitment to creating structures that integrate seamlessly with their surrounding environments. After graduation, she began working for some of the most renowned architecture firms in the industry, honing her skills and building a diverse portfolio. Since 2018, she has been successfully expanding her architectural practice, DKNC Studio, committed to exploring new frontiers in design and sustainability. Her areas of expertise include High End Residential, Commercial, Life style, Public spaces and hospitality, and she is known for her ability to create designs that balance functionality with aesthetics.',
      education: {
        period: 'June 2008 - April 2013',
        institution: 'SCHOOL OF PLANNING AND ARCHITECTURE, JNAFAU',
        location: 'Hyderabad, India',
        degree: 'Bachelor\'s degree in Architecture',
        additional: 'Awarded two gold medals for exceptional academic performance in design'
      },
      specialties: ['Residential Architecture', 'Commercial Architecture', 'Lifestyle & Hospitality', 'Sustainable Design', 'Community-Driven Solutions', 'Environmental Integration', 'Innovative Design', 'Project Management'],
      projects: ['Commercial Buildings - Various innovative commercial spaces', 'Residential Homes - Custom luxury residences', 'Hospitality Projects - Boutique hotels and resorts', 'Public Spaces - Community centers and public areas', 'NGO School Project, Nepal - Rebuilding project after 2015 earthquake'],
      location: 'Hyderabad, India',
      yearsExperience: 11,
      achievements: ['Named among IGEN\'s top 50 under 40', 'Two-time recipient of IIID awards', 'Awarded two gold medals for academic excellence', 'Co-founded DKNC Studio in 2018', 'Successfully executed diverse range of projects', 'Volunteered for NGO school rebuilding in Nepal'],
      professionalMemberships: [
        'Council of Architects (COA), New Delhi, India',
        'Indian Institute of Architects (IIA), Hyderabad Chapter',
        'Indian Institute of Interior Designers (IIID), Hyderabad Chapter'
      ],
      contact: {
        email: 'Designs@divyakruthi.com',
        phone: '+91 7799391131',
        linkedin: 'https://www.linkedin.com/in/divya-kruthi-21492656/'
      }
    }
  ];

  const member = teamMembers.find(m => m.id === id);

  // Set background image for blur effect
  React.useEffect(() => {
    if (member) {
      const container = document.querySelector('.team-member-modal-image-container') as HTMLElement;
      if (container) {
        container.style.setProperty('--bg-image', `url(${member.image})`);
      }
    }
  }, [member?.image]);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-charcoal-800 mb-4">Profile Not Found</h1>
          <button 
            onClick={() => navigate('/us')}
            className="bg-charcoal-800 text-white px-6 py-2 rounded-lg hover:bg-charcoal-700 transition-colors"
          >
            Back to Team
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Photo and Basic Info */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-8">
              {/* Profile Photo */}
              <div className="mb-6 sm:mb-8">
                <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto team-member-modal-image-container">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-member-modal-image"
                  />
                </div>
              </div>

              {/* Name and Title */}
              <div className="text-center mb-6 sm:mb-8 group">
                <h2 className="text-2xl sm:text-3xl font-bold text-charcoal-800 mb-2 transition-all duration-500 ease-in-out group-hover:text-blush-600">
                  {member.name}
                </h2>
                <p className="text-lg sm:text-xl text-blush-600 font-semibold transition-all duration-500 ease-in-out group-hover:text-charcoal-800">
                  {member.title}
                </p>
                {/* Subtle underline animation */}
                <div className="w-0 group-hover:w-24 h-0.5 bg-blush-500 mx-auto transition-all duration-700 ease-in-out mt-2"></div>
              </div>

              {/* Studio Name */}
              <div className="text-center group">
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal-800 transition-all duration-500 ease-in-out group-hover:text-blush-600 group-hover:scale-105">
                  {member.studioName}
                </h3>
                {/* Subtle glow effect */}
                <div className="w-0 group-hover:w-32 h-1 bg-gradient-to-r from-transparent via-blush-500 to-transparent mx-auto transition-all duration-700 ease-in-out mt-1 opacity-0 group-hover:opacity-100"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Detailed Information */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">

            {/* Company Overview */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-charcoal-800 mb-3 sm:mb-4">
                Company Overview:
              </h3>
              <p className="text-charcoal-600 leading-relaxed text-sm sm:text-base">
                {member.companyOverview}
              </p>
            </div>

            {/* About Principal Architect */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-charcoal-800 mb-3 sm:mb-4">
                About Principal Architect:
              </h3>
              <p className="text-charcoal-600 leading-relaxed mb-4 text-sm sm:text-base">
                {member.about}
              </p>
              
              {/* Education Section for Divya Kruthi */}
              {member.id === 'divya' && member.education && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-base sm:text-lg font-semibold text-charcoal-800 mb-2">
                    Education:
                  </h4>
                  <div className="text-charcoal-600 text-sm sm:text-base">
                    <p className="mb-2">
                      <span className="font-medium">Period:</span> {member.education.period}
                    </p>
                    <p className="mb-2">
                      <span className="font-medium">Institution:</span> {member.education.institution}
                    </p>
                    <p className="mb-2">
                      <span className="font-medium">Location:</span> {member.education.location}
                    </p>
                    <p className="mb-2">
                      <span className="font-medium">Degree:</span> {member.education.degree}
                    </p>
                    <p className="text-blush-600 font-medium">
                      {member.education.additional}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Key Achievements */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-charcoal-800 mb-3 sm:mb-4">
                Key Achievements:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-charcoal-600 text-sm sm:text-base">
                {member.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>

            {/* Professional Bodies Membership */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-charcoal-800 mb-3 sm:mb-4">
                PROFESSIONAL BODIES MEMBERSHIP:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-charcoal-600 text-sm sm:text-base">
                {member.professionalMemberships.map((membership, index) => (
                  <li key={index}>{membership}</li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-charcoal-800 mb-3 sm:mb-4">
                Contact Information:
              </h3>
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg space-y-2 text-sm sm:text-base">
                <div><span className="font-semibold">Email:</span> {member.contact.email}</div>
                <div><span className="font-semibold">Phone:</span> {member.contact.phone}</div>
                {member.contact.linkedin && (
                  <div><span className="font-semibold">LinkedIn:</span> <a href={member.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blush-600 hover:underline">{member.contact.linkedin}</a></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Profile;
