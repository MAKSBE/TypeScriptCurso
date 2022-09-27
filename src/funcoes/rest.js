"use strict";
function totalVendas(...vendas) {
    vendas.forEach(vendas => totalVendas.length);
    console.log(vendas);
}
totalVendas(10, 20, 20);
