interface produto {
    nomeProduto: string;
    id_produto: number;
    descricao: string;
    valor: number;
}

interface TempoEntrega {
    tempo: string;
}

interface comprador{
    nome: string;
    endereco: string;
    cidade: string;
    estado: string;
    compra: produto;
    entrega?: TempoEntrega;
}

const compra1: comprador = {
    nome: 'kaua',
    endereco: 'Rua lagamar da silva',
    cidade: 'para de goias',
    estado: 'AM',
    compra: {
        nomeProduto: 'pizza',
        id_produto: 1314,
        descricao: 'pizza moda da casa',
        valor: 60,
    },
    entrega: {
        tempo: '70 minutos'
    },
}

console.log(compra1)