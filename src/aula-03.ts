interface Pessoas {
    idade: number;
    nome: string;
}

interface Usuarios {
    pessoas: Pessoas[];
    cidade: string;
}

const usuario: Usuarios = {
    cidade: "dadawd",
    pessoas: [
        {
            idade: 32,
            nome: "paulo",
        },
        {
            idade: 12,
            nome: "joao"
        }
    ]
};

console.log(usuario.pessoas.length);
console.log(usuario);