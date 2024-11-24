self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('raddio-app-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/img/icons/icon-192x192.png',
        '/img/icons/icon-512x512.png',
        '/css/styles.css',
        '/js/main.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
