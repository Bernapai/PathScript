const http = require('http');

// Define el puerto donde el servidor escuchará
const port = 3000;

// Crea el servidor
const server = http.createServer((req, res) => {
    // Establece el tipo de contenido a "texto plano"
    res.setHeader('Content-Type', 'text/plain');
    // Escribe la respuesta al cliente
    res.end('¡Hola, mundo!');

    // Imprime en la consola cada solicitud recibida
    console.log(`Solicitado ${req.url}`);
});

// El servidor empieza a escuchar en el puerto especificado
server.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});