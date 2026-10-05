// Card Match offline cache. Change the version when you update index.html.
const CACHE = "cardmatch-v1";
const FILES = ["./", "./index.html", "./manifest.json", "./icon-180.png", "./icon-192.png", "./icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  // symbol searches always go to the network; pictures and app files fall back to the cache when offline
  if (url.pathname.includes("/api/")) return;
  e.respondWith(fetch(e.request).then(res => { const copy = res.clone(); if (res.ok || res.type === "opaque") caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {}); return res; })
    .catch(() => caches.match(e.request).then(r => r || caches.match("./index.html"))));
});
