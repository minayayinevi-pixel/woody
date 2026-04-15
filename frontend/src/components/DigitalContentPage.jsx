import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { siteData } from '../data/mock';

const DigitalContentPage = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header data={siteData.header} />
      <div className="pt-[72px]" />

      {/* Hero Section with Graduation Cap Icon */}
      <section className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white py-16 md:py-20">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 text-center">
          {/* Graduation Cap Icon */}
          <div className="mb-8">
            <div className="inline-block text-[80px] md:text-[100px]">
              🎓
            </div>
            <p className="text-gray-400 text-sm mt-2">HERO GÖRSEL BURAYA</p>
          </div>

          {/* Main Title */}
          <h1 className="text-[36px] md:text-[56px] lg:text-[64px] font-bold text-gray-900 mb-4 tracking-[0.3em]">
            ENGLISH LEARNING
          </h1>

          {/* Subtitle */}
          <p className="text-[18px] md:text-[22px] text-gray-600 font-light">
            Okul Öncesi İngilizce Eğitimi
          </p>
        </div>
      </section>

      {/* Digital Content Sections */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Storyland Card */}
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-[28px] md:text-[32px] font-bold text-gray-900 mb-4">
                Storyland
              </h3>
              <p className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed mb-6">
                İnteraktif hikayeler ve animasyonlarla İngilizce öğrenin. Woody karakterleri ile eğlenceli maceralar.
              </p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold text-[15px] hover:bg-purple-700 transition-colors">
                Hikayeleri Keşfet
              </button>
            </div>

            {/* Movieland Card */}
            <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="text-5xl mb-4">🎬</div>
              <h3 className="text-[28px] md:text-[32px] font-bold text-gray-900 mb-4">
                Movieland
              </h3>
              <p className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed mb-6">
                Eğitici videolar ve çizgi filmlerle İngilizce pratik yapın. Her seviyeye uygun içerikler.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-[15px] hover:bg-blue-700 transition-colors">
                Videoları İzle
              </button>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-12 bg-yellow-50 rounded-2xl p-8 md:p-10 text-center">
            <h4 className="text-[22px] md:text-[26px] font-bold text-gray-900 mb-3">
              🌟 Dijital İçeriklerimiz
            </h4>
            <p className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed max-w-[700px] mx-auto">
              Storyland ve Movieland ile öğrenciler, görsel ve işitsel materyaller aracılığıyla 
              İngilizce dilini eğlenceli bir şekilde öğrenirler. Her seviyeye özel hazırlanmış içerikler.
            </p>
          </div>
        </div>
      </section>

      <Footer data={siteData.footer} />
    </div>
  );
};

export default DigitalContentPage;
