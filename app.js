// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))





// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}


// Declaramos una función con el nombre exacto "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {

    // Convertimos el valor a euro
    let valueInEuro = valueInDollar / 1.07;

    // Convertimos el valor a Yen
    let valueInYen = valueInEuro * 156.5;

    // Retornamos el valor en yenes
    return valueInYen;
}


// Declaramos una función con el nombre exacto "fromYenToPound"
const fromYenToPound = function(valueInYen) {

    // Convertimos el valor a euro
    let valueInEuro = valueInYen / 156.5;

    // Convertimos el valor a Pound
    let valueInPound = valueInEuro * 0.87;

    // Retornamos el valor en Pound
    return Number(valueInPound.toFixed(2));
}



// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum,fromEuroToDollar,fromDollarToYen,fromYenToPound};