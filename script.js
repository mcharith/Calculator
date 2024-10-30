const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const operators = ["%", "/", "*", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=") {
        if (output !== "") {
            try {
                output = eval(output.replace("%", "/100"));
            } catch (error) {
                output = "Error";
            }
        }
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    } else {
        if (operators.includes(btnValue) && operators.includes(output.slice(-1))) return;
        output += btnValue;
    }
    display.value = output;
};
buttons.forEach((button) => {
    button.addEventListener('click', (e) => calculate(e.target.dataset.value));
});