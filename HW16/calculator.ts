export function calculator(firstNumber: number, secondNumber: number, operation: '+' | "-" | '*' | '/' | '**', result: number) {
    switch (operation) {
        case '+': 
        return firstNumber + secondNumber;
        case '-': 
        return firstNumber - secondNumber;
        case '*': 
        return firstNumber * secondNumber;
        case '/': 
        return firstNumber / secondNumber;
        case '**':
        return firstNumber ** secondNumber;
    }
}
