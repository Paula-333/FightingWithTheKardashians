//ESCONDIENDO PANTALLA

document.getElementById("winner").style.visibility = "hidden";
document.getElementById("fight").style.visibility = "hidden";


//VARIABLES
let arrayPlayers = [];
let playersDiv = document.getElementById('players');
let fighter = document.getElementById('fight');
let life1 = document.getElementById('life1');
let life2 = document.getElementById('life2');
let winnerDiv = document.getElementById('winner');
let textWinner = document.getElementById('textWin');


//PERSONAJES


class Player {
    constructor(nombre, ataque, defensa, foto) {
    
    this.nombre = nombre;
    this.vida = 100;
    this.ataque = ataque;
    this.defensa = defensa;
    this.foto = foto;
    }

}
    
    let Kourt = new Player("Kourt",55,50,"Kourtney.png");
    let Kim = new Player("Kim",55,50,"Kim.png");
    let Khloe = new Player("Khloe",55,50,"Khloe.png");
    let Kylie = new Player("Kylie",55,50,"Kylie.png");

//SELECIONAR PERSONAJE
const selectPlayer = (player) => { 
    
    if(arrayPlayers.length < 2){
        
        if (player == 'Kourt') {
            arrayPlayers.push(Kourt);
        } else if (player == 'Kim') {
            arrayPlayers.push(Kim);
        } else if (player == 'Khloe') { 
            arrayPlayers.push(Khloe);
        } else if (player == 'Kylie') {
            arrayPlayers.push(Kylie);
    }

        
    if(arrayPlayers.length == 2){
            console.log("Ya has escogido los 2 personajes",arrayPlayers);
            document.getElementById("botonStart").disabled = false;
            return;
        }
        console.log(arrayPlayers);
        console.log(arrayPlayers.length);
}

}

//Al elegir los personajes se esconden los no selecionados al pulsar start

function botonStart () {
let escogidoKourtney = false;
let escogidoKim = false;
let escogidoKhloe = false;
let escogidoKylie = false;

for(i = 0; i < arrayPlayers.length; i++){
    if(arrayPlayers[i].nombre.includes('Kourt')){
        escogidoKourtney = true;
    }
    if(arrayPlayers[i].nombre.includes('Kim')){
        escogidoKim = true;    
    }
    if(arrayPlayers[i].nombre.includes('Khloe')){
        escogidoKhloe = true;    
    }  
    if(arrayPlayers[i].nombre.includes('Kylie')){
        escogidoKylie = true;    
    }
}

if(!escogidoKourtney){
    document.getElementById("p1").style.visibility = "hidden";
}

if(!escogidoKim){
    document.getElementById("p2").style.visibility = "hidden";
}

if(!escogidoKhloe){
    document.getElementById("p3").style.visibility = "hidden";
}

if(!escogidoKylie){
    document.getElementById("p4").style.visibility = "hidden";
}

document.getElementById("choose").style.visibility = "hidden";
document.getElementById("botonStart").style.visibility = "hidden";
document.getElementById("fight").style.visibility = "visible";

}

//PELEA



    function fight (atack) {
     
        if (atack == 0){
            if ((life2.value)- arrayPlayers[1].ataque>=0){
                life2.value -= arrayPlayers[1].ataque - arrayPlayers[0].defensa;
            }else{
                life2.value = 0;
                finish (0);
            }
    
            }else{
                if ((life1.value)- arrayPlayers[0].ataque>=0){
                    life1.value -= arrayPlayers[0].ataque - arrayPlayers[1].defensa;
                }else{
                    life2.value = 0;
                    finish (1);
                }
        }
    }    
    
//PANTALLA WINNER

function finish (win) {
    fighter.style.visibility = 'hidden';
    playersDiv.style.visibility = 'hidden';
    winnerDiv.style.visibility = 'visible';
    textWinner.textContent += arrayPlayers[win].nombre;
    
    if(arrayPlayers[win].nombre == 'Kourt'){
        document.getElementById("p1").style.visibility = "visible";
    }
    if(arrayPlayers[win].nombre == 'Kim'){
        document.getElementById("p2").style.visibility = "visible";
    }
   if(arrayPlayers[win].nombre == 'Khloe'){
        document.getElementById("p3").style.visibility = "visible";
    }
    if(arrayPlayers[win].nombre == 'Kylie'){
        document.getElementById("p4").style.visibility = "visible";
    }

    
}