// afirmano algum tipo
let statusAtual: unknown = 1;
let mudaStatus: number = 0;

// afirmando que o statusAtual é de fato numero
mudaStatus = statusAtual as number;

// outra maneira de afirmar o statusAtual
mudaStatus = <number>statusAtual;

console.log(mudaStatus);