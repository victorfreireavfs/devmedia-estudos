let nomes = ['joão', 'victor', 'maria']
nomes[0] = 'pedro'; // modificando pelo índice
nomes[3] = 'belma'; // adicionando valor a um novo índice (jeito errado)
nomes.push('gabigol') // função para adicionar valor no último índice do array
nomes.unshift('marcos')// adiciona valor no primeiro índice

console.log(nomes.length);
console.log(nomes);
console.log(nomes[1]); // exibindo pelo índice
console.log(nomes[0]);   
