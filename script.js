function reset() {
    // Clear display
    document.getElementById("displayResult").value = null;
}

function calculate() {
    // Calculate operations
    var current_value = document.getElementById("displayResult").value;
    if (current_value.includes("×")) {
        // Replace all "×" signs with "*"
        current_value = current_value.replaceAll("×", "*");
    }
    if (current_value.includes("÷")) {
        // Replace all "÷" signs with "/"
        current_value = current_value.replaceAll("÷", "/");
    }
    var calculated_value = eval(current_value);
    document.getElementById("displayResult").value = calculated_value;
}

function AddToCalculator(event) {
    // When clicking a button, show its value on the display
    var value = event.target.value;
    document.getElementById("displayResult").value += value;
}

function calculatePercentage() {
    // Calculate percentage when clicking the "%" button
    var current_value = document.getElementById("displayResult").value;
    if (!isNaN(current_value)) {
        var percentage = current_value / 100;
        document.getElementById("displayResult").value = percentage;
    } else {
        console.log("Input is empty!");
    }
}

function negation() {
    // Negation (+/-) of a number
    var current_value = document.getElementById("displayResult").value;
    if (!isNaN(current_value)) {
        current_value *= -1;
        document.getElementById("displayResult").value = current_value;
    } else {
        console.log("Input is empty!");
    }
}
