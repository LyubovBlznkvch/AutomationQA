import  assert  from "assert";
import { expect } from "chai";
import { Calculator } from "../src/calculator";

let calculator: any;
const ADDER_ERROR: string = "Numbers are added incorrectly!";
const SUBTRACTOR_ERROR: string = "Numbers are subtracted incorrectly!";
const MULTIPLIER_ERROR: string = "Numbers are multiplied incorrectly!";
const DEVIDER_ERROR: string = "Numbers are devided incorrectly!";


describe("Tests for calculator", () => {
    before("Create class instance", () => {
        calculator = new Calculator;  
    });
    it("Should add numbers correctly", () => {
        assert.equal(calculator.adder(3.3, 4), 7.3, ADDER_ERROR);
        assert.equal(calculator.adder(3, -4), -1, ADDER_ERROR);
        assert.equal(calculator.adder(0, -4), -4, ADDER_ERROR);
    });
    it("Should subtract numbers correctly", () => {
        assert.equal(calculator.subtractioner(4.4, 4.4), 0, SUBTRACTOR_ERROR);
        assert.equal(calculator.subtractioner(-3, -4), 1, SUBTRACTOR_ERROR);
        assert.equal(calculator.subtractioner(3, 0), 3, SUBTRACTOR_ERROR);
    });
    it("Should multiply numbers correctly", () => {
        assert.equal(calculator.multiplier(-3, -4), 12, MULTIPLIER_ERROR);
        assert.equal(calculator.multiplier(3.5, 1), 3.5, MULTIPLIER_ERROR);
        assert.equal(calculator.multiplier(0, 4), 0, MULTIPLIER_ERROR);
    });
    it("Should divide numbers correctly", () => {
        assert.equal(calculator.divider(12, 1.5), 8, DEVIDER_ERROR);
        assert.equal(calculator.divider(-12, 4), -3, DEVIDER_ERROR);
        assert.equal(calculator.divider(0, 4), 0, DEVIDER_ERROR);
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
        expect(calculator.adder(3, -4)).to.be.deep.equal(-1, ADDER_ERROR);
        expect(calculator.adder(3.3, 4)).to.be.deep.equal(7.3, ADDER_ERROR);
        expect(calculator.adder(0, 4)).to.be.deep.equal(4, ADDER_ERROR);
    });
    it("Should subtract numbers correctly", () => {
        expect(calculator.subtractioner(3, -4)).to.be.deep.equal(7, SUBTRACTOR_ERROR);
        expect(calculator.subtractioner(5.4, 4.4)).to.be.deep.equal(1, SUBTRACTOR_ERROR);
        expect(calculator.subtractioner(0, 4)).to.be.deep.equal(-4, SUBTRACTOR_ERROR);
    });
    it("Should multiply numbers correctly", () => {
        expect(calculator.multiplier(3, -4)).to.be.deep.equal(-12, MULTIPLIER_ERROR);
        expect(calculator.multiplier(3, 1.5)).to.be.deep.equal(4.5, MULTIPLIER_ERROR);
        expect(calculator.multiplier(0, -4)).to.be.deep.equal(0, MULTIPLIER_ERROR);
    });
    it("Should divide numbers correctly", () => {
        expect(calculator.divider(12, -4)).to.be.deep.equal(-3, DEVIDER_ERROR);
        expect(calculator.divider(12, 8)).to.be.deep.equal(1.5, DEVIDER_ERROR);
        expect(calculator.divider(0, 4)).to.be.deep.equal(0, DEVIDER_ERROR);
    });
    after("Delete class instance", () => {
        calculator = null;
    });
});
