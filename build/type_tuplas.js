"use strict";
// Não possui no JS apenas no TS - segue padrão de passagem de valores para o array
let aluno;
aluno = ["Gilson", 44, "idade"];
aluno.push("Gilson2", 35, "idade");
// não importa a ordem desde que siga o padrão
aluno.push(44, "idade", "Gilson3");
console.log(aluno);
