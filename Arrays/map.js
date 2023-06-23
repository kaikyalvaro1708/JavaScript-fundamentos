const notas = [10, 9.5, 8, 7,6];

const notasAtualizadas = notas.map((nota)=>{
    return nota +1 >= 10? 10 : nota+1;
    // ---se a nota passar de 10, não soma 1, caso contrário adicione 1
})

console.log(notasAtualizadas);

// O map é apropriedado para sobrescrever arrays