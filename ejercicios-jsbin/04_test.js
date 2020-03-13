/* const isOK = true;
let msg = isOK ? "Todo Correcto" : "No esta Correcto";
function testmsg() {
    console.log(msg);
} */

let test1 = (a, b) => {
    let resultado = (a + b); 
    document.getElementById("test1").innerHTML = resultado;
};
let test2 = function () {
    let a1 = ["Cecilie", "Lone"];
    let a2 = ["Emil", "Tobias", "Linus"];
    let suma = a1.concat(a2);
    document.getElementById("test2").innerHTML = suma;
};
let test3 = function (a, b) {
    if (a > b) {
        document.getElementById("test3").innerHTML = true;
    } else {
        document.getElementById("test3").innerHTML = false;
    }  
};
let test4 = function (a, b) {
    if (a > b) {
        document.getElementById("test4").innerHTML = b;
    } else {
        document.getElementById("test4").innerHTML = a;
    }  
};
let cleartest1 = () => document.getElementById("test1").innerHTML = "";
let consoleclear = () => console.clear();