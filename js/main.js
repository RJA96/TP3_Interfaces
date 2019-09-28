//ID= requestanimationframe (gameloop)
//cancelAnimationframe (ID)
//INPUT-UPDATE-RENDER-CONDITIO-restart
//gameloop eventos temporales
let saltando = 0;
let saltandob = true;
let pj = document.querySelector(".pj");
let coin = document.querySelector(".coin");
let fondo = document.querySelector(".fondo0")
let puntos = 0;
let derrota = false;
var requestId;
//isCollide(pj.getBoundingClientRect(),coin.getBoundingClientRect())

function loop(timestamp) {
if (!(isCollide(pj.getBoundingClientRect(),coin.getBoundingClientRect()))) {
        puntos++;
        console.log(puntos);

}
else{
    derrota = true;
        console.log("out");
        gameover();
    return    
}
    window.requestAnimationFrame(loop)
}
window.requestAnimationFrame(loop);

document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyW') {
        if ((saltandob)&&(!(derrota))) {
            
                saltar();
            saltandob = false;
            caer();
        } else {
            pj.style.top = -160 + "px";
        }
    }
});

document.addEventListener('keyup', (event) => {
    saltandob = true;
});

function saltar() {
    pj.style.background = "url(../img/salto.png)";
    pj.style.animation = "playXjump 0.5s steps(5), playYjump 1s steps(1)"
        pj.style.top = -220 + "px";

}

function caer() {
        setTimeout(() => {
            pj.style.background = "url(../img/run.png)";
        pj.style.animation ="playXrun 0.5s steps(4) infinite, playYrun 1s steps(2) infinite"
    
            pj.style.top = -160 + "px";
    
        }, 500); 
      
}

function gameover(){
    stop();
    coin.style.display = "none";
    pj.style.background = "url(../img/caida.png)";
    pj.style.width = "986px";
    pj.style.animation ="playXfall 1s steps(2), playYfall 1s steps(5)"
}

function isCollide(a, b) {
    return !(
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width))
    );
}