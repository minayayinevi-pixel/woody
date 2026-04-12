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
      image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/5k1ulsw4_Ads%C4%B1z%20tasar%C4%B1m%20%2845%29.png',
      imagePosition: 'left',
      teacherLink: '#',
      studentLink: '#'
    },
    {
      id: 'junior',
      name: 'Woody Digital Library – Junior Level',
      description: 'Junior Level Digital Library, öğrencilerin cümle kurma ve temel iletişim becerilerini geliştirdiği içeriklerin incelenebileceği dijital kütüphane alanıdır. Kurumlar, bu seviyede yer alan öğretmen ve öğrenci kitaplarını inceleyerek sistemin ilerleyen yapısını net şekilde görebilir.',
      color: '#F5C518',
      image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/5k1ulsw4_Ads%C4%B1z%20tasar%C4%B1m%20%2845%29.png',
      imagePosition: 'right',
      teacherLink: '#',
      studentLink: '#'
    },
    {
      id: 'senior',
      name: 'Woody Digital Library – Senior Level',
      description: 'Senior Level Digital Library, öğrencilerin akıcı iletişim kurduğu ve yapıları birleştirerek kullandığı ileri seviye içeriklerin incelenebileceği dijital kütüphane alanıdır. Kurumlar, öğretmen ve öğrenci kitaplarını inceleyerek programın üst düzey kazanımlarını ve iletişim odaklı yapısını değerlendirebilir.',
      color: '#E91E90',
      image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/5k1ulsw4_Ads%C4%B1z%20tasar%C4%B1m%20%2845%29.png',
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

      {/* Empty - Ready for new content */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <p className="text-center text-gray-400 text-[18px]">
            İçerik hazırlanıyor...
          </p>
        </div>
      </section>

      <Footer data={siteData.footer} />
    </div>
  );
};

export default LibraryPage;
