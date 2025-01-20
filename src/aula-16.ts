interface pessoaA {
    nomeP: string;
    amigos: Amigo;
}

interface Amigo { 
    nome: string;
    idade?: number;
}

const pessoa3: pessoaA = {
    nomeP: 'leandro',
    amigos: {
        nome: 'pldao',
        idade: 20,
    }
}

const pessoa4: pessoaA = {
    nomeP: 'leandro',
    amigos: {
        nome: 'jaoao',
    }
}

console.log(pessoa3, pessoa4)