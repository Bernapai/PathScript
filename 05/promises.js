//Ejercicio1
let objetosPersonas = [
    { nombre: 'Juan', edad: 20 },
    { nombre: 'Ana', edad: 15 },
    { nombre: 'Pedro', edad: 40 },
    { nombre: 'María', edad: 30 }
];

function getPersonas(array) {

    return new Promise((resolve, reject) => {
        if (array.length === 0) {
            reject('No hay personas');
        } else {
            setTimeout(() => {
                resolve(array);
            }, 2000);
        }
    });
}

getPersonas()
    .then((array) => {
        console.log(array);
    })
    .catch((error) => {
        console.log(error);
    });







//Ejercicio2
const productosObjetos = [
    { producto: 'Televisor', precio: 500 },
    { producto: 'Lavarropas', precio: 800 },
    { producto: 'Cafetera', precio: 100 },
    { producto: 'Celular', precio: 200 }
];


function obtenerPorductos(array) {

    return new Promise((resolve, reject) => {
        if (array.length === 0) {
            reject('No hay productos');
        } else {
            setTimeout(() => {
                resolve(array);
            }, 2000);
        }
    });
}


obtenerPorductos()
    .then((array) => {
        console.log(array);
    })
    .catch((error) => {
        console.log(error);
    });





//Ejercicio3

function verificarDisponibilidad(producto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (producto.stock > 0) {
                resolve('Producto disponible');
            } else {
                reject('Producto no disponible');
            }
        }, 1000);
    });
}

function verificarPrecio(producto) {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Precio correcto'), 500);
    });
}

function verificarDescripcion(producto) {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Descripción correcta'), 2000);
    });
}

// Lista de productos a verificar
const productos = [
    { nombre: 'Producto 1', stock: 5 },
    { nombre: 'Producto 2', stock: 0 },  // Este producto no está disponible
    { nombre: 'Producto 3', stock: 3 }
];

// Usamos Promise.all para ejecutar las tres operaciones en paralelo
Promise.all([
    verificarDisponibilidad(productos[0]),
    verificarPrecio(productos[0]),
    verificarDescripcion(productos[0])
])
    .then(resultados => {
        console.log('Resultados de las tres tareas:');
        console.log(resultados);  // Si todo va bien, se resuelven las tres promesas
    })
    .catch(error => {
        console.log('Error:', error);  // Si alguna promesa falla (en este caso, Producto 2 no está disponible)
    });







//Ejercicio 4

const arrraUsuarios = [
    { usuario: 'admin', contrasena: '1234' },
    { usuario: 'user', contrasena: '1111' },
    { usuario: 'admin', contrasena: 'admin' },
    { usuario: 'user', contrasena: 'password' }
];


function verificarUsuario(usuario) {

    return new Promise((resolve, reject) => {
        for (let i = 0; i < arrraUsuarios.length; i++) {
            if (usuario === arrraUsuarios[i].usuario) {
                resolve('Usuario correcto');
            } else {
                reject('Usuario incorrecto');
            }
        }

    }
    );
}






//Ejercicio 5

let personaCuentaBancaria = [
    { nombre: 'Juan', saldo: 500 },
    { nombre: 'Ana', saldo: 800 },
    { nombre: 'Pedro', saldo: 100 },
    { nombre: 'María', saldo: 200 }
];



function transferirDinero(array) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i].saldo > 500) {
                resolve('Saldo suficiente enviado a la cuenta');
            } else {
                reject('Saldo insuficiente');
            }
        }
    });
}






//Ejercicio 6


const productos2 = [
    { nombre: 'Arroz', precio: 20 },
    { nombre: 'Fideos', precio: 40 },
    { nombre: 'Pan', precio: 35 }
];


function buscarProductos(producto, array) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < array.length; i++) {
            if (producto === array[i].nombre) {
                resolve('Producto encontrado');
            } else {
                reject('Producto no encontrado');
            }
        }
    });

}