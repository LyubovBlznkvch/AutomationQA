import  assert  from "assert";
import { expect } from "chai";
import { Calculator } from "../src/calculator";

let calculator: any;

describe("Tests for calculator", () => {
    before("Create class instance", () => {
        calculator = new Calculator;  
    });
    it("Should add numbers correctly", () => {
        assert.equal(calculator.numbersAdder(3, 4, "+"), 7, "Numbers are addded incorrectly!");
    });
    it("Should subtract numbers correctly", () => {
        assert.equal(calculator.numbersSubtractioner(3, 4, "-"), -1, "Numbers are subtracted incorrectly!");
    });
    it("Should multiply numbers correctly", () => {
        assert.equal(calculator.numbersMultiplier(3, 4, "*"), 12, "Numbers are multiplied incorrectly!");
    });
    it("Should divide numbers correctly", () => {
        assert.equal(calculator.numbersDivider(12, 4, "/"), 3, "Numbers are devided incorrectly!");
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
        expect(calculator.numbersAdder(3, 4, "+").to.be.deep.equal(7, "Numbers are addded incorrectly!"));
    });
    it("Should subtract numbers correctly", () => {
        expect(calculator.numbersSubtractioner(3, 4, "-").to.be.deep.equal(-1, "Numbers are subtracted incorrectly!"));
    });
    it("Should multiply numbers correctly", () => {
        expect(calculator.numbersMultiplier(3, 4, "*").to.be.deep.equal(12, "Numbers are multiplied incorrectly!"));
    });
    it("Should divide numbers correctly", () => {
        expect(calculator.numbersDivider(12, 4, "/").to.be.deep.equal(3, "Numbers are divided incorrectly!"));
    });
    after("Delete class instance", () => {
        calculator = null;
    });
});
