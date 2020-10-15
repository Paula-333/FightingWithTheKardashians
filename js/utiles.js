let divColorPrimero = document.getElementById("fight");
     const colorRandom = (min, max) =>{
         return Math.floor(Math.random()*(max - min) + min);
    }
    let color = colorRandom(1,5);
    console.log(color);

    switch(color){
        case 1: 
            divColorPrimero.style.backgroundColor = 'blue'
        break;
        case 2:
            divColorPrimero.style.backgroundColor = 'red'
        break;
        case 3:
            divColorPrimero.style.backgroundColor = 'black'
        break;
        case 4:
            divColorPrimero.style.backgroundColor = 'green'
        break;
    } 