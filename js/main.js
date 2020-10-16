
let arrayPlayers = [];
document.getElementById("botonFight").style.visibility = "hidden";
const selectPlayer = (player) => { 
    
    if(arrayPlayers.length < 2){
        
        arrayPlayers.push(player);}
        
    if(arrayPlayers.length == 2){
            console.log("Ya has escogido los 2 personajes",arrayPlayers);
            document.getElementById("botonStart").disabled = false;
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
}
if(arrayPlayers.includes('Kim')){
    escogidoKim = true;
}
if(arrayPlayers.includes('Khloe')){
    escogidoKhloe = true;
}  
if(arrayPlayers.includes('Kylie')){
    escogidoKylie = true;
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



