function apresentar(nome){
    return `meu nome é ${nome}`;
}

// Arrow function é uma função de uma linha só
const apresentarArrow = nome => `meu nome é${nome}`;
const soma = (num1, num2) => num1+num2;

const somaNumerosPequenos = (numero1,numero2) =>{
    if (numero1 > 10|| numero2 >10){
        return "Somente números de 1 a 9";
    }else{
        return numero1 + numero2;
    }
}

