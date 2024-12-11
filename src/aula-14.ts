class Igreja { 
    nomeIgreja: String;
    cidade: String;
    local: String;
    numero: number

    constructor (nomeIgreja: String, cidade: String, local: String, numero: number) {
        this.nomeIgreja = nomeIgreja;
        this.cidade = cidade;
        this.local = local;
        this.numero = numero;
    }

}

class Pessoa extends Igreja {
    nomePessoa: String;
    idade: number;

    constructor (nomeIgreja: String, cidade: String, local: String, numero: number, nomePessoa: String, idade: number) {
        super (nomeIgreja, cidade, local, numero);
        this.nomePessoa = nomePessoa;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa (
    'VIDEIRA', 
    'PARÁ DE MINAS',
    'RUA DOS REIS',
    1712,
    'PEDRO NASCENTES',
    20
)

console.log(pessoa1);