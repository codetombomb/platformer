let animationStopId;
let timerStopid;

const startGame = () => {
    update();
}

const update = () => {
    animationStopId = window.requestAnimationFrame(update);
    render();
    movePlayer(0.02);
    walkPlayer();
}

const render = () => {  
    ctx.drawImage(bgImg, 0, 0)
    ctx.drawImage(playerImg, walk, direction, 256, 256, 10, 300, 100, 100);
}

const stopGame = () => {
    clearInterval(timerStopid);
    cancelAnimationFrame(animationStopId);
}


const restart = () => {

}

const walkPlayer = () => {
    let stopId;
    if (walking) {
        stopId = setInterval(incrementFrame(), 1000)
    } else {
        clearInterval(stopId)
    }
}

