const numero = 1;

//If
if (numero > 1) {
    console.log('Es mayor que 1');
} else if (numero === 1) {
    console.log('Es igual a 1');
}

//While
while (numero < 5) {
    console.log(numero);
    numero++;
}

//For
for (let i = 0; i < numero; i++) {
    console.log(i);
}

//Switch
switch (numero) {
    case 1:
        console.log('Es 1');
        break;
    case 2:
        console.log('Es 2');
        break;
    default:
        console.log('No es ni 1 ni 2');
}