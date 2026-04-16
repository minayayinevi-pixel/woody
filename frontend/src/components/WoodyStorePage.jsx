import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { siteData } from '../data/mock';

const WoodyStorePage = () => {
  const navigate = useNavigate();

  // Mock product data - her kategoride 6 ürün
  const categories = [
    {
      id: 'okul-serisi',
      name: 'Okul Serisi',
      description: '', // Silindi
      products: [
        {
          id: 1,
          name: 'Basic Level Set Öğrenci Seti',
          description: 'Başlangıç seviyesi',
          price: "2250 TL'den başlayan fiyatlarla",
          image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/3jgyyil9_1.png'
        },
        {
          id: 2,
          name: 'Junior Level Set Öğrenci Seti',
          description: 'Gelişim seviyesi',
          price: "2250 TL'den başlayan fiyatlarla",
          image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/h5x59v59_3.png'
        },
        {
          id: 3,
          name: 'Senior Level Set Öğrenci Seti',
          description: 'İleri seviye',
          price: "2250 TL'den başlayan fiyatlarla",
          image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/m4z26p5k_2.png'
        }
      ]
    },
    {
      id: 'atolye',
      name: 'Atölye Serisi',
      description: 'Atölye ve kurs merkezleri için',
      products: [
        {
          id: 7,
          name: 'Atölye Basic',
          description: 'Başlangıç paketi',
          price: '₺1.999',
          image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/m4z26p5k_2.png'
        },
        {
          id: 8,
          name: 'Atölye Junior',
          description: 'Orta seviye',
          price: '₺2.199',
          image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/3jgyyil9_1.png'
        },
        {
          id: 9,
          name: 'Atölye Senior',
          description: 'İleri seviye',
          price: '₺2.399',
          image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/h5x59v59_3.png'
        },
        {
          id: 10,
          name: 'Atölye PRO',
          description: 'Profesyonel',
          price: '₺2.699',
          image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/6qg348xf_Preschool%20Basic%20%28297%20x%20210%20mm%29%20%28Instagram%20Go%CC%88nderisi%20%2845%29%29.png'
        },
        {
          id: 11,
          name: 'Atölye Tam Set',
          description: 'Hepsi bir arada',
          price: '₺7.999',
          image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/m4z26p5k_2.png'
        },
        {
          id: 12,
          name: 'Dijital Materyal',
          description: 'Online erişim',
          price: '₺499',
          image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/3jgyyil9_1.png'
        }
      ]
    },
    {
      id: 'ozel-ders',
      name: 'Özel Ders Serisi',
      description: 'Ev ve özel ders öğretmenleri için',
      products: [
        {
          id: 13,
          name: 'Home Basic',
          description: 'Bireysel başlangıç',
          price: '₺1.499',
          image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/h5x59v59_3.png'
        },
        {
          id: 14,
          name: 'Home Junior',
          description: 'Bireysel gelişim',
          price: '₺1.699',
          image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/m4z26p5k_2.png'
        },
        {
          id: 15,
          name: 'Home Senior',
          description: 'Bireysel ileri',
          price: '₺1.899',
          image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/3jgyyil9_1.png'
        },
        {
          id: 16,
          name: 'Home PRO',
          description: 'Bireysel profesyonel',
          price: '₺2.099',
          image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/6qg348xf_Preschool%20Basic%20%28297%20x%20210%20mm%29%20%28Instagram%20Go%CC%88nderisi%20%2845%29%29.png'
        },
        {
          id: 17,
          name: 'Özel Ders Paketi',
          description: '4 seviye kampanyalı',
          price: '₺5.999',
          image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/h5x59v59_3.png'
        },
        {
          id: 18,
          name: 'Online Kütüphane',
          description: 'Dijital erişim',
          price: '₺399',
          image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/m4z26p5k_2.png'
        }
      ]
    }
  ];

  const handleProductClick = (product) => {
    const message = `Merhaba, ${product.name} hakkında bilgi almak istiyorum.`;
    window.open(`https://wa.me/905331570373?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header data={siteData.header} />
      <div className="pt-[72px]" />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1000px] mx-auto px-5 md:px-12 text-center">
          <h1 className="text-[36px] md:text-[48px] font-bold text-gray-900 mb-4 leading-tight">
            Woody Store
          </h1>
          <p className="text-[15px] md:text-[17px] text-gray-600 leading-relaxed max-w-[700px] mx-auto">
            Türkiye'nin ilk oyun tabanlı ve Cambridge destekli okul öncesi İngilizce eğitim sistemi. 
            Tüm setlere tek tıkla ulaşın, kurumunuza hemen entegre edin.
          </p>
        </div>
      </section>

      {/* Categories */}
      {categories.map((category, idx) => (
        <section key={category.id} className="w-full py-10 md:py-12">
          <div className="max-w-[900px] mx-auto px-4 md:px-8">
            {/* Category Header */}
            <div className="mb-6">
              <h2 className="text-[24px] md:text-[28px] font-bold text-gray-900 mb-2">
                {category.name}
              </h2>
              {category.description && (
                <p className="text-[14px] text-gray-500 mb-2">
                  {category.description}
                </p>
              )}
              
              {/* OKUL SERİSİ ÖZEL: Başlık altı açıklama */}
              {category.id === 'okul-serisi' && (
                <div className="mt-3 space-y-1">
                  <p className="text-[13px] md:text-[14px] text-gray-600">
                    Okul Serilerinde öğretmen seti fiyatlara dahildir.
                  </p>
                  <p className="text-[13px] md:text-[14px] text-gray-600">
                    İçeriği Okul Serisi videolarından inceleyebilirsiniz.
                  </p>
                </div>
              )}
            </div>

            {/* Products Grid OR Coming Soon Image */}
            {(category.id === 'atolye' || category.id === 'ozel-ders') ? (
              /* Coming Soon Image for Atölye & Özel Ders */
              <div className="flex flex-col items-center justify-center py-8">
                <img
                  src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/ga68xbh7_Paragraf%20metniniz%20%284%29.png"
                  alt="Çok Yakında"
                  className="w-full max-w-[500px] rounded-2xl mb-4"
                />
                <p className="text-[16px] md:text-[18px] font-semibold text-gray-700">
                  Çok yakında buradayız
                </p>
              </div>
            ) : (
              /* Normal Product Grid for Okul Serisi */
              <div className="grid grid-cols-2 gap-4">
                {category.products.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
                    style={{ border: '1px solid #f0f0f0' }}
                  >
                    {/* Product Image - Gri alan yok, tam sığdır */}
                    <div className="w-full overflow-hidden bg-white">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-3 md:p-4">
                      <h3 className="text-[13px] md:text-[15px] font-semibold text-gray-900 mb-1 line-clamp-2">
                        {product.name}
                      </h3>
                      {product.description && (
                        <p className="text-[11px] md:text-[12px] text-gray-500 mb-3 line-clamp-1">
                          {product.description}
                        </p>
                      )}
                      
                      {/* Fiyat + Teklif Al Butonu - Mobilde alt alta */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        {/* Fiyat */}
                        <p className="text-[12px] md:text-[13px] font-bold text-gray-800 leading-tight">
                          2250 TL'den başlayan fiyatlarla
                        </p>
                        
                        {/* Teklif Al Butonu */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            const message = `Merhaba fiyat teklifi almak istiyorum\n\nŞehir: \nöğrenci sayımız: \nokul adı: \n\nDijital katalog göndermisiniz lütfen`;
                            const whatsappUrl = `https://wa.me/905331570373?text=${encodeURIComponent(message)}`;
                            window.open(whatsappUrl, '_blank');
                          }}
                          className="flex items-center justify-center gap-1.5 px-3 py-2 bg-[#FF6A00] hover:bg-[#E85C00] text-white text-[11px] md:text-[12px] font-medium rounded-lg transition-colors w-full md:w-auto"
                        >
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                          Teklif Al
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* OKUL SERİSİ ÖZEL: Kartların ALTINDA Fiyat + WhatsApp Buton */}
            {category.id === 'okul-serisi' && (
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 py-4 border-t border-gray-100">
                {/* Sol: Fiyat yazısı */}
                <p className="text-[15px] md:text-[16px] font-bold text-gray-800">
                  2250 TL'den başlayan fiyatlarla
                </p>
                
                {/* Sağ: WhatsApp butonu */}
                <a
                  href="https://wa.me/905331570373?text=Merhaba%2C%20fiyat%20teklifi%20almak%20istiyorum.%20%C3%96%C4%9Frenci%20say%C4%B1m%C4%B1z%3A%20___%20Okul%20ad%C4%B1%3A%20___"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#FF6A00] text-white font-semibold text-[14px] md:text-[15px] px-4 py-2.5 rounded-xl no-underline transition-all duration-300 hover:bg-[#E85C00] hover:scale-105 active:translate-y-[1px]"
                  style={{ boxShadow: '0 4px 12px rgba(255,106,0,0.2)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            )}
          </div>
        </section>
      ))}

      <Footer data={siteData.footer} />
    </div>
  );
};

export default WoodyStorePage;
