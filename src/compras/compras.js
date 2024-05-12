const calcularTotal = (ferramentas, comprar) => {
    let valor = 0;
    let nomesFerramentasComprar = "";

    if (ferramentas.length && comprar.length != 0) {
        for (let indiceComprar = 0; indiceComprar < comprar.length; indiceComprar++) {
            for (let indiceFerramentas = 0; indiceFerramentas < ferramentas.length; indiceFerramentas++) {
                if (comprar[indiceComprar] == ferramentas[indiceFerramentas].nome) {
                    valor = valor + ferramentas[indiceFerramentas].preco
                    if (indiceComprar !== comprar.length - 1) {
                        nomesFerramentasComprar += ferramentas[indiceFerramentas].nome + ", ";
                    } else {
                        nomesFerramentasComprar += ferramentas[indiceFerramentas].nome;
                    }
                }
            }
        }
        if (valor > 0) {
            return `O valor a pagar pelas ferramentas (${nomesFerramentasComprar}) é R$ ${valor.toFixed(2)}`
        } else {
            throw new Error("Nenhuma ferramenta desejada encontrada.")
        }

    } else {
        throw new Error("Ambas as listas precisam ter ao menos um item.")
    }
}

module.exports = {
    calcularTotal
}