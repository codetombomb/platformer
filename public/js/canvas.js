const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = canvasAttrs.width;
canvas.height = canvasAttrs.height;

document.getElementById("root").appendChild(canvas);
