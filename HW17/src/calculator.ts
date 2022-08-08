export class Calculator {
    constructor() {};
    public numbersAdder(firstNumber: number, secondNumber: number, operation: '+') {
        if (operation == '+') {
            return firstNumber + secondNumber;  
        }
    };
    public numbersSubtractioner(firstNumber: number, secondNumber: number, operation: '-') {
        if (operation == '-') {
            return firstNumber - secondNumber;  
        }
    };
    public numbersMultiplier(firstNumber: number, secondNumber: number, operation: '*') {
        if (operation == '*') {
            return firstNumber * secondNumber;  
        }
    };
    public numbersDivider(firstNumber: number, secondNumber: number, operation: '/') {
        if (operation == '/') {
            return firstNumber / secondNumber;  
        }
    };

}
