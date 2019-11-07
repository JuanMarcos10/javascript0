let arrowFunction = () => console.log('It is not so dificult');

let Pillado = () => { 
    let pillo = 2;
        if (pillo === 2) {
        return console.log('Por fin lo pillo')
        } else {
            console.error('Please input pillo =2');
        };
        console.log('Esto solo es un ejemplo si es diferente de 2');
};

let miDiccionario = {
    clave1: 1,
    clave2: 2
}; 

miDiccionario.clave3 = 3;
console.log(miDiccionario);
 
for (item in miDiccionario) {
    console.log(miDiccionario[item]);
}

console.log("justo aqui debajo es: Object.keys de miDiccionario:");
console.log(Object.keys(miDiccionario));
console.log("----------------------------------");
/*
function getKeys (dict) {
    let aux = [];
        for (let key in dict) {
            aux.push(key);
        }
        return aux;
}
console.log('Mi metodo', getKeys(miDiccionario));
console.log("----------------------------------"); 
*/
Object.keys(miDiccionario).forEach(function (item) {
    console.log(miDiccionario[item]);
});

console.log('_________________________');

function object() { 
    console.log(miDiccionario);
};  
