/* eslint-disable no-restricted-globals */
const CACHE_NAME = 'mictmr-app';

const urlsToCache = [
  '/',
  '/static/js/0.bffe7ef0.chunk.js',
  '/static/js/0.bffe7ef0.chunk.js.map',
  '/static/js/1.f7897d73.chunk.js',
  '/static/js/1.f7897d73.chunk.js.map',
  '/static/js/2.26465f8c.chunk.js',
  '/static/js/2.26465f8c.chunk.js.map',
  '/static/js/3.2fb07364.chunk.js',
  '/static/js/3.2fb07364.chunk.js.map',
  '/static/css/main.584e799d.chunk.css',
  '/static/js/main.43eca03d.chunk.js',
  '/static/js/main.43eca03d.chunk.js.map',
  '/static/js/runtime-main.62ed8236.js',
  '/static/js/runtime-main.62ed8236.js.map',
  '/static/css/6.433ec01c.chunk.css',
  '/static/js/6.0b6b3cdb.chunk.js',
  '/static/js/6.0b6b3cdb.chunk.js.map',
  '/static/js/7.e45a183b.chunk.js',
  '/static/js/7.e45a183b.chunk.js.map',
  '/static/css/8.749d2f75.chunk.css',
  '/static/js/8.49c6da37.chunk.js',
  '/static/js/8.49c6da37.chunk.js.map',
  '/static/css/9.4c8153ca.chunk.css',
  '/static/js/9.8070792f.chunk.js',
  '/static/js/9.8070792f.chunk.js.map',
  '/static/css/10.4c8153ca.chunk.css',
  '/static/js/10.e4db6e56.chunk.js',
  '/static/js/10.e4db6e56.chunk.js.map',
  '/static/css/11.ecac020d.chunk.css',
  '/static/js/11.6b37908e.chunk.js',
  '/static/js/11.6b37908e.chunk.js.map',
  '/static/css/12.ecac020d.chunk.css',
  '/static/js/12.a4a04bc7.chunk.js',
  '/static/js/12.a4a04bc7.chunk.js.map',
  '/static/css/13.ecac020d.chunk.css',
  '/static/js/13.ab4642a0.chunk.js',
  '/static/js/13.ab4642a0.chunk.js.map',
  '/static/css/14.ecac020d.chunk.css',
  '/static/js/14.5ad04f74.chunk.js',
  '/static/js/14.5ad04f74.chunk.js.map',
  '/static/js/15.74f74d13.chunk.js',
  '/static/js/15.74f74d13.chunk.js.map',
  '/static/js/16.91dcab24.chunk.js',
  '/static/js/16.91dcab24.chunk.js.map',
  '/index.html',
  '/static/css/10.4c8153ca.chunk.css.map',
  '/static/css/11.ecac020d.chunk.css.map',
  '/static/css/12.ecac020d.chunk.css.map',
  '/static/css/13.ecac020d.chunk.css.map',
  '/static/css/14.ecac020d.chunk.css.map',
  '/static/css/6.433ec01c.chunk.css.map',
  '/static/css/8.749d2f75.chunk.css.map',
  '/static/css/9.4c8153ca.chunk.css.map',
  '/static/css/main.584e799d.chunk.css.map',
  '/static/js/0.bffe7ef0.chunk.js.LICENSE.txt',
  '/static/js/6.0b6b3cdb.chunk.js.LICENSE.txt',
  '/static/js/7.e45a183b.chunk.js.LICENSE.txt',
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
