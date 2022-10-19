const readLine = require('readline').createInterface({
    input: process.stdin
    outoput: process.stdout
});

const minhaPrimeiraConstanteString = 'Minha primeira constante';
console.log(minhaPrimeiraConstanteString);

let leituraDeCampo;
readLine.question('Informe sua idade:', inout => {
    leituraDeCampo = input;
    console.log(`o usuario digitou: ${leituraDeCampo}`);
});