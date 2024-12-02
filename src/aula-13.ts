class User {
    public readonly nome: string;
    private readonly permissoes: Permissoes[];

    constructor(nome: string) {
        this.nome = nome;
        this.permissoes = [];
    }

    public adicionarPermissoes(permissao: Permissoes) {
        this.permissoes.push(permissao);
    }
}

class Permissoes {
    constructor(public readonly accept: string) {
    }
}

const usuario1 = new User ('pablo');
const permissao1 = new Permissoes('Modificar codigos');
const permissao2 = new Permissoes('Modificar Banco de Dados');
const permissao3 = new Permissoes('Definir linguagem');

usuario1.adicionarPermissoes(permissao1);
usuario1.adicionarPermissoes(permissao2);
usuario1.adicionarPermissoes(permissao3);

console.log(usuario1);