import React from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import { generateWebPageSchema, generateBreadcrumbSchema } from '../utils/schemaGenerator';
import { useLanguage } from '../context/LanguageContext';

// 16 Blog Posts Data - GÜNCEL GÖRSELLER
const blogPosts = [
  {
    id: 1,
    title: 'Anaokulu İngilizce Ders Planı Nasıl Hazırlanır?',
    subtitle: '(2026 Güncel Rehber)',
    excerpt: 'Etkili bir anaokulu İngilizce ders planı hazırlamak için adım adım rehber. Oyun temelli aktiviteler ve Cambridge sistemine uyumlu plan örnekleri.',
    image: 'https://images.unsplash.com/photo-1560785496-321917f24016?w=800&q=80',
    slug: 'anaokulu-ingilizce-ders-plani-nasil-hazirlanir',
    category: 'Ders Planı'
  },
  {
    id: 2,
    title: 'Hazır İngilizce Eğitim Seti Nedir?',
    subtitle: 'Anaokulları İçin En Doğru Seçim',
    excerpt: 'Hazır İngilizce eğitim setlerinin avantajları, içeriği ve okul öncesi eğitimde nasıl kullanıldığı hakkında kapsamlı bilgiler.',
    image: 'https://images.unsplash.com/photo-1632479826567-2ba50e9abb66?w=800&q=80',
    slug: 'hazir-ingilizce-egitim-seti-nedir',
    category: 'Eğitim Setleri'
  },
  {
    id: 3,
    title: 'En İyi Anaokulu İngilizce Eğitim Sistemi Nasıl Olmalı?',
    subtitle: '(Karşılaştırmalı Rehber)',
    excerpt: 'Farklı anaokulu İngilizce sistemlerinin karşılaştırması, oyun temelli öğrenme ve Cambridge hazırlık programlarının detaylı analizi.',
    image: 'https://images.pexels.com/photos/8087867/pexels-photo-8087867.jpeg?w=800&q=80',
    slug: 'en-iyi-anaokulu-ingilizce-egitim-sistemi',
    category: 'Eğitim Sistemleri'
  },
  {
    id: 4,
    title: 'Anaokulu İçin İngilizce Programı Nasıl Olmalı?',
    subtitle: '(Adım Adım Plan)',
    excerpt: '3-6 yaş grubu için ideal İngilizce programı hazırlama kılavuzu. Haftalık planlama, aktivite önerileri ve değerlendirme yöntemleri.',
    image: 'https://images.unsplash.com/photo-1761604478724-13fe879468cf?w=800&q=80',
    slug: 'anaokulu-icin-ingilizce-programi-nasil-olmali',
    category: 'Program Planlama'
  },
  {
    id: 5,
    title: 'Cambridge Hazırlık Anaokulu Nedir?',
    subtitle: 'Okullar İçin Büyük Avantaj',
    excerpt: 'Cambridge hazırlık sistemi ile anaokulu eğitimi, uluslararası standartlar ve çocukların dil gelişimindeki olumlu etkileri.',
    image: 'https://images.pexels.com/photos/30450314/pexels-photo-30450314.jpeg?w=800&q=80',
    slug: 'cambridge-hazirlik-anaokulu-nedir',
    category: 'Cambridge Sistemi'
  },
  {
    id: 6,
    title: 'Preschool English Program Turkey',
    subtitle: 'En Etkili Sistem Hangisi?',
    excerpt: 'Türkiye\'de okul öncesi İngilizce programları, uluslararası standartlar ve en etkili öğretim yöntemlerinin karşılaştırmalı analizi.',
    image: 'https://images.unsplash.com/photo-1633219664515-2441564d0cc4?w=800&q=80',
    slug: 'preschool-english-program-turkey',
    category: 'Programlar'
  },
  {
    id: 7,
    title: 'Anaokulu İngilizce Eğitim Seti Nasıl Seçilir?',
    subtitle: '(Detaylı Rehber)',
    excerpt: 'Anaokulu için doğru İngilizce eğitim setini seçerken dikkat edilmesi gerekenler, kalite kriterleri ve maliyet analizi.',
    image: 'https://images.unsplash.com/photo-1550376026-33cbee34f79e?w=800&q=80',
    slug: 'anaokulu-ingilizce-egitim-seti-nasil-secilir',
    category: 'Eğitim Setleri'
  },
  {
    id: 8,
    title: 'İngilizce Şarkılarla Eğitim',
    subtitle: 'Çocuklar İçin En Etkili Öğrenme Yolu',
    excerpt: 'Müzik ve şarkılar ile İngilizce öğretimi, hafıza geliştirme ve eğlenceli öğrenme yöntemlerinin bilimsel temelleri.',
    image: 'https://images.unsplash.com/photo-1564429238817-393bd4286b2d?w=800&q=80',
    slug: 'ingilizce-sarkilarla-egitim',
    category: 'Öğrenme Yöntemleri'
  },
  {
    id: 9,
    title: 'Oyun Temelli İngilizce Eğitimi Neden Bu Kadar Etkili?',
    subtitle: '',
    excerpt: 'Oyun tabanlı öğrenmenin bilimsel araştırmalarla kanıtlanmış faydaları, pratik uygulama örnekleri ve başarı hikayeleri.',
    image: 'https://images.unsplash.com/photo-1770096679916-2cd9c720d400?w=800&q=80',
    slug: 'oyun-temelli-ingilizce-egitimi-neden-etkili',
    category: 'Öğrenme Yöntemleri'
  },
  {
    id: 10,
    title: 'Okul Öncesi İngilizce Öğrenme Yöntemleri',
    subtitle: '(Bilimsel ve Pratik Rehber)',
    excerpt: 'Bilimsel araştırmalara dayalı okul öncesi İngilizce öğretim teknikleri, yaş grubuna özel stratejiler ve uygulama örnekleri.',
    image: 'https://images.unsplash.com/photo-1587323655395-b1c77a12c89a?w=800&q=80',
    slug: 'okul-oncesi-ingilizce-ogrenme-yontemleri',
    category: 'Öğrenme Yöntemleri'
  },
  {
    id: 11,
    title: '3-6 Yaş İngilizce Eğitimi Nasıl Olmalı?',
    subtitle: '(Veliler ve Okullar İçin Rehber)',
    excerpt: '3-6 yaş grubuna özel İngilizce eğitim programı, gelişim dönemine uygun aktiviteler ve aile katılımının önemi.',
    image: 'https://images.unsplash.com/photo-1539632346654-dd4c3cffad8c?w=800&q=80',
    slug: '3-6-yas-ingilizce-egitimi-nasil-olmali',
    category: 'Yaş Grupları'
  },
  {
    id: 12,
    title: 'Okul Öncesi İngilizce Eğitimi',
    subtitle: 'Doğru Sistem Nasıl Kurulur?',
    excerpt: 'Okulunuzda sıfırdan okul öncesi İngilizce eğitim sistemi kurma rehberi, adım adım planlama ve uygulama stratejileri.',
    image: 'https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?w=800&q=80',
    slug: 'okul-oncesi-ingilizce-egitimi-dogru-sistem',
    category: 'Sistem Kurulumu'
  },
  {
    id: 13,
    title: 'Anaokulu İngilizce Müfredatı Nasıl Hazırlanır?',
    subtitle: '(Eksiksiz Plan)',
    excerpt: 'Yıllık İngilizce müfredatı hazırlama, tema belirleme, kazanım oluşturma ve değerlendirme sistemi kurma rehberi.',
    image: 'https://images.unsplash.com/photo-1722962495841-15e26a09a787?w=800&q=80',
    slug: 'anaokulu-ingilizce-mufredati-nasil-hazirlanir',
    category: 'Müfredat'
  },
  {
    id: 14,
    title: 'Anaokulunda İngilizce Nasıl Öğretilir?',
    subtitle: '(En Etkili Yöntemler)',
    excerpt: 'Anaokullarında İngilizce öğretimi için en etkili yöntemler, sınıf yönetimi teknikleri ve motivasyon stratejileri.',
    image: 'https://images.pexels.com/photos/8923080/pexels-photo-8923080.jpeg?w=800&q=80',
    slug: 'anaokulunda-ingilizce-nasil-ogretilir',
    category: 'Öğretim Teknikleri'
  },
  {
    id: 15,
    title: 'Anaokulu İngilizce Eğitim Sistemi Nedir?',
    subtitle: '(Tüm Detaylarıyla)',
    excerpt: 'Anaokulu İngilizce eğitim sisteminin bileşenleri, uygulama süreçleri, öğretmen eğitimi ve kalite standartları.',
    image: 'https://images.unsplash.com/photo-1761208663763-c4d30657c910?w=800&q=80',
    slug: 'anaokulu-ingilizce-egitim-sistemi-nedir',
    category: 'Eğitim Sistemleri'
  },
  {
    id: 16,
    title: '4-5-6 Yaş İngilizce Eğitimi',
    subtitle: 'Yaş Gruplarına Özel Yaklaşımlar',
    excerpt: '4, 5 ve 6 yaş gruplarının özellikleri, her yaş için uygun aktiviteler ve gelişim dönemlerine göre öğretim stratejileri.',
    image: 'https://images.pexels.com/photos/8422126/pexels-photo-8422126.jpeg?w=800&q=80',
    slug: '4-5-6-yas-ingilizce-egitimi',
    category: 'Yaş Grupları'
  }
];

