const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumalador, nota)=>{
        return acumalador+nota;
    },0);

   const media = somaDasNotas/notasDaSala.length;

   return media;
}

calculaMedia(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);
calculaMedia(`A média da sala de Java é ${calculaMedia(salaJava)}`);
calculaMedia(`A média da sala de Python é ${calculaMedia(salaPython)}`);



// Reduce: intera sobre o array
// Serve para somar todas as notas
// Primeiro parãmetro é o acumulador
// Segundo parametro é o nome do valor