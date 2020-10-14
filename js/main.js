/*let partida = {

    //propiedades
    equipo1: ["1","2"],
    equipo2: ["3","4"],
    
    
    escoge1(idLuchador){
   
    this.equipo1.push(allplayers[idLuchador]);
    
   
    console.log(this.equipo1);
    }
    
    escoge2(){
    this.equipo2.push(allplayers[idLuchador]);
   
    }*/

 const clickPlayer = (argumento1) =>{
     
     let divTexto = document.getElementById('players');
    switch(argumento1){
        case 'Kourtney':
            divTexto.innerHTML = 'KOURTNEY';
        break;

        case 'Kim':
            divTexto.innerHTML = 'KIM';
        break;

        case 'Khloe':
            divTexto.innerHTML = 'KHLOE';
        break;

        case 'Kylie':
            divTexto.innerHTML = 'KYLIE';
        break;
    }

 }

    
