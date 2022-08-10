//type array
/* Podemos passar o array também da seguinte forma
let numero: Array<number>;
let filmes: Array<string>;
let filme: Array<number | string>;
*/
//Array Numero
let numero: number[];
numero = [1,2,5,12,30];
console.log(numero);
numero.push(55,122);
console.log('Numero adicionados: ', numero);

//Array de strings
let filmes: string[];
filmes = ["Filme 1", "Filme 2"]
console.log(filmes);
filmes.push("Filme 3");
console.log(filmes);

//Array recebendo mais de uma tipagem
let filme: (string | number)[];
filme = ["Filme 4", 25];
filme.push(33,"Filme 5");
console.log(filme);


