importScripts('/static/serviceworker-cache-polyfill.js');

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('dash1291.github.io.cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/static/style.css',
        '/posts.html',
        '/about.html',
        '/2015/09/20/serviceworkers.html',
        '/2014/12/28/browserstack-infantry.html',
        '/2014/03/22/mozilla-summer.html',
        '/2012/11/9/crunch-in-network.html'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('got a request');
  var request = event.request;
  event.respondWith(fetch(request)
    .then(function(response) {
      console.log("got from network");
      return response;
    })
    .catch(function(response) {
      console.log("from cache");
      return caches.match(request.url);
    })
  )
});
