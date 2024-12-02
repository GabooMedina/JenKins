document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('convert-btn').addEventListener('click', function () {
        // Obtener los valores seleccionados y la cantidad
        const fromCurrency = document.getElementById('from-currency').value;
        const toCurrency = document.getElementById('to-currency').value;
        const amount = document.getElementById('amount').value;

        // Validar que la cantidad ingresada sea mayor a 0
        if (amount <= 0 || isNaN(amount)) {
            alert('Por favor, ingresa una cantidad válida.');
            return;
        }

        // Definir el tipo de cambio fijo
        let exchangeRate;

        // Verificar las monedas seleccionadas y asignar el tipo de cambio
        if (fromCurrency === 'USD' && toCurrency === 'EUR') {
            exchangeRate = 0.85; // 1 USD = 0.85 EUR
        } else if (fromCurrency === 'EUR' && toCurrency === 'USD') {
            exchangeRate = 1.18; // 1 EUR = 1.18 USD
        } else {
            exchangeRate = 1; // Si ambas monedas son iguales
        }

        // Realizar la conversión
        const result = (amount * exchangeRate).toFixed(2);

        // Mostrar el resultado
        document.getElementById('conversion-result').textContent = result;
    });
});
