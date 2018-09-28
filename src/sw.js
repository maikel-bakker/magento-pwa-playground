/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/index.html", {
  whitelist: [/^(?!\/__).*/]
});

workbox.routing.registerRoute(
  /^http:\/\/m2angular.nl.sandbox20.xpdev.nl\/index.php\/rest\/V1\/categories/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: "categories-cache",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 10,
        purgeOnQuotaError: false
      })
    ]
  }),
  "GET"
);
workbox.routing.registerRoute(
  /^http:\/\/m2angular.nl.sandbox20.xpdev.nl\/angular.php/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: "products-cache",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50,
        purgeOnQuotaError: false
      })
    ]
  }),
  "GET"
);
workbox.routing.registerRoute(
  /^http:\/\/m2angular.nl.sandbox20.xpdev.nl\/index.php\/rest\/V1\/products/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: "products-cache",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50,
        purgeOnQuotaError: false
      })
    ]
  }),
  "GET"
);

const bgSyncPlugin = new workbox.backgroundSync.Plugin('cartQueue', {
  maxRetentionTime: 24 * 60 // Retry for max of 24 Hours
});

workbox.routing.registerRoute(
  /^http:\/\/m2angular.nl.sandbox20.xpdev.nl\/index.php\/rest\/V1\/guest-carts/,
  workbox.strategies.networkOnly({
    plugins: [bgSyncPlugin]
  }),
  'POST'
);

// workbox.routing.registerRoute(
//   /^http:\/\/m2angular.nl.sandbox20.xpdev.nl\/index.php\/rest\/V1\/guest-carts/,
//   workbox.strategies.staleWhileRevalidate({
//     cacheName: "cart-cache",
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 50,
//         purgeOnQuotaError: false
//       })
//     ]
//   }),
//   "GET"
// );
workbox.routing.registerRoute(
  /^http:\/\/m2angular.nl.sandbox20.xpdev.nl\/pub\/media\//,
  workbox.strategies.cacheFirst({
    cacheName: "media-cache",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        purgeOnQuotaError: false
      }),
      new workbox.cacheableResponse.Plugin({ statuses: [0, 200] })
    ]
  }),
  "GET"
);
workbox.routing.registerRoute(
  /https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/,
  workbox.strategies.cacheFirst({
    cacheName: "google-fonts",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        purgeOnQuotaError: false
      }),
      new workbox.cacheableResponse.Plugin({ statuses: [0, 200] })
    ]
  }),
  "GET"
);



