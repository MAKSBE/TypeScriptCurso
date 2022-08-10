//Tipo Unknown - quando vc não sabe qual tipagem vai receber

let idPedido: any = 123;
let totalPedido: unknown = 13;

let entregadorPedido: number = idPedido;

//valor do tipo unknow só pode receber unknow ou any
let totalEntrega: unknown = totalPedido;

console.log(entregadorPedido);

