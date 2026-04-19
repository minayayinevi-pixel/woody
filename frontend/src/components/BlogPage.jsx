import React from 'react';
import { ArrowRight } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import { generateWebPageSchema, generateBreadcrumbSchema } from '../utils/schemaGenerator';
import { useLanguage } from '../context/LanguageContext';

// PLACEHOLDER DATA - İçerik sonra eklenecek
const blogCards = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    title: 'Blog Başlık 1',
    description: 'Kısa açıklama metni buraya gelecek. Lorem ipsum dolor sit amet.',
    link: '/blog/post-1'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
    title: 'Blog Başlık 2',
    description: 'Kısa açıklama metni buraya gelecek. Lorem ipsum dolor sit amet.',
    link: '/blog/post-2'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=800&q=80',
    title: 'Blog Başlık 3',
    description: 'Kısa açıklama metni buraya gelecek. Lorem ipsum dolor sit amet.',
    link: '/blog/post-3'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80',
    title: 'Blog Başlık 4',
    description: 'Kısa açıklama metni buraya gelecek. Lorem ipsum dolor sit amet.',
    link: '/blog/post-4'
  }
];

const BlogPage = () => {
  const { language } = useLanguage();

  // Blog list schemas
  const schemas = [
    generateWebPageSchema({
      title: 'Blog | Okul Öncesi İngilizce Eğitimi ve Anaokulu İngilizce Ders Planı',
      description: 'Anaokulunda İngilizce nasıl öğretilir? Okul öncesi İngilizce öğrenme yöntemleri, anaokulu İngilizce müfredatı ve etkili eğitim modeli hakkında uzman tavsiyeleri.',
      url: 'https://woodyvearkadaslari.com/blog',
      image: 'https://woodyvearkadaslari.com/static/blog-cover.jpg'
    }),
    generateBreadcrumbSchema([
      { name: 'Ana Sayfa', url: '/' },
      { name: 'Blog', url: '/blog' }
    ])
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Blog | Okul Öncesi İngilizce Eğitimi - Anaokulu İngilizce Ders Planı"
        description="Anaokulu İngilizce eğitim sistemi, okul öncesi İngilizce öğrenme yöntemleri, 3-6 yaş İngilizce programı ve anaokulu İngilizce müfredatı hakkında uzman tavsiyeleri. Cambridge hazırlık sistemi ile etkili eğitim modeli."
        canonical="/blog"
        keywords="anaokulunda İngilizce nasıl öğretilir, okul öncesi İngilizce eğitimi, anaokulu İngilizce ders planı, 4-5-6 yaş İngilizce eğitimi, anaokulu İngilizce müfredatı, okul öncesi İngilizce öğrenme yöntemleri"
        schema={schemas}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-gray-900 mb-6"
            style={{ fontFamily: "'Fredoka', 'Inter', sans-serif", letterSpacing: '0.1em' }}
          >
            B L O G
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Okul öncesi İngilizce eğitimi hakkında bilgiler, ipuçları ve içerikler
          </p>
        </div>
      </section>

      {/* Blog Grid - Pixar Style */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {blogCards.map((card) => (
              <a
                key={card.id}
                href={card.link}
                className="group block bg-white rounded-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative w-full h-72 overflow-hidden bg-gray-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {card.title}
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {card.description}
                  </p>
                  
                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-orange-600 font-semibold group-hover:gap-4 transition-all duration-300">
                    <span>Devamını Oku</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
