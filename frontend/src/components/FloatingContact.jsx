import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappLink = "https://wa.me/905551234567?text=Merhaba%2C%20Woody%20and%20Friends%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

  return (
    <div className="fixed bottom-6 left-6 z-[90] flex flex-col items-start gap-3">
      {/* Popup Card */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 w-[280px] mb-2 animate-slideUp">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-[16px] font-bold text-gray-900">Bize Ulaşın</h4>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 bg-transparent border-none cursor-pointer p-1"
            >
              <X size={18} />
            </button>
          </div>
          <p className="text-[13px] text-gray-600 mb-4 leading-relaxed">
            Sorularınız mı var? WhatsApp üzerinden bize hemen ulaşabilirsiniz.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white text-[14px] font-semibold rounded-xl transition-all duration-300 no-underline"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp ile Yazın
          </a>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-none cursor-pointer group"
      >
        <MessageCircle size={22} className="flex-shrink-0" />
        <span className="text-[14px] font-semibold whitespace-nowrap">Soru sormak ister misiniz?</span>
      </button>
    </div>
  );
};

export default FloatingContact;
