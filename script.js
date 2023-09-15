//---------------------------|
// // BASIC MATH OPERATIONS--|
//---------------------------|

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "can't divide by zero";
  }
  return a / b;
}

//---------------------------|
// // BUTTONS              --|
//---------------------------|

const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".btn--number");
const operatorButtons = document.querySelectorAll(".btn--operator");
const equalsButton = document.querySelector(".btn--equals");

// First we set three variables -- firstNum,  operator, secondNum
let firstNum = "";
let operator = "";
let secondNum = "";

// Adding event listeners on number buttons
numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    processClickedNumber(e);
    updateDisplay();
  });
});

function processClickedNumber(e) {
  // We first determine if we are on first num or second num

  let addedValue = e.target.value;
  if (operator === "") {
    //we are at firstNum
    updateNum("firstNum", addedValue);
  } else {
    // Operator exists so we are on secondNum
    updateNum("secondNum", addedValue);
  }
}

function updateNum(num, addedValue) {
  if (num === "firstNum") {
    firstNum += addedValue;
  } else {
    secondNum += addedValue;
  }
}

function updateDisplay() {
  console.log(operator);
  let displayStr = firstNum + operator + secondNum;
  display.textContent = displayStr;
}
