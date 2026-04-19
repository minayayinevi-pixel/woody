# 🎥 VideoObject Schema Template - Kullanım Kılavuzu

## ✅ VideoObject Template Eklendi

Video içerikler için hazır şablon oluşturuldu.

---

## 🎯 Template Bilgileri

**VIDEO_TEMPLATE_SONGS_GAMES:**
```javascript
{
  name: 'İngilizce Şarkılar ve Oyunlarla Eğitim',
  description: 'Çocuklar için İngilizce eğitimi oyunlar ve şarkılar ile desteklenir.',
  thumbnailUrl: 'https://woodyvearkadaslari.com/static/videos/songs-games-thumbnail.jpg',
  uploadDate: (current date),
  duration: 'PT5M30S', // 5 dakika 30 saniye
  contentUrl: 'https://woodyvearkadaslari.com/static/videos/songs-games.mp4',
  embedUrl: 'https://player.vimeo.com/video/123456789'
}
```

---

## 📖 Kullanım

### 1. Basit Kullanım (Template ile)

```jsx
import { generateVideoFromTemplate } from '../utils/schemaGenerator';
import SEO from './SEO';

function VideoPage() {
  const schema = generateVideoFromTemplate();
  
  return (
    <div>
      <SEO schema={schema} />
      {/* Video player */}
    </div>
  );
}
```

---

### 2. Custom Data ile Override

```jsx
import { generateVideoFromTemplate, VIDEO_TEMPLATE_SONGS_GAMES } from '../utils/schemaGenerator';

function VideoPage({ video }) {
  const schema = generateVideoFromTemplate(VIDEO_TEMPLATE_SONGS_GAMES, {
    name: video.title,
    description: video.description,
    thumbnailUrl: video.thumbnail,
    duration: video.duration, // ISO 8601 format
    embedUrl: video.embedUrl
  });
  
  return <SEO schema={schema} />;
}
```

---

### 3. Manuel VideoObject Schema

```jsx
import { generateVideoSchema } from '../utils/schemaGenerator';

function VideoPage({ video }) {
  const schema = generateVideoSchema({
    name: 'İngilizce Şarkılar ve Oyunlarla Eğitim',
    description: 'Çocuklar için İngilizce eğitimi oyunlar ve şarkılar ile desteklenir.',
    thumbnailUrl: 'https://woodyvearkadaslari.com/static/videos/thumbnail.jpg',
    uploadDate: '2024-01-15T10:00:00Z',
    duration: 'PT5M30S',
    contentUrl: 'https://woodyvearkadaslari.com/static/videos/video.mp4',
    embedUrl: 'https://player.vimeo.com/video/123456789'
  });
  
  return <SEO schema={schema} />;
}
```

---

## ⏱️ Duration Format (ISO 8601)

Video süresi için ISO 8601 formatı kullanılır:

| Süre | Format |
|------|--------|
| 30 saniye | `PT30S` |
| 1 dakika | `PT1M` |
| 1 dakika 30 saniye | `PT1M30S` |
| 5 dakika 30 saniye | `PT5M30S` |
| 10 dakika | `PT10M` |
| 1 saat | `PT1H` |
| 1 saat 20 dakika | `PT1H20M` |
| 1 saat 30 dakika 45 saniye | `PT1H30M45S` |

**Format Kuralı:**
- `PT` = Period Time (başlangıç)
- `H` = Hours (saat)
- `M` = Minutes (dakika)
- `S` = Seconds (saniye)

---

## 🎨 Çıktı (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "İngilizce Şarkılar ve Oyunlarla Eğitim",
  "description": "Çocuklar için İngilizce eğitimi oyunlar ve şarkılar ile desteklenir.",
  "thumbnailUrl": "https://woodyvearkadaslari.com/static/videos/songs-games-thumbnail.jpg",
  "uploadDate": "2024-01-15T10:00:00Z",
  "duration": "PT5M30S",
  "contentUrl": "https://woodyvearkadaslari.com/static/videos/songs-games.mp4",
  "embedUrl": "https://player.vimeo.com/video/123456789",
  "publisher": {
    "@type": "Organization",
    "name": "Woody ve Arkadaşları",
    "logo": {
      "@type": "ImageObject",
      "url": "https://customer-assets.emergentagent.com/..."
    }
  }
}
```

---

## ✨ Google Rich Results

Bu schema sayesinde:
- 🎥 Video önizleme (thumbnail)
- ⏱️ Video süresi
- 📅 Yüklenme tarihi
- ▶️ Direkt oynatma linki
- 🔍 Google Video arama sonuçlarında görünme

---

## 🎬 Video + WebPage Kombinasyonu

Video içeren sayfalarda hem WebPage hem VideoObject kullanın:

```jsx
import { generateWebPageSchema, generateVideoFromTemplate, combineSchemas } from '../utils/schemaGenerator';

function VideoPage({ video }) {
  const schemas = combineSchemas(
    generateWebPageSchema({
      title: video.title,
      description: video.description,
      url: `https://woodyvearkadaslari.com/videos/${video.id}`,
      image: video.thumbnail
    }),
    generateVideoFromTemplate(VIDEO_TEMPLATE_SONGS_GAMES, {
      name: video.title,
      embedUrl: video.url
    })
  );
  
  return <SEO schema={schemas} />;
}
```

---

## 📋 Yeni Video Template Ekleme

`schemaGenerator.js`:

```javascript
export const VIDEO_TEMPLATE_STORYLAND = {
  name: 'Storyland İngilizce Hikayeler',
  description: 'Çocuklar için İngilizce hikayeler',
  thumbnailUrl: 'https://woodyvearkadaslari.com/static/storyland.jpg',
  duration: 'PT8M',
  embedUrl: 'https://player.vimeo.com/video/...'
};
```

Kullanım:
```jsx
import { generateVideoFromTemplate, VIDEO_TEMPLATE_STORYLAND } from '../utils/schemaGenerator';

const schema = generateVideoFromTemplate(VIDEO_TEMPLATE_STORYLAND);
```

---

## 🧪 Test

**Google Rich Results Test:**
```
https://search.google.com/test/rich-results
```

Video schema'nızı test edin ve önizleme görün.

---

Hazırlayan: E1 Agent  
Tarih: 2026-04-17
