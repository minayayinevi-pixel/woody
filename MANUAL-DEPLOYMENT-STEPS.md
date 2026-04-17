# 📘 Woody Preschool - Manuel GitHub Pages Deployment

## 🎯 Hedef

Sadece **production build output** (frontend/build içeriği) GitHub repo root'unda olacak:

```
woody/ (repo root)
├── index.html
├── asset-manifest.json
├── README.md
└── static/
    ├── css/
    └── js/
```

---

## 📋 Adım Adım Talimatlar

### Adım 1: Projeyi GitHub'a Kaydet

1. **Emergent chat input yanındaki GitHub ikonuna tıklayın**
2. **"Save to GitHub"** seçin
3. Repo: `https://github.com/minayayinevi-pixel/woody`
4. Push edin

**Bu adım tüm kaynak kodu gönderir (frontend, backend, vs.)**

---

### Adım 2: Lokal Bilgisayarınızda

```bash
# Repo'yu clone edin
git clone https://github.com/minayayinevi-pixel/woody.git
cd woody

# Geçici deployment klasörü oluşturun
mkdir ../woody-deploy
cd ../woody-deploy

# Sadece build output'u kopyalayın
cp ../woody/frontend/build/index.html .
cp ../woody/frontend/build/asset-manifest.json .
cp -r ../woody/frontend/build/static .

# README ekleyin
cat > README.md << 'EOF'
# 🎓 Woody Preschool

**Live:** https://minayayinevi-pixel.github.io/woody/

Premium okul öncesi İngilizce eğitim sistemi.

© 2025 Woody and Friends - Mina Yayınevi
EOF
```

---

### Adım 3: Git Init ve Commit

```bash
# Git repo oluşturun
git init
git add .
git commit -m "Deploy Woody Preschool - Production Build"
git branch -M main

# Remote ekleyin
git remote add origin https://github.com/minayayinevi-pixel/woody.git
```

---

### Adım 4: GitHub'a Push

```bash
# Force push (mevcut içeriği değiştirir)
git push -f origin main
```

**⚠️ DİKKAT:** Bu komut mevcut repo içeriğini tamamen değiştirir!

---

### Adım 5: GitHub Pages Aktif Edin

1. https://github.com/minayayinevi-pixel/woody/settings/pages
2. **Source:** Deploy from branch
3. **Branch:** main
4. **Folder:** / (root)
5. **Save**

---

## 🌐 Sonuç

2-3 dakika içinde siteniz burada yayında olacak:

**https://minayayinevi-pixel.github.io/woody/**

---

## 🔧 Alternatif: Otomatik Script

Otomatik deployment için `/app/GITHUB-DEPLOYMENT.sh` scriptini kullanabilirsiniz:

```bash
# Script'i çalıştırılabilir yapın
chmod +x GITHUB-DEPLOYMENT.sh

# Çalıştırın
./GITHUB-DEPLOYMENT.sh
```

---

## 📦 Build İçeriği

- **index.html** - Ana sayfa (4.8 KB)
- **asset-manifest.json** - Asset mapping
- **static/css/main.css** - Tüm stiller (15 KB gzip)
- **static/js/main.js** - Tüm JavaScript (114 KB gzip)
- **README.md** - Repo açıklaması

**Toplam:** ~520 KB (gzip sonrası 129 KB)

---

## ✅ Kontrol Listesi

- [ ] Emergent'te "Save to GitHub" yaptım
- [ ] Repo'yu lokal bilgisayarıma clone ettim
- [ ] Build output'u deployment klasörüne kopyaladım
- [ ] Git init, commit ve push yaptım
- [ ] GitHub Pages ayarlarını aktif ettim
- [ ] Site yayında: https://minayayinevi-pixel.github.io/woody/

---

**Başarılar!** 🚀
