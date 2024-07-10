let ano = /\d\d\d\d/
console.log(ano.test('05'));
console.log(ano.test('2002'));

let palavrasTresLetras = /\w\w\w/;
console.log(palavrasTresLetras.test('dia'))
console.log(palavrasTresLetras.test('ola'))
console.log(palavrasTresLetras.test('tres'))
console.log(palavrasTresLetras.test('bom'))
console.log(palavrasTresLetras.test('du'))


