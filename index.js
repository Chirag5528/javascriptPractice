const sitemap = require("./sitemap").sitemap;

const urlToFind = "/sun-club/sun-club-recipients";

const sitemapItems = sitemap.Items.filter(smp => smp.Url === urlToFind);

console.log(sitemapItems);