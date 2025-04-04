// service-worker.js
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('hai-cu-mine-v1').then((cache) => {
      return cache.addAll([
        'index.html',
        'style/main.css',
        'scripts/app.js',
        'manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
