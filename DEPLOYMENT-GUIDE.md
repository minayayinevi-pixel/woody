# 🚀 Woody Preschool - GitHub Pages Deployment Guide

## 📦 Build Klasörü Hazır!

Production build `/app/frontend/build/` klasöründe hazır.

---

## Adım 1️⃣: Save to GitHub

1. **Emergent chat inputunun yanındaki GitHub ikonuna tıklayın**
2. **"Save to GitHub"** seçeneğini kullanın
3. Repo adı: `woody-preschool` (veya istediğiniz isim)
4. Push edin!

---

## Adım 2️⃣: GitHub'dan Build Klasörünü Al

```bash
# Reponuzu clone edin
git clone https://github.com/YOUR_USERNAME/woody-preschool.git
cd woody-preschool

# Build klasörünü kopyalayın
cp -r frontend/build ./woody-static
cd woody-static
```

---

## Adım 3️⃣: Yeni Repo'ya Deploy

### GitHub Pages için:

```bash
# Yeni repo oluşturun (GitHub'da)
# Örnek: woody-preschool-site

# Build klasöründen yeni repo'ya push
git init
git add .
git commit -m "Deploy Woody Preschool static site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/woody-preschool-site.git
git push -u origin main
```

**GitHub'da Settings → Pages → Enable** yapın

**Site URL:** `https://YOUR_USERNAME.github.io/woody-preschool-site/`

---

## 🎯 Alternatif: Netlify (Daha Kolay!)

1. **Save to GitHub** ile projeyi GitHub'a gönderin
2. GitHub'dan `frontend/build` klasörünü lokal bilgisayarınıza indirin
3. https://app.netlify.com/drop adresine gidin
4. `build` klasörünü sürükleyip bırakın
5. ✅ **Canlı!** Netlify otomatik URL verir

---

## 📂 Build İçeriği

```
frontend/build/
├── index.html              # Ana sayfa
├── README.md              # Deployment talimatları
├── asset-manifest.json    # Asset mapping
└── static/
    ├── css/
    │   └── main.33ed6d72.css (85 KB)
    └── js/
        └── main.6e44356d.js (420 KB)
```

**Toplam boyut:** ~520 KB (gzip: 132 KB)

---

## ✨ Özellikler

✅ Tam responsive (mobil/tablet/desktop)
✅ Premium Apple-style UI
✅ Video içerikler (otomatik oynatma)
✅ Woody Yenilikler carousel
✅ Coming Soon placeholder'ları
✅ Türkçe dil desteği
✅ Tüm sayfalar çalışır durumda

---

## 🌐 Sayfalar

- Ana Sayfa (/)
- Okul Serisi (/preschool)
- Atölye (/workshop)
- Ev & Özel Ders (/home-tutor)
- Woody Academy (/woody-academy)
- Woody Store (/store)
- Blog (/blog)

---

## 💡 Hızlı Test (Lokal)

```bash
cd frontend/build
python3 -m http.server 8000
```

Tarayıcıda: http://localhost:8000

---

**Deployment başarılı!** 🎉

Save to GitHub → Build klasörünü al → Deploy et
