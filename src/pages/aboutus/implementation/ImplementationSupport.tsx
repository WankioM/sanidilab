import React, { useState, useEffect } from 'react';
import {
  HiUser,
  HiClock,
  HiAcademicCap,
  HiCog,
  HiPhone,
  HiMail,
  HiChat,
  HiCheckCircle,
  HiCalendar,
  HiUserGroup,
  HiBookOpen,
  HiSupport,
  HiLightningBolt,
  HiShieldCheck,
  HiArrowRight,
  HiPlay,
  HiStar
} from 'react-icons/hi';

interface SupportFeature {
  id: string;
  title: string;
  titleSwahili: string;
  description: string;
  descriptionSwahili: string;
  icon: React.ReactNode;
  color: string;
  benefits: string[];
  availabilitySwahili: string;
  availability: string;
}

interface SupportPhase {
  id: string;
  phase: string;
  phaseSwahili: string;
  timeframe: string;
  activities: string[];
  deliverables: string[];
  supportLevel: 'Standard' | 'Premium' | 'Enterprise';
  icon: React.ReactNode;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleSwahili: string;
  expertise: string[];
  experience: string;
  avatar: string;
  languages: string[];
}

interface Testimonial {
  id: string;
  company: string;
  person: string;
  role: string;
  content: string;
  contentSwahili: string;
  rating: number;
  implementationTime: string;
  industry: string;
}

