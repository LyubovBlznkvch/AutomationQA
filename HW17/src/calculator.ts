export class Calculator {
    constructor() {};
    public numbersAdder(firstNumber: number, secondNumber: number) {
            return firstNumber + secondNumber;  
        };
    public numbersSubtractioner(firstNumber: number, secondNumber: number) {
            return firstNumber - secondNumber;  
        };
    public numbersMultiplier(firstNumber: number, secondNumber: number) {
        if (firstNumber < 0 && secondNumber === 0 ) {
            return Math.abs(firstNumber * secondNumber)
        } else if (firstNumber === 0 && secondNumber < 0 ) {
            return Math.abs(firstNumber * secondNumber)
        } else {
            return firstNumber * secondNumber;  
        };
    };
    public numbersDivider(firstNumber: number, secondNumber: number) {
            return firstNumber / secondNumber; 
    };
}
