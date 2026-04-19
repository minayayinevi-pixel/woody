# 📝 Article Schema Template - Kullanım Kılavuzu

## ✅ Hazır Article Template Eklendi

Blog yazıları için hazır şablon oluşturuldu.

---

## 🎯 Kullanım

### 1. Basit Kullanım (Template ile)

```jsx
import { generateArticleFromTemplate } from '../utils/schemaGenerator';

function BlogPostPage() {
  // Varsayılan template kullan
  const schema = generateArticleFromTemplate();
  
  return <SEO schema={schema} />;
}
```

---

### 2. Custom Data ile Template Kullanımı

```jsx
import { generateArticleFromTemplate, ARTICLE_TEMPLATE_PRESCHOOL } from '../utils/schemaGenerator';

function BlogPostPage({ post }) {
  // Template'i override et
  const schema = generateArticleFromTemplate(ARTICLE_TEMPLATE_PRESCHOOL, {
    title: post.title,
    description: post.excerpt,
    url: `https://woodyvearkadaslari.com/blog/${post.slug}`,
    datePublished: post.publishedAt
  });
  
  return <SEO schema={schema} />;
}
```

---

### 3. Manuel Article Schema (Template Kullanmadan)

```jsx
import { generateArticleSchema } from '../utils/schemaGenerator';

function BlogPostPage({ post }) {
  const schema = generateArticleSchema({
    title: 'Anaokulunda İngilizce Nasıl Öğretilir | Oyun Temelli Sistem',
    description: 'Anaokulunda İngilizce öğretimi için oyunlar, şarkılar ve aktiviteler ile etkili eğitim modeli.',
    url: 'https://woodyvearkadaslari.com/blog/anaokulunda-ingilizce-nasil-ogretilir',
    image: 'https://woodyvearkadaslari.com/static/blog/preschool-english.jpg',
    datePublished: '2024-01-15T10:00:00Z',
    dateModified: '2024-02-20T15:30:00Z',
    author: 'Woody ve Arkadaşları',
    keywords: ['anaokulu ingilizce', 'okul öncesi eğitim', 'oyun temelli öğrenme']
  });
  
  return <SEO schema={schema} />;
}
```

---

## 📋 Varsayılan Template Değerleri

**ARTICLE_TEMPLATE_PRESCHOOL:**
```javascript
{
  title: 'Anaokulunda İngilizce Nasıl Öğretilir | Oyun Temelli Sistem',
  description: 'Anaokulunda İngilizce öğretimi için oyunlar, şarkılar ve aktiviteler ile etkili eğitim modeli.',
  url: 'https://woodyvearkadaslari.com/blog/anaokulunda-ingilizce-nasil-ogretilir',
  image: 'https://woodyvearkadaslari.com/static/blog/preschool-english.jpg',
  datePublished: (current date),
  dateModified: (current date),
  author: 'Woody ve Arkadaşları',
  keywords: ['anaokulu ingilizce', 'okul öncesi eğitim', 'oyun temelli öğrenme', 'çocuklar için ingilizce']
}
```

---

## 🎨 Çıktı (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Anaokulunda İngilizce Nasıl Öğretilir | Oyun Temelli Sistem",
  "description": "Anaokulunda İngilizce öğretimi için oyunlar, şarkılar ve aktiviteler ile etkili eğitim modeli.",
  "image": "https://woodyvearkadaslari.com/static/blog/preschool-english.jpg",
  "url": "https://woodyvearkadaslari.com/blog/anaokulunda-ingilizce-nasil-ogretilir",
  "datePublished": "2024-01-15T10:00:00Z",
  "dateModified": "2024-02-20T15:30:00Z",
  "author": {
    "@type": "Organization",
    "name": "Woody ve Arkadaşları",
    "url": "https://woodyvearkadaslari.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Woody ve Arkadaşları",
    "logo": {
      "@type": "ImageObject",
      "url": "https://customer-assets.emergentagent.com/..."
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://woodyvearkadaslari.com/blog/anaokulunda-ingilizce-nasil-ogretilir"
  },
  "keywords": "anaokulu ingilizce, okul öncesi eğitim, oyun temelli öğrenme, çocuklar için ingilizce"
}
```

---

## ✨ Google Rich Results

Bu schema sayesinde:
- 📅 Yayın tarihi görünür
- 👤 Yazar/Publisher bilgisi
- 🖼️ Görsel önizleme
- ⏱️ Son güncelleme tarihi
- 🔍 Anahtar kelimeler

---

## 📖 Daha Fazla Template Ekleme

Yeni template eklemek için `schemaGenerator.js`:

```javascript
export const ARTICLE_TEMPLATE_WORKSHOP = {
  title: 'Workshop İngilizce Seti Nasıl Kullanılır',
  description: 'Workshop seti kullanım kılavuzu ve ipuçları',
  url: 'https://woodyvearkadaslari.com/blog/workshop-seti-kullanimi',
  // ...
};
```

Sonra kullanın:
```jsx
import { generateArticleFromTemplate, ARTICLE_TEMPLATE_WORKSHOP } from '../utils/schemaGenerator';

const schema = generateArticleFromTemplate(ARTICLE_TEMPLATE_WORKSHOP);
```

---

Hazırlayan: E1 Agent  
Tarih: 2026-04-17
