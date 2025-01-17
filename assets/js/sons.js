// Adiciona som ao clique no botão toggle, garantindo que o botão exista
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.navbar-toggler');
    if (button) {
        const clickSound = new Audio('assets/aud/click.mp3');
        button.addEventListener('click', () => {
            clickSound.currentTime = 0; // Reseta o áudio para o início
            clickSound.play();         // Toca o áudio
        });
    }
});
// Adiciona som ao clique no botão toggle, garantindo que o botão exista
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.link00');
    if (button) {
        const clickSound = new Audio('assets/aud/click.mp3');
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Impede o redirecionamento imediato
            clickSound.currentTime = 0; // Reseta o áudio para o início
            clickSound.play(); // Toca o áudio
            
            // Aguarda o tempo do áudio antes de redirecionar
            setTimeout(() => {
                window.location.href = button.href; // Redireciona para o link
            }, clickSound.duration * 1000); // Tempo em milissegundos
        });
    }
});