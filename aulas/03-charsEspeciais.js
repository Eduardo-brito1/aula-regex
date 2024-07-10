const pontoRegex = /./
console.log(pontoRegex.test('asd'))
console.log(pontoRegex.test(' '))
console.log(pontoRegex.test('123'))
console.log(pontoRegex.test('123asd'))

const dRegex = /\d/ //0-9 d regex serve para verificar os numeros;

console.log(dRegex.test('asd'))
console.log(dRegex.test('123'))
console.log(dRegex.test(' '))
console.log(dRegex.test('123asd'))

const dRegex2 = /\D/ //D maisculo e como rejeição, nesse caso ele não aceita numeros
console.log('d')
console.log(dRegex2.test('asd'))
console.log(dRegex2.test('123'))
console.log(dRegex2.test(' '))
console.log(dRegex2.test('123asd'))

const sRegex = /\s/; //serve para espaços vazios ou quebras de linhas s maiusculo e negação do s minusculo logo não aceita espaço ou quebra de vazio
console.log('s')
console.log(sRegex.test('asd'))
console.log(sRegex.test('123'))
console.log(sRegex.test(' '))
console.log(sRegex.test('123asd'))

const wRegex = /\w/;//aceita so numeros e letras
console.log('w')
console.log(wRegex.test('asd'))
console.log(wRegex.test('123'))
console.log(wRegex.test(' '))
console.log(wRegex.test('123asd'))
