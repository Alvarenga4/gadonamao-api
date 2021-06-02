/* eslint-disable no-restricted-globals */
const CACHE_NAME = 'mictmr-app';

const urlsToCache = [
  '/',
  '/static/js/0.788bf775.chunk.js',
  '/static/js/0.788bf775.chunk.js.map',
  '/static/js/1.b99c4d2c.chunk.js',
  '/static/js/1.b99c4d2c.chunk.js.map',
  '/static/js/2.22ca25b3.chunk.js',
  '/static/js/2.22ca25b3.chunk.js.map',
  '/static/js/3.2fb07364.chunk.js',
  '/static/js/3.2fb07364.chunk.js.map',
  '/static/css/main.584e799d.chunk.css',
  '/static/js/main.f810e9d8.chunk.js',
  '/static/js/main.f810e9d8.chunk.js.map',
  '/static/js/runtime-main.5a4de7e3.js',
  '/static/js/runtime-main.5a4de7e3.js.map',
  '/static/css/6.433ec01c.chunk.css',
  '/static/js/6.0b6b3cdb.chunk.js',
  '/static/js/6.0b6b3cdb.chunk.js.map',
  '/static/js/7.3e761fef.chunk.js',
  '/static/js/7.3e761fef.chunk.js.map',
  '/static/css/8.749d2f75.chunk.css',
  '/static/js/8.533926d2.chunk.js',
  '/static/js/8.533926d2.chunk.js.map',
  '/static/css/9.4c8153ca.chunk.css',
  '/static/js/9.8a27ec58.chunk.js',
  '/static/js/9.8a27ec58.chunk.js.map',
  '/static/css/10.4c8153ca.chunk.css',
  '/static/js/10.9aefff7b.chunk.js',
  '/static/js/10.9aefff7b.chunk.js.map',
  '/static/css/11.ecac020d.chunk.css',
  '/static/js/11.0224a170.chunk.js',
  '/static/js/11.0224a170.chunk.js.map',
  '/static/css/12.ecac020d.chunk.css',
  '/static/js/12.b6388f97.chunk.js',
  '/static/js/12.b6388f97.chunk.js.map',
  '/static/css/13.ecac020d.chunk.css',
  '/static/js/13.7b2f9ba3.chunk.js',
  '/static/js/13.7b2f9ba3.chunk.js.map',
  '/static/css/14.ecac020d.chunk.css',
  '/static/js/14.df00db54.chunk.js',
  '/static/js/14.df00db54.chunk.js.map',
  '/static/css/15.ecac020d.chunk.css',
  '/static/js/15.cfc71cbe.chunk.js',
  '/static/js/15.cfc71cbe.chunk.js.map',
  '/static/js/16.7f2d2f1a.chunk.js',
  '/static/js/16.7f2d2f1a.chunk.js.map',
  '/static/js/17.0d0df802.chunk.js',
  '/static/js/17.0d0df802.chunk.js.map',
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
  '/static/js/0.788bf775.chunk.js.LICENSE.txt',
  '/static/js/6.0b6b3cdb.chunk.js.LICENSE.txt',
  '/static/js/7.3e761fef.chunk.js.LICENSE.txt',
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
