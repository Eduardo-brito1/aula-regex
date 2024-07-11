const reg = /\w+:(Eduardo|jose|thais)/;

console.log(reg.test("nome:Eduardo")) //Nome:dsadsad
console.log(reg.test("nome:jose"))
console.log(reg.test("nome:lucas"))