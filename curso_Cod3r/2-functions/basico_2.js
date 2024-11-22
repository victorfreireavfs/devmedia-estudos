function bomDia(){
    console.log('BOM DIA !!!')
}

const boaTarde = function (){
    console.log('BOA TARDE!!!!')
}

// 
function executarQualquerCoisa(fn){
    if (typeof fn === 'function')
    fn()
}

executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)