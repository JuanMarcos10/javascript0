    const x = 3.23
    // x = x * 2 -> daría un error
    const oDatos = {nombre: 'Pepe', edad: 23}
    oDatos.nombre = 'Jose'
    oDatos.altura = 180
    oDatos.peso = 87
    oDatos.edad = 24
    console.log(oDatos);
    console.log(oDatos.peso + " kg");
    let user = oDatos.nombre;

    function listarDatos(user) {
        console.log("Soy " + user + ", tengo " + oDatos.edad + " años y peso " + oDatos.peso + " kg.");
        document.getElementById("01a_constantes").innerHTML = "Soy " + user + ", tengo " + oDatos.edad + " años y peso " + oDatos.peso + " kg.";
    };
    