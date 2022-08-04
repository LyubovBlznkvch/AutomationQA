import { customChecker } from "./custom-checker"

// positive tests
customChecker(2, 2, '+', 4);
customChecker(10, 3, '-', 7);
customChecker(3, 4, '*', 12);
customChecker(12, 3, "/", 4);
customChecker(3, 1, "**", 3);

//negative tests
customChecker(2, 2, '+', 5);
customChecker(10, 3, '-', 71);
customChecker(3, 4, '*', 121);
customChecker(12, 3, '/', 8);
customChecker(3, 5, "**", 3);