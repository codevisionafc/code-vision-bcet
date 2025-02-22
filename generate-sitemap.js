import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const pages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about-us', priority: '0.8', changefreq: 'monthly' },
  { url: '/events', priority: '0.7', changefreq: 'weekly' },
  { url: '/events/:event', priority: '0.7', changefreq: 'weekly' },
  { url: '/members', priority: '0.6', changefreq: 'monthly' },
  { url: '/alumni', priority: '0.6', changefreq: 'monthly' },
  { url: '/gallery', priority: '0.5', changefreq: 'monthly' },
  { url: '/contact-us', priority: '0.8', changefreq: 'monthly' },
];

const generateSitemap = () => {
  const baseUrl = process.env.VITE_FIREBASE_BASE_URL;
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  pages.forEach(page => {
    xml += `
    <url>
      <loc>${baseUrl}${page.url}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`;
  });

  xml += `\n</urlset>`;

  fs.writeFileSync('public/sitemap.xml', xml);
  console.log('✅ Sitemap generated successfully!');
};

generateSitemap();
