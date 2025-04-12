// funcionamento das playlists
const links = document.querySelectorAll('.playlist-link');

links.forEach(link => {
		link.addEventListener('click', function(e) {
				e.preventDefault();

				// Pega o ID da playlist que foi clicada
				const PLd9ykfMeym3iO_96D12Rdx_qS7il5xqGF = this.getAttribute('data-playlist-id');

				// Pega o iframe e altera a URL
				const iframe = document.getElementById('playlist-iframe');
				iframe.src = `https://www.youtube.com/embed?list=${PLd9ykfMeym3iO_96D12Rdx_qS7il5xqGF}`;
		});
});