let persona = 
    { 
        nombre: 'Juan Marcos',
        apellidos: 'Marin',
        getInfo: function () {
            return `${this.nombre} ${this.apellidos}`
        }
    }

function clicNombre () {
    document.getElementById('nomb').innerHTML = persona.getNombre();
};

function Jugador (nombre, apellidos, telefono) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.getInfo = function () {
        return `Soy ${this.nombre} ${this.apellidos}`
    };
    this.setTel = function (telefono) {
        return `Soy ${this.nombre} ${this.apellidos}, y mi telefono es el: ${telefono}`
    };
};

let jugador1 = new Jugador ("Sergio", "Fernandez");
let jugador2 = new Jugador ("Pepe", "Habichuela");
let jugador3 = new Jugador("Juan Marcos", "Marin");

function clicJugador () {
    document.getElementById('jug').innerHTML = 
        jugador1.getInfo() + "<br>" +
        jugador2.getInfo() + "<br>" +
        jugador3.setTel("611 222 323") + "<br>" ;
};
console.log(jugador3.setTel("611 222 323") ); 
console.log(jugador3); 