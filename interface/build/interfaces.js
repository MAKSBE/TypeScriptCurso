"use strict";
const BurguerK = {
    nome: "gilson",
    endereco: "rua a",
    status: true,
};
function novaLoja(propriedades) {
    console.log(propriedades.nome);
}
novaLoja({ nome: "teste", endereco: "asd", status: true });
