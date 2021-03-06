/* eslint-disable no-restricted-globals */
const CACHE_NAME = 'mictmr-app';

const urlsToCache = [
  '/',
  '/static/js/0.e66a0ffe.chunk.js',
  '/static/js/0.e66a0ffe.chunk.js.map',
  '/static/js/1.79231dc1.chunk.js',
  '/static/js/1.79231dc1.chunk.js.map',
  '/static/js/2.05f07574.chunk.js',
  '/static/js/2.05f07574.chunk.js.map',
  '/static/js/3.56531263.chunk.js',
  '/static/js/3.56531263.chunk.js.map',
  '/static/css/main.584e799d.chunk.css',
  '/static/js/main.5beef142.chunk.js',
  '/static/js/main.5beef142.chunk.js.map',
  '/static/js/runtime-main.05ecff02.js',
  '/static/js/runtime-main.05ecff02.js.map',
  '/static/css/6.433ec01c.chunk.css',
  '/static/js/6.f4f4ef57.chunk.js',
  '/static/js/6.f4f4ef57.chunk.js.map',
  '/static/js/7.6ca13295.chunk.js',
  '/static/js/7.6ca13295.chunk.js.map',
  '/static/css/8.749d2f75.chunk.css',
  '/static/js/8.17821ce5.chunk.js',
  '/static/js/8.17821ce5.chunk.js.map',
  '/static/css/9.4c8153ca.chunk.css',
  '/static/js/9.a5e8312e.chunk.js',
  '/static/js/9.a5e8312e.chunk.js.map',
  '/static/css/10.4c8153ca.chunk.css',
  '/static/js/10.3b8a826d.chunk.js',
  '/static/js/10.3b8a826d.chunk.js.map',
  '/static/css/11.ecac020d.chunk.css',
  '/static/js/11.844b2125.chunk.js',
  '/static/js/11.844b2125.chunk.js.map',
  '/static/css/12.ecac020d.chunk.css',
  '/static/js/12.cf3fafa7.chunk.js',
  '/static/js/12.cf3fafa7.chunk.js.map',
  '/static/css/13.ecac020d.chunk.css',
  '/static/js/13.36109b2a.chunk.js',
  '/static/js/13.36109b2a.chunk.js.map',
  '/static/css/14.ecac020d.chunk.css',
  '/static/js/14.7c7b37f3.chunk.js',
  '/static/js/14.7c7b37f3.chunk.js.map',
  '/static/css/15.ecac020d.chunk.css',
  '/static/js/15.0739132b.chunk.js',
  '/static/js/15.0739132b.chunk.js.map',
  '/static/js/16.72fb699f.chunk.js',
  '/static/js/16.72fb699f.chunk.js.map',
  '/static/js/17.750ba1ce.chunk.js',
  '/static/js/17.750ba1ce.chunk.js.map',
  '/index.html',
  '/static/css/10.4c8153ca.chunk.css.map',
  '/static/css/11.ecac020d.chunk.css.map',
  '/static/css/12.ecac020d.chunk.css.map',
  '/static/css/13.ecac020d.chunk.css.map',
  '/static/css/14.ecac020d.chunk.css.map',
  '/static/css/15.ecac020d.chunk.css.map',
  '/static/css/6.433ec01c.chunk.css.map',
  '/static/css/8.749d2f75.chunk.css.map',
  '/static/css/9.4c8153ca.chunk.css.map',
  '/static/css/main.584e799d.chunk.css.map',
  '/static/js/0.e66a0ffe.chunk.js.LICENSE.txt',
  '/static/js/6.f4f4ef57.chunk.js.LICENSE.txt',
  '/static/js/7.6ca13295.chunk.js.LICENSE.txt',
  '/static/media/cotacao-boigordo.7eb26b3e.png',
  '/static/media/cotacao-novilha.9c0676f4.png',
  '/static/media/fa-solid-900.f4f93856.woff',
  '/static/media/logo2.c0803321.png',
  '/static/media/slick.c94f7671.ttf',
  '/static/media/vendido.985a6b45.png',
];

self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .catch((error) => console.log(error)),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
      // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
      .catch((error) => {
        console.log(error);
      }),
  );
});
