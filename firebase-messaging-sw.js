importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js");
firebase.initializeApp({
    apiKey: "AIzaSyCG1H23lFQV-nxe4gwtJm-7BOFL64BFdqU",
    authDomain: "dolan-app-28d7d.firebaseapp.com",
    projectId: "dolan-app-28d7d",
    storageBucket: "dolan-app-28d7d.appspot.com",
    messagingSenderId: "878441331292",
    appId: "1:878441331292:web:bd01df41b6ecd934f9c499",
    measurementId: "G-JVZ6BMWSLV"
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            return registration.showNotification("New Message");
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});