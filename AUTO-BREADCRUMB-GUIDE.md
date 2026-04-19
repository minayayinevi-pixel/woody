# 🗺️ Automatic Breadcrumb Schema - Kullanım Kılavuzu

## ✅ Otomatik Breadcrumb Sistemi Aktif

URL path'inden otomatik olarak breadcrumb schema oluşturur.

---

## 🎯 Özellikler

✅ **Otomatik URL Parsing**: `/preschool` → Ana Sayfa > Preschool İngilizce Seti  
✅ **Türkçe Eşleştirme**: Route isimlerini otomatik Türkçeleştirir  
✅ **Manuel Override**: Özel isimler ekleyebilirsiniz  
✅ **SEO Entegrasyonu**: Otomatik olarak SEO component'e enjekte edilir  
✅ **Google SERP**: Arama sonuçlarında breadcrumb görünür

---

## 📖 Kullanım

### 1. Otomatik Breadcrumb (En Kolay)

SEO component otomatik breadcrumb oluşturur:

```jsx
import SEO from './components/SEO';

function PreschoolPage() {
  return (
    <div>
      <SEO />  {/* Breadcrumb otomatik oluşturulur */}
      {/* Sayfa içeriği */}
    </div>
  );
}
```

**URL**: `/preschool`  
**Breadcrumb**: Ana Sayfa > Preschool İngilizce Seti

---

### 2. Manuel Breadcrumb

Özel breadcrumb tanımlamak:

```jsx
import SEO from './components/SEO';

function BlogPostPage({ post }) {
  const breadcrumbs = [
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` }
  ];

  return <SEO breadcrumbs={breadcrumbs} />;
}
```

---

### 3. Otomatik Breadcrumb + Custom İsimler

```jsx
import SEO from './components/SEO';

function ProductPage({ product }) {
  return (
    <SEO 
      breadcrumbOptions={{
        customNames: {
          '/store/preschool-set': 'Preschool Seti'
        }
      }}
    />
  );
}
```

---

### 4. Breadcrumb Kapatma

```jsx
<SEO autoBreadcrumb={false} />  {/* Breadcrumb oluşturulmaz */}
```

---

## 🗺️ Route Mapping

Otomatik Türkçeleştirme:

| URL Path | Breadcrumb İsmi |
|----------|-----------------|
| `/` | Ana Sayfa |
| `/preschool` | Preschool İngilizce Seti |
| `/workshop` | Workshop İngilizce Seti |
| `/home-tutor` | Home Tutor İngilizce Seti |
| `/store` | Woody Store |
| `/blog` | Blog |
| `/woody-academy` | Woody Academy |
| `/level-finder` | Seviye Bulucu |
| `/library` | Kütüphane |

---

## 🔧 Fonksiyonlar

### `generateBreadcrumbFromPath(pathname, customNames)`

URL'den breadcrumb items oluşturur.

```javascript
import { generateBreadcrumbFromPath } from '../utils/breadcrumbGenerator';

const breadcrumbs = generateBreadcrumbFromPath('/preschool');
// Returns: [
//   { name: 'Ana Sayfa', url: '/' },
//   { name: 'Preschool İngilizce Seti', url: '/preschool' }
// ]
```

---

### `getAutoBreadcrumb(options)`

Mevcut sayfa için otomatik breadcrumb.

```javascript
import { getAutoBreadcrumb } from '../utils/breadcrumbGenerator';

const breadcrumbs = getAutoBreadcrumb({
  pathname: '/blog/post-1',  // Optional: custom path
  customNames: {
    '/blog/post-1': 'İlk Blog Yazım'
  },
  includeHome: true  // Default: true
});
```

---

### `addRouteNames(mapping)`

Yeni route isimleri ekle.

```javascript
import { addRouteNames } from '../utils/breadcrumbGenerator';

addRouteNames({
  'new-page': 'Yeni Sayfa',
  'about-us': 'Hakkımızda'
});
```

---

## 📊 Örnekler

### Örnek 1: Ana Sayfa
```
URL: /
Breadcrumb: Ana Sayfa
```

**JSON-LD:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Ana Sayfa",
      "item": "https://woodyvearkadaslari.com/"
    }
  ]
}
```

---

### Örnek 2: Preschool Sayfası
```
URL: /preschool
Breadcrumb: Ana Sayfa > Preschool İngilizce Seti
```

**JSON-LD:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Ana Sayfa",
      "item": "https://woodyvearkadaslari.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Preschool İngilizce Seti",
      "item": "https://woodyvearkadaslari.com/preschool"
    }
  ]
}
```

---

### Örnek 3: Blog Post
```
URL: /blog/okul-oncesi-ingilizce
Breadcrumb: Ana Sayfa > Blog > Okul Öncesi İngilizce
```

**Kod:**
```jsx
function BlogPostPage({ post }) {
  return (
    <SEO 
      breadcrumbOptions={{
        customNames: {
          [`/blog/${post.slug}`]: post.title
        }
      }}
    />
  );
}
```

---

### Örnek 4: Ürün Detay Sayfası
```
URL: /store/preschool/basic-set
Breadcrumb: Ana Sayfa > Woody Store > Preschool > Basic Set
```

**Kod:**
```jsx
function ProductPage({ category, product }) {
  const breadcrumbs = [
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Woody Store', url: '/store' },
    { name: category.name, url: `/store/${category.slug}` },
    { name: product.name, url: `/store/${category.slug}/${product.slug}` }
  ];

  return <SEO breadcrumbs={breadcrumbs} />;
}
```

---

## 🎨 Google SERP Görünümü

Breadcrumb schema sayesinde Google arama sonuçlarında:

```
woodyvearkadaslari.com › preschool
Ana Sayfa › Preschool İngilizce Seti
Woody Preschool | Okul Öncesi İngilizce Eğitim Seti
3-6 yaş arası çocuklar için oyun tabanlı İngilizce eğitim seti...
```

---

## 🔍 Slug'dan Title Oluşturma

Otomatik title case dönüşümü:

| Slug | Title |
|------|-------|
| `okul-oncesi-ingilizce` | Okul Öncesi İngilizce |
| `oyun-tabanli-egitim` | Oyun Tabanli Egitim |
| `woody-preschool` | Woody Preschool |

---

## ✨ Best Practices

✅ **DO:**
- Otomatik breadcrumb kullanın (basit ve bakımı kolay)
- Özel sayfalar için manuel breadcrumb tanımlayın
- Breadcrumb'ı her sayfada kullanın

❌ **DON'T:**
- Ana sayfada breadcrumb'ı gizlemeyin
- 5'ten fazla seviye kullanmayın
- URL ile breadcrumb'ı farklı tutmayın

---

## 🧪 Test

**Google Rich Results Test:**
```
https://search.google.com/test/rich-results
```

Breadcrumb schema'nızı test edin.

---

## 📋 Tüm Sayfaların Breadcrumb'ları

| Sayfa | Breadcrumb |
|-------|-----------|
| Ana Sayfa | Ana Sayfa |
| Preschool | Ana Sayfa > Preschool İngilizce Seti |
| Workshop | Ana Sayfa > Workshop İngilizce Seti |
| Home Tutor | Ana Sayfa > Home Tutor İngilizce Seti |
| Store | Ana Sayfa > Woody Store |
| Blog | Ana Sayfa > Blog |
| Blog Post | Ana Sayfa > Blog > [Post Title] |
| Academy | Ana Sayfa > Woody Academy |
| Level Finder | Ana Sayfa > Seviye Bulucu |

---

Hazırlayan: E1 Agent  
Tarih: 2026-04-17
