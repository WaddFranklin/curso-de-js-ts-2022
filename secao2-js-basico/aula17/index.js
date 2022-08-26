function saudacao(nome) {
    console.log(`Bom dia, ${nome}!`);
}

saudacao("Franklin");
saudacao("Fernanda");

// funções anônimas
const raiz = function(n) {
    return n ** 0.5;
}

// arrow function
const quadrado = n => n ** 2;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
console.log(quadrado(11));