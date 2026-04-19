import React from 'react';
import { Helmet } from 'react-helmet-async';

// Default SEO values
const DEFAULT_SEO = {
  title: 'Anaokulu İngilizce Eğitim Sistemi | Oyun Temelli Okul Öncesi İngilizce',
  description: 'Woody ve Arkadaşları, anaokulu ve okul öncesi dönem için oyun temelli İngilizce eğitim sistemi, öğretmen setleri, öğrenci setleri, şarkılar ve aktiviteler sunar.',
  siteName: 'Woody ve Arkadaşları',
  baseUrl: 'https://woodyvearkadaslari.com',
  image: 'https://woodyvearkadaslari.com/static/og-image.jpg', // Varsayılan OG image
  type: 'website',
  locale: 'tr_TR',
  twitterHandle: '@woodyturkey' // İsteğe bağlı
};

/**
 * SEO Component - Global SEO Engine
 * 
 * @param {string} title - Page title (will be appended with site name if not full)
 * @param {string} description - Meta description
 * @param {string} canonical - Canonical URL (relative or absolute)
 * @param {string} image - OG image URL
 * @param {string} type - OG type (website, article, etc.)
 * @param {object} schema - JSON-LD structured data (optional)
 * @param {boolean} noindex - If true, adds noindex meta tag
 */
const SEO = ({
  title,
  description,
  canonical,
  image,
  type,
  schema,
  noindex = false,
  keywords
}) => {
  // Use defaults if not provided
  const finalTitle = title || DEFAULT_SEO.title;
  const finalDescription = description || DEFAULT_SEO.description;
  const finalImage = image || DEFAULT_SEO.image;
  const finalType = type || DEFAULT_SEO.type;
  
  // Build canonical URL
  let finalCanonical = DEFAULT_SEO.baseUrl;
  if (canonical) {
    finalCanonical = canonical.startsWith('http') 
      ? canonical 
      : `${DEFAULT_SEO.baseUrl}${canonical}`;
  } else {
    // Use current path
    finalCanonical = `${DEFAULT_SEO.baseUrl}${window.location.pathname}`;
  }

  // Ensure image is absolute URL
  const finalImageUrl = finalImage.startsWith('http') 
    ? finalImage 
    : `${DEFAULT_SEO.baseUrl}${finalImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang="tr" />
      <meta charSet="UTF-8" />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical */}
      <link rel="canonical" href={finalCanonical} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:type" content={finalType} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImageUrl} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:site_name" content={DEFAULT_SEO.siteName} />
      <meta property="og:locale" content={DEFAULT_SEO.locale} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImageUrl} />
      {DEFAULT_SEO.twitterHandle && (
        <meta name="twitter:site" content={DEFAULT_SEO.twitterHandle} />
      )}
      
      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
export { DEFAULT_SEO };
