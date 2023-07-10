const Stack = require('./stack');

const stack = new Stack();

const test1 = '{}';
const test2 = '{}(){}';
const test3 = '()[[Extra Characters]]';
const test4 = '(){}[[]]';
const test5 = '{}{Code}[Fellows](())';
const test6 = '[({}]';
const test7 = '(](';
const test8 = '{(})';
const test9 = '{';
const test10 = ')';
const test11 = '[}';



console.log(stack.validatebrackets(test1)); 
console.log(stack.validatebrackets(test2)); 
console.log(stack.validatebrackets(test3)); 
console.log(stack.validatebrackets(test4)); 
console.log(stack.validatebrackets(test5)); 
console.log(stack.validatebrackets(test6));
console.log(stack.validatebrackets(test7));
console.log(stack.validatebrackets(test8));
console.log(stack.validatebrackets(test9));
console.log(stack.validatebrackets(test10));
console.log(stack.validatebrackets(test11));