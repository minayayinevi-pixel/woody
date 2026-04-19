# 🔗 Canonical URL System - Kullanım Kılavuzu

## ✅ Canonical URL Sistemi Aktif

Tüm sayfalarda otomatik canonical URL desteği eklenmiştir.

---

## 🎯 Özellikler

### 1. Self-Referencing Canonical
Her sayfa kendi temiz URL'sine işaret eder:
```html
<!-- Ana Sayfa -->
<link rel="canonical" href="https://woodyvearkadaslari.com/" />

<!-- Preschool -->
<link rel="canonical" href="https://woodyvearkadaslari.com/preschool" />
```

### 2. Query Parameter Temizleme
Otomatik olarak query parametrelerini kaldırır:
```
❌ /preschool?utm_source=facebook&ref=123
✅ https://woodyvearkadaslari.com/preschool
```

### 3. Hash Fragment Temizleme
Hash (#) işaretlerini kaldırır:
```
❌ /blog#section-1
✅ https://woodyvearkadaslari.com/blog
```

### 4. Trailing Slash Normalize
Son slash'leri kaldırır (ana sayfa hariç):
```
❌ /preschool/
✅ https://woodyvearkadaslari.com/preschool

✅ /  → https://woodyvearkadaslari.com/ (Ana sayfa için slash kalır)
```

### 5. HTTPS Zorlaması
Her zaman HTTPS kullanır:
```
❌ http://woodyvearkadaslari.com/preschool
✅ https://woodyvearkadaslari.com/preschool
```

---

## 📝 Kullanım

### Otomatik Canonical (Önerilen)
```jsx
import SEO from './components/SEO';

function MyPage() {
  return (
    <div>
      <SEO />  {/* Otomatik olarak temiz canonical URL oluşturur */}
      {/* Sayfa içeriği */}
    </div>
  );
}
```

### Manuel Canonical
```jsx
import SEO from './components/SEO';

function MyPage() {
  return (
    <div>
      <SEO canonical="/preschool" />  {/* Açıkça belirtilmiş */}
      {/* Sayfa içeriği */}
    </div>
  );
}
```

### Query Parametrelerini Koruma (Özel Durumlar)
```jsx
<SEO 
  canonical="/search?q=woody" 
  removeQueryParams={false}  // Query param'ları korur
/>
```

---

## 🚀 Canonical URL Kuralları

### ✅ Doğru Kullanım:

1. **Ana Sayfa**
```jsx
<SEO canonical="/" />
// Sonuç: https://woodyvearkadaslari.com/
```

2. **Kategori Sayfaları**
```jsx
<SEO canonical="/preschool" />
// Sonuç: https://woodyvearkadaslari.com/preschool
```

3. **Blog Detay**
```jsx
<SEO canonical="/blog/okul-oncesi-ingilizce" />
// Sonuç: https://woodyvearkadaslari.com/blog/okul-oncesi-ingilizce
```

4. **Dinamik Sayfa**
```jsx
const slug = "woody-preschool-seti";
<SEO canonical={`/products/${slug}`} />
// Sonuç: https://woodyvearkadaslari.com/products/woody-preschool-seti
```

### ❌ Yanlış Kullanım:

```jsx
// Trailing slash eklemek
<SEO canonical="/preschool/" />  ❌

// Query parametreleri eklemek (özel durumlar hariç)
<SEO canonical="/preschool?ref=123" />  ❌

// Hash eklemek
<SEO canonical="/blog#comments" />  ❌

// HTTP kullanmak
<SEO canonical="http://woodyvearkadaslari.com/preschool" />  ❌
```

---

## 🔍 Duplicate URL Örnekleri

Canonical URL şu varyasyonları birleştirir:

### Örnek 1: Query Parametreleri
```
URL Varyasyonları:
- /preschool
- /preschool?utm_source=google
- /preschool?ref=facebook&campaign=2024
- /preschool?page=1

Hepsi şuna işaret eder:
https://woodyvearkadaslari.com/preschool
```

### Örnek 2: Trailing Slash
```
URL Varyasyonları:
- /preschool
- /preschool/

Hepsi şuna işaret eder:
https://woodyvearkadaslari.com/preschool
```

### Örnek 3: Protokol
```
URL Varyasyonları:
- http://woodyvearkadaslari.com/preschool
- https://woodyvearkadaslari.com/preschool
- www.woodyvearkadaslari.com/preschool

Hepsi şuna işaret eder:
https://woodyvearkadaslari.com/preschool
```

---

## 🛠️ getCanonicalUrl() Fonksiyonu

Manuel kullanım için:

```javascript
import { getCanonicalUrl } from './components/SEO';

// Örnek 1: Basit path
const url1 = getCanonicalUrl('/preschool');
// Sonuç: "https://woodyvearkadaslari.com/preschool"

// Örnek 2: Query parametreleri ile
const url2 = getCanonicalUrl('/preschool?ref=123');
// Sonuç: "https://woodyvearkadaslari.com/preschool"

// Örnek 3: Trailing slash ile
const url3 = getCanonicalUrl('/preschool/');
// Sonuç: "https://woodyvearkadaslari.com/preschool"

// Örnek 4: Hash ile
const url4 = getCanonicalUrl('/blog#section');
// Sonuç: "https://woodyvearkadaslari.com/blog"
```

---

## 📊 SEO Faydaları

### 1. Duplicate Content Önleme
- Google aynı içeriği farklı URL'lerde görmez
- Page rank birleşir
- Indexleme verimliliği artar

### 2. Link Equity Consolidation
- Tüm backlink'ler tek URL'de toplanır
- Daha güçlü SEO sinyali

### 3. Kullanıcı Deneyimi
- Temiz, paylaşılabilir URL'ler
- Sosyal medya paylaşımları tutarlı

---

## 🧪 Test

### 1. Sayfa Kaynağını Görüntüle
```html
<!-- Tarayıcıda sağ tık → Sayfa Kaynağını Görüntüle -->
<link rel="canonical" href="https://woodyvearkadaslari.com/preschool" />
```

### 2. Google Search Console
- URL Inspection Tool kullanın
- Canonical URL'yi kontrol edin

### 3. SEO Araçları
- Screaming Frog SEO Spider
- Ahrefs Site Audit
- SEMrush Site Audit

---

## ✨ Best Practices

✅ **DO:**
- Her sayfada canonical URL kullanın
- Self-referencing canonical tercih edin
- Absolute URL kullanın (relative değil)
- HTTPS kullanın
- Temiz URL'lere işaret edin

❌ **DON'T:**
- Canonical URL'yi atlayın
- Farklı bir sayfaya işaret ettirin (özel durumlar hariç)
- Relative URL kullanın
- Query parametreleri ekleyin (gerekmedikçe)
- Trailing slash ekleyin

---

## 📋 Tüm Sayfaların Canonical URL'leri

| Sayfa | Canonical URL |
|-------|---------------|
| Ana Sayfa | `https://woodyvearkadaslari.com/` |
| Preschool | `https://woodyvearkadaslari.com/preschool` |
| Workshop | `https://woodyvearkadaslari.com/workshop` |
| Home Tutor | `https://woodyvearkadaslari.com/home-tutor` |
| Store | `https://woodyvearkadaslari.com/store` |
| Blog | `https://woodyvearkadaslari.com/blog` |
| Academy | `https://woodyvearkadaslari.com/woody-academy` |
| Level Finder | `https://woodyvearkadaslari.com/level-finder` |
| Library | `https://woodyvearkadaslari.com/library` |

---

Hazırlayan: E1 Agent  
Tarih: 2026-04-17
