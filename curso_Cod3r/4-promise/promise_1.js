// fluxo simples 

const minhaPromise = new Promise((resolve, reject) => {
    const sucesso = true
    if (sucesso){
        resolve('promessa cumprida')
    } else{
        reject('promessa quebrada')
    }
})

minhaPromise
    .then((resultado) => console.log("sucesso, " + resultado))
    .catch((erro) => console.error("erro, " + erro)) 

// --------------------------------

// simulando promessa com atraso

const proComAtraso = new Promise((resolve) =>{
    console.log('aguardado...')
    setTimeout(() => resolve('resolvida após 3 segundos!'), 3000)
})

proComAtraso.then(console.log)

// ---------------------
// promessa com erro

const proComErro = new Promise ((resolve, reject) => {
    const sucesso = false
    if(sucesso){
        resolve('tudo certo')
    }else{
        reject('tudo errado')
    }
})

proComErro
    .then((resultado) => console.log(resultado))
    .catch((erro) => console.error(erro))

// -------------------------------


// SIMULANDO PEDIDO ONLINE

const fazerPedido = (temEstoque) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (temEstoque) {
                resolve('pedido aprovado')
            } else {
                reject('estoque indisponivel')
            }
        }, 2000)
    })
}

fazerPedido(false)
    .then((mensagem) => console.log(mensagem))
    .catch((erro) => console.error(erro))
