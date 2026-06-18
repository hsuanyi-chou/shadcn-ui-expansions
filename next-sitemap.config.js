// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://shadcnui-expansions.typeart.cc',
  generateRobotsTxt: true,
  outDir: './out',
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'monthly';
    } else if (path === '/docs') {
      priority = 0.9;
      changefreq = 'monthly';
    } else if (path.startsWith('/docs/')) {
      priority = 0.8;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
