





/* let str1 = "Hello world";
let str2 = "my name is";
let str3 = "Juan Marcos";
console.log(`${str1}, ${str2} ${str3}`);
console.log("--------------------------");

function hola(param1) {
  let str1 = "Hello world";
  let str2 = "my name is";
  console.log(`${str1}, ${str2} ${param1}`);
  document.getElementById("01b_arrays").innerHTML =  `${str1}, ${str2} ${param1}`;
};

function concatenar(a, b) {
  return `${a} ${b}`;
};
console.log(concatenar("Hello", "World"));

let arrowfunction = () => "Hola";

console.log(arrowfunction());

let miArray = [1, 2, 3];

console.log(miArray);
console.log(miArray.length);
let juntar = miArray.join(" - ");
console.log(juntar);
let concatenar2 = miArray.concat(juntar);
console.log(concatenar2);
console.log("----------------");
let concatenar2AF = () => miArray.concat(juntar);
console.log(concatenar2AF());


miArray.push(4);
console.log(miArray);

console.log("____________________");

miArray.pop();
console.log(miArray);

console.log("******************");

let addToArray = (a) => {
  return miArray.push(a);
};

addToArray(4);
console.log(miArray);

console.log("*********************************");

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

console.log(`Resultado: ${divisibles()} que son divisbles`);  */