"use strict";
function login(username) {
    let message = "Bem Vindo " + username;
    console.log(message);
    return username;
}
const retornafuncao = login("sujeitoprogramado");
console.log(retornafuncao);
//funcoes com numero e retorno com string
let vl1 = 2;
let vl2 = 10;
function soma(n1, n2) {
    let soma = n1 + n2;
    if (soma > 100) {
        return 'SOMA MAIOR QUE 100';
    }
    else {
        return 'SOMA MENOR QUE 100';
    }
}
console.log(soma(vl1, vl2));
