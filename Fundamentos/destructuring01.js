const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'rua Abc',
        numero: 1000
    }
}

const { nome, idade} = pessoa
console.log (nome, idade)

const{nome: n, idade: i} = pessoa
console.log ( bemHumorada = true)

const { endereço : {logradouro, numero, cep} }  = pessoa
console.log (logradouro, numero, cep)

