
let arrayPlayers = [];

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




