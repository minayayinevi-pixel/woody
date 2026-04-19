import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import { blogArticlesData } from '../data/blogArticles';
import { generateArticleSchema, generateBreadcrumbSchema } from '../utils/schemaGenerator';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const article = blogArticlesData[slug];

  // Eğer makale bulunamazsa 404
  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Makale Bulunamadı</h1>
          <button 
            onClick={() => navigate('/blog')}
            className="text-orange-600 hover:text-orange-700 font-semibold"
          >
            ← Blog'a Geri Dön
          </button>
        </div>
      </div>
    );
  }

  const schemas = [
    generateArticleSchema({
      title: article.title,
      description: article.metaDescription,
      image: article.image,
      datePublished: '2026-04-19',
      dateModified: '2026-04-19',
      author: 'Woody ve Arkadaşları',
      url: `https://woodyvearkadaslari.com/blog/${slug}`
    }),
    generateBreadcrumbSchema([
      { name: 'Ana Sayfa', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: article.title, url: `/blog/${slug}` }
    ])
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={article.metaTitle}
        description={article.metaDescription}
        canonical={`/blog/${slug}`}
        image={article.image}
        schema={schemas}
      />
      <Header />

      {/* Hero Image Section */}
      <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden mt-[72px]">
        <img 
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* Back Button */}
        <button
          onClick={() => navigate('/blog')}
          className="absolute top-6 left-6 flex items-center gap-2 bg-white/90 hover:bg-white text-gray-900 font-semibold px-4 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          <ArrowLeft size={20} />
          <span>Blog'a Dön</span>
        </button>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            {article.category && (
              <div className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                {article.category}
              </div>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight" style={{ fontFamily: "'Fredoka', 'Inter', sans-serif" }}>
              {article.title}
            </h1>
            {article.subtitle && (
              <p className="text-lg md:text-xl text-white/90 font-medium">
                {article.subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <div 
          className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-ul:my-4 prose-ul:ml-6 prose-li:text-gray-700 prose-li:my-2 prose-strong:text-gray-900"
          dangerouslySetInnerHTML={{ __html: article.content.replace(/\n\n/g, '<br/><br/>').replace(/##/g, '<h2>').replace(/<h2>/g, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">') }}
        />

        {/* CTA Section */}
        <div className="mt-12 p-8 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl border border-orange-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Woody ile İngilizce Öğrenmeye Başlayın
          </h3>
          <p className="text-gray-700 text-center mb-6 max-w-2xl mx-auto">
            Okul öncesi İngilizce eğitimi için kapsamlı ve eğlenceli eğitim setlerimizi keşfedin. Çocuğunuzun İngilizce yolculuğunu Woody ve arkadaşları ile başlatın!
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate('/level-finder')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Seviye Testi Yap
            </button>
            <button
              onClick={() => navigate('/preschool')}
              className="bg-white hover:bg-gray-50 text-gray-900 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-orange-500"
            >
              Eğitim Setlerini İncele
            </button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;
