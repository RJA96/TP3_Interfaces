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
        game.añadricapa("img/background.png",1);

        animate()
    }

    function animate() {
        requestAnimFrame(animate);
        for (let i = 0; i < game.capas.length; i++) {
            game.capas[i].draw();
        }
       // game.fondo.draw();

    }

    
    
    

    iniciar();
})();