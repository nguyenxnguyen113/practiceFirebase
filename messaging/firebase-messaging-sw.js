// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAAx73Ip9NXLgDEUcEsZTq5tpUHoxBt9vI",
    authDomain: "chat-app-b5a25.firebaseapp.com",
    databaseURL: "https://chat-app-b5a25.firebaseio.com",
    projectId: "chat-app-b5a25",
    storageBucket: "chat-app-b5a25.appspot.com",
    messagingSenderId: "425694498788",
    appId: "1:425694498788:web:b220506eb1af64766a41f1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});