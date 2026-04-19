/**
 * Automatic Breadcrumb Generator
 * Generates breadcrumb schema from current URL path
 */

// Route name mapping (URL slug to display name)
const ROUTE_NAMES = {
  '': 'Ana Sayfa',
  'preschool': 'Preschool İngilizce Seti',
  'workshop': 'Workshop İngilizce Seti',
  'home-tutor': 'Home Tutor İngilizce Seti',
  'store': 'Woody Store',
  'blog': 'Blog',
  'woody-academy': 'Woody Academy',
  'level-finder': 'Seviye Bulucu',
  'library': 'Kütüphane',
  'digital-content': 'Dijital İçerikler',
  
  // English translations (for multilingual support)
  'english-programs': 'İngilizce Programlar',
  'products': 'Ürünler',
  'videos': 'Videolar',
  'search': 'Arama',
};

/**
 * Get display name for a route segment
 */
const getRouteName = (segment) => {
  // Check if it's in the mapping
  if (ROUTE_NAMES[segment]) {
    return ROUTE_NAMES[segment];
  }
  
  // Convert slug to title case
  // Example: "okul-oncesi-ingilizce" → "Okul Öncesi İngilizce"
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Generate breadcrumb items from URL path
 * @param {string} pathname - Current pathname (e.g., '/preschool')
 * @param {object} customNames - Custom names for specific paths
 * @returns {array} Breadcrumb items
 */
export const generateBreadcrumbFromPath = (pathname = window.location.pathname, customNames = {}) => {
  // Remove leading/trailing slashes and split
  const segments = pathname.replace(/^\/|\/$/g, '').split('/').filter(Boolean);
  
  // Always start with home
  const breadcrumbs = [
    { name: 'Ana Sayfa', url: '/' }
  ];
  
  // Build breadcrumbs from path segments
  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // Use custom name if provided, otherwise use mapping or slug
    const name = customNames[currentPath] || getRouteName(segment);
    
    breadcrumbs.push({
      name: name,
      url: currentPath
    });
  });
  
  return breadcrumbs;
};

/**
 * Auto-generate breadcrumb schema for current page
 * @param {object} options - Configuration options
 * @param {string} options.pathname - Custom pathname (optional)
 * @param {object} options.customNames - Custom names for paths
 * @param {boolean} options.includeHome - Include home in breadcrumb (default: true)
 * @returns {array} Breadcrumb items ready for schema
 */
export const getAutoBreadcrumb = (options = {}) => {
  const {
    pathname,
    customNames = {},
    includeHome = true
  } = options;
  
  const breadcrumbs = generateBreadcrumbFromPath(pathname, customNames);
  
  // Remove home if not needed
  if (!includeHome && breadcrumbs.length > 1) {
    return breadcrumbs.slice(1);
  }
  
  return breadcrumbs;
};

/**
 * Add custom route name mapping
 * Useful for dynamic routes
 */
export const addRouteNames = (mapping) => {
  Object.assign(ROUTE_NAMES, mapping);
};

/**
 * Example route structures for common pages
 */
export const BREADCRUMB_EXAMPLES = {
  homepage: [
    { name: 'Ana Sayfa', url: '/' }
  ],
  
  preschool: [
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Preschool İngilizce Seti', url: '/preschool' }
  ],
  
  blogPost: (postTitle) => [
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: postTitle, url: `/blog/${postTitle.toLowerCase().replace(/\s+/g, '-')}` }
  ],
  
  productDetail: (categoryName, productName) => [
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Woody Store', url: '/store' },
    { name: categoryName, url: `/store/${categoryName.toLowerCase()}` },
    { name: productName, url: `/store/${categoryName.toLowerCase()}/${productName.toLowerCase()}` }
  ]
};
