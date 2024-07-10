const regex1 = new RegExp('bola')
console.log(regex1.test('tem bola?'))
console.log(regex1.test('não tem '))


const regex2 = /teste/;
console.log(regex2.test('tem teste?'))
console.log(regex2.test('não tem '))

let texto = 'teste'
console.log(regex2.test(texto))
console.log(/quadrado/.test('onde tem um quadrado'))
console.log(/quadrado/.test('onde tem um dassdsadsadasda'))