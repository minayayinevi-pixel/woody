# 📊 JSON-LD Schema System - Kullanım Kılavuzu

## ✅ Dinamik JSON-LD Schema Sistemi Aktif

Tüm schema tipleri destekleniyor ve otomatik olarak head'e enjekte ediliyor.

---

## 🎯 Desteklenen Schema Tipleri

### 1. **Organization** 
Ana sayfada kullanılır. Şirket/kuruluş bilgilerini tanımlar.

### 2. **WebSite**
Ana sayfada kullanılır. Site-wide search box özelliği ekler.

### 3. **WebPage**
Tüm sayfalarda kullanılır. Genel sayfa bilgileri.

### 4. **Article**
Blog postlarında kullanılır. Makale metadata'sı.

### 5. **VideoObject**
Video içeren sayfalarda kullanılır.

### 6. **BreadcrumbList**
Tüm sayfalarda navigasyon için kullanılır.

### 7. **Product** (Bonus)
Ürün sayfalarında kullanılır.

---

## 📖 Kullanım Örnekleri

### 1. Ana Sayfa (Organization + WebSite + Breadcrumb)

```jsx
import SEO from './components/SEO';
import { 
  generateOrganizationSchema, 
  generateWebSiteSchema,
  generateBreadcrumbSchema 
} from './utils/schemaGenerator';

function HomePage() {
  const schemas = [
    generateOrganizationSchema(),
    generateWebSiteSchema(),
    generateBreadcrumbSchema([
      { name: 'Ana Sayfa', url: '/' }
    ])
  ];

  return (
    <div>
      <SEO schema={schemas} />
      {/* Sayfa içeriği */}
    </div>
  );
}
```

**Çıktı:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Woody ve Arkadaşları",
  "url": "https://woodyvearkadaslari.com",
  "logo": "https://woodyvearkadaslari.com/static/logo.png",
  ...
}
```

---

### 2. Blog Listesi (WebPage + Breadcrumb)

```jsx
import { generateWebPageSchema, generateBreadcrumbSchema } from '../utils/schemaGenerator';

function BlogPage() {
  const schemas = [
    generateWebPageSchema({
      title: 'Blog | Woody',
      description: 'Blog yazıları',
      url: 'https://woodyvearkadaslari.com/blog',
      image: 'https://woodyvearkadaslari.com/static/blog.jpg'
    }),
    generateBreadcrumbSchema([
      { name: 'Ana Sayfa', url: '/' },
      { name: 'Blog', url: '/blog' }
    ])
  ];

  return <SEO schema={schemas} />;
}
```

---

### 3. Blog Post Detayı (Article + Breadcrumb)

```jsx
import { generateArticleSchema, generateBreadcrumbSchema } from '../utils/schemaGenerator';

function BlogPostPage({ post }) {
  const schemas = [
    generateArticleSchema({
      title: post.title,
      description: post.excerpt,
      url: `https://woodyvearkadaslari.com/blog/${post.slug}`,
      image: post.coverImage,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      author: 'Woody Editorial Team',
      keywords: post.tags
    }),
    generateBreadcrumbSchema([
      { name: 'Ana Sayfa', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: post.title, url: `/blog/${post.slug}` }
    ])
  ];

  return <SEO schema={schemas} />;
}
```

**Çıktı:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Okul Öncesi İngilizce Eğitimi",
  "description": "...",
  "datePublished": "2024-01-15T10:00:00Z",
  "author": {
    "@type": "Organization",
    "name": "Woody Editorial Team"
  },
  ...
}
```

---

### 4. Video Sayfası (WebPage + VideoObject + Breadcrumb)

```jsx
import { generateWebPageSchema, generateVideoSchema, generateBreadcrumbSchema } from '../utils/schemaGenerator';

function VideoPage({ video }) {
  const schemas = [
    generateWebPageSchema({
      title: video.title,
      description: video.description,
      url: `https://woodyvearkadaslari.com/videos/${video.id}`,
      image: video.thumbnail
    }),
    generateVideoSchema({
      name: video.title,
      description: video.description,
      thumbnailUrl: video.thumbnail,
      uploadDate: video.uploadDate,
      duration: 'PT5M30S', // 5 minutes 30 seconds
      contentUrl: video.url,
      embedUrl: video.embedUrl
    }),
    generateBreadcrumbSchema([
      { name: 'Ana Sayfa', url: '/' },
      { name: 'Videolar', url: '/videos' },
      { name: video.title, url: `/videos/${video.id}` }
    ])
  ];

  return <SEO schema={schemas} />;
}
```

---

### 5. Ürün Sayfası (Product + Breadcrumb)

```jsx
import { generateProductSchema, generateBreadcrumbSchema } from '../utils/schemaGenerator';

