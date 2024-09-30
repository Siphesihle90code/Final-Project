function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = math.evaluate(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function calculateSquareRoot() {
    const display = document.getElementById("display");
    display.value = Math.sqrt(eval(display.value));
}

function calculateSin() {
    const display = document.getElementById("display");
    display.value = Math.sin(eval(display.value) * Math.PI / 180);
}

function calculateCos() {
    const display = document.getElementById("display");
    display.value = Math.cos(eval(display.value) * Math.PI / 180);
}

function calculateTan() {
    const display = document.getElementById("display");
    display.value = Math.tan(eval(display.value) * Math.PI / 180);
}

function calculateLog() {
    const display = document.getElementById("display");
    display.value = Math.log10(eval(display.value));
}