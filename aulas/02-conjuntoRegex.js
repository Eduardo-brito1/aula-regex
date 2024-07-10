const numerosReg = /[12345]/ //não e bom usar por que pode bugar
console.log(numerosReg.test(6))
console.log(numerosReg.test(2))

const numeroRegVerificarNumeros = /[0-9]/

console.log(numeroRegVerificarNumeros.test('aqui tem numero 252525'))
console.log(numeroRegVerificarNumeros.test('aqui tem numero'))