function ProductPage({ product }) {
  const schemas = [
    generateProductSchema({
      name: product.name,
      description: product.description,
      image: product.image,
      sku: product.sku,
      brand: 'Woody ve Arkadaşları',
      offers: {
        url: `https://woodyvearkadaslari.com/products/${product.slug}`,
        priceCurrency: 'TRY',
        price: product.price,
        availability: 'https://schema.org/InStock'
      }
    }),
    generateBreadcrumbSchema([
      { name: 'Ana Sayfa', url: '/' },
      { name: 'Mağaza', url: '/store' },
      { name: product.name, url: `/products/${product.slug}` }
    ])
  ];

  return <SEO schema={schemas} />;
}
```

---

## 🔧 Schema Generator Fonksiyonları

### `generateOrganizationSchema(customData?)`
**Kullanım:** Ana sayfa  
**Parametreler:** (Opsiyonel) Custom data objesi

```javascript
generateOrganizationSchema({
  name: 'Özel İsim',
  url: 'https://example.com',
  logo: 'https://example.com/logo.png'
})
```

---

### `generateWebSiteSchema(customData?)`
**Kullanım:** Ana sayfa  
**Özellik:** Google sitelinks search box ekler

---

### `generateWebPageSchema(data)`
**Kullanım:** Tüm sayfalar  
**Parametreler:**
```javascript
{
  title: string,
  description: string,
  url: string,
  image: string,
  datePublished?: string,
  dateModified?: string
}
```

---

### `generateArticleSchema(data)`
**Kullanım:** Blog postları  
**Parametreler:**
```javascript
{
  title: string,
  description: string,
  url: string,
  image: string,
  datePublished: string,
  dateModified?: string,
  author?: string,
  keywords?: array
}
```

---

### `generateVideoSchema(data)`
**Kullanım:** Video sayfaları  
**Parametreler:**
```javascript
{
  name: string,
  description: string,
  thumbnailUrl: string,
  uploadDate: string,
  duration: string, // ISO 8601: PT1M30S
  contentUrl: string,
  embedUrl: string
}
```

**Duration Format:**
- `PT1M30S` = 1 dakika 30 saniye
- `PT5M` = 5 dakika
- `PT1H20M` = 1 saat 20 dakika

---

### `generateBreadcrumbSchema(breadcrumbs)`
**Kullanım:** Tüm sayfalar  
**Parametreler:** Array of `{ name, url }`

```javascript
generateBreadcrumbSchema([
  { name: 'Ana Sayfa', url: '/' },
  { name: 'Blog', url: '/blog' },
  { name: 'Post Başlığı', url: '/blog/post-slug' }
])
```

---

### `generateProductSchema(data)`
**Kullanım:** Ürün sayfaları  
**Parametreler:**
```javascript
{
  name: string,
  description: string,
  image: string,
  sku: string,
  brand?: string,
  offers: {
    url: string,
    priceCurrency: string,
    price: number,
    availability: string
  }
}
```

---

## 🛠️ Yardımcı Fonksiyonlar

### `combineSchemas(...schemas)`
Birden fazla schema'yı birleştirir ve tekrarları önler.

```javascript
import { combineSchemas, generateWebPageSchema, generateArticleSchema } from '../utils/schemaGenerator';

const allSchemas = combineSchemas(
  generateWebPageSchema(data1),
  generateArticleSchema(data2),
  [schema3, schema4] // Array de kabul eder
);

// Sonuç: Unique schema array (duplicate @type kaldırılır)
```

---

### `generateAutoSchema(pageType, data)`
Sayfa tipine göre otomatik schema seçer.

```javascript
import { generateAutoSchema } from '../utils/schemaGenerator';

const schemas = generateAutoSchema('homepage', {});
// Returns: [OrganizationSchema, WebSiteSchema]

const schemas = generateAutoSchema('blog-post', {
  title: 'Post Title',
  description: 'Post description',
  ...
});
// Returns: ArticleSchema
```

**Desteklenen pageType'lar:**
- `homepage` → Organization + WebSite
- `blog-list` → WebPage
- `blog-post` → Article
- `video-page` → WebPage + VideoObject
- `product` → Product
- `default` → WebPage

---

## 📊 SEO Faydaları

### 1. **Rich Snippets (Zengin Sonuçlar)**
Google arama sonuçlarında öne çıkar:
- ⭐ Yıldız puanlar
- 📅 Yayın tarihleri
- 👤 Yazar bilgisi
- 💰 Fiyat bilgisi
- 🎥 Video önizleme

### 2. **Knowledge Graph**
Google Knowledge Panel'de görünme şansı artar.

### 3. **Sitelinks Search Box**
Ana sayfa için Google'da arama kutusu görünür.

### 4. **Breadcrumbs in SERP**
Arama sonuçlarında breadcrumb navigasyonu görünür.

---

## 🧪 Test Araçları

### 1. **Google Rich Results Test**
```
https://search.google.com/test/rich-results
```
URL veya kod paste ederek test edin.

### 2. **Schema.org Validator**
```
https://validator.schema.org/
```
JSON-LD kodunuzu validate edin.

### 3. **Chrome DevTools**
Tarayıcıda sayfa kaynağını görüntüleyin:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  ...
}
</script>
```

---

## ✨ Best Practices

### ✅ DO:
- Her sayfada en az bir schema kullanın
- Breadcrumb schema'sını tüm sayfalara ekleyin
- Gerçek, doğru veriler kullanın
- ISO 8601 tarih formatı kullanın
- Multiple schema'ları combineSchemas() ile birleştirin

### ❌ DON'T:
- Yanlış/sahte veri eklemeyin (Google penalize eder)
- Aynı @type'ı tekrarlamayın (combineSchemas kullanın)
- Schema'yı manuel JSON olarak yazmayın (generator kullanın)
- datePublished/dateModified eksik bırakmayın (Article için)

---

## 📋 Tüm Sayfalar ve Schema'ları

| Sayfa | Schema Tipleri |
|-------|----------------|
| Ana Sayfa | Organization, WebSite, Breadcrumb |
| Preschool | WebPage, Breadcrumb |
| Workshop | WebPage, Breadcrumb |
| Store | WebPage, Breadcrumb |
| Blog Listesi | WebPage, Breadcrumb |
| Blog Post | Article, Breadcrumb |
| Video Sayfası | WebPage, VideoObject, Breadcrumb |
| Ürün Detay | Product, Breadcrumb |

---

## 🚀 Gelecek Geliştirmeler

- [ ] FAQPage schema (SSS sayfaları için)
- [ ] Course schema (Eğitim içerikleri için)
- [ ] Event schema (Etkinlikler için)
- [ ] LocalBusiness schema (Fiziksel mağaza için)

---

Hazırlayan: E1 Agent  
Tarih: 2026-04-17
