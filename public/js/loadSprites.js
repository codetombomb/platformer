let playerLoaded = false;
const playerImg = new Image();
playerImg.onload = function (){
    playerLoaded = true;
};
playerImg.src = "../assets/character.png";

let bgLoaded = false;
let bgImg = new Image();
bgImg.onload = function (){
    bgLoaded = true;
}
bgImg.src = "../assets/black-snakes-lg.jpeg"
