let currentExpression = "";
const currencyRates = {
    'USD': 1,   // USD as the base currency
    'EUR': 0.91,
    'GBP': 0.75,
    'INR': 81.50,
    'CAD': 1.36,
    'AUD': 1.53,
};

function addToExpression(value) {
    currentExpression += value;
    document.getElementById("display").value = currentExpression;
}

function evaluateExpression() {
    try {
        const result = eval(currentExpression);
        document.getElementById("display").value = result;
        currentExpression = result.toString();
    } catch (e) {
        document.getElementById("display").value = "Error";
        currentExpression = "";
    }
}

function clearEntry() {
    currentExpression = "";
    document.getElementById("display").value = currentExpression;
}

function calculatePercentage() {
    try {
        const value = parseFloat(currentExpression);
        const percentage = value / 100;
        document.getElementById("display").value = percentage;
        currentExpression = percentage.toString();
    } catch (e) {
        document.getElementById("display").value = "Error";
        currentExpression = "";
    }
}

function backspace() {
    currentExpression = currentExpression.slice(0, -1);
    document.getElementById("display").value = currentExpression;
}

function addFunction(func) {
    currentExpression = `${func}(${currentExpression})`;
    document.getElementById("display").value = currentExpression;
}

function convertCurrency() {
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;
    const amount = document.getElementById("amount").value;
    
    if (amount) {
        let value = parseFloat(amount);
        
        if (fromCurrency !== 'USD') {
            value = value / currencyRates[fromCurrency];
        }
        
        const convertedValue = value * currencyRates[toCurrency];
        document.getElementById("conversion-result").textContent = convertedValue.toFixed(2);
    }
}
