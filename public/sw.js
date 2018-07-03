const CACHE_NAME = 'magical-girl.site_version6.0.3'
const urlsToCache = [
  '/',
  '/stylesheets/font.css',
  '/stylesheets/style.css',
  '/scripts/app.min.js',
  'https://use.fontawesome.com/releases/v5.0.10/css/all.css',
  './images/load-view/poster/1.png',
  './images/load-view/poster/2.png',
  './images/load-view/poster/3.png',
  './images/load-view/poster/4.png',
  './images/load-view/sd/1.png',
  './images/load-view/sd/2.png',
  './images/load-view/sd/3.png',
  './images/load-view/sd/4.png',
  './images/load-view/text/1.png',
  './images/load-view/text/2.png',
  './images/load-view/text/3.png',
  './images/load-view/text/4.png',
  './images/bg.png',
  './images/calling/say.png',
  './images/calling/icons/eriri_large.png',
  './images/calling/icons/eriri.png',
  './images/calling/icons/gab_large.png',
  './images/calling/icons/gab.png',
  './images/calling/icons/yui_large.png',
  './images/calling/icons/yui.png',
  './images/end-animation/end.png',
  './images/end-animation/end-roll/1.png',
  './images/end-animation/end-roll/2.png',
  './images/end-animation/end-roll/3.png',
  './images/gab-animation/bg.png',
  './images/gab-animation/gab.png',
  './images/gab-animation/message.png',
  './images/gab-animation/comic/1.png',
  './images/gab-animation/comic/2.png',
  './images/gab-animation/comic/3.png',
  './images/gab-animation/comic/4.png',
  './images/gab-animation/comic/bg.png',
  './images/gab-animation/name/1.png',
  './images/gab-animation/name/2.png',
  './images/gab-animation/name/3.png',
  './images/gab-animation/name/4.png',
  './images/gab-animation/name/5.png',
  './images/top-page/gab.png',
  './images/top-page/logo.png',
]

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
      })
  )
})

self.addEventListener('activate', e => {})

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if(res) return res
        return fetch(e.request)
      })
  )
})
