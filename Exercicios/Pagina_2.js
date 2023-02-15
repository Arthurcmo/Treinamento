function estaEntre (n, min, max, inclusivo){
    if (inclusivo === undefined)
        inclusivo = false
    if (inclusivo)
         return ( n>min && n<max);
    else return (n>=min && n<=max)
}

let a = 3
let b = 5
let c = 8
let boo

console.log (estaEntre (a, b, c, boo))

boo = true
console.log (estaEntre (b, b, b, boo))
console.log (estaEntre (b, a, c, boo))

boo = false
console.log (estaEntre (a, b, c, boo))


function multiplicar (a, b){
    let c = 0
    for (i=0; i< a; i++)
        c = c+ b;
}

// return Array(quantidade).fill(item)
function repetir ( a, b) {
    let arrei = []
    for (i=0; i< b; i++){
        arrei.push(a)
    }
    return arrei
}

console.log (repetir (a,b))

function simboloMais (a){
    return Array(a).fill('+').join('')
}

console.log(simboloMais(a))
console.log(simboloMais(b))
console.log(simboloMais(c))

function receberPrimeiroEUltimoElemento (a){
    arrei = []
    arrei.push(a[0])
    b = a.length
    console.log (b)
    b--
    arrei.push (a[b])
    return arrei
}

let long = ['ke', 'le', 'le', 'le', 'ko']
console.log (receberPrimeiroEUltimoElemento (long))


