//  Q no 67
function addNumberAndString(number1, numberString) {
    return number1 + Number(numberString);
}
console.log(addNumberAndString(6, "5"));
// Q no 68
function multiplyDecimal(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(multiplyDecimal(0.1, 0.2));
// Q no 68
function divideAndRemainder(dividend, divisor) {
    var Quotient = Math.floor(dividend / divisor);
    var remainder = dividend % divisor;
    return {
        Quotient: Quotient,
        remainder: remainder
    };
}
console.log(divideAndRemainder(7, 5));
