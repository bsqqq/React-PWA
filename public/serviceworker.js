const CACHE_NAME = 'version-1'
const urlsToCache = ['index.html', 'offline.html']

const self = this

// Instala o SW.
self.addEventListener('install', event => {
    // espera-se por alguma coisa abrir
    event.waitUntil(
        // espera por isso abrir e 'version-1' é o nome da cache
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('Cache aberto')
            // adiciona index.html e offline.html a cache
            return cache.addAll(urlsToCache)
        })
    )
})

// Escuta por requests e reponde com a pagina adequada
self.addEventListener('fetch', event => {
    // vai responder com...
    event.respondWith(
        // retorna o evento especifico do request
        caches.match(event.request)
        .then(() => {
            // se caso não for possivel buscar dados da API então significa que o cliente está possivelmente offline.
            return fetch(event.request)
            .catch(() => caches.match('offline.html'))
        })
    )
})

// exclui cache velho e põe novos
self.addEventListener('activate', event => {
    const cacheWhiteList = []
    cacheWhiteList.push(CACHE_NAME)

    event.waitUntil(
        caches.keys()
        .then(cacheNames => Promise.all(
            cacheNames.map(cacheName => {
                if(!cacheWhiteList.includes(cacheName)) {
                    return caches.delete(cacheName)
                    // se não tiver nome da cache na whitelist então delete este cache
                }
            })
        ))
    )
})