function login(username: string):boolean | string{
    let message = "Bem Vindo " + username;
    console.log(message);
    return username ;
    
}

const retornafuncao = login("sujeitoprogramado");
console.log(retornafuncao);

//funcoes com numero e retorno com string

let vl1: number = 2;
let vl2: number = 10;

function soma(n1:number, n2:number): string{
    let soma = n1 + n2;
    if (soma > 100){
        return 'SOMA MAIOR QUE 100'
    }else{
        return 'SOMA MENOR QUE 100'
    }
}

console.log(soma(vl1 , vl2));