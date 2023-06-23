
// 1) declara a função

function imprimiTexto(texto){
    console.log(texto);
}
// 2) executa a função
imprimiTexto(soma());

//====== três formas de escrever funções ======

function soma(){
    const resultado = 2+2;
    return resultado;
}
soma();