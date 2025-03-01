// Ejercicio 1: Función que simula un retraso
// Crea una función `delay` que devuelva una promesa que se resuelva después de un número de milisegundos determinado. Usa `async/await` para esperar la promesa en una función llamada `runDelay`.
// Requisitos:
// - La función `delay` debe recibir el número de milisegundos como parámetro.
// - La función `runDelay` debe esperar a que `delay` se resuelva y luego mostrar un mensaje en consola.


// Ejercicio 2: Simular un servicio de usuario
// Crea una función `getUserById` que simule obtener un usuario desde una base de datos (puede ser una simulación con un `setTimeout` o una promesa). La función debe devolver un objeto de usuario con los campos `id`, `nombre`, y `edad`.
// Requisitos:
// - Usa `async/await` para simular la llamada a la base de datos.
// - Si el `id` del usuario es 0, la función debe lanzar un error con un mensaje.


// Ejercicio 3: Promesa con múltiples resultados
// Crea una función `getPrices` que devuelva una lista de precios de productos. La función debe simular que la llamada a un servidor tarda en completarse, usando `async/await`.
// Requisitos:
// - La función `getPrices` debe devolver una lista de precios (`number[]`).
// - Llama a la función y muestra en consola los precios.




// Ejercicio 5: Uso de `Promise.all`
// Crea dos funciones `getUser` y `getPosts` que devuelvan promesas simuladas. Llama a ambas funciones usando `Promise.all` y espera que ambas se resuelvan antes de mostrar los resultados.
// Requisitos:
// - Usa `Promise.all` para esperar ambas promesas simultáneamente.
// - Imprime los resultados de ambas promesas.



// Ejercicio 7: Simulando una API de clima
// Crea una función `getWeather(city: string)` que devuelva el clima de una ciudad de manera simulada. Usa un `setTimeout` para hacer que la función tarde en responder, y usa `async/await` para simular la espera.
// Requisitos:
// - Si la ciudad no está en una lista predefinida, la función debe lanzar un error con el mensaje `Ciudad no encontrada`.
// - Si la ciudad está en la lista, devuelve un objeto con el clima (`temperatura`, `condición`).


// Ejercicio 8: Encadenar promesas
// Escribe una función `getOrderStatus` que simule una consulta de estado de un pedido. Después, encadena una segunda promesa para simular la actualización del estado del pedido.
// Requisitos:
// - La primera promesa debe devolver el estado inicial del pedido.
// - La segunda promesa debe actualizar el estado del pedido y devolver el nuevo estado.


// Ejercicio 9: Retrasar múltiples funciones
// Crea tres funciones que simulen procesos en serie, como `processOrder`, `checkPayment`, y `shipOrder`. Usa `async/await` para garantizar que se ejecuten en el orden correcto (por ejemplo, procesar el pedido, verificar el pago y luego enviar).
// Requisitos:
// - Cada función debe simular un retraso con `setTimeout` o `Promise`.
// - La ejecución debe ser secuencial (esperar a que cada proceso termine antes de continuar con el siguiente).


// Ejercicio 10: Simulando una cola de tareas
// Crea una función `processTaskQueue` que reciba una lista de tareas (funciones que devuelven promesas). Usa `async/await` para procesar cada tarea de forma secuencial (una después de la otra).
// Requisitos:
// - La función debe recibir una lista de tareas y procesarlas en orden.
// - Cada tarea debe devolver una promesa que se resuelve al finalizar.

function delay(numero: number): Promise<void> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, numero);
    });
}

async function runDelay() {
    await delay(2000);
    console.log('Mensaje después de 2 segundos');
}




// Ejercicio 2: Simular un servicio de usuario

// Definimos el tipo para los objetos de usuario
// Definimos el tipo para los objetos de usuario
interface Usuario {
    id: number;
    nombre: string;
    edad: number;
}

// Ahora el array de usuarios será de tipo 'Usuario[]'
const arrUsers: Usuario[] = [
    { id: 0, nombre: 'Juan', edad: 30 },
    { id: 1, nombre: 'Pedro', edad: 20 },
    { id: 2, nombre: 'Maria', edad: 25 },
    { id: 3, nombre: 'Ana', edad: 35 }
];

