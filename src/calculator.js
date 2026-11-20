#!/usr/bin/env node
/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add       (+)  - Addition:       a + b
 *   subtract  (-)  - Subtraction:    a - b
 *   multiply  (*)  - Multiplication: a * b
 *   divide    (/)  - Division:       a / b (errors on division by zero)
 *
 * Usage: node src/calculator.js <operation> <a> <b>
 * Example: node src/calculator.js add 2 3
 */

// Addition: returns a + b
function add(a, b) {
  return a + b;
}

// Subtraction: returns a - b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns a * b
function multiply(a, b) {
  return a * b;
}

// Division: returns a / b; throws a clear error when b is zero
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

const operations = { add, subtract, multiply, divide };

function main(argv) {
  const [op, rawA, rawB] = argv;
  const fn = operations[op];
  const a = Number(rawA);
  const b = Number(rawB);

  if (!fn || rawA === undefined || rawB === undefined || Number.isNaN(a) || Number.isNaN(b)) {
    console.error('Usage: node src/calculator.js <add|subtract|multiply|divide> <a> <b>');
    return 1;
  }

  try {
    console.log(fn(a, b));
    return 0;
  } catch (err) {
    console.error(`Error: ${err.message}`);
    return 1;
  }
}

if (require.main === module) {
  process.exitCode = main(process.argv.slice(2));
}

module.exports = { add, subtract, multiply, divide };
