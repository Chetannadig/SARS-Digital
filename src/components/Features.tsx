import React, { useState } from 'react';
import { Trophy, Medal, Target, Star, Award, Zap, Laptop, Book, User } from 'lucide-react';
import { FeatureData } from '../types';

// Feature data
const featureData: FeatureData[] = [
  {
    id: 1,
    icon: <Trophy className="w-12 h-12 text-purple-500" />,
    title: "Gamified Learning",
    description: "Turn education into an adventure with points, badges, and leaderboards that make learning addictive and fun.",
    color: "from-purple-500 to-purple-600",
    badges: ["Leaderboards", "Points System", "Achievements"]
  },
  {
    id: 2,
    icon: <Medal className="w-12 h-12 text-orange-500" />,
    title: "Interactive Quizzes",
    description: "Reinforce knowledge with engaging quizzes that adapt to your learning style and pace.",
    color: "from-orange-500 to-orange-600",
    badges: ["Adaptive", "Real-time Feedback", "Progress Tracking"]
  },
  {
    id: 3,
    icon: <Target className="w-12 h-12 text-blue-500" />,
    title: "Personalized Paths",
    description: "AI-powered learning paths that adjust to your strengths, weaknesses, and goals.",
    color: "from-blue-500 to-blue-600",
    badges: ["AI-Powered", "Custom Goals", "Skill Analysis"]
  },
  {
    id: 4,
    icon: <Star className="w-12 h-12 text-pink-500" />,
    title: "Social Learning",
    description: "Connect with peers, join study groups, and collaborate on projects in a supportive community.",
    color: "from-pink-500 to-pink-600",
    badges: ["Study Groups", "Discussion Forums", "Peer Reviews"]
  },
  {
    id: 5,
    icon: <Award className="w-12 h-12 text-teal-500" />,
    title: "Certified Courses",
    description: "Earn recognized certificates to showcase your skills and boost your career prospects.",
    color: "from-teal-500 to-teal-600",
    badges: ["Industry Recognized", "Shareable", "Skill Validation"]
  },
  {
    id: 6,
    icon: <Zap className="w-12 h-12 text-yellow-500" />,
    title: "Microlearning",
    description: "Bite-sized lessons designed for busy schedules, perfect for learning on the go.",
    color: "from-yellow-500 to-yellow-600",
    badges: ["5-Min Lessons", "Mobile-First", "Quick Quizzes"]
  }
];

const Features: React.FC = () => {
  const [activeBadge, setActiveBadge] = useState<string | null>(null);

  const handleBadgeClick = (badge: string) => {
    if (activeBadge === badge) {
      setActiveBadge(null);
    } else {
      setActiveBadge(badge);
    }
  };

  return (
    <section id="features" className="py-20 bg-white relative">
      <div className="container-custom">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="flex justify-center mb-4">
            <span className="badge-blue badge inline-flex items-center px-4 py-1.5 rounded-full text-sm">
              <Laptop size={16} className="mr-1.5" />
              Features
            </span>
          </div>
          <h2 className="section-title bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 bg-clip-text text-transparent">
            Learn Smarter, Not Harder
          </h2>
          <p className="section-subtitle">
            Discover how our innovative features transform education from a chore into an engaging journey of discovery.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((feature) => (
            <div 
              key={feature.id}
              className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} text-white`}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              
              {/* Interactive badges */}
              <div className="flex flex-wrap gap-2">
                {feature.badges.map((badge) => (
                  <span 
                    key={badge}
                    onClick={() => handleBadgeClick(badge)}
                    className={`badge bg-gradient-to-r ${feature.color} text-white cursor-pointer transition-all badge-interactive ${
                      activeBadge === badge ? 'scale-110 shadow-md' : ''
                    }`}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Gamification showcase */}
        <div className="mt-20 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl overflow-hidden shadow-xl p-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
              <div className="badge badge-purple mb-4 inline-flex">
                <Trophy size={16} className="mr-1.5" />
                Featured
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Gamified Learning Experience</h3>
              <p className="text-gray-600 mb-6">
                Our unique gamification system transforms learning into an exciting journey. Earn points, collect badges, unlock achievements, and climb leaderboards as you master new skills.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 text-purple-500">
                    <Trophy size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Daily Challenges</h4>
                    <p className="text-sm text-gray-500">Complete daily tasks to earn bonus points</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 text-orange-500">
                    <Star size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Skill Progression</h4>
                    <p className="text-sm text-gray-500">Watch your skills level up in real time</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 text-blue-500">
                    <User size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Personal Avatars</h4>
                    <p className="text-sm text-gray-500">Customize your learning identity</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 text-green-500">
                    <Book size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Learning Streaks</h4>
                    <p className="text-sm text-gray-500">Build habits with daily streak rewards</p>
                  </div>
                </div>
              </div>
              
              <a href="#download" className="btn btn-primary inline-flex">Start Your Journey</a>
            </div>
            
            <div className="w-full lg:w-1/2">
              {/* Interactive badges showcase */}
              <div className="relative h-80 w-full bg-gradient-to-br from-purple-900 to-blue-900 rounded-xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl"></div>
                </div>
                
                {/* Animated floating badges */}
                <div className="grid grid-cols-3 gap-4 max-w-md relative z-10">
                  {[
                    { name: "Fast Learner", icon: <Zap size={16} />, color: "badge-orange", delay: "0s" },
                    { name: "Problem Solver", icon: <Target size={16} />, color: "badge-blue", delay: "1.5s" },
                    { name: "Team Player", icon: <User size={16} />, color: "badge-purple", delay: "1s" },
                    { name: "Knowledge Master", icon: <Book size={16} />, color: "badge-blue", delay: "2s" },
                    { name: "Top Performer", icon: <Trophy size={16} />, color: "badge-orange", delay: "0.5s" },
                    { name: "Achievement Hunter", icon: <Award size={16} />, color: "badge-purple", delay: "2.5s" },
                  ].map((badge, index) => (
                    <div 
                      key={index}
                      className={`badge ${badge.color} badge-interactive flex items-center justify-center px-3 py-2 animate-float`}
                      style={{ animationDelay: badge.delay }}
                    >
                      {badge.icon}
                      <span className="ml-1 text-xs md:text-sm">{badge.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;