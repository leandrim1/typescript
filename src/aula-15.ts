interface Membro {
    nomePessoa: String;
    idade: number;
    membroI?: Igreja;
}

interface Igreja {
    nomeIgreja: String;
    cidade: String;
    local: String;
    numero: number;
}

const pessoa2: Membro = {
    nomePessoa: "PEDRO NASCENTES",
    idade: 20,
    membroI: {
        nomeIgreja: "VIDEIRA",
        cidade: "PARÁ DE MINAS",
        local: "RUA DOS REIS",
        numero: 1712
    },
};

console.log(pessoa2);