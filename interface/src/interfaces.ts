interface LojaVendas {
  nome: string;
  endereco: string;
  status: boolean;
}

const BurguerK: LojaVendas = {
  nome: "gilson",
  endereco: "rua a",
  status: true,
};

function novaLoja(propriedades: LojaVendas) {
  console.log(propriedades.nome);
}

novaLoja({nome: "teste", endereco: "asd", status: true});
