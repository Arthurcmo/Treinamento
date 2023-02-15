function cumprimentar (nome) {
    return ('Olá, ' + nome + '!')
}

let nome = 'Mugle'
console.log ( cumprimentar (nome))

function converterIdadeEmAnosParaDias (idade) {
    return idade * 365
}

let idade = 27
console.log (converterIdadeEmAnosParaDias (idade)

)

function calcularSalario ( horas, ratio){
    return horas*ratio
}

let salario = {
    hora: 40,
    ratio: 50
}
console.log (calcularSalario(salario.hora, salario.ratio)

)

function maiorOuIgual (a, b){
    return a > b || a === b
}

let a = 3
let b ='3'
let c = 20
let d = 'keko'


console.log ('maior ou igual')
console.log (maiorOuIgual (a, b))
console.log (maiorOuIgual (a, c))
console.log (maiorOuIgual (c, a))
console.log (maiorOuIgual (b, d))
console.log (maiorOuIgual (a, d)

)

function inverso (lele){
    if ( typeof lele == Boolean || typeof 1)
        return (!lele)
    else return  'booleano ou numero esperado, mas o parametro é do tipo ' + typeof(lele)
}

let boo = true

console.log ( 'inverso' )
console.log (inverso (boo))
console.log (inverso (a))
console.log (inverso (b))