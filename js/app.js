// Función de utilidad para la conversión de monedas
function convertCurrency(fromCurrency, toCurrency, amount) {
    if (amount <= 0 || isNaN(amount)) {
        throw new Error('Por favor, ingresa una cantidad válida.');
    }

    let exchangeRate;

    if (fromCurrency === 'USD' && toCurrency === 'EUR') {
        exchangeRate = 0.85; // 1 USD = 0.85 EUR
    } else if (fromCurrency === 'EUR' && toCurrency === 'USD') {
        exchangeRate = 1.18; // 1 EUR = 1.18 USD
    } else {
        exchangeRate = 1; // Si ambas monedas son iguales
    }

    return (amount * exchangeRate).toFixed(2);
}

// Event listener para la interfaz de usuario (solo si es un entorno del navegador)
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('convert-btn').addEventListener('click', function () {
            try {
                const fromCurrency = document.getElementById('from-currency').value;
                const toCurrency = document.getElementById('to-currency').value;
                const amount = parseFloat(document.getElementById('amount').value);

                const result = convertCurrency(fromCurrency, toCurrency, amount);

                document.getElementById('conversion-result').textContent = result;
            } catch (error) {
                alert(error.message);
            }
        });
    });
}

// Exportar la función para las pruebas
module.exports = { convertCurrency };
