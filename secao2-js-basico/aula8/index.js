/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8m de altura e seu IMC é de 25.92...
Luiz Otávio nasceu em 1980
*/

const nome = 'Franklin';
const sobrenome = 'Nascimento';
const idade = 33;
const peso = 65;
const alturaEmM = 1.79;

let imc = peso / alturaEmM ** 2;
let anoNascimento = 2022 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
// template strings
console.log(`tem ${alturaEmM}m de altura e seu IMC é de ${imc}`);
console.log(nome, sobrenome, 'nasceu em', anoNascimento);

