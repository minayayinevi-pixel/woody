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
      name: 'Woody Digital Library – Basic Level',
      description: 'Basic Level Digital Library, başlangıç seviyesindeki öğretmen ve öğrenci kitaplarının incelenebileceği dijital kütüphane alanıdır. Kurumlar, içerik yapısını ve kazanımları önceden görerek sistemi net şekilde değerlendirebilir.',
      color: '#2196F3',
      image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/x7apff07_kling_20260412_%E4%BD%9C%E5%93%81_Ultra_deta_5707_2.png',
      imagePosition: 'left',
      teacherLink: '#',
      studentLink: '#'
    },
    {
      id: 'junior',
      name: 'Woody Digital Library – Junior Level',
      description: 'Junior Level Digital Library, öğrencilerin cümle kurma ve temel iletişim becerilerini geliştirdiği içeriklerin incelenebileceği dijital kütüphane alanıdır. Kurumlar, bu seviyede yer alan öğretmen ve öğrenci kitaplarını inceleyerek sistemin ilerleyen yapısını net şekilde görebilir.',
      color: '#F5C518',
      image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/x7apff07_kling_20260412_%E4%BD%9C%E5%93%81_Ultra_deta_5707_2.png',
      imagePosition: 'right',
      teacherLink: '#',
      studentLink: '#'
    },
    {
      id: 'senior',
      name: 'Woody Digital Library – Senior Level',
      description: 'Senior Level Digital Library, öğrencilerin akıcı iletişim kurduğu ve yapıları birleştirerek kullandığı ileri seviye içeriklerin incelenebileceği dijital kütüphane alanıdır. Kurumlar, öğretmen ve öğrenci kitaplarını inceleyerek programın üst düzey kazanımlarını ve iletişim odaklı yapısını değerlendirebilir.',
      color: '#E91E90',
      image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/x7apff07_kling_20260412_%E4%BD%9C%E5%93%81_Ultra_deta_5707_2.png',
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
            Woody Digital Library Nedir?
          </h1>
          <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.8] max-w-[800px] mx-auto mb-4">
            Woody Digital Library, kurumların eğitim seti içeriklerini önceden inceleyebileceği dijital bir kütüphane alanıdır.
          </p>
          <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.8] max-w-[800px] mx-auto mb-4">
            Bu platform üzerinden hem öğretmen hem de öğrenci kitapları detaylı şekilde görüntülenebilir. Üniteler, içerik yapısı ve kazanımlar incelenerek sistemin nasıl ilerlediği net şekilde görülür.
          </p>
          <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.8] max-w-[800px] mx-auto">
            Woody Digital Library, kurumlara satın alma öncesi şeffaf bir inceleme imkânı sunar ve eğitim modelinin tamamını net bir şekilde değerlendirme fırsatı sağlar.
          </p>
        </div>
      </section>

      {/* Magazine Spread Layout - NO FRAMES */}
      <section 
        style={{ 
          width: '100vw',
          margin: 0,
          padding: 0
        }}
      >
        {levels.map((level) => {
          const isLeft = level.imagePosition === 'left';
          
          return (
            <div 
              key={level.id}
              style={{
                width: '100vw',
                display: 'flex',
                flexDirection: isLeft ? 'row' : 'row-reverse',
                minHeight: '100vh',
                margin: 0,
                padding: 0,
                border: 'none',
                borderRadius: 0,
                boxShadow: 'none'
              }}
            >
              {/* Image Side - RAW, NO CONTAINER */}
              <div
                style={{
                  width: '50vw',
                  height: '100vh',
                  margin: 0,
                  padding: 0,
                  border: 'none',
                  background: 'transparent'
                }}
              >
                <img 
                  src={level.image}
                  alt={level.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    margin: 0,
                    padding: 0,
                    border: 'none',
                    borderRadius: 0,
                    boxShadow: 'none'
                  }}
                />
              </div>

              {/* Text Side - RAW, NO CONTAINER */}
              <div
                style={{
                  width: '50vw',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '80px',
                  margin: 0,
                  border: 'none',
                  background: '#ffffff'
                }}
              >
                <div style={{ maxWidth: '600px' }}>
                  <div 
                    style={{
                      display: 'inline-block',
                      padding: '10px 20px',
                      borderRadius: '25px',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: '#ffffff',
                      backgroundColor: level.color,
                      marginBottom: '24px'
                    }}
                  >
                    {level.id.charAt(0).toUpperCase() + level.id.slice(1)} Level
                  </div>
                  
                  <h4 
                    style={{
                      fontSize: '38px',
                      fontWeight: '300',
                      color: '#111827',
                      marginBottom: '20px',
                      lineHeight: '1.2'
                    }}
                  >
                    {level.name}
                  </h4>
                  
                  <p 
                    style={{
                      fontSize: '17px',
                      color: '#4B5563',
                      lineHeight: '1.9',
                      marginBottom: '32px'
                    }}
                  >
                    {level.description}
                  </p>
                  
                  {/* Links */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <a 
                      href={level.teacherLink}
                      style={{
                        fontSize: '16px',
                        color: '#374151',
                        fontWeight: '500',
                        textDecoration: 'underline',
                        textDecorationColor: level.color,
                        textDecorationThickness: '2px',
                        textUnderlineOffset: '4px'
                      }}
                    >
                      {level.id.charAt(0).toUpperCase() + level.id.slice(1)} öğretmen kitaplarını görmek için tıklayın
                    </a>
                    <a 
                      href={level.studentLink}
                      style={{
                        fontSize: '16px',
                        color: '#374151',
                        fontWeight: '500',
                        textDecoration: 'underline',
                        textDecorationColor: level.color,
                        textDecorationThickness: '2px',
                        textUnderlineOffset: '4px'
                      }}
                    >
                      {level.id.charAt(0).toUpperCase() + level.id.slice(1)} öğrenci kitaplarını görmek için tıklayın
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <Footer data={siteData.footer} />
    </div>
  );
};

export default LibraryPage;
