import  assert  from "assert";
import { expect } from "chai";
import { Calculator } from "../src/calculator";

let calculator: any;
const adderError: string = "Numbers are added incorrectly!";
const subtractorError: string = "Numbers are subtracted incorrectly!";
const multiplierError: string = "Numbers are multiplied incorrectly!";
const deviderError: string = "Numbers are devided incorrectly!";


describe("Tests for calculator", () => {
    before("Create class instance", () => {
        calculator = new Calculator;  
    });
    it("Should add numbers correctly", () => {
        assert.equal(calculator.adder(3.3, 4), 7.3, adderError);
        assert.equal(calculator.adder(3, -4), -1, adderError);
        assert.equal(calculator.adder(0, -4), -4, adderError);
    });
    it("Should subtract numbers correctly", () => {
        assert.equal(calculator.subtractioner(4.4, 4.4), 0, subtractorError);
        assert.equal(calculator.subtractioner(-3, -4), 1, subtractorError);
        assert.equal(calculator.subtractioner(3, 0), 3, subtractorError);
    });
    it("Should multiply numbers correctly", () => {
        assert.equal(calculator.multiplier(-3, -4), 12, multiplierError);
        assert.equal(calculator.multiplier(3.5, 1), 3.5, multiplierError);
        assert.equal(calculator.multiplier(0, 4), 0, multiplierError);
    });
    it("Should divide numbers correctly", () => {
        assert.equal(calculator.divider(12, 1.5), 8, deviderError);
        assert.equal(calculator.divider(-12, 4), -3, deviderError);
        assert.equal(calculator.divider(0, 4), 0, deviderError);
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
        expect(calculator.adder(3, -4)).to.be.deep.equal(-1, adderError);
        expect(calculator.adder(3.3, 4)).to.be.deep.equal(7.3, adderError);
        expect(calculator.adder(0, 4)).to.be.deep.equal(4, adderError);
    });
    it("Should subtract numbers correctly", () => {
        expect(calculator.subtractioner(3, -4)).to.be.deep.equal(7, subtractorError);
        expect(calculator.subtractioner(5.4, 4.4)).to.be.deep.equal(1, subtractorError);
        expect(calculator.subtractioner(0, 4)).to.be.deep.equal(-4, subtractorError);
    });
    it("Should multiply numbers correctly", () => {
        expect(calculator.multiplier(3, -4)).to.be.deep.equal(-12, multiplierError);
        expect(calculator.multiplier(3, 1.5)).to.be.deep.equal(4.5, multiplierError);
        expect(calculator.multiplier(0, -4)).to.be.deep.equal(0, multiplierError);
    });
    it("Should divide numbers correctly", () => {
        expect(calculator.divider(12, -4)).to.be.deep.equal(-3, deviderError);
        expect(calculator.divider(12, 8)).to.be.deep.equal(1.5, deviderError);
        expect(calculator.divider(0, 4)).to.be.deep.equal(0, deviderError);
    });
    after("Delete class instance", () => {
        calculator = null;
    });
});
