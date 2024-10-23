let currentInput = '';
let operator = '';
let previousInput = '';
let isResultShown = false;

function appendNumber(number) {
    if (isResultShown) {
        currentInput = ''; 
        isResultShown = false;
    }
    currentInput += number;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '') return; 
    if (previousInput !== '') {
        calculateResult(); 
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay(true); 
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}

function calculateResult() {
    if (previousInput === '' || currentInput === '' || operator === '') return;
    
    let result = 0;
    let prev = parseFloat(previousInput);
    let curr = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            if (curr !== 0) { 
                result = prev / curr;
            } else {
                alert("Cannot divide by zero!");
                clearDisplay();
                return;
            }
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    isResultShown = true; 
    updateDisplay();
}

function updateDisplay(showOperation = false) {
    const display = document.getElementById('display');
    if (showOperation && operator && previousInput !== '') {
        display.value = previousInput + " " + operator + " " + currentInput;
    } else {
        display.value = currentInput || '0';
    }
}
