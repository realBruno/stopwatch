// keep milliseconds hidden while start hasn't been pressed on
const milliseconds = document.getElementById("milliseconds");
milliseconds.style.display = "none";

function reset() {
    // hide milliseconds
    milliseconds.style.display = "none";
}

function start() {
    // show milliseconds
    milliseconds.style.display = "initial";
}

/* ************ DARK & LIGHT MODE ************ */

function dark_mode()
{
    document.body.style.background = "black";
    document.getElementById("mode").innerHTML = 
        `<button id="light" onclick="light_mode()">Light</button>`;
}

function light_mode()
{
    document.body.style.background = "white";
    document.getElementById("mode").innerHTML = 
        `<button id="dark" onclick="dark_mode()">Dark</button>`;
}