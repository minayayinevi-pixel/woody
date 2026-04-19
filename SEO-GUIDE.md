# 🚀 Global SEO Engine - Kullanım Kılavuzu

## 📦 Kurulum

SEO sistemi tüm projeye entegre edilmiştir. Otomatik çalışır.

---

## ✅ Varsayılan SEO Değerleri

Hiçbir prop verilmezse şu değerler kullanılır:

- **Title**: "Anaokulu İngilizce Eğitim Sistemi | Oyun Temelli Okul Öncesi İngilizce"
- **Description**: "Woody ve Arkadaşları, anaokulu ve okul öncesi dönem için oyun temelli İngilizce eğitim sistemi, öğretmen setleri, öğrenci setleri, şarkılar ve aktiviteler sunar."
- **Site Name**: "Woody ve Arkadaşları"
- **Base URL**: `https://woodyvearkadaslari.com`
- **Locale**: `tr_TR`
- **Language**: `tr`

---

## 🎯 Temel Kullanım

### 1. Varsayılan SEO (Override yok)

```jsx
import SEO from './components/SEO';

function MyPage() {
  return (
    <div>
      <SEO />  {/* Varsayılan değerleri kullanır */}
      {/* Sayfa içeriği */}
    </div>
  );
}
```

---

### 2. Sayfa Özel SEO (Override ile)

```jsx
import SEO from './components/SEO';

function BlogPage() {
  return (
    <div>
      <SEO 
        title="Blog | Okul Öncesi İngilizce Eğitimi"
        description="Anaokulu İngilizce eğitimi hakkında uzman tavsiyeleri"
        canonical="/blog"
        keywords="okul öncesi ingilizce, anaokulu eğitimi"
      />
      {/* Sayfa içeriği */}
    </div>
  );
}
```

---

### 3. Dinamik İçerik (Ürün, Blog Post)

```jsx
import SEO from './components/SEO';

function ProductPage({ product }) {
  return (
    <div>
      <SEO 
        title={`${product.name} | Woody Store`}
        description={product.description}
        canonical={`/products/${product.slug}`}
        image={product.image}
        type="product"
        keywords={product.tags.join(', ')}
      />
      {/* Ürün detayı */}
    </div>
  );
}
```

---

### 4. JSON-LD Structured Data Ekleme

```jsx
import SEO from './components/SEO';

function ArticlePage({ article }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "author": {
      "@type": "Organization",
      "name": "Woody ve Arkadaşları"
    },
    "datePublished": article.publishDate,
    "image": article.image
  };

  return (
    <div>
      <SEO 
        title={article.title}
        description={article.excerpt}
        canonical={`/blog/${article.slug}`}
        schema={schema}
      />
      {/* Makale içeriği */}
    </div>
  );
}
```

---

## 📋 SEO Component Props

| Prop | Tip | Varsayılan | Açıklama |
|------|-----|-----------|----------|
| `title` | string | DEFAULT_SEO.title | Sayfa başlığı |
| `description` | string | DEFAULT_SEO.description | Meta açıklama |
| `canonical` | string | Mevcut URL | Canonical URL (relative veya absolute) |
| `image` | string | DEFAULT_SEO.image | OG/Twitter card görseli |
| `type` | string | "website" | OG type (website, article, product) |
| `keywords` | string | - | Meta keywords (virgülle ayrılmış) |
| `noindex` | boolean | false | True ise `noindex,nofollow` ekler |
| `schema` | object | - | JSON-LD structured data |

---

## 🌍 Otomatik Eklenenler

Her sayfada **otomatik olarak** şunlar eklenir:

✅ `<html lang="tr">`  
✅ `<meta charset="UTF-8">`  
✅ Open Graph tags (Facebook, LinkedIn)  
✅ Twitter Card tags  
✅ Canonical URL  
✅ Site name  

---

## 📝 Örnek Sayfalar

### Ana Sayfa
```jsx
<SEO 
  title="Anaokulu İngilizce Eğitim Sistemi | Oyun Temelli Okul Öncesi İngilizce"
  canonical="/"
  keywords="okul öncesi ingilizce, woody preschool"
/>
```

### Blog Listesi
```jsx
<SEO 
  title="Blog | Woody ve Arkadaşları"
  description="Okul öncesi İngilizce eğitimi ipuçları"
  canonical="/blog"
/>
```

### Store
```jsx
<SEO 
  title="Woody Store | İngilizce Eğitim Setleri"
  description="Woody Preschool, Workshop ve Home Tutor setleri"
  canonical="/store"
/>
```

### Digital Content (Noindex)
```jsx
<SEO 
  title="Dijital İçerikler | Woody Digital World"
  canonical="/digital-content"
  noindex={true}  // Google'da görünmez
/>
```

---

## 🔍 SEO Checklist

Her sayfa için kontrol edin:

- [ ] `<SEO />` component eklendi mi?
- [ ] Title benzersiz mi? (Her sayfa farklı)
- [ ] Description 120-160 karakter arası mı?
- [ ] Canonical URL doğru mu?
- [ ] Keywords eklendi mi?
- [ ] Görsel (image) var mı?

---

## 🎨 Özel Default Değer Değiştirme

`/app/frontend/src/components/SEO.jsx` dosyasındaki `DEFAULT_SEO` objesini düzenleyin:

```jsx
const DEFAULT_SEO = {
  title: 'Yeni Başlık',
  description: 'Yeni Açıklama',
  siteName: 'Site Adı',
  baseUrl: 'https://yenisite.com',
  // ...
};
```

---

## 🚀 Production Build

Build alındığında tüm SEO tagları `index.html`'e gömülür:

```bash
yarn build
```

Sonuç:
- ✅ Meta tags hazır
- ✅ OG tags hazır
- ✅ Twitter cards hazır
- ✅ Google'a hazır!

---

## 📊 Test Etme

SEO'yu test edin:

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
3. **Twitter Card Validator**: https://cards-dev.twitter.com/validator

---

## ✨ Notlar

- React Helmet Async kullanılıyor (SSR uyumlu)
- Tüm sayfalar inherit eder
- Override kolay
- Production-ready

---

Hazırlayan: E1 Agent  
Tarih: 2026-04-17
