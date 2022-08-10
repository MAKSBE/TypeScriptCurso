//Type Boolean

let estaAutenticado: boolean;

estaAutenticado = true;
console.log(estaAutenticado);

/* Para converter o tipo number para o estado boleano aonde:
Qualquer valor diferente de 0, string vazia, undefined será TRUE*/
let codstatus: number;
codstatus = 0;

estaAutenticado = Boolean(codstatus);

console.log(estaAutenticado);