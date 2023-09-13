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
