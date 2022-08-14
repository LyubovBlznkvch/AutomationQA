export class Calculator {
    constructor() {};
    public adder(firstNumber: number, secondNumber: number) {
            return firstNumber + secondNumber;  
        };
    public subtractioner(firstNumber: number, secondNumber: number) {
            return firstNumber - secondNumber;  
        };
    public multiplier(firstNumber: number, secondNumber: number) {
        if (firstNumber < 0 && secondNumber === 0 ) {
            return Math.abs(firstNumber * secondNumber)
        } else if (firstNumber === 0 && secondNumber < 0 ) {
            return Math.abs(firstNumber * secondNumber)
        } else {
            return firstNumber * secondNumber;  
        };
    };
    public divider(firstNumber: number, secondNumber: number) {
            return firstNumber / secondNumber; 
    };
}
