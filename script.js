let num1;
let num2;
let operator;
let displayValue = "";

const display = document.querySelector("#display");
const calcFunc = document.querySelectorAll(".function");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");

calcFunc.forEach(func => {
    func.addEventListener("click", () => {
        const selectedButton = func.textContent;

        if(selectedButton !== "=" && selectedButton !== "clear") {
                displayValue += selectedButton;
                display.textContent = displayValue;
            }
        })
    });


clear.addEventListener("click", () => {
    display.textContent = "";
    displayValue = "";
});

equals.addEventListener("click", () => {
    if(displayValue !== "") {
        const regex = /(?<=[-+*/()])|(?=[-+*/()])/;
        const expressionArray = displayValue.split(regex);
        console.log(expressionArray)

        for(let i = 0; i <expressionArray.length; i++) {
            expressionArray.unshift(operate(parseFloat(expressionArray[0]), expressionArray[1], parseFloat(expressionArray[2])));
            expressionArray.splice(1, 3);
        }

        expressionArray.toString();
        display.textContent = expressionArray;
        displayValue = expressionArray;
    }
});


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
    if(num2 === 0) {
        return "ERR";
    }
    return num1 / num2;
};


function operate (num1, operator, num2) {
    switch(operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
};

