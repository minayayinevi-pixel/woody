import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const GrayBanner = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full py-8 md:py-10" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center md:text-left">
          {/* Left Text */}
          <div className="flex-1">
            <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold text-gray-800 leading-tight" style={{ fontFamily: "'Fredoka', 'Inter', sans-serif" }}>
              {t.grayBanner?.leftText || "Oyun Tabanlı İngilizce Öğrenme"}
            </h3>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-gray-300" />

          {/* Center Text */}
          <div className="flex-1">
            <p className="text-[15px] md:text-[17px] text-gray-600 leading-relaxed">
              {t.grayBanner?.centerText || "Yapılandırılmış oyun, etkileşimli aktiviteler ve zengin dijital içerik ile dil becerileri geliştirir."}
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-gray-300" />

          {/* Right Text */}
          <div className="flex-1">
            <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold text-gray-800 leading-tight" style={{ fontFamily: "'Fredoka', 'Inter', sans-serif" }}>
              {t.grayBanner?.rightText || "Her Yaş İçin Uygun Setler"}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrayBanner;
