const padrao = /Abacax?i/;
const cep = /\d{5}-\d{3}/
console.log(cep.test('31630-390'))

console.log(cep.test('31630-39'))

console.log(cep.test('31630-390'))

const cpf = /\d{3}-\d{3}-\d{3}-\d{2}/
console.log(cpf.test('31630-390'))
console.log(cpf.test('702-370-536-83'))







