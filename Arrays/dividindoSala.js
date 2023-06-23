const alunos = [
    'João', 
    'Juliana',
    'Ana', 
    'Caio', 
    'Lara', 
    'Marjorie',
    'Guilherme',
    'Aline',
    'Fabiana',
    'Andre',
    'Carlos',
    'Paulo',
    'Bia',
    'Vivian',
    'Isabela',
    'Vinicius',
    'Renan',
    'Renata',
    'Daisy',
    'Camilo',
];

// Slice = fatiar/dividir
// Posição inicial é 0 e vai até 10
const sala1 = alunos.slice(0, 10);
// posição inicial é 10 e vai até o final
const sala2 = alunos.slice(10)

console.log(sala1);
console.log(sala2)