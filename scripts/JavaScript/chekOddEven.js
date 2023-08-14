function checkOddEven(num1, num2) {

return (num1 % 2 === 1 && num2 % 2 === 0 || num1 % 2 === 0 && num2 % 2 === 1);


}


console.log(checkOddEven(1, 2));  
console.log(checkOddEven(27, 5));  
console.log(checkOddEven(3, 4));  
console.log(checkOddEven(4, 4));  