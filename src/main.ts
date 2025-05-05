import Chance from "chance";
import "./index.css";

function drawSquare(context : CanvasRenderingContext2D, color : string){
    context.strokeStyle = color;
    let coordinateX : number = Chance().integer({min: 0, max: window.innerWidth});
    let coordinateY : number = Chance().integer({min: 0, max: window.innerHeight});
    context.fillRect(coordinateX, coordinateY, 10, 10);
}

const canvas = document.getElementById("universe") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "gold";

drawSquare(ctx, "red");
drawSquare(ctx, "blue");
drawSquare(ctx, "green");
drawSquare(ctx, "yellow");