function getUserById(id: number, array: Usuario[]): Promise<Usuario> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Recorremos el array para encontrar el usuario
            for (let i = 0; i < array.length; i++) {
                if (array[i].id === id) {  // Ahora accedemos directamente a la propiedad 'id'
                    return resolve(array[i]);
                }
            }
            // Si no encontramos el usuario después de recorrer todo el array, rechazamos la promesa
            reject('Usuario no encontrado');
        }, 2000);
    });
}

async function obtenerUsuario() {
    try {
        const resultado = await getUserById(1, arrUsers
        );
        console.log(resultado);
    }
    catch (error) {
        console.log(error);
    }
}



// Ejercicio 3: Promesa con múltiples resultados

interface productos {
    precio: number;
}

const precios: productos[] = [
    { precio: 100 },
    { precio: 200 },
    { precio: 300 },
    { precio: 400 }
];

function getPrices(array: productos[]): Promise<productos[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(array);
        }, 2000);
    });
}


async function obtenerPrecios() {
    try {
        const resultado = await getPrices(precios);
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}



//Ejercicio 5 Uso de Promise.all

interface Usuario {
    id: number;
    nombre: string;
    edad: number;
}

interface Post {
    id: number;
    titulo: string;
    contenido: string;
}

const usuarios: Usuario[] = [
    { id: 1, nombre: 'Juan', edad: 30 },
    { id: 2, nombre: 'Pedro', edad: 25 },
    { id: 3, nombre: 'Maria', edad: 35 }
];

const posts: Post[] = [
    { id: 1, titulo: 'Post 1', contenido: 'Contenido 1' },
    { id: 2, titulo: 'Post 2', contenido: 'Contenido 2' },
    { id: 3, titulo: 'Post 3', contenido: 'Contenido 3' }
];


function getUsers(): Promise<Usuario[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(usuarios);
        }, 2000);
    });
}

function getPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(posts);
        }, 2000);
    });
}


async function obtenerDatos() {
    try {
        const [users, posts] = await Promise.all([getUsers(), getPosts()]);
        console.log(users);
        console.log(posts);
    } catch (error) {
        console.log(error);
    }
}


//Ejercicio 7: Simulando una API de clima


interface Clima {
    temperatura: number;
    condicion: string;
    ciudad: string;
}

const climas: Clima[] = [
    { temperatura: 25, condicion: 'soleado', ciudad: 'Lima' },
    { temperatura: 15, condicion: 'nublado', ciudad: 'Cusco' },
    { temperatura: 20, condicion: 'lluvioso', ciudad: 'Arequipa' }
];



function getWeather(city: string): Promise<Clima> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const clima = filterClima(city);
            if (!clima) {
                reject(new Error(`No se encontró información para la ciudad: ${city}`));
                return;
            }
            resolve(clima);
        }, 2000);
    });
}

const filterClima = (city: string) => {
    return climas.find(clima => clima.ciudad === city);
}


//Ejercicio 8: Encadenar promesas

interface Pedido {
    id: number;
    estado: string;
}

const estadoPedidos: Pedido[] = [
    { id: 1, estado: 'pendiente' },
    { id: 2, estado: 'enviado' },
    { id: 3, estado: 'entregado' }
];

function getOrder(id: number): Promise<Pedido> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pedido = estadoPedidos.find(pedido => pedido.id === id);
            if (!pedido) {
                reject(new Error(`No se encontró el pedido con el id: ${id}`));
                return;
            }
            resolve(pedido);
        }, 2000);
    });
}


async function pedido() {
    try {
        const pedido = await getOrder(1);
        console.log(pedido);
        const nuevoEstado = await updateOrder(pedido);
        console.log(nuevoEstado);
    } catch (error) {
        console.log(error);
    }
}

const updateOrder = (pedido: Pedido): Promise<Pedido> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            pedido.estado = 'enviado';
            resolve(pedido);
        }, 2000);
    });
}