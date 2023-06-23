// Adicionar um novo array baseado em outro
const notas = [7, 7, 8, 9];

// const novasNotas = notas;
// novasNotas.push(10);
// console.log(`As novas notas são${novasNotas}`);
// console.log(`As notas originais são ${notas}`);

// Novo jeito --- SPREAD OPERATOR

const novasNotas = [...notas, 10];
console.log(`As novas notas são${novasNotas}`);
console.log(`As notas originais são ${notas}`);