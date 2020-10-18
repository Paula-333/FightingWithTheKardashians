//JUGADORES
let allPlayer = [];
let life1 = document.getElementById('life1');
let life2 = document.getElementById('life2');
let winner = document.getElementById('winner');

class Player {
    constructor(nombre, ataque, defensa, speed, lucky, handicap) {
    
    this.nombre = nombre;
    this.vida = 300;
    this.ataque = ataque;
    this.defensa = defensa;
    this.speed = speed;
    this.lucky = lucky;
    this.handicap = handicap;
    }

  /*  punch(enemigo){
        document.getElementById('players')
    let punch = (this.ataque + this.speed) / (this.lucky - this.handicap);
    enemigo.vida -= punch;
    }
    
    defender(enemigo){
    let defender = (this.lucky + this.handicap) - (this.handicap);
    enemigo.vida -= defender;
    }*/
    
}
    
    let Kourt = new Player("Kourt",60,50,60,15,25);
    let Kim = new Player("Kim",55,50,55,20,20);
    let Khloe = new Player("Khloe",65,55,65,10,25);
    let Kylie = new Player("Kylie",60,45,70,15,20);

  function fight (atack) {
     
    if (atack == 0){
        if ((life1.value + allPlayer[0].handicap)- allPlayer[1].ataque>=0){life2.value -= allPlayer[1].ataque - allPlayer[0].handicap;
        }else{
            life1.value = 0;
            finish (0);
        }

        }else{
            if ((life2.value + allPlayer[1].handicap)- allPlayer[0].ataque>=0){life2.value -= allPlayer[0].ataque - allPlayer[1].handicap;
            }else{
                life1.value = 0;
                finish (1);
            }
    }
    
}

function finish (winner) {
    winner.style.visibility = 'visable';
    
}