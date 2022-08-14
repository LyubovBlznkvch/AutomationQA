import  assert  from "assert";
import { expect } from "chai";
import { Calculator } from "../src/calculator";

let calculator: any;

describe("Tests for calculator", () => {
    before("Create class instance", () => {
        calculator = new Calculator;  
    });
    it("Should add numbers correctly", () => {
        assert.equal(calculator.numbersAdder(3.3, 4), 7.3, "Numbers are added incorrectly!");
        assert.equal(calculator.numbersAdder(3, -4), -1, "Numbers are added incorrectly!");
        assert.equal(calculator.numbersAdder(0, -4), -4, "Numbers are added incorrectly!");
    });
    it("Should subtract numbers correctly", () => {
        assert.equal(calculator.numbersSubtractioner(4.4, 4.4), 0, "Numbers are subtracted incorrectly!");
        assert.equal(calculator.numbersSubtractioner(-3, -4), 1, "Numbers are subtracted incorrectly!");
        assert.equal(calculator.numbersSubtractioner(3, 0), 3, "Numbers are subtracted incorrectly!");
    });
    it("Should multiply numbers correctly", () => {
        assert.equal(calculator.numbersMultiplier(-3, -4), 12, "Numbers are multiplied incorrectly!");
        assert.equal(calculator.numbersMultiplier(3.5, 1), 3.5, "Numbers are multiplied incorrectly!");
        assert.equal(calculator.numbersMultiplier(0, 4), 0, "Numbers are multiplied incorrectly!");
    });
    it("Should divide numbers correctly", () => {
        assert.equal(calculator.numbersDivider(12, 1.5), 8, "Numbers are devided incorrectly!");
        assert.equal(calculator.numbersDivider(-12, 4), -3, "Numbers are devided incorrectly!");
        assert.equal(calculator.numbersDivider(0, 4), 0, "Numbers are devided incorrectly!");
    });
    after("Delete class instance", () => {
        calculator = null;
    });
});

describe("Tests for calculator", () => {
    before("Create class instance", () => {
        calculator = new Calculator;  ;  
    });
    it("Should add numbers correctly", () => {
        expect(calculator.numbersAdder(3, -4)).to.be.deep.equal(-1, "Numbers are addded incorrectly!");
        expect(calculator.numbersAdder(3.3, 4)).to.be.deep.equal(7.3, "Numbers are addded incorrectly!");
        expect(calculator.numbersAdder(0, 4)).to.be.deep.equal(4, "Numbers are addded incorrectly!");
    });
    it("Should subtract numbers correctly", () => {
        expect(calculator.numbersSubtractioner(3, -4)).to.be.deep.equal(7, "Numbers are subtracted incorrectly!");
        expect(calculator.numbersSubtractioner(5.4, 4.4)).to.be.deep.equal(1, "Numbers are subtracted incorrectly!");
        expect(calculator.numbersSubtractioner(0, 4)).to.be.deep.equal(-4, "Numbers are subtracted incorrectly!");
    });
    it("Should multiply numbers correctly", () => {
        expect(calculator.numbersMultiplier(3, -4)).to.be.deep.equal(-12, "Numbers are multiplied incorrectly!");
        expect(calculator.numbersMultiplier(3, 1.5)).to.be.deep.equal(4.5, "Numbers are multiplied incorrectly!");
        expect(calculator.numbersMultiplier(0, -4)).to.be.deep.equal(0, "Numbers are multiplied incorrectly!");
    });
    it("Should divide numbers correctly", () => {
        expect(calculator.numbersDivider(12, -4)).to.be.deep.equal(-3, "Numbers are divided incorrectly!");
        expect(calculator.numbersDivider(12, 8)).to.be.deep.equal(1.5, "Numbers are divided incorrectly!");
        expect(calculator.numbersDivider(0, 4)).to.be.deep.equal(0, "Numbers are divided incorrectly!");
    });
    after("Delete class instance", () => {
        calculator = null;
    });
});
