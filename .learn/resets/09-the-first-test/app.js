// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };



// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Convertir de Dolar (USD) a Yen (JPY)
function fromDollarToYen(dolarAmount) {
    const euros = dolarAmount / oneEuroIs["USD"];
    const yenes = euros * oneEuroIs["JPY"];
    return yenes;
}

// Convertir de Euro (EUR) a Dolar (USD)
function fromEuroToDollar(euroAmount) {
    return euroAmount * oneEuroIs["USD"];
}

// Convertir de Yen (JPY) a Libra (GBP)
function fromYenToPound(yenAmount) {
    const euros = yenAmount / oneEuroIs["JPY"];
    const libras = euros * oneEuroIs["GBP"];
    return libras;
}
