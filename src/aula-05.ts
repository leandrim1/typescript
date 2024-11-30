interface Autorizacao {
    autorizado: (idade: number) => boolean;
}


interface Clients { 
    nome: string;
    idade: number;
    possoEntrar: Autorizacao;
}

const cliente: Clients = {
    nome: 'pedro',
    idade: 17,
    possoEntrar: {
       autorizado: (idade: number): boolean => {
        return idade > 18;
       }
    }
}

console.log(cliente);
console.log(cliente.possoEntrar.autorizado(cliente.idade));