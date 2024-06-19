// const hoje = new Date();

// const options = {
//     weekday: 'long',
//     year: 'numeric',
//     month:'long',
//     day:'numeric'
// }
// console.log(hoje.toLocaleString('pt', options)); 


// const hoje = new Date();

// console.log(hoje.valueOf()); ~

// const dataAtual = new Date();
// const dataPostagem = new Date('2020-11-11T00:00');

// const timeAtual = dataAtual.getTime();
// const timePostagem = dataPostagem.getTime();
// const diferenca = timeAtual - timePostagem;

// const segundos = diferenca / 1000;
// const minutos = segundos / 60;
// const horas = minutos / 60;

// console.log(horas);


// const dataAtual = new Date();

// console.log( dataAtual.getTime() );
// console.log( dataAtual.getTimezoneOffset() );
// console.log( dataAtual.valueOf() );


const personalizandoData =  {
    weekday: 'long', // segunda-feira
    month: "2-digit", // 02
    year: '2-digit', // 20
    day: '2-digit', // 01
  };
  console.log(dataAtual.toLocaleDateString('pt-BR', personalizandoData));
  // segunda-feira, 09/11/20

  const personalizandoTempo = {
    hour: 'numeric', // 01
    minute: 'numeric', // 05
    second: 'numeric', // 09
  }
  console.log( dataAtual.toLocaleTimeString('pt-BR', personalizandoTempo) );
  // 01:05:09

  const personalizandoDataTempo = {
    dateStyle: "medium", // 9 de nov. de 2020
    timeStyle: "short", // 01:05
  }
  console.log( dataAtual.toLocaleString('pt-BR', personalizandoDataTempo) );
  // 9 de nov. de 2020 01:05

  const MesAno = {
      month: "numeric",
      year: 'numeric',
  }
  console.log( dataAtual.toLocaleString('pt-BR', MesAno) );
  //  11/2020

  const SemanaHora = {
    weekday: "long",
    hour: 'numeric',
    minute: 'numeric',
  }
  console.log( dataAtual.toLocaleString('pt-BR', SemanaHora) );
  // Wednesday 2:45 PM