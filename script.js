const time = document.getElementById("time");
let timer = null, start_time = 0,
    elapsed = 0, running = false;

/* START, RESET, AND STOP FUNCTIONS */
function start() {
    if (!running)
    {
        start_time = Date.now() - elapsed;
        timer = setInterval(update, 10);
        running = true;
    }
}

function stop() {
    if (running)
    {
        clearInterval(timer);
        elapsed = Date.now() - start_time;
        running = false;
    }
}    

function reset() {
    clearInterval(timer);
    start_time = 0;
    elapsed = 0;
    running = false;
    time.textContent = `00:00:00.00`;
}

/* FUNCTION TO UPDATE TIME */
function update(){
    const current_time = Date.now();
    elapsed = current_time - start_time;

    let hours = Math.floor(elapsed/(1000 * 60 * 60)),
        minutes = Math.floor(elapsed/(1000 * 60) % 60),
        seconds = Math.floor(elapsed/1000 % 60),
        milliseconds = Math.floor(elapsed % 1000/10);

    hours = String(hours).padStart("2", 0);
    minutes = String(minutes).padStart("2", 0);
    seconds = String(seconds).padStart("2", 0);
    milliseconds = String(milliseconds).padStart("2", 0);

    time.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

/* DARK & LIGHT MODE */
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