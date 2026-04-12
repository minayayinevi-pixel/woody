import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { siteData } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';

const LibraryPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const levels = [
    {
      id: 'basic',
      name: 'Basic Library',
      color: '#2196F3',
      image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/42a4f404-b669-4acc-93c8-1d42e679e27f/brochure_foldout.jpg',
      imagePosition: 'left',
      teacherLink: '#',
      studentLink: '#'
    },
    {
      id: 'junior',
      name: 'Junior Library',
      color: '#F5C518',
      image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/485b26c1-eb3a-48a7-bab6-437b3938f44c/RenderMan_OCIO_Aces_Header2.jpg',
      imagePosition: 'right',
      teacherLink: '#',
      studentLink: '#'
    },
    {
      id: 'senior',
      name: 'Senior Library',
      color: '#E91E90',
      image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/22305642-e101-4a60-a871-45a6a6d12d44/ember_stills_sdr_0154933.tiff-0.jpg',
      imagePosition: 'left',
      teacherLink: '#',
      studentLink: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header data={siteData.header} />
      <div className="pt-[72px]" />

      {/* Hero Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 text-center">
          <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-light text-gray-900 mb-6 leading-tight">
            An experience like no other
          </h1>
          <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.8] max-w-[800px] mx-auto">
            Our internship and residency programs offer emerging talent an opportunity to dive into the world of animation, from a uniquely Pixar perspective. At the studio, participants collaborate alongside peers and industry professionals, infusing ongoing projects with new ideas and fresh approaches.
          </p>
        </div>
      </section>

      {/* Internships Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 text-center mb-12">
          <h2 className="text-[14px] md:text-[16px] tracking-[0.3em] text-gray-400 font-semibold mb-4">
            I N T E R N S H I P S
          </h2>
          <h3 className="text-[28px] md:text-[36px] font-light text-gray-900 mb-4">
            Learn by doing
          </h3>
          <p className="text-[15px] md:text-[17px] text-gray-600 leading-[1.8] max-w-[700px] mx-auto">
            We offer a range of exciting and immersive internship opportunities. Participants can choose from specialized tracks—by learning through direct mentorship and hands-on training, you'll gain the experience of a lifetime
          </p>
        </div>

        {/* Alternating Sections (Zigzag) */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 space-y-20">
          {levels.map((level, index) => {
            const isLeft = level.imagePosition === 'left';
            
            return (
              <div key={level.id} className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16`}>
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div 
                    className="rounded-2xl overflow-hidden shadow-xl relative"
                    style={{
                      borderLeft: isLeft ? `6px solid ${level.color}` : 'none',
                      borderRight: !isLeft ? `6px solid ${level.color}` : 'none',
                      height: '350px'
                    }}
                  >
                    <img 
                      src={level.image} 
                      alt={level.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <div 
                    className="inline-block px-4 py-1.5 rounded-full text-[13px] font-bold text-white mb-5"
                    style={{ backgroundColor: level.color }}
                  >
                    {level.name}
                  </div>
                  <h4 className="text-[28px] md:text-[32px] font-light text-gray-900 mb-6">
                    {level.name}
                  </h4>
                  
                  {/* Links */}
                  <div className="space-y-3">
                    <a 
                      href={level.teacherLink}
                      className="block text-[15px] text-gray-700 hover:text-gray-900 underline decoration-2 underline-offset-4 transition-colors"
                      style={{ textDecorationColor: level.color }}
                    >
                      {level.id.charAt(0).toUpperCase() + level.id.slice(1)} öğretmen kitaplarını görmek için tıklayın
                    </a>
                    <a 
                      href={level.studentLink}
                      className="block text-[15px] text-gray-700 hover:text-gray-900 underline decoration-2 underline-offset-4 transition-colors"
                      style={{ textDecorationColor: level.color }}
                    >
                      {level.id.charAt(0).toUpperCase() + level.id.slice(1)} öğrenci kitaplarını görmek için tıklayın
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer data={siteData.footer} />
    </div>
  );
};

export default LibraryPage;
