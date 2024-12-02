class Escola {
    public readonly nome: string;
    private readonly alunos: Aluno[];

    constructor(nome: string) {
        this.nome = nome;
        this.alunos = [];
    }

    public adicionarAluno(aluno: Aluno) {
        this.alunos.push(aluno);
    }
}

class Aluno {
    constructor(public readonly nome: string) {
    }
}

const escola = new Escola('Nova escola');
const aluno1 = new Aluno('pedro');
const aluno2 = new Aluno('maria');
const aluno3 = new Aluno('paulo');

escola.adicionarAluno(aluno1);
escola.adicionarAluno(aluno2);
escola.adicionarAluno(aluno3);

console.log(escola);