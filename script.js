let num1;
let num2;
let operator;
let displayValue = "";

const display = document.querySelector("#display");
const calcFunc = document.querySelectorAll(".function");


calcFunc.forEach(func => {
    func.addEventListener("click", () => {
        const selectedButton = func.textContent;

        if(selectedButton !== "equals" && selectedButton !== "clear") {
            displayValue += `${selectedButton}`;
            display.textContent = displayValue;
        }
    })
})



function add (num1, num2) {
    return num1 + num2;
};

function subtract (num1, num2) {
    return num1 - num2;
};

function multiply (num1, num2) {
    return num1 * num2;
};

function divide (num1, num2) {
    return num1 / num2;
};


function operate (num1, operator, num2) {
    switch(operator) {
        case "+":
            add(num1, num2);
        case "-":
            subtract(num1, num2);
        case "*":
            multiply(num1, num2);
        case "/":
            divide(num1, num2);
    }
};

