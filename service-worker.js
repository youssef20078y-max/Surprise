const cacheName = "romance-cache-v1";
const filesToCache = [
  '/',
  '/index.html',
  '/data.json',
  '/music.mp3',
  '/Iicon-192.png',
  '/Iicon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});