function calculate(operation, num1, num2) {
  switch (operation) {
    case 'add':
      return num1 + num2;
    case 'subtract':
      return num1 - num2;
    case 'multiply':
      return num1 * num2;
    case 'divide':
      return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
    default:
      return 'Invalid operation';
  }
}
