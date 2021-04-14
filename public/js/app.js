document.addEventListener("DOMContentLoaded", () => {
    console.log("ready to roll")
    renderCanvas();
})

function renderCanvas(){
    const canvas = document.createElement("canvas");
    appendToBody(canvas);
}

function appendToBody(element){
    const body = getEl("app");
    body.appendChild(element);
}

function getEl(name){
    return document.getElementById(name);
}