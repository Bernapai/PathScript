let personaje = {
    nombre: "Juan",
    edad: 20,
}

let animal = {
    nombre: "Perro",
    raza: "Labrador",
}

console.log(personaje.nombre); // Juan
console.log(animal.raza); // Labrador



class Personaje {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

let personaje1 = new Personaje("Juan", 20);
console.log(personaje1.nombre); // Juan