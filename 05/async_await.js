//Ejercicio 1
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

async function obtenerDatos() {
    try {
        const resultado = await getPersonas(objetosPersonas);
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}





//Ejercicio 2
const climaDatos = [
    { ciudad: 'Buenos Aires', temperatura: 20 },
    { ciudad: 'Córdoba', temperatura: 25 },
    { ciudad: 'Mendoza', temperatura: 30 },
    { ciudad: 'Rosario', temperatura: 15 }
];


function getClima(array) {

    return new Promise((resolve, reject) => {
        if (array.length === 0) {
            reject('No hay datos');
        } else {
            setTimeout(() => {
                resolve(array);
            }, 2000);
        }
    });
}

async function obtenerClima() {
    try {
        const resultado = await getClima(climaDatos);
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}



//Ejercicio 3
// Funciones para verificar las condiciones de los productos

async function verificarDisponibilidad(producto) {
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

async function verificarPrecio(producto) {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Precio correcto'), 500);
    });
}

async function verificarDescripcion(producto) {
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

// Función para verificar todo de manera secuencial usando async/await
async function verificarProducto(producto) {
    try {
        const disponibilidad = await verificarDisponibilidad(producto);
        const precio = await verificarPrecio(producto);
        const descripcion = await verificarDescripcion(producto);

        console.log('Resultados de las tres tareas:');
        console.log([disponibilidad, precio, descripcion]);
    } catch (error) {
        console.log('Error:', error);  // Si alguna de las promesas falla
    }
}

// Verificamos todos los productos
productos.forEach(producto => {
    verificarProducto(producto);
});
