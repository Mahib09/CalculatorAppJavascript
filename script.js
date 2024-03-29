const display = document.querySelector(".display");
const operators = document.querySelectorAll("button[data-type='operation']");
const functions = document.querySelectorAll("button[data-type='function']");
const numbers = document.querySelectorAll("button[data-type='number']");

let firstValue = "";
let secondValue = "";
let operation = "";

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (!operation) {
      firstValue += e.target.innerText;
      display.value = firstValue;
    } else {
      secondValue += e.target.innerText;
      display.value = secondValue;
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (secondValue) {
      calculate();
    }
    operation = e.target.innerText;
  });
});

function calculate() {
  if (operation && secondValue) {
    num1 = parseFloat(firstValue);
    num2 = parseFloat(secondValue);
    let result;
    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "X":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          alert("Cannot Divide by zero");
          clearDisplay();
          return;
        }
        result = num1 / num2;
        break;
      case "%":
        result = (num1 * num2) / 100;
    }
    display.value = result;
    firstValue = result.toString();
    secondValue = "";
    operation = "";
  }
}
functions.forEach((func) => {
  func.addEventListener("click", (e) => {
    const btnClass = e.target.classList;
    switch (true) {
      case btnClass.contains("AC"):
        clearDisplay();
        break;
      case btnClass.contains("signChange"):
        tooglesign();
        break;
      case btnClass.contains("decimal"):
        addDecimal();
        break;
      case btnClass.contains("equals"):
        calculate();
        break;
    }
  });
});
function clearDisplay() {
  display.value = "";
  firstValue = "";
  secondValue = "";
  operation = "";
}
function tooglesign() {
  if (operation && secondValue) {
    secondValue = -parseFloat(secondValue);
    display.value = secondValue;
  } else {
    firstValue = -parseFloat(firstValue);
    display.value = firstValue;
  }
}
function addDecimal() {
  if (operation && !secondValue.includes(".")) {
    secondValue += ".";
    display.value = secondValue;
  } else if (firstValue && !firstValue.includes(".")) {
    firstValue += ".";
    display.value = firstValue;
  }
}
