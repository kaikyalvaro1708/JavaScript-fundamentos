// Remover nomes repetidos
const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João'];

// Set significa conjuntos
// no set, os valores não podem se repetidos
// Criando uma nova array com Spread Operator
const nomesAtualizados=[...new Set(nomes)];

console.log(nomesAtualizados);