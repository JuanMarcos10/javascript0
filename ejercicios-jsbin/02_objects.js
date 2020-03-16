let Pillado = () => { return console.log('Por fin lo pillo') };

let miDiccionario = {
    clave1: 1,
    clave2: 2,
    clave3: 3,
}; 
 
for (item in miDiccionario) {
    console.log(miDiccionario[item]);
}

console.log("justo aqui debajo es: Object.keys de miDiccionario:");
console.log(Object.keys(miDiccionario));
console.log("----------------------------------");
/* function getKeys (dict) {
    let aux = [];
        for (let key in dict) {
            aux.push(key);
        }
        return aux;
}
console.log('Mi metodo', getKeys(miDiccionario));
console.log("----------------------------------");  */

Object.keys(miDiccionario).forEach(function (item) {
    console.log(miDiccionario[item]);
});
/* Object.keys(miDiccionario).forEach((item) => console.log(miDiccionario[item])); */
console.log('_________________________');

function object() { 
    console.log(miDiccionario);
};  
