let direction = 0;
let frames = [0, 256, 512, 768];
let walking = false;
let walk = 0;

let canvasAttrs = {
    width: 500,
    height: 500
}

let player = {
    height: 16,
    width: 16,
    x: 0,
    y: 0,
    speed: 200,
    walkDown: 0,
    walkUp: 256,
    walkLeft: 512,
    walkRight: 768
}

