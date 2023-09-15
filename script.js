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

const operators = {
  "+": add,
  "-": subtract,
  "×": multiply,
  "÷": divide,
};

//---------------------------|
// // BUTTONS              --|
//---------------------------|

const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".btn--number");
const operatorButtons = document.querySelectorAll(".btn--operator");
const equalsButton = document.querySelector(".btn--equals");
const decimalButton = document.querySelector(".btn--decimal");

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

// Adding event listeners on operator buttons
operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    processClickedOperator(e);
  });
});

function processClickedOperator(e) {
  if (firstNum !== "" && !operator) {
    operator = e.target.textContent;
    updateDisplay();
  } else if (operator && secondNum !== "") {
    operate(operator, firstNum, secondNum);
    operator = e.target.textContent;
    updateDisplay();
  }
}

// Adding event listeners on decimal button
decimalButton.addEventListener("click", (e) => {
  processClickedDecimal(e);
});

function processClickedDecimal(e) {
  if (!checkIfCanDecimal()) {
    console.log("wrong");
    return;
  } else if (operator) {
    updateNum("secondNum", e.target.textContent);
  } else {
    updateNum("firstNum", e.target.textContent);
  }
  updateDisplay();
}

function checkIfCanDecimal() {
  if (firstNum !== "" && !firstNum.includes(".")) {
    return true;
  } else if (operator && secondNum !== "" && !secondNum.includes(".")) {
    return true;
  }
  return false;
}

// Adding event listeners on equals button
equalsButton.addEventListener("click", (e) => {
  if (operator === "" || secondNum === "") {
    return;
  }
  operate(operator, firstNum, secondNum);
  updateDisplay();
});

function operate(operator, num1, num2) {
  if (num1.includes(".") && num2.includes(".")) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
  } else if (num1.includes(".")) {
    num1 = parseFloat(num1);
    num2 = parseInt(num2);
  } else if (num2.includes(".")) {
    num2 = parseFloat(num2);
    num1 = parseInt(num1);
  } else {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
  }
  result = operators[operator](num1, num2);
  // firstNum = result.toFixed(2).toString();
  if (isFloat(result)) {
    result = result.toFixed(2);
  }
  firstNum = result.toString();
  reset();
}

function reset() {
  operator = "";
  secondNum = "";
}

function isFloat(num) {
  return num % 1 !== 0;
}

function updateDisplay() {
  let displayStr = firstNum + operator + secondNum;
  display.textContent = displayStr;
}
