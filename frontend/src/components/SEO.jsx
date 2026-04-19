import React from 'react';
import { Helmet } from 'react-helmet-async';
import { combineSchemas, generateBreadcrumbSchema } from '../utils/schemaGenerator';
import { getAutoBreadcrumb } from '../utils/breadcrumbGenerator';

// Default SEO values
const DEFAULT_SEO = {
  title: 'Anaokulu İngilizce Eğitim seti | Oyun Temelli Okul Öncesi İngilizce seti',
  description: 'Woody ve Arkadaşları, anaokulu ve okul öncesi dönem için oyun temelli İngilizce eğitim sistemi, öğretmen setleri, öğrenci setleri, şarkılar ve aktiviteler sunar.',
  siteName: 'Woody ve Arkadaşları',
  baseUrl: 'https://woodyvearkadaslari.com',
  image: 'https://woodyvearkadaslari.com/static/og-image.jpg', // Varsayılan OG image
  type: 'website',
  locale: 'tr_TR',
  twitterHandle: '@woodyturkey' // İsteğe bağlı
};

/**
 * Generate clean canonical URL
 * - Removes query parameters
 * - Removes hash fragments
 * - Normalizes trailing slashes
 * - Ensures HTTPS
 */
const getCanonicalUrl = (path, baseUrl = DEFAULT_SEO.baseUrl) => {
  // Remove query parameters and hash
  let cleanPath = path.split('?')[0].split('#')[0];
  
  // Remove trailing slash (except for homepage)
  if (cleanPath !== '/' && cleanPath.endsWith('/')) {
    cleanPath = cleanPath.slice(0, -1);
  }
  
  // Ensure path starts with /
  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }
  
  // Build full URL
  const fullUrl = cleanPath.startsWith('http') 
    ? cleanPath 
    : `${baseUrl}${cleanPath}`;
  
  // Ensure HTTPS
  return fullUrl.replace(/^http:/, 'https:');
};

/**
 * SEO Component - Global SEO Engine with JSON-LD Schema Support + Auto Breadcrumb
 * 
 * @param {string} title - Page title
 * @param {string} description - Meta description
 * @param {string} canonical - Canonical URL (relative or absolute)
 * @param {string} image - OG image URL
 * @param {string} type - OG type (website, article, etc.)
 * @param {object|array} schema - JSON-LD structured data (single object or array)
 * @param {boolean} noindex - If true, adds noindex meta tag
 * @param {boolean} removeQueryParams - Auto-remove query params from canonical (default: true)
 * @param {array} breadcrumbs - Manual breadcrumb data for schema (optional, auto-generated if not provided)
 * @param {boolean} autoBreadcrumb - Auto-generate breadcrumb from URL (default: true)
 * @param {object} breadcrumbOptions - Options for auto breadcrumb generation
 */
const SEO = ({
  title,
  description,
  canonical,
  image,
  type,
  schema,
  noindex = false,
  keywords,
  removeQueryParams = true,
  breadcrumbs,
  autoBreadcrumb = true,
  breadcrumbOptions = {}
}) => {
  // Use defaults if not provided
  const finalTitle = title || DEFAULT_SEO.title;
  const finalDescription = description || DEFAULT_SEO.description;
  const finalImage = image || DEFAULT_SEO.image;
  const finalType = type || DEFAULT_SEO.type;
  
  // Build clean canonical URL
  let finalCanonical;
  if (canonical) {
    // User provided canonical
    finalCanonical = getCanonicalUrl(canonical, DEFAULT_SEO.baseUrl);
  } else {
    // Auto-generate from current path
    const currentPath = removeQueryParams 
      ? window.location.pathname 
      : window.location.pathname + window.location.search;
    finalCanonical = getCanonicalUrl(currentPath, DEFAULT_SEO.baseUrl);
  }

  // Ensure image is absolute URL
  const finalImageUrl = finalImage.startsWith('http') 
    ? finalImage 
    : `${DEFAULT_SEO.baseUrl}${finalImage}`;

  // Auto-generate breadcrumb if enabled and not manually provided
  let breadcrumbSchema = null;
  if (breadcrumbs) {
    // Use manual breadcrumbs
    breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
  } else if (autoBreadcrumb) {
    // Auto-generate breadcrumbs from URL
    const autoBreadcrumbs = getAutoBreadcrumb(breadcrumbOptions);
    breadcrumbSchema = generateBreadcrumbSchema(autoBreadcrumbs);
  }

  // Combine all schemas (including breadcrumb)
  const allSchemas = combineSchemas(
    schema,
    breadcrumbSchema
  );

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang="tr" />
      <meta charSet="UTF-8" />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical - Self-referencing clean URL */}
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
      {allSchemas.map((schemaItem, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(schemaItem)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
export { DEFAULT_SEO, getCanonicalUrl };
