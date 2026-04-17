#!/bin/bash
# Woody Preschool - GitHub Pages Deployment Script
# Bu scripti lokal bilgisayarınızda çalıştırın

set -e

echo "🎓 Woody Preschool - GitHub Pages Deployment"
echo "=============================================="
echo ""

# Renkli çıktı
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Geçici klasör oluştur
TEMP_DIR=$(mktemp -d)
echo "📁 Geçici klasör: $TEMP_DIR"

# GitHub repo'dan projeyi clone et
echo ""
echo "${YELLOW}📥 Adım 1: Projeyi GitHub'dan clone ediyorum...${NC}"
git clone https://github.com/minayayinevi-pixel/woody.git "$TEMP_DIR/woody-source"
cd "$TEMP_DIR/woody-source"

# Build klasörünün varlığını kontrol et
if [ ! -d "frontend/build" ]; then
    echo "${RED}❌ Hata: frontend/build klasörü bulunamadı!${NC}"
    echo "   Önce Emergent'te 'Save to GitHub' yapmanız gerekiyor."
    exit 1
fi

echo "${GREEN}✅ Build klasörü bulundu${NC}"

# Yeni deployment klasörü oluştur
echo ""
echo "${YELLOW}📦 Adım 2: Deployment klasörü hazırlanıyor...${NC}"
DEPLOY_DIR="$TEMP_DIR/woody-deploy"
mkdir -p "$DEPLOY_DIR"

# Build içeriğini kopyala (sadece build output)
cp "$TEMP_DIR/woody-source/frontend/build/index.html" "$DEPLOY_DIR/"
cp "$TEMP_DIR/woody-source/frontend/build/asset-manifest.json" "$DEPLOY_DIR/"
cp -r "$TEMP_DIR/woody-source/frontend/build/static" "$DEPLOY_DIR/"

# README ekle
cat > "$DEPLOY_DIR/README.md" << 'EOF'
# 🎓 Woody Preschool

**Live Site:** https://minayayinevi-pixel.github.io/woody/

Premium okul öncesi İngilizce eğitim sistemi - Woody and Friends

## 🌐 Pages

- 🏠 Ana Sayfa - Hero video ve özellikler
- 🏫 Okul Serisi - Sınıf kullanımı için eğitim setleri
- 🎨 Atölye Serisi - Workshop programları
- 👨‍🏫 Ev & Özel Ders - Bireysel eğitim
- 🎓 Woody Academy - Mezuniyet programı
- 🛍️ Woody Store - Ürün kataloğu
- 📝 Blog - Eğitim içerikleri

## 🚀 Tech Stack

- React 18
- Tailwind CSS
- React Router v6
- Lucide Icons

## 📦 Deployment

GitHub Pages üzerinde otomatik deployment.

---

© 2025 Woody and Friends - Mina Yayınevi
EOF

echo "${GREEN}✅ Dosyalar kopyalandı${NC}"
echo ""
echo "📋 Kopyalanan dosyalar:"
ls -lah "$DEPLOY_DIR"

# Git init ve commit
echo ""
echo "${YELLOW}📤 Adım 3: Git commit oluşturuluyor...${NC}"
cd "$DEPLOY_DIR"
git init
git add .
git commit -m "🚀 Deploy Woody Preschool - Production Build Only"
git branch -M main

# Remote ekle
git remote add origin https://github.com/minayayinevi-pixel/woody.git

echo "${GREEN}✅ Git hazır${NC}"

# Push
echo ""
echo "${YELLOW}🚀 Adım 4: GitHub'a push ediliyor...${NC}"
echo "${RED}⚠️  Bu adım mevcut repo içeriğini değiştirecek (force push)${NC}"
read -p "Devam etmek istiyor musunuz? (y/N): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    git push -f origin main
    
    echo ""
    echo "${GREEN}================================${NC}"
    echo "${GREEN}✅ DEPLOYMENT TAMAMLANDI!${NC}"
    echo "${GREEN}================================${NC}"
    echo ""
    echo "📁 GitHub Repo: https://github.com/minayayinevi-pixel/woody"
    echo ""
    echo "🌐 GitHub Pages Ayarları:"
    echo "   1. https://github.com/minayayinevi-pixel/woody/settings/pages"
    echo "   2. Source: Deploy from branch"
    echo "   3. Branch: main / root"
    echo "   4. Save"
    echo ""
    echo "🎯 Siteniz burada yayında olacak:"
    echo "   ${GREEN}https://minayayinevi-pixel.github.io/woody/${NC}"
    echo ""
    echo "⏱️  Deployment 2-3 dakika sürebilir"
else
    echo "${YELLOW}❌ İptal edildi${NC}"
    exit 0
fi

# Temizlik
echo ""
echo "🧹 Geçici dosyalar temizleniyor..."
cd /
rm -rf "$TEMP_DIR"

echo "${GREEN}✅ Tamamlandı!${NC}"
