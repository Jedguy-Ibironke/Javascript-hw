function calculator() {
	const num1 = parseFloat(prompt("Enter the first number:"));
	const operator = prompt("Enter an operator (+, -, *, /):");
	const num2 = parseFloat(prompt("Enter the second number:"));

	let result;

	switch (operator) {
		case "+":
			result = num1 + num2;
			break;
		case "-":
			result = num1 - num2;
			break;
		case "*":
			result = num1 * num2;
			break;
		case "/":
			if (num2 !== 0) {
				result = num1 / num2;
				// !== is  the not equal operator used to ensure that the second number is not 0
			} else {
				console.log("Error: Division by zero is not allowed.");
				return;
			}
			break;
		default:
			console.log("Error: Invalid operator.");
			return;
	}

	console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);
}

// Run the calculator function
calculator();
