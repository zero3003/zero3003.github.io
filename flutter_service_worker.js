'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ce8908e495c6f7b1c3b17c2d59110337",
"index.html": "c19e3fe9e4804680a7b9871e8c2d94f3",
"/": "c19e3fe9e4804680a7b9871e8c2d94f3",
"firebase-messaging-sw.js": "d59ec0f9654501b027e90e5029d49da1",
"main.dart.js": "56d57f473e281060b4bd87bf01469f91",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "85f94696dd20db113fb954c84bcee1c5",
"assets/AssetManifest.json": "a00a50437d868100b4583f86b3d61967",
"assets/NOTICES": "256229027a970d05f3e4daeec42a20c0",
"assets/FontManifest.json": "2b0229a20303a2571075669930180629",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/mcd-food2.jpeg": "6819cacac81df20a128b6ae3dc0f3760",
"assets/assets/images/taman-safari-bogor.png": "4c2132436fe3af5ece90b3a94998366e",
"assets/assets/images/merch-store.png": "eb3f0b1fbfcef862b8557017203b306b",
"assets/assets/images/waterboom-jonggol.png": "f12ab8bea4f9659c9499daebaac48783",
"assets/assets/images/kotak-kotak-dashboard.png": "07e1cea1175462838af37e61859fed61",
"assets/assets/images/mcd-food3.jpeg": "871b1d9faf7d7bdd272126a89365b85a",
"assets/assets/images/qr-code.png": "281923eb845d7266c6da2632b7d54881",
"assets/assets/images/kota-tua-jakarta.png": "188f959f88006c9b6045a5ef8ae7b7d5",
"assets/assets/images/ovo.png": "bfe14f3bfa98e430b1d5ea24fb6197df",
"assets/assets/images/kfc-small.png": "0cf823f708fd30c3865bf0bb65ef2e85",
"assets/assets/images/Screenshot%2520from%25202021-04-20%252010-34-55.png": "4647cea9ce19de499ab23bc73f8f6c44",
"assets/assets/images/pdf_sample.pdf": "9f99721f8234eae8e783cf96a9c0097e",
"assets/assets/images/link_aja.png": "be9a57fca8782e73e614cda9ffbdf078",
"assets/assets/images/twitter.png": "8e7c6e66212e50bff3ce8bd28414ab4c",
"assets/assets/images/batik-store.png": "135d8df097932c32c92cbd91df0f89fe",
"assets/assets/images/mcd-food.jpeg": "ce687d598199822c064bdcde08bc4b7d",
"assets/assets/images/logo_kotak.png": "23aa94db08db8b8bc4ee43cd1180db95",
"assets/assets/images/mcdonalds-small.png": "84a2b8c9ff8e7b2a09c8695076e5fd57",
"assets/assets/images/promo-banner.png": "b782efcfa133e632871e3124291dbf55",
"assets/assets/images/appbar-bottom.png": "cc6bf28652a67f1e207b520d436a7fd1",
"assets/assets/images/dufan.png": "6ada5bf3d014e131315aba05631dbedc",
"assets/assets/images/whatsapp.png": "cbea9899217f27b9c0eae5c102622849",
"assets/assets/images/google.png": "8536f3b9b3f97c025e8f04f9c09d6ee4",
"assets/assets/images/facebook.png": "ac602af08c30d8c91034c13035352307",
"assets/assets/lottie/loading.json": "ab635088903b75ef46bc83673fc70fd9",
"assets/assets/lottie/loading-error.json": "81f0e5cf309889bbef1a5d4df592bd47",
"assets/assets/lottie/cart_empty.json": "2b280e0f412895d1118d5add30da87f3",
"assets/assets/lottie/loading-success.json": "5b724b87cc391d723c4dd6256b0282d7",
"assets/assets/fonts/Sora-Thin.ttf": "c41ed373cfbf85cd6deb945dbd4996c0",
"assets/assets/fonts/Sora-ExtraBold.ttf": "23b29030a22fc02a05c8ca5d2cda8bc5",
"assets/assets/fonts/Sora-Bold.ttf": "8b24edfb87ce7942c970dbaeaa73a511",
"assets/assets/fonts/Sora-Light.ttf": "7f06929d385c8e70bea8a38323131f95",
"assets/assets/fonts/Sora-Regular.ttf": "aa64200d21f88f287becbe3f3cebaf0e",
"assets/assets/fonts/Sora-Medium.ttf": "9c1ba7104b2436c8727769f61996981d",
"assets/assets/fonts/Sora-SemiBold.ttf": "fb54a7a5fdc54d9385f3f42421083ca4",
"assets/assets/fonts/Sora-ExtraLight.ttf": "1c34f38a4a8927db7cb4d3f1a83513bc"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
