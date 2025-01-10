const telaDance = document.getElementById("agrupamento");
telaDance.style.display = "none";

const telaButton = document.getElementById("click");
telaButton.style.display = "block";

const music = document.getElementById("music");

function mudarPagina() {
 telaButton.style.display = "none"
 telaDance.style.display = "block"
 music.play();
 document.title = "Eureka!"
};
