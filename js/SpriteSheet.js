import { Dibujable } from "./Dibujable.js";

export class SpriteSheet extends Dibujable{
    constructor(x, y,imgsrc,frameWidth, frameHeight,frameSpeed,endFrame,context){
        super(x, y,frameSpeed);
        this.img = new Image();
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.framesPerRow;
        this.img.src = imgsrc;        
        this.framesPerRow = Math.floor(this.img.width / this.frameWidth);
        this.currentFrame = 0;  // the current frame to draw
        this.counter = 0;
        this.endFrame = endFrame;
        this.context = context;
        this.animationSequence = [];
        for (let frameNumber = 0; frameNumber <= endFrame; frameNumber++)
        this.animationSequence.push(frameNumber);
    }
    update(){
        if (this.counter == (this.speed - 1))
            this.currentFrame = (this.currentFrame + 1) % this.endFrame;
            this.counter = (this.counter + 1) % this.speed;
    }
    draw(){
        let row = Math.floor(animationSequence[currentFrame] / this.framesPerRow);
        let col = Math.floor(animationSequence[currentFrame] % this.framesPerRow);
        this.context.drawImage(
         this.img,
         col * this.frameWidth, row * this.frameHeight,
         this.frameWidth, this.frameHeight,
         this.x, this.y,
         this.frameWidth, this.frameHeight);
    }
}