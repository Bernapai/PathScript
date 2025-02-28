// The power of NodeJs

const os = require('node:os')
console.log('Información del sistema')
console.log('Nombre del sistema operativo: ', os.platform())
console.log('Version del sistema : ', os.release())
console.log('Memoria total: ', os.totalmem(), 'bytes')
