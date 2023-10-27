// JavaScript code for the calculator

let displayValue = "";

// Function to append a value to the display
function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("result").value = displayValue;
}

// Function to clear the display
function clearDisplay() {
    displayValue = "";
    document.getElementById("result").value = "";
}

// Function to calculate and display the result
function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("result").value = displayValue;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
