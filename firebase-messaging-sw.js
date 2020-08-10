// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDf7kh60Clcv1hO0NmKx2ae73-_tNu1CwA",
    authDomain: "chat-app-f1946.firebaseapp.com",
    databaseURL: "https://chat-app-f1946.firebaseio.com",
    projectId: "chat-app-f1946",
    storageBucket: "chat-app-f1946.appspot.com",
    messagingSenderId: "1073791973063",
    appId: "1:1073791973063:web:1467be2f604e13a017f0e2",
    measurementId: "G-7W2E085XG5"
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