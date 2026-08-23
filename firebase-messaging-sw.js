importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCTWmzMsNF58HVkj6eVe0aAJPpkcBIeCUU",
  authDomain: "myapps-79dd3.firebaseapp.com",
  databaseURL: "https://myapps-79dd3-default-rtdb.firebaseio.com",
  projectId: "myapps-79dd3",
  storageBucket: "myapps-79dd3.firebasestorage.app",
  messagingSenderId: "1032448815652",
  appId: "1:1032448815652:web:513d4f24cef0ffba659eb1"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = (payload.notification && payload.notification.title) || 'VasuMart';
  const body = (payload.notification && payload.notification.body) || 'Naya message aaya hai';

  self.registration.showNotification(title, {
    body: body,
    icon: 'https://cdn-icons-png.flaticon.com/512/3082/3082031.png',
    badge: 'https://cdn-icons-png.flaticon.com/512/3082/3082031.png'
  });
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://tanishq27k-beep.github.io/VasuMart/')
  );
});
