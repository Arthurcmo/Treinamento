function CriarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1  //nome padrao
    }
}

console.log (CriarProduto('Notebook', 2199.49))
console.log (CriarProduto('iPad', 1199.49))