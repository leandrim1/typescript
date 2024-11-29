interface Estado {
    nome: string;
}

interface Cidade {
    nome: string;
    estado: Estado;
}

interface Endereco {
    rua: string;
    bairro: string;
    cidade: Cidade;
    complemento?: string;
}

const endereco: Endereco = {
    rua: "dadad",
    bairro: "dadaw",
    cidade: {
        nome: "Rio",
        estado: {
            nome: "Rio",
        },
    },
};

console.log(endereco.complemento?.substring(3) || "Sem complemento");
console.log(endereco);