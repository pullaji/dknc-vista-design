
import divyaImage from '/assets/Profiles/divya.jpg';
import './Us.css';
import { useNavigate } from 'react-router-dom';

const Us = () => {
  const navigate = useNavigate();
  const teamMembers = [
    {
      id: 'chaitanya',
      name: 'Chaitanya Garikipati',
      role: 'Interior Design Director',
      image: '/assets/Profiles/chaitanya.jpg',
      bio: 'Chaitanya brings a refined aesthetic sensibility to our residential and commercial interior projects, creating spaces that inspire and endure.',
      email: 'chaitanya.garikipati@dnc-architects.com',
      phone: '+1 (555) 234-5678',
      linkedin: 'https://linkedin.com/in/chaitanya-garikipati',
      experience: '12 years specializing in luxury residential and boutique commercial interiors. At DKNC STUDIO, his responsibilities included managing design consultants, contractors, and authorities to achieve set outcomes. Key tasks involved contract negotiation, budgeting, resource allocation, risk mitigation, and compliance with standards. Additionally, ensured project timelines, quality benchmarks, and smooth project closure. His approach integrates environmental sensitivity, ensuring that designs are not only aesthetically compelling but also aligned with ecological and sustainable principles.',
      education: 'Bachelor of Fine Arts in Interior Design, Parsons School of Design\nCertification in Sustainable Interior Design',
      specialties: ['Luxury Residential', 'Boutique Commercial', 'Color Theory', 'Furniture Design', 'Project Management', 'Contract Negotiation', 'Resource Allocation', 'Risk Mitigation', 'Environmental Design'],
      projects: ['Penthouse Interior, Manhattan', 'Boutique Hotel Lobby, Miami', 'Private Residence, Beverly Hills'],
      location: 'Los Angeles, CA',
      yearsExperience: 12
    },
    {
      id: 'divya',
      name: 'Divya Kruthi',
      role: 'Principal Architect & Co-Founder',
      image: divyaImage,
      bio: 'Divya Kruthi is an accomplished architect with over 11 years of professional experience, co-founding DKNC Studio in 2018. She is a forward-thinking architectural firm that has been redefining spaces through innovative design, sustainable practices, and community-driven solutions. Divya is highly regarded for her meticulous attention to detail and unwavering commitment to creating structures that integrate seamlessly with their surrounding environments.',
      email: 'divya.kruthi@dnc-architects.com',
      phone: '+1 (555) 345-6789',
      linkedin: 'https://linkedin.com/in/divya-kruthi',
      experience: 'Over 11 years of professional experience in architecture. After graduation, Divya began working for some of the most renowned architecture firms in the industry, honing her skills and building a diverse portfolio. Since 2018, she has been successfully expanding her architectural practice, DKNC Studio, committed to exploring new frontiers in design and sustainability. Her work spans commercial buildings, residential homes, hospitality projects, and public spaces.',
      education: 'Bachelor of Architecture, Jawaharlal Nehru Architecture and Fine Arts University (Erstwhile JNTU)\nHyderabad, India (June 2008 - April 2013)\nAwarded two gold medals for exceptional academic performance in design',
      specialties: ['Residential Architecture', 'Commercial Architecture', 'Lifestyle & Hospitality', 'Sustainable Design', 'Community-Driven Solutions', 'Environmental Integration', 'Innovative Design', 'Project Management'],
      projects: ['Commercial Buildings - Various innovative commercial spaces', 'Residential Homes - Custom luxury residences', 'Hospitality Projects - Boutique hotels and resorts', 'Public Spaces - Community centers and public areas', 'NGO School Project, Nepal - Rebuilding project after 2015 earthquake'],
      location: 'Hyderabad, India',
      yearsExperience: 11,
      achievements: ['Named among IGEN\'s top 50 under 40', 'Two-time recipient of IIID awards', 'Awarded two gold medals for academic excellence', 'Co-founded DKNC Studio in 2018', 'Successfully executed diverse range of projects', 'Volunteered for NGO school rebuilding in Nepal', 'Member of Council of Architects (COA), New Delhi', 'Member of Indian Institute of Architects (IIA), Hyderabad Chapter', 'Member of Indian Institute of Interior Designers (IIID), Hyderabad Chapter']
    }
  ];

  return (
    <div className="pt-20">
      {/* Studio Introduction */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-5xl font-bold text-charcoal-800 mb-8">
            About DKnC
          </h1>
          <p className="text-xl text-charcoal-600 leading-relaxed mb-12">
            Founded on the principle that great architecture emerges from understanding context, 
            we create spaces that honor their environment while pushing the boundaries of contemporary design.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-blush-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair text-4xl font-semibold text-charcoal-800 mb-6">
                Our Philosophy
              </h2>
              <div className="space-y-6 text-charcoal-600 leading-relaxed">
                <p>
                  At DKnC, we believe architecture should respond to its environment 
                  while transcending time. Our designs emerge from a deep understanding 
                  of place, purpose, and the people who inhabit our spaces.
                </p>
                <p>
                  With a commitment to sustainability and innovation, we create 
                  structures that honor their context while pushing boundaries. Each 
                  project represents a unique collaboration between our vision and our 
                  clients' aspirations.
                </p>
                <p>
                  Our approach is rooted in narrative – every space tells a story, 
                  every detail serves a purpose, and every project contributes to a 
                  legacy of thoughtful, enduring design.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=800&fit=crop"
                alt="Architectural detail"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Profiles */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-semibold text-charcoal-800 mb-4">
              Our Team
            </h2>
            <p className="text-charcoal-600 max-w-2xl mx-auto">
              A collaborative group of architects, designers, and thinkers united by 
              our passion for creating meaningful spaces.
            </p>
          </div>

          <div className="team-grid columns-3">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="team-member-card"
              >
                <div className="team-member-image-container medium grayscale shadow-medium scale-on-hover crop-face">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-member-image"
                  />
                </div>
                <h3 className="team-member-name">
                  {member.name}
                </h3>
                <p className="team-member-role">
                  {member.role}
                </p>
                <p className="team-member-bio">
                  {member.bio}
                </p>
                <div className="mt-6">
                  <button 
                    onClick={() => navigate(`/profile/${member.id}`)}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blush-500 to-blush-600 text-white rounded-xl font-semibold hover:from-blush-600 hover:to-blush-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <span>View Profile</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Us;
