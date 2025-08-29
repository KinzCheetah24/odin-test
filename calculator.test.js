const calculator = require("./calculator");

test("Calculator", () => {
    expect(calculator.add(0, 0)).toBe(0);
    expect(calculator.add(0, 2)).toBe(2);
    expect(calculator.add(2, 2)).toBe(4);

    expect(calculator.substract(0, 0)).toBe(0);
    expect(calculator.substract(0, 2)).toBe(-2);
    expect(calculator.substract(3, 2)).toBe(1);

    expect(calculator.divide(0, 2)).toBe(0);
    expect(calculator.divide(2, 2)).toBe(1);
    expect(calculator.divide(9, 4)).toBe(2.25);

    expect(calculator.multiply(0, 0)).toBe(0);
    expect(calculator.multiply(2, 2)).toBe(4);
    expect(calculator.multiply(3, 2)).toBe(6);
});