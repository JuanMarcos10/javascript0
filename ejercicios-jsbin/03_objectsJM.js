let persona = {
    nombre : "Juan Marcos",
    apellidos : "Marin",
    id : 01,
    direccion: {
        calle: "Calle La Mar",
        numero: 5,
        poblacion: "Marbella"
    }
}

function saludar () {
    document.getElementById("03_objectsJM").innerHTML = `Hola soy ${persona.nombre} ${persona.apellidos} y vivo en ${persona.direccion.poblacion}`; 
    console.log(persona);
    for (let key in persona){
        console.log(persona[key]);
    }
    console.log("-------------------------");
    console.log(Object.keys(persona));
}

/*
let object = () => Object.keys(miDiccionario).forEach(function (item) {
    console.log(miDiccionario[item]);

});  
*/