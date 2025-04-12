if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker registrado!'))
    .catch(err => console.error('Erro ao registrar o Service Worker:', err));
}

/* pega o ano atual */
document.getElementById("current-year").textContent = new Date().getFullYear();