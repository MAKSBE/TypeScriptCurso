"use strict";
//type enum - enumerar tipos de dados
var Cores;
(function (Cores) {
    Cores["branco"] = "F000000";
    Cores["preto"] = "#000000";
})(Cores || (Cores = {}));
console.log(Cores.branco);
// outra forma de uso - retornar valores de 0-999 a partir da ordem 
// da lista, podemos também atribuir valores 
var SetatusPermissao;
(function (SetatusPermissao) {
    SetatusPermissao[SetatusPermissao["administrador"] = 0] = "administrador";
    SetatusPermissao[SetatusPermissao["usuario"] = 1] = "usuario";
})(SetatusPermissao || (SetatusPermissao = {}));
console.log(SetatusPermissao.usuario);
