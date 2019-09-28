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
    if (!(isCollide(pj.getBoundingClientRect(), coin.getBoundingClientRect()))) {
        puntos++;
        console.log(puntos);

    } else {
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
        if ((saltandob) && (!(derrota))) {

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
    
    pj.classList.remove("pj");
    pj.classList.add("pjsaltando");

}

function caer() {
    var caer = setTimeout(() => {
        pj.classList.remove("pjsaltando");
        pj.classList.add("pj");
    }, 500);
}

function gameover() {
    window.clearTimeout(caer);
    coin.style.display = "none";
    pj.classList.remove("pj");
    pj.classList.add("pjmuerte");
    pj.addEventListener("animationend", function () {
        pj.style.background = "url(../img/Dead.png)";
    })
}

function isCollide(a, b) {
    return !(
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width))
    );
}