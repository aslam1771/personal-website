// Take input from the user
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

// Calculate sum, difference, and quotient
let sum = num1 + num2;
let difference = num1 - num2;
let quotient = num2 !== 0 ? num1 / num2 : "Undefined (division by zero)";

// Display results using alert
alert("Results:\n" +
      "Sum: " + sum + "\n" +
      "Difference: " + difference + "\n" +
      "Quotient: " + quotient);
