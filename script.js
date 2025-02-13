const time = document.getElementById("time");
let timer = null, start_time = 0, elapsed = 0;

/* ************* START, RESET, AND STOP FUNCTIONS ************* */
function start() {
    start_time = Date.now() - elapsed;
    timer = setInterval(update, 10);

    const make_it_stop = document.getElementById("start");
    make_it_stop.setAttribute("onclick", "stop(); make_bigger();");
    make_it_stop.id = "stop";
    make_it_stop.innerHTML = "Stop";
}

function stop() {
    clearInterval(timer);
    elapsed = Date.now() - start_time;

    const make_it_start = document.getElementById("stop");
    make_it_start.setAttribute("onclick", "start(); make_bigger();");
    make_it_start.id = "start";
    make_it_start.innerHTML = "Start";
}

function reset() {
    clearInterval(timer);
    start_time = 0;
    elapsed = 0;
    time.textContent = `00:00:00.00`;

    const change_stop_to_start = document.getElementById("stop");
    if (change_stop_to_start) {
        change_stop_to_start.setAttribute("onclick", "start(); make_bigger();");
        change_stop_to_start.id = "start";
        change_stop_to_start.innerHTML = "Start";
    }
}

/* ************* FUNCTION TO UPDATE TIME ************* */
function update() {
    const current_time = Date.now();
    elapsed = current_time - start_time;

    let hours = Math.floor(elapsed / (1000 * 60 * 60)),
        minutes = Math.floor(elapsed / (1000 * 60) % 60),
        seconds = Math.floor(elapsed / 1000 % 60),
        milliseconds = Math.floor(elapsed % 1000 / 10);

    hours = String(hours).padStart("2", 0);
    minutes = String(minutes).padStart("2", 0);
    seconds = String(seconds).padStart("2", 0);
    milliseconds = String(milliseconds).padStart("2", 0);

    time.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

/* ************* DARK & LIGHT MODE ************* */
function dark_mode() {
    document.body.style.background = "black";
    document.getElementById("mode").innerHTML =
    `<button id="light" onclick="light_mode()">Light</button>`;
    
    // adds "drk" class to main buttons and removes "lgt"
    const start_button = document.getElementById("start");
    if (start_button) // checks if "start" id exists
    {
        start_button.classList.remove("lgt");
        start_button.classList.add("drk");
    }
    
    const stop_button = document.getElementById("stop");
    if (stop_button) { // checks if "stop" id exists
        stop_button.classList.remove("lgt");
        stop_button.classList.add("drk");
    }
    
    const reset_button = document.getElementById("reset");
    reset_button.classList.remove("lgt");
    reset_button.classList.add("drk");
    
    // changes color of timer
    document.getElementById("time").style.color = "rgb(255, 255, 255)";
    
    // remembers that user activated dark mode
    localStorage.setItem("dark_mode_on", true);
}

// keeps dark mode on if user activated it in the last session
const dark_on = localStorage.getItem("dark_mode_on");
if (dark_on)
    dark_mode();

function light_mode() {
    document.body.style.background = "white";
    document.getElementById("mode").innerHTML =
        `<button id="dark" onclick="dark_mode()">Dark</button>`;

    // adds "lgt" class to main buttons and removes "drk"
    const start_button = document.getElementById("start");
    if (start_button) { // checks if "start" id exists
        start_button.classList.remove("drk");
        start_button.classList.add("lgt");
    }

    const stop_button = document.getElementById("stop");
    if (stop_button) { // checks if "stop" id exists
        stop_button.classList.remove("drk");
        stop_button.classList.add("lgt");
    }

    const reset_button = document.getElementById("reset");
    reset_button.classList.remove("drk");
    reset_button.classList.add("lgt");

    document.getElementById("time").style.color = "rgb(250, 50, 117)";

    // removes dark_mode_on localStorage item
    localStorage.removeItem("dark_mode_on");
}

/* ************* TIMER ANIMATION ************* */
const animation_timer = document.getElementById("timer");
function make_bigger() {
    const media_440 = window.matchMedia("(max-width: 440px)");
    const media_350 = window.matchMedia("(max-width: 350px)");

    /* handles media queries */
    if (media_440)
        animation_timer.style.fontSize = "2rem";
    else if (media_350)
        animation_timer.style.fontSize = "1.6rem";
    else
        animation_timer.style.fontSize = "2.5rem";       
}

function make_smaller() {
    const media_440 = window.matchMedia("(max-width: 440px)");
    const media_350 = window.matchMedia("(max-width: 350px)");
    /* handles media queries */
    if (media_440)
        animation_timer.style.fontSize = "1.7rem";
    else if (media_350)
        animation_timer.style.fontSize = "1.5rem";
    else
        animation_timer.style.fontSize = "2rem";
}