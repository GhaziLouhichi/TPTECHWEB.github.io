const staticDevCoffee = "library-web-app-v1"
const assets = [
  "/",
  "/index.html",
  "/add.html",
  "/css/style.css",
  "/css/bootstrap.css",
  "/js/app.js",
  "/js/add.js"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })