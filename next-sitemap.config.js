/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://techinifity.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/api/" },
    ],
    additionalSitemaps: ["https://techinifity.com/sitemap.xml"],
  },
  transform: async (config, path) => {
    // Priority overrides per route
    const priorities = {
      "/": 1.0,
      "/services": 0.9,
      "/about": 0.8,
      "/contact": 0.8,
      "/case-studies": 0.8,
      "/blog": 0.8,
    };

    const changefreqs = {
      "/": "daily",
      "/services": "weekly",
      "/blog": "daily",
      "/case-studies": "weekly",
    };

    return {
      loc: path,
      changefreq: changefreqs[path] ?? config.changefreq,
      priority:
        priorities[path] ??
        (path.startsWith("/blog/") || path.startsWith("/case-studies/")
          ? 0.7
          : path.startsWith("/services/")
            ? 0.75
            : config.priority),
      lastmod: new Date().toISOString(),
    };
  },
};
