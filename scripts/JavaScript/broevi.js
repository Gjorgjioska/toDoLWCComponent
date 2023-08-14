///Numbers can be written with or without decimals.

const number1 = 3.14;    // A number with decimals
console.log(number1)
const number = 3       // A number without decimals
console.log(number);

//Extra large or extra small numbers can be written with scientific (saentific) notation
////shorthand method of writing very small or veru lange num 


// 1 milion akko sakame da go napiseme 

const milion = 1e6  // 1 so 6 0
console.log(milion)


//za smoll numb mozime da go pravime istot sod od na e-
const smlNum = 1e-6;
console.log(smlNum)



//vo odnos na add na numbers and strings

//If you add two numbers, the result will be a number:

const x = 10
const y = 20
const z = x+y



//If you add two strings, the result will be a string concatenation:

const xx = "10";
const yy = "20";
const zz = x + y; // 1020


//JavaScript ќе се обиде да ги конвертира низите во броеви во сите нумерички операции: 
//osven + zatoa shto JavaScript го користи операторот + за да ги спои низите.

//NaN - Not a Number 
//NaN е резервиран збор за JavaScript што покажува дека бројот не е правен број.


const testNum = 100 / "Apple"
console.log(testNum)

//dokolku stringot vo sebe sodrzi broj operacijata ke bide izvrsena

const testNum1 = 100 / "10"
console.log(testNum1)

////You can use the global JavaScript function isNaN() to find out if a value is a not a number:

const testNum2 =  100 / "Apple";
console.log(isNaN(testNum2)) // dali ne e broj? true

////Infinity (or -Infinity) е вредноста што 
//JavaScript ќе ја врати ако пресметате број 
//надвор од најголемиот можен број.


let myNumbers = 2;
// Execute until Infinity
while (myNumbers != Infinity) {
  myNumbers = myNumbers * myNumbers;

  
}

console.log(myNumbers)

//4
//16
//256
//65536
//4294967296
//18446744073709552000
//3.402823669209385e+38
//1.157920892373162e+77
//1.3407807929942597e+154
//Infinity


//JavaScript BigInt променливите се користат за 
//складирање на големи цели броеви кои се премногу
// големи за да бидат претставени со нормален JavaScript Number.


//За да креирате BigInt, додајте n на крајот од цел број или повикајте BigInt():
const bigNum1 = 123456789012345678901234567890n;
console.log(bigNum1)


const bigsNum= BigInt("123456789012345678901234567890")
console.log(bigsNum)


//bigInt e nov datatype in js 
//Arithmetic between a BigInt and a Number is not allowed 
//Operators that can be used on a JavaScript Number can also be used on a BigInt.


//JavaScript Number Methods
//Returns a number as a string

let testNum4 = 4+6+9;
testNum4.toString();
//(123).toString();
//(100 + 23).toString();

//console.log(testNum4)
console.log((100 + 23).toString())


console.log("4 + 6 + 9".toString())



///toFixed() metod
//pecati niza so broj na decimali  napisan po nase barajne

//take a numb and it rounds it to the decimal places that we specifu

let PI = 3.14655789545

console.log (PI.toFixed(0))
console.log (PI.toFixed(2))
console.log (PI.toFixed(4))
console.log (PI.toFixed(6))


PI.toFixed(5)
console.log(PI)


//we specified how many numb to show after the decimal
