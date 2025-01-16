// Adiciona som ao clique no botão toggle, garantindo que o botão exista
document.addEventListener('DOMContentLoaded', () => {
const button = document.querySelector('.navbar-toggler');
if (button) {
	const clickSound = new Audio('assets/aud/click.mp3');
	button.addEventListener('click', () => {
	clickSound.play();
	});
}
});