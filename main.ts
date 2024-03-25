//  Q no 67

function addNumberAndString(number1:number,numberString:string){
   return number1 + Number(numberString)
}
console.log(addNumberAndString(6,"5"));

// Q no 68

function multiplyDecimal(num1:number,num2:number):number{
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(multiplyDecimal(0.1,0.2));

// Q no 68

function divideAndRemainder(dividend:number,divisor:number):{
    Quotient:Number;
    remainder:Number;}
   {
     let Quotient = Math.floor(dividend / divisor);
     let remainder = dividend % divisor
     return{
        Quotient,remainder
     };
   }
console.log(divideAndRemainder(7,5));
   