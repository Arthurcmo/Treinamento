//Cadeia de protótipos 
Object.prototype.attr0 = '0' //Não faça isso
const avo = { attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: '3'}
const filho = {__proto__: pai, attr3: 'c'}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)


//Codigo n executavel preguiça

Object.setPrototypeOf (ferrari, carro)  //Ferrari é um carro
Object.setPrototypeOf (volvo, carro)