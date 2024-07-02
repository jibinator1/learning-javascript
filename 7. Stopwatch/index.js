const display= document.getElementById("stopwatch");

let timer = null;
let isRunning = false;
let startTime = 0;
let elapsedTime = 0;

function startButton() {
    if (isRunning == false) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }

}

function stopButton() {
    if (isRunning == true) {
        clearInterval(timer);  
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function resetButton() {
    isRunning = false;  
    startTime = Date.now();
    currentTime = 0;
    clearInterval(timer); 
    update();
    


}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hours = Math.floor(elapsedTime/(1000*60*60));
    let minutes = Math.floor(elapsedTime/(1000*60)%60);
    let seconds = Math.floor(elapsedTime/1000%60);
    let miliseconds = Math.floor(elapsedTime%1000/10);

    hours = hours.toString().padStart(2, 0);
    minutes = minutes.toString().padStart(2, 0);
    seconds = seconds.toString().padStart(2, 0);
    miliseconds = miliseconds.toString().padStart(2, 0);
    
    display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}