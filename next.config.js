module.exports = {
  reactStrictMode: true,
  // von nexjs.org übernommen und letzten Wert (3840) geändert in 2560
  // https://nextjs.org/docs/basic-features/image-optimization
  // Auflistung von Domains, von denen Bilder geladen werden dürfen!!!
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560],
    domains: ['react.webworker.berlin'],
  },
};
