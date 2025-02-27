// Ejercicio 1
function saludo(cb) {
    console.log('Hola');
    setTimeout(() => {
        cb();
    }, 2000);
}

function despedida() {
    console.log('Adios');
}
saludo(despedida);


// Ejercicio 2
let array = [1, 2, 3, 4, 5];
function procesarNumero(array, cb) {
    for (let i = 0; i < array.length; i++) {
        cb(array[i]);
    }
}

function mostrarNumero(numero) {
    console.log(numero);
}



// Ejercicio 3
let arrayObjetos = [
    { nombre: 'Juan', edad: 20 },
    { nombre: 'Pedro', edad: 30 },
    { nombre: 'Ana', edad: 25 }
];

function procesarObjetos(array, cb) {
    for (let i = 0; i < array.length; i++) {
        cb(array[i]);
    }
}

function datos(objeto) {
    console.log(objeto.nombre + ' tiene ' + objeto.edad + ' años');
}
procesarObjetos(arrayObjetos, datos);




//Ejercicio 4
let arrayContrasenas = ['1234', 'admin', '1111', 'password'];
function procesarContrasenas(contra, array, cb) {
    for (let i = 0; i < array.length; i++) {
        cb(contra, array[i]);
    }
}

function chequearSiExisteContra(contra, contraArray) {
    if (contra === contraArray) {
        console.log('La contraseña ' + contra + ' es correcta');
    } else {
        console.log('La contraseña ' + contra + ' es incorrecta');
    }
}   //




//Ejercicio 5
let arrayProductos = [
    { nombre: 'Arroz', precio: 20 },
    { nombre: 'Fideos', precio: 40 },
    { nombre: 'Pan', precio: 35 }
];

function devolverProductos(array, cb) {
    for (let i = 0; i < array.length; i++) {
        cb(array[i]);
    }
}

function precioMayora40(producto) {
    if (producto.precio > 40) {
        console.log(producto.nombre + ' tiene un precio mayor a 40');
    }
}