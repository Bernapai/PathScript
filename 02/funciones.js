function saludar() {
    console.log('Hola mundo')
}

function sumar(a, b) {
    return a + b
}

function restar(a, b) {
    return a - b
}

function buscarMayorEnUnArray(array) {
    let mayor = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i]
        }
    }
    return mayor
}

function buscarMenorEnUnArray(array) {
    let menor = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i]
        }
    }
    return menor
}

function buscarEnArray(array, valor) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === valor) {
            return i
        }
    }
    return -1
}


