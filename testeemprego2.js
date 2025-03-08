//1) 
let  = 13;
let soma = 0;
let K = 0;

while (K < indice) {
    K = K + 1;
    soma= soma+ K;
}

console.log(soma);




//2)
function isFibonacci(num) {
    let a = 0, b = 1, temp;

    while (a <= num) {
        if (a === num) {
            return `${num} pertence à sequência de Fibonacci.`;
        }
        temp = a + b;
        a = b;
        b = temp;
    }

    return `${num} não pertence à sequência de Fibonacci.`;
}


const numero = parseInt(prompt("Digite um número:"));
console.log(isFibonacci(numero));



//3)

const faturamentoMensal = [
    { "dia": 1, "valor": 1000 },
    { "dia": 2, "valor": 2500 },
    { "dia": 3, "valor": 0 },    // Dia sem faturamento (feriado ou final de semana)
    { "dia": 4, "valor": 1800 },
    { "dia": 5, "valor": 2200 },
    { "dia": 6, "valor": 0 },    // Dia sem faturamento
    { "dia": 7, "valor": 3100 },
    { "dia": 8, "valor": 2700 },
    { "dia": 9, "valor": 2900 },
];

// Função para calcular os dados de faturamento
function analisarFaturamento(dados) {
    let valoresValidos = dados.map(d => d.valor).filter(valor => valor > 0); 

    if (valoresValidos.length === 0) {
        console.log("Não há dados de faturamento para análise.");
        return;
    }

    let menorFaturamento = Math.min(...valoresValidos);
    let maiorFaturamento = Math.max(...valoresValidos);
    
    let somaFaturamento = valoresValidos.reduce((soma, valor) => soma + valor, 0);
    let mediaMensal = somaFaturamento / valoresValidos.length;

    let diasAcimaDaMedia = valoresValidos.filter(valor => valor > mediaMensal).length;

    console.log(`Menor faturamento diário: R$ ${menorFaturamento.toFixed(2)}`);
    console.log(`Maior faturamento diário: R$ ${maiorFaturamento.toFixed(2)}`);
    console.log(`Número de dias acima da média mensal: ${diasAcimaDaMedia}`);
}


analisarFaturamento(faturamentoMensal);


//4)

const faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};


const totalFaturamento = Object.values(faturamento).reduce((total, valor) => total + valor, 0);


console.log("Percentual de representação por estado:");
for (const estado in faturamento) {
    let percentual = (faturamento[estado] / totalFaturamento) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}


//5)


function inverterString(str) {
    let strInvertida = '';
    
    
    for (let i = str.length - 1; i >= 0; i--) {
        strInvertida += str[i]; 
    }
    
    return strInvertida;
}


let minhaString = prompt("Digite uma string para inverter:");


console.log("String invertida:", inverterString(minhaString));

