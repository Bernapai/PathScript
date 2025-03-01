// Ejercicio 1: Simulación de un retraso en una API
// Crea una función `simulateDelay` que devuelva una promesa que se resuelva después de un número de milisegundos determinado.
// Usa `async/await` para simular un retraso en una API cuando se haga una solicitud GET.
// Requisitos:
// - La función `simulateDelay` debe recibir el número de milisegundos como parámetro.
// - Usa `simulateDelay` en un endpoint REST simulado que devuelva un mensaje "Datos cargados" después de esperar ese tiempo.


// Ejercicio 2: Obtener un usuario por ID (simulando una base de datos)
// Crea una función `getUserById` que simule obtener un usuario de una base de datos. Esta función debe retornar un objeto `user` con los campos `id`, `name` y `age`.
// Usa `async/await` para simular la llamada a la base de datos, y un `setTimeout` para simular un tiempo de espera.
// Requisitos:
// - Si el `id` del usuario es 0, la función debe rechazar la promesa con un error "Usuario no encontrado".
// - Implementa un endpoint `GET /users/:id` para manejar esta simulación.


// Ejercicio 3: Crear un nuevo usuario (POST)
// Simula un endpoint `POST /users` que permita crear un nuevo usuario en la base de datos.
// La función `createUser` debe recibir un objeto de usuario y simular el proceso de guardarlo.
// Usa `async/await` para simular la operación de la base de datos.
// Requisitos:
// - Si el nombre del usuario está vacío, la función debe rechazar con un error "Nombre de usuario requerido".
// - Si se crea con éxito, la respuesta debe contener el objeto del nuevo usuario creado con un `id` auto-incrementado.


// Ejercicio 4: Obtener todos los usuarios (GET)
// Crea una función `getAllUsers` que simule obtener una lista de usuarios desde la base de datos.
// Usa `async/await` para simular una consulta de base de datos.
// Requisitos:
// - Simula una base de datos con una lista de usuarios.
// - El endpoint `GET /users` debe devolver esta lista de usuarios en formato JSON.


// Ejercicio 5: Actualizar un usuario (PUT)
// Crea una función `updateUser` que simule actualizar un usuario en la base de datos.
// Esta función debe recibir un `id` y un objeto de usuario con los nuevos datos.
// Usa `async/await` para simular la actualización en la base de datos.
// Requisitos:
// - Si el `id` no existe, la función debe rechazar la promesa con un error "Usuario no encontrado".
// - El endpoint `PUT /users/:id` debe retornar el usuario actualizado.


// Ejercicio 6: Eliminar un usuario (DELETE)
// Crea una función `deleteUser` que simule eliminar un usuario de la base de datos.
// Usa `async/await` para simular la operación de eliminación.
// Requisitos:
// - Si el `id` no existe, la función debe rechazar la promesa con un error "Usuario no encontrado".
// - El endpoint `DELETE /users/:id` debe retornar un mensaje "Usuario eliminado" si el usuario fue eliminado correctamente.


// Ejercicio 7: Manejo de errores en una API REST
// Crea un endpoint `GET /products/:id` que simule obtener un producto por su ID desde una base de datos. Si el ID no es válido, rechaza con un error "Producto no encontrado".
// Usa `async/await` para manejar la simulación de la consulta a la base de datos.
// Requisitos:
// - Si el producto no existe, la función debe rechazar con un error adecuado.
// - Usa un bloque `try/catch` para manejar los errores y enviar una respuesta con el mensaje de error.


// Ejercicio 8: Obtener productos de una categoría (GET)
// Crea una función `getProductsByCategory` que simule obtener productos de una categoría específica.
// La función debe aceptar un parámetro `category` y devolver una lista de productos.
// Usa `async/await` para simular una consulta de base de datos.
// Requisitos:
// - Si no se encuentran productos en esa categoría, la respuesta debe ser un array vacío `[]`.
// - El endpoint `GET /products/category/:category` debe devolver la lista de productos.


// Ejercicio 9: Simulación de autenticación de usuario (POST)
// Crea una función `authenticateUser` que simule la autenticación de un usuario. Esta función debe recibir un `username` y `password`, y devolver un token si la autenticación es exitosa.
// Usa `async/await` para simular la autenticación.
// Requisitos:
// - Si el `username` y `password` no coinciden con los datos predefinidos, la función debe rechazar con un error "Credenciales incorrectas".
// - Si la autenticación es exitosa, la función debe devolver un objeto con un `token` JWT simulado.


// Ejercicio 10: Registro de nuevos productos (POST)
// Crea un endpoint `POST /products` que permita registrar nuevos productos en la base de datos.
// La función `createProduct` debe recibir un objeto con el nombre, categoría y precio del producto, y simular el proceso de guardarlo.
// Usa `async/await` para simular la operación de la base de datos.
// Requisitos:
// - Si el precio del producto es menor que 0, la función debe rechazar con un error "Precio inválido".
// - Si se crea con éxito, la respuesta debe contener el objeto del nuevo producto con un `id` auto-incrementado.

