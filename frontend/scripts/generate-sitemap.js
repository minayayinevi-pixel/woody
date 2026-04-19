const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');
const path = require('path');

// Sitemap Configuration
const SITEMAP_CONFIG = {
  hostname: 'https://woodyvearkadaslari.com',
  outputPath: path.resolve(__dirname, '../public/sitemap.xml'),
};

// Define all routes with SEO metadata
const routes = [
  // Main Pages - High Priority
  {
    url: '/',
    changefreq: 'weekly',
    priority: 1.0,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/preschool',
    changefreq: 'monthly',
    priority: 0.9,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/workshop',
    changefreq: 'monthly',
    priority: 0.9,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/home-tutor',
    changefreq: 'monthly',
    priority: 0.9,
    lastmod: new Date().toISOString(),
  },
  
  // Secondary Pages
  {
    url: '/store',
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/blog',
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/woody-academy',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/level-finder',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/library',
    changefreq: 'monthly',
    priority: 0.6,
    lastmod: new Date().toISOString(),
  },
  
  // Blog Posts (Placeholder - add your actual blog posts here)
  // {
  //   url: '/blog/post-1',
  //   changefreq: 'monthly',
  //   priority: 0.6,
  //   lastmod: new Date().toISOString(),
  // },
  
  // EXCLUDED ROUTES (private/admin):
  // - /digital-content (PIN protected)
  // - /digital-content/:levelId/:sectionId (protected content)
];

async function generateSitemap() {
  try {
    console.log('🚀 Generating sitemap...');

    // Create a stream to write to
    const stream = new SitemapStream({ hostname: SITEMAP_CONFIG.hostname });

    // Convert routes array to a readable stream
    const links = routes.map(route => ({
      url: route.url,
      changefreq: route.changefreq,
      priority: route.priority,
      lastmod: route.lastmod,
    }));

    // Generate sitemap XML
    const xml = await streamToPromise(Readable.from(links).pipe(stream)).then(data =>
      data.toString()
    );

    // Write to file
    fs.writeFileSync(SITEMAP_CONFIG.outputPath, xml);

    console.log('✅ Sitemap generated successfully!');
    console.log(`📁 Location: ${SITEMAP_CONFIG.outputPath}`);
    console.log(`📊 Total URLs: ${routes.length}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the generator
generateSitemap();
