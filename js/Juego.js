import {
    Fondo
} from "./Fondo.js";
export class Juego {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.fondo;
    }
    iniciar(imgsrc) {
        let ctx = this.context;
        let img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = imgsrc;
        this.fondo = new Fondo(0, 0, canvas.width, canvas.height, ctx, img);
    }
}