
function displayTime() {
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds();
    let ampm = date.toLocaleTimeString();
    let hr = document.getElementById("hr");
    let m = document.getElementById("m");
    let s = document.getElementById("s");

    hr.innerHTML = hours;

    m.innerHTML = mins;
    if (sec < "10") {
        s.innerHTML = "0" + sec + " " + ampm.slice(8).toLowerCase();
    }
    else {
        s.innerHTML = sec + " " + ampm.slice(8).toLowerCase();
    }
}
setInterval(displayTime, 1000);