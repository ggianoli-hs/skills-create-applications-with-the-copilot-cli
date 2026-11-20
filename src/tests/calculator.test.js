const { add, subtract, multiply, divide } = require('../calculator');

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
