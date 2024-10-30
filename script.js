const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const operators = ["%", "/", "*", "-", "+", "="];
let output = "";

// Function to handle calculator operations
const calculate = (btnValue) => {
    if (btnValue === "=") {
        // Calculate only if output is not empty
        if (output !== "") {
            // Replace "%" with "/100" and evaluate the expression
            try {
                output = eval(output.replace("%", "/100"));
            } catch (error) {
                output = "Error"; // Display an error if evaluation fails
            }
        }
    } else if (btnValue === "AC") {
        // Clear the output
        output = "";
    } else if (btnValue === "DEL") {
        // Remove the last character
        output = output.toString().slice(0, -1);
    } else {
        // Avoid adding multiple operators consecutively
        if (operators.includes(btnValue) && operators.includes(output.slice(-1))) return;
        output += btnValue; // Append button value to output
    }
    display.value = output;
};

// Attach event listeners to all buttons
buttons.forEach((button) => {
    button.addEventListener('click', (e) => calculate(e.target.dataset.value));
});