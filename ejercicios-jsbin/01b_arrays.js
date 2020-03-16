let str1 = "Hello world";
let str2 = "my name is";
let str3 = "Juan Marcos";
console.log(`${str1}, ${str2} ${str3}`);
console.log("11111111111111111111");

function hola(param1) {
  let str1 = "Hello world";
  let str2 = "my name is";
  console.log(`${str1}, ${str2} ${param1}`);
  document.getElementById("hola1").innerHTML =  `${str1}, ${str2} ${param1}`;
};
function concatenar(a, b) {
  return console.log(`${a} ${b}`);
};
let arrowFunction = () => document.getElementById("arrowfn").innerHTML = "Hola Arrow Function";
/* console.log(arrowfunction()); */
let miArray = [1, 2, 7];
console.log(miArray);
console.log(miArray.length);
let juntar = miArray.join(" - ");
console.log(juntar);
let concatenar2 = miArray.concat(juntar);
console.log(concatenar2);
console.log("22222222222222222222");
let concatenar2AF = () => miArray.concat(juntar);
console.log(concatenar2AF());
console.log("3333333333333333333");
miArray.pop();
console.log(miArray);
console.log("44444444444444444444");
let addToArray = (a) => {
  return miArray.push(a);
};
addToArray(4);
console.log(miArray);
console.log("555555555555555555555");
function recorrer() {
  for (let i=0 ; i<miArray.length ; i++){
    console.log(`El valor i es: ${i}`);
    console.log(miArray[i]);
  }
};
recorrer();
function divisibles() {
  let contador = 0;
  for (let i=0 ; i<miArray.length ; i++){
      if ((miArray[i] % 2) === 0 ) {
        contador++;
      }
  }  
  return contador;
};
console.log(`Resultado: ${divisibles()} que son divisbles`);  

