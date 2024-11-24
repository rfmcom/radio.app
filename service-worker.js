self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('raddio-app-cache').then(cache => {
      return cache.addAll([
        'radio.app/',
        'radio.app/index.html',
        'radio.app/manifest.json',
        'radio.app/img/icons/icon-192x192.png',
        'radio.app/img/icons/icon-512x512.png',
        'radio.app/css/styles.css',
        'radio.app/js/main.js'
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
