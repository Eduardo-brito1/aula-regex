const marcas = /\w+:(Nike|Adidas|Puma|Asics)/
console.log(marcas.test('marca:Nike'))
console.log(marcas.test('marca:lacoste'))
console.log(marcas.test('marca:Adidas'))
console.log(marcas.test('marca:Asics'))