import { Calculator } from "../src/calculator";

let calculator: any;

describe("Tests for calculator", () => {
    beforeAll(() => {
        calculator = new Calculator;  
    });
    test("Should add numbers correctly", () => {
        expect(calculator.numbersAdder(3, 4)).toStrictEqual(7);
    });
    test("Should subtract numbers correctly", () => {
        expect(calculator.numbersSubtractioner(3, 4)).toStrictEqual(-1);
    });
    test("Should multiply numbers correctly", () => {
        expect(calculator.numbersMultiplier(3, 4)).toStrictEqual(12);
    });
    test("Should divide numbers correctly", () => {
        expect(calculator.numbersDivider(12, 4)).toStrictEqual(3);
    });
    afterAll(() => {
        calculator = null;
    });
});
