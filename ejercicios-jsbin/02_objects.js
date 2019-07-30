let miDiccionario = {
    clave1: 1,
    clave2: 2
};
console.log(miDiccionario.clave1);
miDiccionario.clave3 = 3;
console.log(miDiccionario);

for (item in miDiccionario) {
    console.log(miDiccionario[item]);
}
console.log(Object.keys(miDiccionario));
console.log("----------------------------------");
function getKeys (dict) {
    let aux = [];
        for (let key in dict) {
            aux.push(key);
        }
        return aux;
}
console.log('Mi metodo', getKeys(miDiccionario));
console.log("----------------------------------");

Object.keys(miDiccionario).forEach(function (item) {
    console.log(miDiccionario[item]);
});
function object() { 
    console.log(miDiccionario[item]);
    document.getElementById("02_objects").innerHTML =  miDiccionario[item];
};