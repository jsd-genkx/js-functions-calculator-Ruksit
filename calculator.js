"use strict";

// Step 01: Create Functions for Addition, Subtraction, Multiplication, and Division
const add = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mul = (num1, num2) => num1 * num2;
const div = (num1, num2) =>
  num2 === 0 ? "Can't devide by zero " : num1 / num2;

// Step 02: Create a Validation Function for Inputs
const validateInputs = (num1, num2) => {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    isNaN(num1) ||
    isNaN(num2)
  ) {
    return "It's must be numbers";
  }
  return null;
};

// Step 03: Create a Calculator Function to Combine the Above Functions
const calculator = (num1, num2, operation) => {
  const error = validateInputs(num1, num2);
  if (error) return error;

  switch (operation) {
    case "add":
      return add(num1, num2);
    case "subtract":
      return sub(num1, num2);
    case "multiply":
      return mul(num1, num2);
    case "divide":
      return div(num1, num2);
    default:
      return "Invalid operation.";
  }
};

console.log(calculator(10, 5, "add")); //Output : 15
console.log(calculator(10, 5, "subtract")); //Output : 5
console.log(calculator(10, 5, "multiply")); //Output : 50
console.log(calculator(10, 5, "divide")); //Output : 2
console.log(calculator(10, 0, "divide")); // Can't devide by zero
console.log(calculator(10, "a", "add")); // It's must be numbers
console.log(calculator(10, 5, "unknown")); // Invalid operation.

//-m "calculator.js solution"
