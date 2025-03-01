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





// Ejercicio 1: Simulación de un retraso en una API
function simulateDelay(ms: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos cargados");
        }, ms);
    });
}

// Endpoint REST simulado
/*app.get("/delay", async (req, res) => {
    const data = await simulateDelay(2000);
    res.json({ message: data });
}); */



// Ejercicio 2: Obtener un usuario por ID (simulando una base de datos)

interface User {
    id: number;
    name: string;
    age: number;
}

const users: User[] = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 35 },
];

function getUserById(id: number): Promise<User> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find((user) => user.id === id);
            if (!user) {
                reject("Usuario no encontrado");
            } else {
                resolve(user);
            }
        }, 1000);
    });
}

async function getUserByIdHandler(req: any, res: any) {
    const id = parseInt(req.params.id);
    try {
        const user = await getUserById(id);
        res.json(user);
    } catch (error) {
        res.status(404).json({ error: error });
    }
}


//Ejercicio 3

interface NewUser {
    name: string;
    age: number;
}

const newUsers: User[] = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 35 },
];


function addUser(user: NewUser): Promise<User> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!user.name) {
                reject("Nombre de usuario requerido");
            } else {
                const newUser = { id: newUsers.length + 1, ...user };
                newUsers.push(newUser);
                resolve(newUser);
            }
        }, 1000);
    });
}

async function addUserHandler(req: any, res: any) {
    const user = req.body;
    try {
        const newUser = await addUser(user);
        res.json(newUser);
    } catch (error) {
        res.status(400).json({ error: error });
    }
}



//Ejercicio 4


function getAllUsers(): Promise<User[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(users);
        }, 1000);
    });
}

async function getAllUsersHandler(req: any, res: any) {
    const allUsers = await getAllUsers();
    res.json(allUsers);
}

//Ejercicio 5 


function updateUser(id: number, data: Partial<User>): Promise<User> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const index = users.findIndex((user) => user.id === id);
            if (index === -1) {
                reject("Usuario no encontrado");
            } else {
                users[index] = { ...users[index], ...data };
                resolve(users[index]);
            }
        }, 1000);
    });
}

async function updateUserId(req: any, res: any) {
    const id = parseInt(req.params.id);
    const data = req.body;
    try {
        const updatedUser = await updateUser(id, data);
        res.json(updatedUser);
    } catch (error) {
        res.status(404).json({ error: error });
    }
}

//Ejercicio 6

function deleteUser(id: number): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const index = users.findIndex((user) => user.id === id);
            if (index === -1) {
                reject("Usuario no encontrado");
            } else {
                users.splice(index, 1);
                resolve("Usuario eliminado");
            }
        }, 1000);
    });
}

async function deleteUserHandler(req: any, res: any) {
    const id = parseInt(req.params.id);
    try {
        const message = await deleteUser(id);
        res.json({ message: message });
    } catch (error) {
        res.status(404).json({ error: error });
    }
}

//Ejercicio 7

const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
];

function getProductById(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find((product) => product.id === id);
            if (!product) {
                reject("Producto no encontrado");
            } else {
                resolve(product);
            }
        }, 1000);
    });
}

async function getProductByIdHandler(req: any, res: any) {
    const id = parseInt(req.params.id);
    try {
        const product = await getProductById(id);
        res.json(product);
    } catch (error) {
        res.status(404).json({ error: error });
    }
}

//Ejercicio 8

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
}

const productsList: Product[] = [
    { id: 1, name: "Product 1", category: "Category 1", price: 10 },
    { id: 2, name: "Product 2", category: "Category 2", price: 20 },
    { id: 3, name: "Product 3", category: "Category 1", price: 30 },
];

function getProductsByCategory(category: string): Promise<Product[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = productsList.filter((product) => product.category === category);
            resolve(filteredProducts);
        }, 1000);
    });
}

async function getProductsByCategoryHandler(req: any, res: any) {
    const category = req.params.category;
    const products = await getProductsByCategory(category);
    res.json(products);
}

//Ejercicio 9

interface Credentials {
    username: string;
    password: string;
}

function authenticateUser(credentials: Credentials): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (credentials.username === "admin" && credentials.password === "admin") {
                resolve("token");
            } else {
                reject("Credenciales incorrectas");
            }
        }, 1000);
    });
}

async function authenticateUserHandler(req: any, res: any) {
    const credentials = req.body;
    try {
        const token = await authenticateUser(credentials);
        res.json({ token: token });
    } catch (error) {
        res.status(401).json({ error: error });
    }
}
//Ejercicio 10

interface NewProduct {
    name: string;
    category: string;
    price: number;
}

const newProducts: Product[] = [
    { id: 1, name: "Product 1", category: "Category 1", price: 10 },
    { id: 2, name: "Product 2", category: "Category 2", price: 20 },
    { id: 3, name: "Product 3", category: "Category 1", price: 30 },
];

function createProduct(product: NewProduct): Promise<Product> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (product.price < 0) {
                reject("Precio inválido");
            } else {
                const newProduct = { id: newProducts.length + 1, ...product };
                newProducts.push(newProduct);
                resolve(newProduct);
            }
        }, 1000);
    });
}

async function createProductHandler(req: any, res: any) {
    const product = req.body;
    try {
        const newProduct = await createProduct(product);
        res.json(newProduct);
    } catch (error) {
        res.status(400).json({ error: error });
    }
}