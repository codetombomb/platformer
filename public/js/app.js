let startButton = document.createElement("button");
startButton.innerText = "START!";

let stopButton = document.createElement("button");
stopButton.innerText = "STOP!";

let root = document.getElementById("root");
root.appendChild(stopButton);
root.appendChild(startButton);

startButton.onclick = function() {
    startGame();
}

stopButton.onclick = function() {
    stopGame();
}