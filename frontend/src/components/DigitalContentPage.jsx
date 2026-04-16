import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, BookOpen, Film, Music, Library } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { siteData } from '../data/mock';

const DigitalContentPage = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState(null);

  // Click sound effect
  const playClickSound = () => {
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjGG0fPTgjMGHm7A7+OQRQ0PVq3o6qJUFAk+mtv0xG4iBjSJ0/LSfCsF');
    audio.volume = 0.3;
    audio.play().catch(err => console.log('Sound play failed:', err));
  };

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const levels = [
    {
      id: 'basic',
      name: 'BASIC',
      subtitle: 'Level 1',
      color: '#3B9DD9',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      id: 'junior',
      name: 'JUNIOR',
      subtitle: 'Level 2',
      color: '#F5C518',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'senior',
      name: 'SENIOR',
      subtitle: 'Level 3',
      color: '#E91E90',
      gradient: 'from-pink-400 to-pink-600'
    }
  ];

  const sections = [
    { id: 'storyland', name: 'Storyland', icon: BookOpen, color: '#F5C518' }, // SARI
    { id: 'movieland', name: 'Movieland', icon: Film, color: '#DC2626' }, // KIRMIZI
    { id: 'musicland', name: 'Musicland', icon: Music, color: '#6B21A8' }, // KOYU MOR
    { id: 'library', name: 'Library', icon: Library, color: '#92400E' } // KAHVERENGİ
  ];

  const handleSectionClick = (levelId, sectionId) => {
    // Navigate to content page
    navigate(`/digital-content/${levelId}/${sectionId}`);
  };

  const handleLevelClick = (levelId) => {
    setSelectedLevel(selectedLevel === levelId ? null : levelId);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header data={siteData.header} />
      <div className="pt-[72px]" />

      {/* Hero Section - Simple Title Only */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 text-center">
          {/* Title with Ink Free Font */}
          <h1 
            className="text-[42px] md:text-[52px] lg:text-[60px] font-normal text-gray-900 mb-12"
            style={{ fontFamily: "'Ink Free', cursive" }}
          >
            Welcome to Woody Digital World
          </h1>
        </div>
      </section>

      {/* Level Cards Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {levels.map((level) => (
              <div key={level.id} className="flex flex-col items-center">
                {/* Level Card - Premium Button Style */}
                <button
                  onClick={() => {
                    playClickSound();
                    handleLevelClick(level.id);
                  }}
                  className="w-full max-w-[300px] h-[200px] rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 cursor-pointer relative overflow-hidden bg-white"
                  style={{
                    border: `3px solid ${level.color}`,
                    boxShadow: `0 8px 24px 0 ${level.color}40, 0 4px 12px 0 ${level.color}30`
                  }}
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    <h3 
                      className="text-[52px] md:text-[60px] font-normal tracking-wider mb-2"
                      style={{ 
                        fontFamily: "'Magic English', cursive",
                        color: level.color,
                        textShadow: `0 2px 8px ${level.color}40`
                      }}
                    >
                      {level.name}
                    </h3>
                    <p 
                      className="text-[18px] md:text-[20px] font-light"
                      style={{ color: level.color }}
                    >
                      {level.subtitle}
                    </p>
                  </div>
                </button>

                {/* Sub-sections (appear when clicked) - Premium Style */}
                {selectedLevel === level.id && (
                  <div className="mt-6 w-full max-w-[300px] grid grid-cols-2 gap-3 animate-fadeIn">
                    {sections.map((section) => {
                      const Icon = section.icon;
                      return (
                        <button
                          key={section.id}
                          onClick={() => {
                            playClickSound();
                            handleSectionClick(level.id, section.id);
                          }}
                          className="flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 bg-white"
                          style={{
                            border: `2px solid ${section.color}`,
                            boxShadow: `0 4px 16px 0 ${section.color}30`
                          }}
                        >
                          <Icon size={32} style={{ color: section.color }} strokeWidth={2} />
                          <span 
                            className="text-[13px] font-semibold mt-2"
                            style={{ color: section.color }}
                          >
                            {section.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="w-full py-8 bg-gray-50">
        <p className="text-center text-[12px] text-gray-500">
          This is a digital application of Mina Publishing House. All rights reserved.
        </p>
      </section>

      <Footer data={siteData.footer} />
    </div>
  );
};

export default DigitalContentPage;
