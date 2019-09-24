import { Dibujable } from "./Dibujable.js";

export class Fondo extends Dibujable{
    constructor(x, y,canvasWidth,canvasHeight,context,imgsrc,speed){
        super(x, y,speed,canvasWidth,canvasHeight)
        this.context = context;
        this.img = imgsrc;
    }
    draw(){
        this.x -= this.speed;        
        this.context.drawImage(this.img, this.x, this.y);
        this.context.drawImage(this.img, this.x-this.canvasWidth, this.y);       
        if (this.x <= 0)
			this.x = this.canvasWidth;
    }
}