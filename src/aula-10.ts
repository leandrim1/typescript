interface Andar {
    passos?: number;
}

const funcaotest = (): undefined | number => {
    if (andar.passos && andar.passos > 5) {
        return 543;
    }
    return undefined;
};

const andar: Andar = {
    passos: 453,
}

console.log(andar);