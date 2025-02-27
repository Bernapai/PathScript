function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

// Agregar un método al prototipo de Persona
Persona.prototype.saludar = function () {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
};

const persona1 = new Persona('Juan', 30);
persona1.saludar(); // Output: "Hola, mi nombre es Juan y tengo 30 años."




function Animal(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Animal.prototype.saludar = function () {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
}

const animal1 = new Animal('Perro', 5);
animal1.saludar(); // Output: "Hola, mi nombre es Perro y tengo 5 años."