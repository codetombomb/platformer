let animationStopId;
let timerStopid;

const startGame = () => {
    update();
}

const update = () => {
    animationStopId = window.requestAnimationFrame(update);
    render();
    movePlayer(0.02);
}
// 256
const render = () => {
    ctx.drawImage(playerImg, walk, direction, 256, 256, 10, 300, 100, 100);
}

const stopGame = () => {
    clearInterval(timerStopid);
    cancelAnimationFrame(animationStopId);
}


const restart = () => {

}