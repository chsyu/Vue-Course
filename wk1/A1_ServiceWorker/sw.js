self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('first-app')
    .then(function (cache) {
      cache.addAll([
        '/',
        '/index.html',
        '/favicon.ico',
        '/css/style.css',
        '/css/bootstrap.min.css',
        '/js/app.js',
        '/js/bootstrap.min.js',
        '/js/jquery.min.js',
        '/images/app.jpg',
        '/images/chsyu.jpg',
        '/images/f2e.jpg',
        '/images/iot.jpg',
        '/images/js.jpg'
      ])
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
    .then(function (res) {
      return res;
    })
  );
});