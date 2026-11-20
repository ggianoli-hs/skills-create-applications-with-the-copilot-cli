#!/usr/bin/env node
/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add       (+)  - Addition:       a + b
 *   subtract  (-)  - Subtraction:    a - b
 *   multiply  (*)  - Multiplication: a * b
 *   divide    (/)  - Division:       a / b (errors on division by zero)
 *   modulo    (%)  - Modulo:         remainder of a / b (errors on b = 0)
 *   power     (^)  - Exponentiation: base raised to the exponent
 *   sqrt           - Square root:    square root of n (errors on negative n)
 *
 * Usage: node src/calculator.js <operation> <a> [b]
 * Example: node src/calculator.js add 2 3
 *          node src/calculator.js sqrt 16
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

// Modulo: returns the remainder of a divided by b; throws when b is zero
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed.');
  }
  return a % b;
}

// Exponentiation: returns base raised to the exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square root: returns the square root of n; throws for negative n
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of a negative number is not allowed.');
  }
  return Math.sqrt(n);
}

const operations = { add, subtract, multiply, divide, modulo, power, sqrt: squareRoot };
const unaryOperations = new Set(['sqrt']);

function main(argv) {
  const [op, rawA, rawB] = argv;
  const fn = operations[op];
  const a = Number(rawA);
  const b = Number(rawB);
  const unary = unaryOperations.has(op);

  if (!fn || rawA === undefined || Number.isNaN(a) ||
      (!unary && (rawB === undefined || Number.isNaN(b)))) {
    console.error('Usage: node src/calculator.js <add|subtract|multiply|divide|modulo|power> <a> <b>\n' +
      '       node src/calculator.js sqrt <n>');
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

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
