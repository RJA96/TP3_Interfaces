
//ID= requestanimationframe (gameloop)
//cancelAnimationframe (ID)
//INPUT-UPDATE-RENDER-CONDITIO-restart
//gameloop eventos temporales
let saltando = 0;
let saltandob = true;
let pj = document.querySelector(".pj");

document.addEventListener('keydown', (event) => {
    event.preventDefault()
    if (event.code == 'KeyW') {
        if ((saltando==0)&&(saltandob)) {
            saltandob = false;
            pj.style.top = -200+"px";
            saltando++;
        }
        else{
            pj.style.top = -160+"px";
            saltando = 0;
        }
    }
  });

  document.addEventListener('keyup', (event) => {
    pj.style.top = -160+"px";
    saltando = 0;
    saltandob = true;
    }
  );

function saltar(){
    pj.style.top = -200+"px";
    pj.backgroundImage= "url('../img/parallax/back.png')";
}