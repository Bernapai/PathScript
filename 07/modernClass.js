class Persona {
    // Constructor: inicializa los atributos del objeto
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método de la clase
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Crear una instancia de la clase
const persona1 = new Persona("Juan", 30);

// Llamar a un método de la clase
persona1.saludar(); // Output: "Hola, mi nombre es Juan y tengo 30 años."






class animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const animal1 = new animal("Perro", 5);
animal1.saludar(); // Output: "Hola, mi nombre es Perro y tengo 5 años."