function calculate(operator) {
	const num1 = parseFloat(document.getElementById("num1").value);
	const num2 = parseFloat(document.getElementById("num2").value);
	const resultDiv = document.getElementById("result");

	if (isNaN(num1) || isNaN(num2)) {
		resultDiv.textContent = "Error: Please enter valid numbers.";
		return;
	}

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
			} else {
				resultDiv.textContent = "Error: Division by zero is not allowed.";
				return;
			}
			break;
		default:
			resultDiv.textContent = "Error: Invalid operator.";
			return;
	}

	resultDiv.textContent = `Result: ${num1} ${operator} ${num2} = ${result}`;
}
