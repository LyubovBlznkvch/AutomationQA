import { Calculator } from "../src/calculator";

let calculator: any;

describe("Tests for calculator", () => {
    beforeAll(() => {
        calculator = new Calculator;  
    });
    test("Should add numbers correctly", () => {
        expect(calculator.adder(3, -4)).toStrictEqual(-1);
        expect(calculator.adder(3, 4.3)).toStrictEqual(7.3);
        expect(calculator.adder(0, -13)).toStrictEqual(-13);
    });
    test("Should subtract numbers correctly", () => {
        expect(calculator.subtractioner(3.6, 1)).toStrictEqual(2.6);
        expect(calculator.subtractioner(0, -3)).toStrictEqual(3);
        expect(calculator.subtractioner(-3, -4)).toStrictEqual(1);
    });
    test("Should multiply numbers correctly", () => {
        expect(calculator.multiplier(3, -4)).toStrictEqual(-12);
        expect(calculator.multiplier(3, 1.5)).toStrictEqual(4.5);
        expect(calculator.multiplier(3, 0)).toStrictEqual(0);
    });
    test("Should divide numbers correctly", () => {
        expect(calculator.divider(-12, 4)).toStrictEqual(-3);
        expect(calculator.divider(0, 4)).toStrictEqual(0);
        expect(calculator.divider(6.75, 1.5)).toStrictEqual(4.5);
    });
    afterAll(() => {
        calculator = null;
    });
});
