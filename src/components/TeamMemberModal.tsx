import React from 'react';
import { X, Mail, Phone, Linkedin, MapPin, Calendar, Award, Users } from 'lucide-react';
import '../pages/Us.css';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  experience?: string;
  education?: string;
  specialties?: string[];
  projects?: string[];
  location?: string;
  yearsExperience?: number;
  achievements?: string[];
}

interface TeamMemberModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

const TeamMemberModal: React.FC<TeamMemberModalProps> = ({ member, isOpen, onClose }) => {
  if (!member || !isOpen) return null;

  // Set background image for blur effect
  React.useEffect(() => {
    const container = document.querySelector('.team-member-modal-image-container') as HTMLElement;
    if (container) {
      container.style.setProperty('--bg-image', `url(${member.image})`);
    }
  }, [member.image]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all duration-200 hover:scale-110"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Modal Content */}
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Image and Basic Info */}
          <div className="lg:w-2/5 p-8 bg-gradient-to-br from-blush-50 to-white">
            <div className="text-center">
                             {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto team-member-modal-image-container">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-member-modal-image"
                  />
                </div>
              </div>

              {/* Name and Role */}
              <h2 className="font-playfair text-3xl font-bold text-charcoal-800 mb-2">
                {member.name}
              </h2>
              <p className="text-blush-500 font-inter font-semibold text-lg mb-4">
                {member.role}
              </p>

                             {/* Contact Information - Only Email */}
               <div className="space-y-3 mb-6">
                 {member.email && (
                   <div className="flex items-center justify-center space-x-2 text-charcoal-600">
                     <Mail className="w-4 h-4" />
                     <span className="text-sm">{member.email}</span>
                   </div>
                 )}
               </div>
            </div>
          </div>

          {/* Right Side - Detailed Information */}
          <div className="lg:w-3/5 p-8">
            {/* Bio */}
            <div className="mb-8">
              <h3 className="font-playfair text-2xl font-semibold text-charcoal-800 mb-4">
                About
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                {member.bio}
              </p>
            </div>

            {/* Experience */}
            {member.experience && (
              <div className="mb-8">
                <h3 className="font-playfair text-2xl font-semibold text-charcoal-800 mb-4 flex items-center">
                  <Calendar className="w-6 h-6 mr-2 text-blush-500" />
                  Experience
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  {member.experience}
                </p>
              </div>
            )}

           

            {/* Specialties */}
            {member.specialties && member.specialties.length > 0 && (
              <div className="mb-8">
                <h3 className="font-playfair text-2xl font-semibold text-charcoal-800 mb-4">
                  Specialties
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blush-100 text-blush-700 rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            )}

                         {/* Notable Projects */}
             {member.projects && member.projects.length > 0 && (
               <div className="mb-8">
                 <h3 className="font-playfair text-2xl font-semibold text-charcoal-800 mb-4 flex items-center">
                   <Users className="w-6 h-6 mr-2 text-blush-500" />
                   Notable Projects
                 </h3>
                 <ul className="space-y-2">
                   {member.projects.map((project, index) => (
                     <li key={index} className="flex items-start space-x-2">
                       <div className="w-2 h-2 bg-blush-500 rounded-full mt-2 flex-shrink-0"></div>
                       <span className="text-charcoal-600">{project}</span>
                     </li>
                   ))}
                 </ul>
               </div>
             )}

             {/* Achievements */}
             {member.achievements && member.achievements.length > 0 && (
               <div className="mb-8">
                 <h3 className="font-playfair text-2xl font-semibold text-charcoal-800 mb-4 flex items-center">
                   <Award className="w-6 h-6 mr-2 text-blush-500" />
                   Key Achievements
                 </h3>
                 <ul className="space-y-2">
                   {member.achievements.map((achievement, index) => (
                     <li key={index} className="flex items-start space-x-2">
                       <div className="w-2 h-2 bg-blush-500 rounded-full mt-2 flex-shrink-0"></div>
                       <span className="text-charcoal-600">{achievement}</span>
                     </li>
                   ))}
                 </ul>
               </div>
             )}
           </div>
         </div>
       </div>
     </div>
   );
 };

export default TeamMemberModal;
