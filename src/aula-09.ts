interface Carro {
    cor: string;
    nome: string;
}

interface Bicicleta {
    rodas: number;
}

function funcao (validacao: boolean): Carro | Bicicleta {
    if (validacao) {
        return {
            cor: "preto",
            nome: "gol",
        };
    }
    return {
        rodas: 2,
    };
};

const resultado = funcao(true);

if ("cor" in resultado) {
    console.log(resultado.nome);
}

if ("rodas" in resultado) {
    console.log(resultado.rodas);
}