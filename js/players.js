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

    punch(enemigo){
        document.getElementById('players')
    let punch = (this.ataque + this.speed) / (this.lucky - this.handicap);
    enemigo.vida -= punch;
    }
    
    defender(enemigo){
    let defender = (this.lucky + this.defensa) - (this.handicap);
    enemigo.vida -= defender;
    }
    
}
    
   
    let Kourt = new Player("Kourt",60,50,60,15,25);
    let Kim = new Player("Kim",55,50,55,20,20);
    let Khloe = new Player("Khloe",65,55,65,10,25);
    let Kylie = new Player("Kylie",60,45,70,15,20);
    
console.log('START THE FIGHT')
console.log('Kourt:', Kourt.vida)
console.log('Kylie:', Kylie.vida)
Kylie.punch(Kourt)
console.log("EMPIEZA GOLPEA A KOURT");
console.log("Kylie:", Kylie.vida);
console.log("Kourt", Kourt.vida);
Kourt.defender(Kylie)
console.log("EMPIEZA GOLPEA A KYLIE");
console.log("Kylie:", Kylie.vida);
console.log("Kourt", Kourt.vida);
    
    //let allplayers = {
    //"p1": Kourt,
    //"p2": Kim,
    //"p3": Khloe,
    //"p4": Kylie,
    //}
    
    
    