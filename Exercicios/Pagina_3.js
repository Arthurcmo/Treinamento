// function removerProprieade (obj, propri){
//     let copia = obj;
//     delete copia[propri]
//     return copia
// }

//console.log (removerProprieade ({a:1, b:2}, 'a'))

function filtrarNumeros (a){
    return a.filter(item => typeof item === Number)
//    
//     for (i=0; i< a.lenght ; i++){
//         if (typeof a[i] === Number )
//             b.push = (a[i])
//     }   
//     return b
}



console.log (filtrarNumeros(Array(1, 2, 3, 'keko')))
