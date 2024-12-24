const { JSDOM } = require('jsdom');
const { convertCurrency } = require('./app'); // Importa la función de conversión

// Configurar el DOM simulado para las pruebas
const { window } = new JSDOM(`
    <!DOCTYPE html>
    <html>
    <body>
        <select id="from-currency">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
        </select>
        <select id="to-currency">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
        </select>
        <input id="amount" value="100">
        <button id="convert-btn">Convertir</button>
        <div id="conversion-result"></div>
    </body>
    </html>
`);
global.document = window.document;

// Configurar valores de prueba
document.getElementById('from-currency').value = 'USD';
document.getElementById('to-currency').value = 'EUR';
document.getElementById('amount').value = '100';

// Llamar directamente a la función de conversión para probar
try {
    const result = convertCurrency('USD', 'EUR', 100);
    console.log("Resultado de la conversión:", result); 
} catch (error) {
    console.log("Error:", error.message);
}
