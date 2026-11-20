const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('add', () => {
  test('2 + 3 = 5', () => expect(add(2, 3)).toBe(5));
  test('handles negatives', () => expect(add(-2, -3)).toBe(-5));
  test('handles mixed signs', () => expect(add(-2, 3)).toBe(1));
  test('handles zero', () => expect(add(0, 7)).toBe(7));
  test('handles decimals', () => expect(add(0.5, 0.25)).toBe(0.75));
});

describe('subtract', () => {
  test('10 - 4 = 6', () => expect(subtract(10, 4)).toBe(6));
  test('result can be negative', () => expect(subtract(4, 10)).toBe(-6));
  test('handles negatives', () => expect(subtract(-5, -3)).toBe(-2));
  test('handles zero', () => expect(subtract(5, 0)).toBe(5));
  test('handles decimals', () => expect(subtract(1.5, 0.5)).toBe(1));
});

describe('multiply', () => {
  test('45 * 2 = 90', () => expect(multiply(45, 2)).toBe(90));
  test('handles negatives', () => expect(multiply(-3, 4)).toBe(-12));
  test('negative * negative is positive', () => expect(multiply(-3, -4)).toBe(12));
  test('multiplying by zero gives zero', () => expect(multiply(123, 0)).toBe(0));
  test('handles decimals', () => expect(multiply(2.5, 4)).toBe(10));
});

describe('divide', () => {
  test('20 / 5 = 4', () => expect(divide(20, 5)).toBe(4));
  test('handles negatives', () => expect(divide(-20, 5)).toBe(-4));
  test('returns fractional results', () => expect(divide(1, 4)).toBe(0.25));
  test('zero divided by a number is zero', () => expect(divide(0, 5)).toBe(0));
  test('throws on division by zero', () => {
    expect(() => divide(5, 0)).toThrow('Division by zero is not allowed.');
  });
  test('throws on zero divided by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero');
  });
});

describe('modulo', () => {
  test('5 % 2 = 1', () => expect(modulo(5, 2)).toBe(1));
  test('returns 0 when evenly divisible', () => expect(modulo(10, 5)).toBe(0));
  test('dividend smaller than divisor', () => expect(modulo(2, 5)).toBe(2));
  test('keeps the sign of the dividend', () => expect(modulo(-5, 3)).toBe(-2));
  test('handles decimals', () => expect(modulo(5.5, 2)).toBe(1.5));
  test('throws on modulo by zero', () => {
    expect(() => modulo(5, 0)).toThrow('Modulo by zero is not allowed.');
  });
});

describe('power', () => {
  test('2 ^ 3 = 8', () => expect(power(2, 3)).toBe(8));
  test('exponent of zero gives 1', () => expect(power(5, 0)).toBe(1));
  test('exponent of one gives the base', () => expect(power(7, 1)).toBe(7));
  test('negative exponent gives a fraction', () => expect(power(2, -2)).toBe(0.25));
  test('negative base with odd exponent', () => expect(power(-2, 3)).toBe(-8));
  test('fractional exponent', () => expect(power(9, 0.5)).toBe(3));
  test('0 ^ 0 = 1', () => expect(power(0, 0)).toBe(1));
});

describe('squareRoot', () => {
  test('sqrt(16) = 4', () => expect(squareRoot(16)).toBe(4));
  test('sqrt(0) = 0', () => expect(squareRoot(0)).toBe(0));
  test('sqrt(1) = 1', () => expect(squareRoot(1)).toBe(1));
  test('non-perfect square', () => expect(squareRoot(2)).toBeCloseTo(1.41421356, 7));
  test('decimal input', () => expect(squareRoot(0.25)).toBe(0.5));
  test('throws on negative numbers', () => {
    expect(() => squareRoot(-4)).toThrow('Square root of a negative number is not allowed.');
  });
});
