type MarcaTenis = "abc" | "dsadf" | "dawda";

enum MarcaTenis2 {
    NIKE = 4,
    DSADF = "dsadf",
    DAWDA = "dawda",
}

interface Tenis {
    marcaTenis: MarcaTenis2
}

const test: Tenis = {
    marcaTenis: MarcaTenis2.NIKE
}

if (test.marcaTenis === MarcaTenis2.NIKE) {
    console.log("e nike");
}