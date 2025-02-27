//Ejercicio 1
class Usuario {
    constructor(id, nombre, email) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
    }
}

class UsuarioManager {
    constructor() {
        this.usuarios = []; // Base de datos simulada
    }

    // Método asincrónico para agregar un usuario
    async agregarUsuario(usuario) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const existe = this.usuarios.find(u => u.id === usuario.id);
                if (existe) {
                    reject('El usuario ya existe');
                } else {
                    this.usuarios.push(usuario);
                    resolve('Usuario agregado con éxito');
                }
            }, 1000); // Simula un retraso de 1 segundo
        });
    }

    // Método asincrónico para obtener un usuario por su id
    async obtenerUsuarioPorId(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const usuario = this.usuarios.find(u => u.id === id);
                if (!usuario) {
                    reject('Usuario no encontrado');
                } else {
                    resolve(usuario);
                }
            }, 1000); // Simula un retraso de 1 segundo
        });
    }

    // Método asincrónico para eliminar un usuario por su id
    async eliminarUsuarioPorId(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this.usuarios.findIndex(u => u.id === id);
                if (index === -1) {
                    reject('Usuario no encontrado');
                } else {
                    this.usuarios.splice(index, 1);
                    resolve('Usuario eliminado con éxito');
                }
            }, 1000); // Simula un retraso de 1 segundo
        });
    }
}

// Crear una instancia de UsuarioManager
const usuarioManager = new UsuarioManager();

// Crear algunos usuarios
const usuario1 = new Usuario(1, 'Juan Pérez', 'juan@example.com');
const usuario2 = new Usuario(2, 'Ana Gómez', 'ana@example.com');

// Función principal para probar el sistema
async function ejecutar() {
    try {
        // Agregar usuarios
        console.log(await usuarioManager.agregarUsuario(usuario1)); // Usuario agregado con éxito
        console.log(await usuarioManager.agregarUsuario(usuario2)); // Usuario agregado con éxito

        // Obtener un usuario por su ID
        const usuarioEncontrado = await usuarioManager.obtenerUsuarioPorId(1);
        console.log('Usuario encontrado:', usuarioEncontrado);

        // Eliminar un usuario
        console.log(await usuarioManager.eliminarUsuarioPorId(1)); // Usuario eliminado con éxito

        // Intentar obtener el usuario eliminado
        await usuarioManager.obtenerUsuarioPorId(1); // Debería rechazar, ya que no existe
    } catch (error) {
        console.log('Error:', error);
    }
}

ejecutar();