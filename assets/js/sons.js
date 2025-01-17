// Adiciona som ao clique no botão toggle, garantindo que o botão exista
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.navbar-toggler');
    if (button) {
        const clickSound = new Audio('assets/aud/click.mp3');
        let clickCount = 0; // Contador de cliques

        button.addEventListener('click', () => {
            clickCount++; // Incrementa o contador
            if (clickCount <= 20) {
                clickSound.currentTime = 0; // Reseta o áudio para o início
                clickSound.play();         // Toca o áudio
            } else if (clickCount === 21) {
                // Troca para o novo som e toca apenas uma vez
                const alertSound = new Audio('assets/audio/alert.mp3');
                alertSound.play();
            }
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