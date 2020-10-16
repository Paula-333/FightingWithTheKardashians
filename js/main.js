
let arrayPlayers = [];
document.getElementById("botonFight").style.visibility = "hidden";

const selectPlayer = (player) => { 
    
    if(arrayPlayers.length < 2){
        
        arrayPlayers.push(player);}
        
    if(arrayPlayers.length == 2){
            console.log("Ya has escogido los 2 personajes",arrayPlayers);
            return;
        }
        console.log(arrayPlayers);
        console.log(arrayPlayers.length);
}



const botonStart = () => {
let escogidoKourtney = false;
let escogidoKim = false;
let escogidoKhloe = false;
let escogidoKylie = false;

if(arrayPlayers.includes('Kourtney')){
    escogidoKourtney = true;
}else {
    escogidoKourtney = false;
} 
if(arrayPlayers.includes('Kim')){
    escogidoKim = true;
}else {
    escogidoKim = false;
} 
if(arrayPlayers.includes('Khloe')){
    escogidoKhloe = true;
}else {
    escogidoKhloe = false;
}   
if(arrayPlayers.includes('Kylie')){
    escogidoKylie = true;
}else{
    escogidoKylie = false
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
document.getElementById("botonFight").style.visibility = "visible";




}



