importScripts('/static/serviceworker-cache-polyfill.js');

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('dash1291.github.io.cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/posts.html',
        '/about.html',
        '/2014/12/28/browserstack-infantry.html',
        '/2014/03/22/mozilla-summer.html',
        '/2012/11/9/crunch-in-network.html',
        '/2012/7/5/realtimeve-first-demo.html'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('got a request');
  var request = event.request;
  fetch(request)
    .then(function(response) {
      console.log("got from network");
      return response;
    })
    .catch(function(response) {
      console.log("from cache");
      return caches.match(request.url);
    })
});
