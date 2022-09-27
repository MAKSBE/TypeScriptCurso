"use strict";
const novoUsuario = {
    email: "matheus@teste.com",
    status: true,
};
function novoUser(usuario) {
    console.log(usuario.email);
}
novoUser({ email: "ana@ana.com", status: false });
