// keep milliseconds hidden while start hasn't been pressed on
const milliseconds = document.getElementById("milliseconds");
milliseconds.style.display = "none";

const seconds = document.getElementById("seconds");

(function()
{
    let sec = 0;
    timer = setInterval(() => 
    {
        seconds.innerHTML = (sec++).toString().padStart(2, "0");
    }, 1000); // every onde second
})();





/* START, RESET, AND STOP FUNCTIONS */
function start() {
    // show milliseconds
    milliseconds.style.display = "initial";
}

function reset() {
    // hide milliseconds
    milliseconds.style.display = "none";
}

function stop() {
    clearInterval(timer);
}

/* *******************
 * DARK & LIGHT MODE *
 ******************* */

function dark_mode() {
    document.body.style.background = "black";
    document.getElementById("mode").innerHTML =
        `<button id="light" onclick="light_mode()">Light</button>`;
}

function light_mode() {
    document.body.style.background = "white";
    document.getElementById("mode").innerHTML =
        `<button id="dark" onclick="dark_mode()">Dark</button>`;
}