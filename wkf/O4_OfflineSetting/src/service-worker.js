if (workbox) {
  workbox.skipWaiting();
  workbox.clientsClaim();

  // cache name
  workbox.core.setCacheNameDetails({
    prefix: "HelloSW",
    precache: "precache",
    runtime: "runtime"
  });

  // runtime cache
  // 1. css/js/manifest
  workbox.routing.registerRoute(
    new RegExp(".(css|js|json)$"),
    workbox.strategies.cacheFirst({
      cacheName: "cache-JS/CSS/JSON",
      plugins: [
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
          maxEntries: 20, // only cache 20 request
          purgeOnQuotaError: true
        })
      ]
    })
  );
  // 2. images
  workbox.routing.registerRoute(
    new RegExp(".(png|svg|jpg|jpeg)$"),
    workbox.strategies.cacheFirst({
      cacheName: "cache-images",
      plugins: [
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 7,
          maxEntries: 50,
          purgeOnQuotaError: true
        })
      ]
    })
  );

  // 3.Google Font
  workbox.routing.registerRoute(
    /.*(?:googleapis|gstatic)\.com.*$/,
    workbox.strategies.cacheFirst({
      cacheName: "google-fonts"
    })
  );

  // 4. cache news articles result
  workbox.routing.registerRoute(
    new RegExp("https://newsapi.org/v2/everything"),
    workbox.strategies.staleWhileRevalidate({
      cacheName: "google-news",
      cacheExpiration: {
        maxAgeSeconds: 60 * 30 //cache the news content for 30mn
      }
    })
  );

  // 5. network news
  // Use a stale-while-revalidate strategy for all other requests.
  workbox.routing.setDefaultHandler(
    new workbox.strategies.StaleWhileRevalidate()
  );

  workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);
  workbox.precaching.precacheAndRoute(self.__precacheManifest);
}
