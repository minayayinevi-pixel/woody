import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, BookOpen, Film, Music, Library } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { siteData } from '../data/mock';

const DigitalContentPage = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState(null);

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
    { id: 'storyland', name: 'Storyland', icon: BookOpen, color: '#9C27B0' },
    { id: 'movieland', name: 'Movieland', icon: Film, color: '#2196F3' },
    { id: 'musicland', name: 'Musicland', icon: Music, color: '#FF9800' },
    { id: 'library', name: 'Library', icon: Library, color: '#4CAF50' }
  ];

  const handleLevelClick = (levelId) => {
    setSelectedLevel(selectedLevel === levelId ? null : levelId);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header data={siteData.header} />
      <div className="pt-[72px]" />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 text-center">
          {/* Title */}
          <h1 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold text-gray-900 mb-8">
            Welcome to Woody Digital World
          </h1>

          {/* Woody Characters Image */}
          <div className="mb-8">
            <img
              src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/ccfac1vv_ANA.jpeg"
              alt="Woody Characters"
              className="mx-auto max-w-[600px] w-full"
              style={{ 
                clipPath: 'inset(15% 20% 45% 20%)',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>
      </section>

      {/* Level Cards Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {levels.map((level) => (
              <div key={level.id} className="flex flex-col items-center">
                {/* Level Card */}
                <button
                  onClick={() => handleLevelClick(level.id)}
                  className={`w-full max-w-[280px] h-[240px] rounded-3xl bg-gradient-to-br ${level.gradient} shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer border-none`}
                >
                  <div className="flex flex-col items-center justify-center h-full text-white">
                    <h3 className="text-[48px] md:text-[56px] font-black tracking-wider mb-2">
                      {level.name}
                    </h3>
                    <p className="text-[20px] md:text-[24px] font-light">
                      {level.subtitle}
                    </p>
                  </div>
                </button>

                {/* Sub-sections (appear when clicked) */}
                {selectedLevel === level.id && (
                  <div className="mt-6 w-full max-w-[280px] grid grid-cols-2 gap-3 animate-fadeIn">
                    {sections.map((section) => {
                      const Icon = section.icon;
                      return (
                        <button
                          key={section.id}
                          onClick={() => {
                            // İçerikleri sonra ekleyeceğiz
                            alert(`${level.name} - ${section.name} (İçerik yakında eklenecek)`);
                          }}
                          className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                          style={{ borderColor: section.color }}
                        >
                          <Icon size={32} style={{ color: section.color }} strokeWidth={2} />
                          <span className="text-[13px] font-semibold text-gray-800 mt-2">
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
