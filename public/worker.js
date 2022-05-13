let CACHE_NAME = 'pwa-task-manager';

let urlsToCache = [
    '/',
    "headphones/",
    "headphones",
    "earphones/",
    "earphones",
    "speakers/",
    "speakers",
    "checkout"
];

// Install a service worker
// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', event => {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Cache and return requests
// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
            )
    );
});

// Update a service worker
// eslint-disable-next-line no-restricted-globals
self.addEventListener('activate', event => {
    var cacheWhitelist = ['pwa-task-manager'];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                // eslint-disable-next-line array-callback-return
                cacheNames.map(cacheName => {
                  if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});