const BlogPage = () => {
  const { language } = useLanguage();
  const [openFaq, setOpenFaq] = React.useState(null);

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

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
      <section className="relative w-full py-16 px-6 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-900 mb-4"
            style={{ fontFamily: "'Fredoka', 'Inter', sans-serif" }}
          >
            BLOG
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Okul Öncesi İngilizce Eğitimi Hakkında Her Şey
          </p>
          <p className="text-sm md:text-base text-gray-500 mt-2">
            Anaokulu İngilizce ders planları, eğitim sistemleri ve uzman tavsiyeleri
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {blogPosts.map((post) => (
              <a
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {post.category && (
                    <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h2>
                  {post.subtitle && (
                    <p className="text-sm text-orange-600 font-semibold mb-3">
                      {post.subtitle}
                    </p>
                  )}
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-orange-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    <span>Devamını Oku</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Woody-Specific FAQ */}
      <WoodyFAQSection openFaq={openFaq} toggleFaq={toggleFaq} />

      <Footer />
    </div>
  );
};

const WoodyFAQSection = ({ openFaq, toggleFaq }) => {
  const woodyFaqData = [
    {
      question: 'Anaokulu İngilizce eğitim seti neden gereklidir?',
      problem: 'Anaokullarında en büyük sorun, İngilizce derslerinin öğretmene göre değişmesi ve standart bir sistemle ilerlememe