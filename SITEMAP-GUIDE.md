# 🗺️ Dynamic Sitemap System - Kullanım Kılavuzu

## 📦 Kurulum Tamamlandı

Sitemap sistemi otomatik olarak çalışır.

---

## ✅ Özellikler

- ✅ Otomatik sitemap.xml oluşturma
- ✅ Build sonrası otomatik güncelleme
- ✅ SEO metadata (lastmod, changefreq, priority)
- ✅ robots.txt entegrasyonu
- ✅ Korunan sayfalar hariç (digital-content)

---

## 🎯 Mevcut Sayfalar

Sitemap'e dahil edilen sayfalar:

### Ana Sayfalar (Priority: 0.9-1.0)
- `/` - Ana sayfa
- `/preschool` - Preschool seti
- `/workshop` - Workshop seti
- `/home-tutor` - Home Tutor seti

### İkincil Sayfalar (Priority: 0.7-0.8)
- `/store` - Woody Store
- `/blog` - Blog listesi
- `/woody-academy` - Woody Academy
- `/level-finder` - Seviye Bulucu
- `/library` - Kütüphane

### Hariç Tutulan Sayfalar
- `/digital-content/*` - PIN korumalı içerik (robots.txt'de disallow)

---

## 🔧 Sitemap Güncelleme

### Otomatik (Build Sırasında)
```bash
yarn build
# Sitemap otomatik oluşturulur
```

### Manuel Güncelleme
```bash
yarn sitemap
# Sadece sitemap'i yeniden oluşturur
```

---

## 📝 Yeni Sayfa Ekleme

`/app/frontend/scripts/generate-sitemap.js` dosyasını açın:

```javascript
const routes = [
  // ... mevcut route'lar
  
  // YENİ SAYFA EKLEYİN:
  {
    url: '/yeni-sayfa',
    changefreq: 'weekly',  // daily, weekly, monthly, yearly
    priority: 0.8,         // 0.0 - 1.0 arası
    lastmod: new Date().toISOString(),
  },
];
```

Sonra:
```bash
yarn sitemap
```

---

## 🎨 Priority Kılavuzu

| Priority | Kullanım Alanı |
|----------|----------------|
| 1.0 | Ana sayfa |
| 0.9 | Ana kategori sayfaları (preschool, workshop, etc.) |
| 0.8 | Store, Blog ana sayfa |
| 0.7 | Academy, Level Finder |
| 0.6 | Blog post detayları |
| 0.5 | Library, diğer sayfalar |

---

## 📊 Changefreq Kılavuzu

| Değer | Kullanım |
|-------|----------|
| `always` | Sürekli değişen sayfalar (nadiren kullanılır) |
| `hourly` | Saatlik güncellenen içerik |
| `daily` | Günlük haberler, blog |
| `weekly` | Haftalık güncellenen sayfalar (Store, Blog listesi) |
| `monthly` | Aylık güncellenen sayfalar (Kategori sayfaları) |
| `yearly` | Yıllık veya nadiren değişen |
| `never` | Hiç değişmeyen (arşiv sayfaları) |

---

## 🚀 Production Deployment

Build aldığınızda sitemap otomatik oluşur:

```bash
yarn build
# ✅ Build tamamlandı
# ✅ Sitemap oluşturuldu: /app/frontend/public/sitemap.xml
```

Sitemap URL'si:
```
https://woodyvearkadaslari.com/sitemap.xml
```

---

## 🔍 Google Search Console'a Ekleme

1. [Google Search Console](https://search.google.com/search-console)
2. Property → Sitemaps
3. URL ekle: `https://woodyvearkadaslari.com/sitemap.xml`
4. Gönder

---

## 📋 Blog Post Dinamik Ekleme

Blog postları dinamik olarak eklemek için:

```javascript
// generate-sitemap.js içinde

// Blog posts (gerçek blog verilerinizden çekin)
const blogPosts = [
  { slug: 'okul-oncesi-ingilizce', date: '2026-01-15' },
  { slug: 'oyun-tabanli-egitim', date: '2026-02-20' },
];

blogPosts.forEach(post => {
  routes.push({
    url: `/blog/${post.slug}`,
    changefreq: 'monthly',
    priority: 0.6,
    lastmod: new Date(post.date).toISOString(),
  });
});
```

---

## 🛡️ Robots.txt

`/app/frontend/public/robots.txt` oluşturuldu:

```
User-agent: *
Allow: /

Disallow: /digital-content/

Sitemap: https://woodyvearkadaslari.com/sitemap.xml
```

---

## 📊 Sitemap Index (Gelecek için)

İçerik çok büyürse (50,000+ URL) sitemap index kullanın:

```javascript
// Gelecekte implement edilecek
// sitemap-index.xml → birden fazla sitemap'i işaret eder
```

---

## 🧪 Test

Sitemap'i test edin:

1. **XML Doğrulama**: https://www.xml-sitemaps.com/validate-xml-sitemap.html
2. **Google Test**: Google Search Console → Sitemaps
3. **Lokal test**: `http://localhost:3000/sitemap.xml`

---

## ✨ Notlar

- ✅ Build sonrası otomatik çalışır
- ✅ Tüm public sayfaları içerir
- ✅ SEO-friendly metadata
- ✅ robots.txt entegrasyonu
- ✅ Google'a hazır!

---

Hazırlayan: E1 Agent  
Tarih: 2026-04-17
