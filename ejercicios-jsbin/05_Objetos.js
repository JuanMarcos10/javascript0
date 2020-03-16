const juego = (player1, player2) => {
    const rules = {piedra: 'tijeras', papel: 'piedra', tijeras: 'papel'};
    if (player1 == player2) {
        return document.getElementById('juegohtml').innerHTML = `Jugador 1: ${player1} <br> Jugador 2: ${player2} <br> Resultado: EMPATE`;
    } else if (rules[player1] == player2) {
        return document.getElementById('juegohtml').innerHTML = `Jugador 1: ${player1} <br> Jugador 2: ${player2} <br> Resultado: Gana el Jugador 1`;
    } else {
    return document.getElementById('juegohtml').innerHTML =  `Jugador 1: ${player1} <br> Jugador 2: ${player2} <br> Resultado: Gana el Jugador 2`;
    };
};
const juegos = () => { 
    let dato1 = prompt ("Jugador numero 1: Introduce piedra, papel o tijeras");
    let dato2 = prompt ("Jugador numero 2: Introduce piedra, papel o tijeras");
    console.log(juego(dato1, dato2));
    juego(dato1, dato2) 
};  

function Player (nombre) {
    let actions = ['piedra', 'papel', 'tijeras'];
    this.nombre = nombre;
    this.play = function () {
        return actions[Math.floor(Math.random()*actions.length)];
    }
};

function juegoAuto () {
    let player1 = new Player('Jugador 1');
    let player2 = new Player('Jugador 2');
    juego (player1.play(), player2.play());
    
}

function rango (inicio, fin, rango = 1) {   
    let myArray = [];
    if ( rango < 0 ) {            
        for (let i = inicio ; i >= fin ; i += rango) {
            myArray.push(i);        
        }
    } else {
        for ( let i = inicio ; i <= fin ; i += rango) {
                if (i <= fin) {
            myArray.push(i);        
            }; 
        }; 
    };
     document.getElementById('rangohtml').innerHTML = `Inicio del rango: ${myArray[0]} <br> Fin del rango: ${fin} <br> Rango: ${rango} <br> Resultado: ${myArray}`; 
    return myArray;
};

function sum(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    };
    document.getElementById('sumhtml').innerHTML = `Suma de los rango: ${result}`
    return result;
};

function countNumbers (array) {
    let result = {};
    for (let i = 0; i < array.length; i++) {
        if (!result.hasOwnProperty(array[i])) {
            result[array[i]] = 0;
        }
        result[array[i]]++;
    }
    return result;
}
console.log(countNumbers([1, 2, 2, 3, 5, 1, 2, 3, 1 ]));