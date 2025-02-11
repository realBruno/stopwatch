// mantém os milisegundos escondidos enquanto start não for pressionado
const milliseconds = document.getElementById("milliseconds");
milliseconds.style.display = "none";

function start() {
    // exibe milisegundos
    milliseconds.style.display = "initial";
}

function reset() {
    // esconde milisegundos
    milliseconds.style.display = "none";
}
