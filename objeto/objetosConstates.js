const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'  //o endereço da variavel é imutavel
console.log(pessoa)

//pessoa <- 456 -> {...}  problema
//pessoa = { nome: 'Ana'}  

Object.freeze(pessoa)

Object.nome = 'Maria'
pessoa.end = 'Rua ABC'

console.log(pessoa)




