// Objetivo: Mostrar el uso de promesas y async/await en TypeScript


// Definimos la interfaz para los datos de clima
interface Clima {
    ciudad: string;
    temperatura: number;
}

// Array de datos de clima con los tipos definidos
const climaDatos: Clima[] = [
    { ciudad: 'Buenos Aires', temperatura: 20 },
    { ciudad: 'Córdoba', temperatura: 25 },
    { ciudad: 'Mendoza', temperatura: 30 },
    { ciudad: 'Rosario', temperatura: 15 }
];

// Función que devuelve una promesa con los datos de clima
function getClima(array: Clima[]): Promise<Clima[]> {
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

// Función asíncrona para obtener el clima
async function obtenerClima(): Promise<void> {
    try {
        const resultado = await getClima(climaDatos);
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

// Llamar a la función para obtener el clima
obtenerClima();