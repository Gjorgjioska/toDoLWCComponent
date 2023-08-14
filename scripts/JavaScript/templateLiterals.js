// ``
//Back-Tics Syntax
//String Templates

//With template literals, you can use both single and double quotes inside a string:

const str1 = `He's often called "Johnny"`;
console.log(str1)
//Template literals allows multiline strings:

const str2 =
`The quick
brown fox
jumps over
the lazy dog`;

console.log(str2)

//Template literals allow variables in strings:

const firstName = "John";
const lastName = "Doe";

const fullName = `Welcome ${firstName} ${lastName}!`;
console.log(fullName)

//allow expressions in strings:


const cena = 10;
const parce = 225;

const total = `Total: ${(cena * parce + 20)}`;


console.log(total)
