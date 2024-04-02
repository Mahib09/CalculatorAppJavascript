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
      display.value = parseFloat(firstValue).toLocaleString();
    } else {
      secondValue += e.target.innerText;
      display.value = parseFloat(secondValue).toLocaleString();
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
      case "x":
        result = num1 * num2;
        break;
      case "÷":
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
    display.value = result.toLocaleString();
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
  if (firstValue || secondValue) {
    if (operation && secondValue) {
      secondValue = -parseFloat(secondValue);
      display.value = secondValue;
    } else {
      firstValue = -parseFloat(firstValue);
      display.value = firstValue;
    }
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
//setting up time
const Settime = document.querySelector(".time");
var today = new Date();
let options = { timeStyle: "short", hour12: false };
let time = today.toLocaleTimeString("en-US", options);
Settime.innerHTML = time;

//toggle lightmode
const togglebtn = document.querySelector(".toogleinput");
const body = document.querySelector("body");
const border = document.querySelector(".border");
const mainbody = document.querySelector(".mainbody");
const mainbodybg = document.querySelector(".mainbodyBackground");
const lightgrey = document.querySelectorAll(".lightgrey");
const darkgrey = document.querySelectorAll(".darkgrey");
const input = document.querySelector(".mainbody input");
const closebar = document.querySelector(".closeBar");
const instruction = document.querySelector(".instruction");
togglebtn.addEventListener("click", () => {
  check = togglebtn.checked;
  if (check) {
    body.classList.add("bodyLightmode");
    mainbody.classList.add("mainbodyLightmode");
    mainbodybg.classList.add("mainbodyLightmode");
    input.classList.add("displayLightmode");
    border.classList.add("borderLightmode");
    closebar.classList.add("closebarLightmode");
    lightgrey.forEach((comp) => {
      comp.classList.add("lightgreyLightmode");
    });
    darkgrey.forEach((comp) => {
      comp.classList.add("darkgreyLightmode");
    });
    instruction.innerHTML = "Click the Camera to switch to Dark-Mode";
  } else {
    body.classList.remove("bodyLightmode");
    mainbody.classList.remove("mainbodyLightmode");
    mainbodybg.classList.remove("mainbodyLightmode");
    border.classList.remove("borderLightmode");
    input.classList.remove("displayLightmode");
    closebar.classList.remove("closebarLightmode");
    lightgrey.forEach((comp) => {
      comp.classList.remove("lightgreyLightmode");
    });
    darkgrey.forEach((comp) => {
      comp.classList.remove("darkgreyLightmode");
    });
    border.classList.remove("borderLightmode");
    instruction.innerHTML = "Click the Camera to switch to Light-Mode";
  }
});
