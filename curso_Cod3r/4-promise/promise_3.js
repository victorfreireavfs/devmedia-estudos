function gerarNumerosEntre(min, max, tempo){
    return new Promise(resolve => {
        setTimeout(function(){
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve (aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros(){
    return Promise.all([
        gerarNumerosEntre(1, 30, 1000),     
        gerarNumerosEntre(1, 30, 500),
        gerarNumerosEntre(1, 30, 2000),
        gerarNumerosEntre(1, 30, 5000),
        gerarNumerosEntre(1, 30, 1500),
        gerarNumerosEntre(1, 30, 300),
    ])
}

gerarVariosNumeros().then(numeros => console.log(numeros))