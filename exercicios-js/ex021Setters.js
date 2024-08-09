const dataUltimoAcesso = new Date('2024/06/19 21:00:00');
const dataAtual = new Date();

const hora = dataAtual.getHours();
const timeUltimoAcesso = dataUltimoAcesso.getTime();
const timeAtual = dataAtual.getTime();

const diferencaTime = timeAtual - timeUltimoAcesso;

const milissegundosHora = 1000 * 60 * 60;
const milissegundosDia = milissegundosHora * 24;

let msg = "";1

if (hora < 6 || hora >= 18){
    console.log("boa noite!")
} else if (hora > 6 && hora < 12){
    console.log('Bom dia!')
}else{
    console.log('Boa Tarde!')
};

if ( diferencaTime > milissegundosDia ) {
    msg += "Você está ausente há dias!!!";
  } else if (diferencaTime > milissegundosHora) {
    msg += "Você está ausente há horas!!!";
  } else {
    msg += "Que bom que ainda está aqui!";
  }
  
  console.log(msg);
 