import {
    Juego
} from "./Juego.js";
import { SpriteSheet } from "./SpriteSheet.js";
(function () {
    const canvas = document.querySelector("#canvas");
    const context = canvas.getContext("2d");
    let game = new Juego(canvas, context);
    //let sprite = new SpriteSheet(0,0,"img/pjcorriendo.png",816,164,5,2,context);
    let requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame;
    })();

    function iniciar() {
        game.iniciar("img/background.png");
        animate()
    }

    function animate() {
        requestAnimFrame(animate);
        game.fondo.draw();

    }

    
    
    

    iniciar();
})();