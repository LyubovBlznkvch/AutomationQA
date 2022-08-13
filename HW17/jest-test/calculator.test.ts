import { Calculator } from "../src/calculator";

let calculator: any;

describe("Tests for calculator", () => {
    beforeAll(() => {
        calculator = new Calculator;  
    });
    test("Should add numbers correctly", () => {
        expect(calculator.numbersAdder(3, -4)).toStrictEqual(-1);
        expect(calculator.numbersAdder(3, 4.3)).toStrictEqual(7.3);
        expect(calculator.numbersAdder(0, -13)).toStrictEqual(-13);
    });
    test("Should subtract numbers correctly", () => {
        expect(calculator.numbersSubtractioner(3.6, 1)).toStrictEqual(2.6);
        expect(calculator.numbersSubtractioner(0, -3)).toStrictEqual(3);
        expect(calculator.numbersSubtractioner(-3, -4)).toStrictEqual(1);
    });
    test("Should multiply numbers correctly", () => {
        expect(calculator.numbersMultiplier(3, -4)).toStrictEqual(-12);
        expect(calculator.numbersMultiplier(3, 1.5)).toStrictEqual(4.5);
        expect(calculator.numbersMultiplier(3, 0)).toStrictEqual(0);
    });
    test("Should divide numbers correctly", () => {
        expect(calculator.numbersDivider(-12, 4)).toStrictEqual(-3);
        expect(calculator.numbersDivider(0, 4)).toStrictEqual(0);
        expect(calculator.numbersDivider(12, 1.5)).toStrictEqual(Math.round(8));
    });
    afterAll(() => {
        calculator = null;
    });
});
