const CACHE_NAME = 'code-vision-cache-v1.05'; // Update the cache version here
const urlsToCache = [
  '/',
  '/index.html',
  '/logo.png',
  '/logo.ico',
  '/src/main.jsx',
  '/src/index.css',
  '/about-us',
  '/events',
  '/members',
  '/alumni',
  '/gallery',
  '/contact-us',
  // Add other assets you want to cache
];

self.addEventListener('install', event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(urlsToCache);
    })()
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Bypass caching for paths not mentioned in urlsToCache
  if (!urlsToCache.includes(url.pathname)) {
    return fetch(request);
  }

  if (event.request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        const response = await caches.match('/index.html');
        return response || fetch(event.request);
      })()
    );
  } else {
    event.respondWith(
      (async () => {
        const response = await caches.match(event.request);
        return response || fetch(event.request);
      })()
    );
  }
});

self.addEventListener('activate', event => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })()
  );
});
