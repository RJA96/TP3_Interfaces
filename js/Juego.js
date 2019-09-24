import {
    Fondo
} from "./Fondo.js";
export class Juego {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.capas = [];
    }
    
    añadricapa(imgsrc,speed){
        let ctx = this.context;
        let img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = imgsrc;
        this.fondo = new Fondo(canvas.width, 0, canvas.width, canvas.height, ctx, img,speed);
        this.capas.push(this.fondo);
    }
}