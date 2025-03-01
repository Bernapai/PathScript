class animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

}
const perro = new animal('Firulais');
console.log(perro.name);


class usuario {
    nombre: string;
    edad: number;
    decirNombre() {
        console.log(this.nombre);
    }

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

const usuario1 = new usuario('Juan', 30);
console.log(usuario1.nombre);
console.log(usuario1.edad);
usuario1.decirNombre();


