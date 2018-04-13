const logger = require("./logger")

const produto = {
    nome: "Caneta",
    preco: 1.9,
    desconto: 0.05
}

console.log(logger.info("ae"))

function clone(objeto){
    return  {...objeto }
}

const novoProduto = clone(produto)
novoProduto.nome = "Computador"

console.log(produto)
console.log(novoProduto)