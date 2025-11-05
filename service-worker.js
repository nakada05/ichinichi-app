const CACHE_NAME = "pwa-cache-v1";
const urlsToCache = [
  "/index.html",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

// インストール時にキャッシュ
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// ページをリクエストしたときにキャッシュを返す
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
