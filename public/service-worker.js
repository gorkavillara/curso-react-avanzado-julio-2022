/* eslint-disable no-restricted-globals */
console.log("Hola desde el service worker");

// Suscribirnos a un servicio de web push
// npm i web-push
// 1 - Generarnos unas VAPID Keys
// 2 - Suscribirnos con estas VAPID Keys al servicio de notificaciones

self.addEventListener("install", () => {
  console.log("Se ha instalado un nuevo service worker");
  self.skipWaiting()
});

self.addEventListener("activate", () => {
  console.log("Se ha instalado una nueva versión de la app");
});

self.addEventListener("fetch", () => {
  console.log("Se ha hecho un fetch");
});

self.addEventListener("push", () => {
  self.registration.showNotification("");
  // self.registration.pushManager
});