const ImplementationSupport: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number>(0);
  const [selectedTeamMember, setSelectedTeamMember] = useState<string>('');
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);

  const supportFeatures: SupportFeature[] = [
    {
      id: 'project-manager',
      title: 'Dedicated Project Manager',
      titleSwahili: 'Meneja wa Mradi wa Mahususi',
      description: 'Personal project manager assigned to oversee your entire Web3 transformation',
      descriptionSwahili: 'Meneja wa mradi wa binafsi anayepangiwa kusimamia mabadiliko yako yote ya Web3',
      icon: <HiUser className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600',
      benefits: [
        'Single point of contact',
        'Weekly progress reports',
        'Risk mitigation planning',
        'Stakeholder communication'
      ],
      availability: 'Business hours + on-demand',
      availabilitySwahili: 'Masaa ya biashara + inapohitajika'
    },
    {
      id: 'technical-support',
      title: '24/7 Technical Support',
      titleSwahili: 'Msaada wa Kiufundi wa Saa 24/7',
      description: 'Round-the-clock technical assistance during implementation phase',
      descriptionSwahili: 'Msaada wa kiufundi wa mzunguko mzima wakati wa hatua ya utekelezaji',
      icon: <HiSupport className="w-8 h-8" />,
      color: 'from-green-500 to-teal-600',
      benefits: [
        'Immediate issue resolution',
        'Multiple contact channels',
        'Expert technical team',
        'Escalation procedures'
      ],
      availability: '24/7 during implementation',
      availabilitySwahili: 'Saa 24/7 wakati wa utekelezaji'
    },
    {
      id: 'training',
      title: 'Custom Training Programs',
      titleSwahili: 'Mipango ya Mafunzo ya Mahususi',
      description: 'Tailored training sessions designed for your team\'s specific needs',
      descriptionSwahili: 'Vipindi vya mafunzo vilivyoundwa kwa mahitaji mahususi ya timu yako',
      icon: <HiAcademicCap className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600',
      benefits: [
        'Role-based curriculum',
        'Hands-on workshops',
        'Certification programs',
        'Ongoing skill development'
      ],
      availability: 'Scheduled sessions + self-paced',
      availabilitySwahili: 'Vipindi vilivyopangwa + kwa kasi yako'
    },
    {
      id: 'maintenance',
      title: 'Ongoing Maintenance',
      titleSwahili: 'Matunzo ya Kuendelea',
      description: 'Continuous optimization and maintenance to ensure peak performance',
      descriptionSwahili: 'Uboreshaji na matunzo ya kuendelea ili kuhakikisha utendaji wa kilele',
      icon: <HiCog className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600',
      benefits: [
        'Performance monitoring',
        'Security updates',
        'Feature enhancements',
        'Proactive maintenance'
      ],
      availability: 'Continuous monitoring',
      availabilitySwahili: 'Ufuatiliaji wa kuendelea'
    }
  ];

  const supportPhases: SupportPhase[] = [
    {
      id: 'pre-implementation',
      phase: 'Pre-Implementation',
      phaseSwahili: 'Kabla ya Utekelezaji',
      timeframe: 'Weeks 1-2',
      activities: [
        'Requirements gathering',
        'System architecture planning',
        'Team onboarding',
        'Timeline finalization'
      ],
      deliverables: [
        'Project charter',
        'Technical specifications',
        'Training schedule',
        'Communication plan'
      ],
      supportLevel: 'Premium',
      icon: <HiCalendar className="w-6 h-6" />
    },
    {
      id: 'implementation',
      phase: 'Implementation',
      phaseSwahili: 'Utekelezaji',
      timeframe: 'Weeks 3-5',
      activities: [
        'System deployment',
        'Integration testing',
        'User acceptance testing',
        'Performance optimization'
      ],
      deliverables: [
        'Deployed platform',
        'Integration reports',
        'Test results',
        'Performance benchmarks'
      ],
      supportLevel: 'Enterprise',
      icon: <HiCog className="w-6 h-6" />
    },
    {
      id: 'go-live',
      phase: 'Go-Live Support',
      phaseSwahili: 'Msaada wa Kuanza',
      timeframe: 'Week 6',
      activities: [
        'Production deployment',
        'Live monitoring',
        'Immediate issue resolution',
        'User support'
      ],
      deliverables: [
        'Live system',
        'Monitoring dashboard',
        'Issue resolution log',
        'User documentation'
      ],
      supportLevel: 'Enterprise',
      icon: <HiLightningBolt className="w-6 h-6" />
    },
    {
      id: 'post-implementation',
      phase: 'Post-Implementation',
      phaseSwahili: 'Baada ya Utekelezaji',
      timeframe: 'Ongoing',
      activities: [
        'Performance monitoring',
        'Optimization recommendations',
        'Feature updates',
        'Continuous training'
      ],
      deliverables: [
        'Monthly reports',
        'Optimization plan',
        'Update roadmap',
        'Training materials'
      ],
      supportLevel: 'Standard',
      icon: <HiShieldCheck className="w-6 h-6" />
    }
  ];

  const teamMembers: TeamMember[] = [
    {
      id: 'sarah',
      name: 'Sarah Mwangi',
      role: 'Senior Project Manager',
      roleSwahili: 'Meneja Mkuu wa Mradi',
      expertise: ['Agile methodology', 'Enterprise software', 'Risk management', 'Stakeholder communication'],
      experience: '8+ years',
      avatar: '👩🏾‍💼',
      languages: ['English', 'Swahili', 'Kikuyu']
    },
    {
      id: 'james',
      name: 'James Ochieng',
      role: 'Lead Technical Architect',
      roleSwahili: 'Muongozi wa Uundaji wa Kiufundi',
      expertise: ['Blockchain integration', 'System architecture', 'API design', 'Security protocols'],
      experience: '10+ years',
      avatar: '👨🏿‍💻',
      languages: ['English', 'Swahili', 'Luo']
    },
    {
      id: 'grace',
      name: 'Grace Njeri',
      role: 'Training Specialist',
      roleSwahili: 'Mtaalamu wa Mafunzo',
      expertise: ['Adult learning', 'Technical documentation', 'User experience', 'Change management'],
      experience: '6+ years',
      avatar: '👩🏾‍🏫',
      languages: ['English', 'Swahili', 'Kikuyu']
    },
    {
      id: 'david',
      name: 'David Kiprop',
      role: 'DevOps Engineer',
      roleSwahili: 'Mhandisi wa DevOps',
      expertise: ['Cloud infrastructure', 'Monitoring systems', 'Performance optimization', 'Security'],
      experience: '7+ years',
      avatar: '👨🏿‍🔧',
      languages: ['English', 'Swahili', 'Kalenjin']
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: '1',
      company: 'Kenya Coffee Cooperative',
      person: 'Mary Wanjiku',
      role: 'Operations Director',
      content: 'The dedicated project manager made our Web3 transition seamless. Sarah was always available and kept us informed every step of the way.',
      contentSwahili: 'Meneja wa mradi wa mahususi alifanya mpito wetu wa Web3 kuwa rahisi. Sarah alikuwa tayari daima na alitujulisha kila hatua.',
      rating: 5,
      implementationTime: '5.5 weeks',
      industry: 'Agriculture'
    },
    {
      id: '2',
      company: 'Nairobi Logistics Ltd',
      person: 'Peter Kamau',
      role: 'CTO',
      content: 'The 24/7 support during implementation was crucial. When we hit technical challenges at 2 AM, the team was there to help immediately.',
      contentSwahili: 'Msaada wa saa 24/7 wakati wa utekelezaji ulikuwa muhimu. Tulipokabiliwa na changamoto za kiufundi saa 2 usiku, timu ilikuwa hapo kusaidia mara moja.',
      rating: 5,
      implementationTime: '6 weeks',
      industry: 'Logistics'
    },
    {
      id: '3',
      company: 'East Africa Bank',
      person: 'Christine Mutiso',
      role: 'Digital Innovation Manager',
      content: 'The custom training program was exceptional. Our team went from Web3 novices to confident users in just 3 weeks.',
      contentSwahili: 'Mpango wa mafunzo wa mahususi ulikuwa wa kipekee. Timu yetu ilivuka kutoka wapya wa Web3 hadi watumiaji wenye uhakika katika wiki 3 tu.',
      rating: 5,
      implementationTime: '6 weeks',
      industry: 'Financial Services'
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Auto-select first team member
  useEffect(() => {
    if (teamMembers.length > 0) {
      setSelectedTeamMember(teamMembers[0].id);
    }
  }, []);

  const getSupportLevelColor = (level: SupportPhase['supportLevel']): string => {
    switch (level) {
      case 'Standard': return 'bg-blue-500';
      case 'Premium': return 'bg-purple-500';
      case 'Enterprise': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <HiStar
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <div className="bg-gray-900 text-gray-100 p-8 rounded-2xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">Implementation Support</h2>
        <p className="text-gray-300 mb-2">Msaada wa Utekelezaji</p>
        <p className="text-gray-400">Comprehensive support throughout your Web3 transformation journey</p>
      </div>

      {/* Support Features Overview */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-200 mb-6">Our Support Framework</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportFeatures.map((feature) => (
            <div key={feature.id} className="bg-gray-800 rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-4 w-fit`}>
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-100 mb-2">{feature.title}</h4>
              <p className="text-orange-400 text-sm mb-3">{feature.titleSwahili}</p>
              <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
              
              <div className="mb-4">
                <span className="text-gray-400 text-xs">Availability:</span>
                <p className="text-green-400 text-sm font-semibold">{feature.availability}</p>
              </div>

              <div className="space-y-1">
                {feature.benefits.slice(0, 2).map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <HiCheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                    <span className="text-gray-400 text-xs">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Implementation Phases */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-200 mb-6">Implementation Timeline</h3>
        
        {/* Phase Selector */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {supportPhases.map((phase, index) => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(index)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activePhase === index
                  ? 'bg-orange-500 text-white transform scale-105'
                  : 'bg-gray-800 text-gray-400 hover:text-gray-200 hover:bg-gray-700'
              }`}
            >
              {phase.icon}
              <span className="hidden sm:block">{phase.phase}</span>
            </button>
          ))}
        </div>

        {/* Active Phase Details */}
        <div className="bg-gray-800 rounded-xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-orange-500 text-2xl">{supportPhases[activePhase].icon}</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-100">{supportPhases[activePhase].phase}</h4>
                  <p className="text-orange-400">{supportPhases[activePhase].phaseSwahili}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-gray-400 text-sm">{supportPhases[activePhase].timeframe}</span>
                    <span className={`px-2 py-1 rounded text-xs font-semibold text-white ${getSupportLevelColor(supportPhases[activePhase].supportLevel)}`}>
                      {supportPhases[activePhase].supportLevel}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h5 className="font-semibold text-gray-200 mb-3">Key Activities:</h5>
                <div className="space-y-2">
                  {supportPhases[activePhase].activities.map((activity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <HiCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-gray-200 mb-3">Deliverables:</h5>
              <div className="space-y-3">
                {supportPhases[activePhase].deliverables.map((deliverable, index) => (
                  <div key={index} className="bg-gray-700 p-3 rounded-lg">
                    <span className="text-gray-300 text-sm">{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Your Team */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-200 mb-6">Meet Your Implementation Team</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Team Members List */}
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedTeamMember === member.id
                    ? 'bg-orange-500/20 border-2 border-orange-500'
                    : 'bg-gray-800 border-2 border-gray-700 hover:border-gray-600'
                }`}
                onClick={() => setSelectedTeamMember(member.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{member.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-gray-100">{member.name}</h4>
                    <p className="text-orange-400 text-sm">{member.role}</p>
                    <p className="text-gray-400 text-xs">{member.roleSwahili}</p>
                    <div className="flex gap-1 mt-1">
                      {member.languages.map((lang, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Member Details */}
          <div className="bg-gray-800 rounded-xl p-6">
            {(() => {
              const member = teamMembers.find(m => m.id === selectedTeamMember);
              if (!member) return null;

              return (
                <>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-5xl">{member.avatar}</div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-100">{member.name}</h4>
                      <p className="text-orange-400">{member.role}</p>
                      <p className="text-gray-400 text-sm">{member.experience} experience</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-200 mb-3">Areas of Expertise:</h5>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-700 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-200 mb-2">Languages:</h5>
                    <div className="flex gap-2">
                      {member.languages.map((language, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-200 mb-6">What Our Clients Say</h3>
        <div className="bg-gray-800 rounded-xl p-8">
          <div className="text-center">
            <div className="mb-4">
              <div className="flex justify-center mb-2">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              <blockquote className="text-lg text-gray-300 italic mb-4">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <p className="text-orange-400 text-sm mb-4">
                "{testimonials[currentTestimonial].contentSwahili}"
              </p>
            </div>
            
            <div className="border-t border-gray-700 pt-4">
              <p className="font-semibold text-gray-100">{testimonials[currentTestimonial].person}</p>
              <p className="text-gray-400 text-sm">{testimonials[currentTestimonial].role}</p>
              <p className="text-orange-400 text-sm">{testimonials[currentTestimonial].company}</p>
              <div className="flex justify-center gap-4 mt-2 text-sm text-gray-500">
                <span>Completed in {testimonials[currentTestimonial].implementationTime}</span>
                <span>•</span>
                <span>{testimonials[currentTestimonial].industry}</span>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentTestimonial === index ? 'bg-orange-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Support CTA */}
      <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-xl p-8 border border-orange-500/30">
        <h3 className="text-2xl font-bold text-orange-500 mb-4 text-center">
          Ready to Start Your Implementation?
        </h3>
        <p className="text-gray-300 text-center mb-8">
          Connect with our implementation team to discuss your project
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="text-center p-4">
            <HiPhone className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-200">Phone Support</h4>
            <p className="text-gray-400 text-sm">+254 700 123 456</p>
          </div>
          <div className="text-center p-4">
            <HiMail className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-200">Email Support</h4>
            <p className="text-gray-400 text-sm">support@sanidi.co.ke</p>
          </div>
          <div className="text-center p-4">
            <HiChat className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-200">Live Chat</h4>
            <p className="text-gray-400 text-sm">Available 24/7</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
            <HiArrowRight className="w-5 h-5" />
            Schedule Implementation Call
          </button>
          <button className="bg-transparent border-2 border-gray-600 text-gray-100 font-semibold px-8 py-3 rounded-lg hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300">
            View Support Documentation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImplementationSupport;