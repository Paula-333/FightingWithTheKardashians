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
    let punch = (this.ataque * this.speed) - enemigo.defensa
    enemigo.vida -= punch;
    }
    
    defender(enemigo){
    let defender = (this.ataque + this.lucky);
    enemigo.vida -= defender;
    }
    
    esquivar(enemigo){
    
    }
    
    }
    
    
    let Kourt = new Player("Kourt",85,75,80,50);
    let Kim = new Player("Kim",80,80,85,60);
    let Khloe = new Player("Khloe", 85,85,85,55);
    let Kylie = new Player("Kylie",70,80,90,65);
    
    
    
    let allplayers = {
    "1": Kourt,
    "2": Kim,
    "3": Khloe,
    "4": Kylie,
    }
    
    
    let juego = {
    
    turno: 0,
    player1: "1",
    player2: "2",
    ganador: "2",
    
    resetearLucha(){
    
    },
    
    turnoLucha(){
    
    },
    }
    
    
    
    /* class Player extends Luchador{
    constructor(nombre) {
    super(nombre,"Kourt");
    this.arma("bolso");
    }
    }
    
    class Player extends Luchador{
    constructor(nombre) {
    super(nombre,"Kim");
    this.arma("zapato");
    }
    }
    
    class Player extends Luchador{
    constructor(nombre) {
    super(nombre,"Khloe");
    this.arma("balon");
    }
    }
    
    class Player extends Luchador{
    constructor(nombre) {
    super(nombre,"Kylie");
    this.arma("pintalabios");
    }
    } */
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //console.log(Kourt);
    
    