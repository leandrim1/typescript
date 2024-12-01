function callback (): void {
    console.log('DEU BOM');
};

function teste2 (
    valor1: number, 
    valor2: number,
    callback: () => void
): string {
    if (valor1 > valor2) {
        callback();
    }
    return "";
};


teste2 (54, 32, callback);