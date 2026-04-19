/**
 * JSON-LD Schema Generator
 * Generates structured data for SEO
 */

const SITE_CONFIG = {
  name: 'Woody ve Arkadaşları',
  url: 'https://woodyvearkadaslari.com',
  logo: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/nkf2o7ln_Ads%C4%B1z%20%28Facebook%20Kapak%20Fotog%CC%86raf%C4%B1%29%20%286%29.png',
  description: 'Anaokulu İngilizce eğitim seti, oyun temelli okul öncesi İngilizce eğitim seti ve 3-6 yaş çocuklara yönelik İngilizce içerikler sunan platform.',
  founder: 'Minaya Yayınevi',
  foundingDate: '2020',
  sameAs: [
    'https://www.facebook.com/woodyvearkadslari',
    'https://www.instagram.com/woodyvearkadslari',
    'https://www.youtube.com/@woodyvearkadslari',
  ],
  contactPoint: {
    telephone: '+90-XXX-XXX-XXXX', // Gerçek telefonu ekleyin
    contactType: 'customer service',
    areaServed: 'TR',
    availableLanguage: ['Turkish', 'English']
  }
};

/**
 * Organization Schema
 * Used on homepage
 */
export const generateOrganizationSchema = (customData = {}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: customData.name || SITE_CONFIG.name,
    url: customData.url || SITE_CONFIG.url,
    logo: customData.logo || SITE_CONFIG.logo,
    description: customData.description || SITE_CONFIG.description,
    foundingDate: customData.foundingDate || SITE_CONFIG.foundingDate,
    founder: {
      '@type': 'Organization',
      name: customData.founder || SITE_CONFIG.founder
    },
    sameAs: customData.sameAs || SITE_CONFIG.sameAs,
    contactPoint: customData.contactPoint || SITE_CONFIG.contactPoint
  };
};

/**
 * WebSite Schema
 * Used on homepage - enables sitelinks search box
 */
export const generateWebSiteSchema = (customData = {}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: customData.name || SITE_CONFIG.name,
    url: customData.url || SITE_CONFIG.url,
    description: customData.description || SITE_CONFIG.description,
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: SITE_CONFIG.logo
      }
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
};

/**
 * WebPage Schema
 * Used on all pages
 */
export const generateWebPageSchema = (data) => {
  const {
    title,
    description,
    url,
    image,
    datePublished,
    dateModified
  } = data;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    image: image,
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: SITE_CONFIG.logo
      }
    },
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified })
  };
};

/**
 * Article Schema
 * Used on blog posts
 */
export const generateArticleSchema = (data) => {
  const {
    title,
    description,
    url,
    image,
    datePublished,
    dateModified,
    author = SITE_CONFIG.name,
    keywords = []
  } = data;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image,
    url: url,
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: author,
      url: SITE_CONFIG.url
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: SITE_CONFIG.logo
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },
    ...(keywords.length > 0 && { keywords: keywords.join(', ') })
  };
};

/**
 * VideoObject Schema
 * Used on pages with video content
 */
export const generateVideoSchema = (data) => {
  const {
    name,
    description,
    thumbnailUrl,
    uploadDate,
    duration, // ISO 8601 format: PT1M30S (1 minute 30 seconds)
    contentUrl,
    embedUrl
  } = data;

  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: name,
    description: description,
    thumbnailUrl: thumbnailUrl,
    uploadDate: uploadDate || new Date().toISOString(),
    duration: duration,
    contentUrl: contentUrl,
    embedUrl: embedUrl,
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: SITE_CONFIG.logo
      }
    }
  };
};

/**
 * BreadcrumbList Schema
 * Used on all pages for navigation
 */
export const generateBreadcrumbSchema = (breadcrumbs) => {
  // breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }]
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SITE_CONFIG.url}${crumb.url}`
    }))
  };
};

/**
 * Product Schema (Bonus - for Store pages)
 * Used on product pages
 */
export const generateProductSchema = (data) => {
  const {
    name,
    description,
    image,
    sku,
    brand = SITE_CONFIG.name,
    offers = {}
  } = data;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: description,
    image: image,
    sku: sku,
    brand: {
      '@type': 'Brand',
      name: brand
    },
    offers: {
      '@type': 'Offer',
      url: offers.url || SITE_CONFIG.url,
      priceCurrency: offers.priceCurrency || 'TRY',
      price: offers.price,
      availability: offers.availability || 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: SITE_CONFIG.name
      }
    }
  };
};

/**
 * Auto-generate schema based on page type
 */
export const generateAutoSchema = (pageType, data) => {
  switch (pageType) {
    case 'homepage':
      return [
        generateOrganizationSchema(),
        generateWebSiteSchema()
      ];
    
    case 'blog-list':
      return generateWebPageSchema(data);
    
    case 'blog-post':
      return generateArticleSchema(data);
    
    case 'video-page':
      return [
        generateWebPageSchema(data),
        generateVideoSchema(data.video)
      ];
    
    case 'product':
      return generateProductSchema(data);
    
    default:
      return generateWebPageSchema(data);
  }
};

/**
 * Combine multiple schemas
 * Prevents duplication
 */
export const combineSchemas = (...schemas) => {
  const flatSchemas = schemas.flat().filter(Boolean);
  
  // Remove duplicates based on @type
  const uniqueSchemas = flatSchemas.reduce((acc, schema) => {
    const type = schema['@type'];
    if (!acc.find(s => s['@type'] === type)) {
      acc.push(schema);
    }
    return acc;
  }, []);
  
  return uniqueSchemas;
};
