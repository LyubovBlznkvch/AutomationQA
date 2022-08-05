import { calculator } from "./calculator"

export function customChecker(firstNumber: number, secondNumber: number, operation: "+" | "-" | "*" | "/" | "**", result: number) {
    if (calculator(firstNumber, secondNumber, operation) === result) {
        console.log("Successful!");
    } else {
        console.log("Failed!");
    }
}
