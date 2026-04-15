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
      description: 'Kurumlar için eksiksiz eğitim setleri',
      products: [
        {
          id: 1,
          name: 'Basic Level Set',
          description: 'Başlangıç seviyesi',
          price: '₺2.499',
          image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/3jgyyil9_1.png'
        },
        {
          id: 2,
          name: 'Junior Level Set',
          description: 'Gelişim seviyesi',
          price: '₺2.799',
          image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/h5x59v59_3.png'
        },
        {
          id: 3,
          name: 'Senior Level Set',
          description: 'İleri seviye',
          price: '₺2.999',
          image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/m4z26p5k_2.png'
        },
        {
          id: 4,
          name: 'PRO Level Set',
          description: 'Uzmanlık seviyesi',
          price: '₺3.299',
          image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/6qg348xf_Preschool%20Basic%20%28297%20x%20210%20mm%29%20%28Instagram%20Go%CC%88nderisi%20%2845%29%29.png'
        },
        {
          id: 5,
          name: 'Komple Paket',
          description: '4 seviye birlikte',
          price: '₺9.999',
          image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/3jgyyil9_1.png'
        },
        {
          id: 6,
          name: 'Öğretmen Kılavuzu',
          description: 'Tüm seviyeler',
          price: '₺599',
          image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/h5x59v59_3.png'
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
          <p className="text-[15px] md:text-[17px] text-gray-600 leading-relaxed max-w-[600px] mx-auto">
            Tüm Woody eğitim setlerini online olarak sipariş edebilirsiniz. WhatsApp üzerinden hızlı teslimat.
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
                <p className="text-[14px] text-gray-500">
                  {category.description}
                </p>
              )}
            </div>

            {/* Products Grid - 2 columns, 3 rows */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {category.products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleProductClick(product)}
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
                  style={{ border: '1px solid #f0f0f0' }}
                >
                  {/* Product Image */}
                  <div className="aspect-square bg-gray-50 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-3 md:p-4">
                    <h3 className="text-[13px] md:text-[15px] font-semibold text-gray-900 mb-1 line-clamp-2">
                      {product.name}
                    </h3>
                    {product.description && (
                      <p className="text-[11px] md:text-[12px] text-gray-500 mb-2 line-clamp-1">
                        {product.description}
                      </p>
                    )}
                    {product.price && (
                      <p className="text-[15px] md:text-[17px] font-bold text-gray-900">
                        {product.price}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* View All Button */}
            <button
              onClick={() => handleProductClick({ name: category.name })}
              className="flex items-center gap-1 mx-auto text-[13px] font-medium text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer"
            >
              Tümünü Gör
              <ChevronRight size={16} />
            </button>
          </div>
        </section>
      ))}

      <Footer data={siteData.footer} />
    </div>
  );
};

export default WoodyStorePage;
