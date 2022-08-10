//type enum - enumerar tipos de dados

enum Cores {
    branco = "F000000",
     preto = "#000000"
}
console.log(Cores.branco);

// outra forma de uso - retornar valores de 0-999 a partir da ordem 
// da lista, podemos também atribuir valores 

enum SetatusPermissao {
    administrador,
    usuario
}
console.log(SetatusPermissao.usuario)