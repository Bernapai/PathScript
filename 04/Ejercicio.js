
/*🏆 Ejercicio: Gestor de Tareas
Crea un pequeño programa en JavaScript que permita gestionar una lista de tareas.

Requisitos:
Definir una estructura de datos para almacenar las tareas (usa un array de objetos).
Funciones para:
Agregar una nueva tarea.
Listar todas las tareas.
Marcar una tarea como completada.
Eliminar una tarea por su índice.
Interacción con el usuario: Usa prompt() para pedir datos y console.log() para mostrar información. */


// Definimos la clase Tarea
class Tarea {
    constructor(descripcion) {
        this.descripcion = descripcion;
        this.completada = false;
    }

    completar() {
        this.completada = true;
    }
}

// Clase para gestionar las tareas
class GestorTareas {
    constructor() {
        this.tareas = [];
    }

    agregarTarea(descripcion) {
        let nuevaTarea = new Tarea(descripcion);
        this.tareas.push(nuevaTarea);
        console.log(` Tarea agregada: "${descripcion}"`);
    }

    listarTareas() {
        console.log("\n📌 Lista de tareas:");
        if (this.tareas.length === 0) {
            console.log(" No hay tareas.");
        } else {
            this.tareas.forEach((tarea, index) => {
                console.log(`${index + 1}. [${tarea.completada ? "✔" : " "}] ${tarea.descripcion}`);
            });
        }
    }

    completarTarea(indice) {
        if (indice >= 0 && indice < this.tareas.length) {
            this.tareas[indice].completar();
            console.log(` Tarea "${this.tareas[indice].descripcion}" marcada como completada.`);
        } else {
            console.log(" Número de tarea inválido.");
        }
    }

    eliminarTarea(indice) {
        if (indice >= 0 && indice < this.tareas.length) {
            let tareaEliminada = this.tareas.splice(indice, 1);
            console.log(` Tarea eliminada: "${tareaEliminada[0].descripcion}"`);
        } else {
            console.log(" Número de tarea inválido.");
        }
    }
}

// Función para interactuar con el usuario
function menu() {
    let gestor = new GestorTareas();
    let opcion;
    do {
        opcion = prompt(
            "📋 Gestor de Tareas\n" +
            "1️ Agregar tarea\n" +
            "2️ Listar tareas\n" +
            "3️ Completar tarea\n" +
            "4️ Eliminar tarea\n" +
            "5️ Salir\n" +
            "Ingrese una opción:"
        );

        switch (opcion) {
            case "1":
                let descripcion = prompt("Ingrese la descripción de la tarea:");
                gestor.agregarTarea(descripcion);
                break;
            case "2":
                gestor.listarTareas();
                break;
            case "3":
                gestor.listarTareas();
                let indiceComp = parseInt(prompt("Ingrese el número de la tarea a completar:")) - 1;
                gestor.completarTarea(indiceComp);
                break;
            case "4":
                gestor.listarTareas();
                let indiceElim = parseInt(prompt("Ingrese el número de la tarea a eliminar:")) - 1;
                gestor.eliminarTarea(indiceElim);
                break;
            case "5":
                console.log("👋 Saliendo del gestor de tareas...");
                break;
            default:
                console.log("⚠ Opción inválida. Intente de nuevo.");
        }
    } while (opcion !== "5");
}

// Iniciar la aplicación
menu();
