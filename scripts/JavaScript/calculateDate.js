//var date1, date2;  
//define two date object variables with dates inside it  

const date1 = new Date();  
const date2 = new Date ("01, 07, 2023");  

//calculate total number of seconds between two dates  
const total_seconds = Math.abs(date2 - date1) / 1000;  

//calculate days difference by dividing total seconds in a day  
const days_difference = Math.floor (total_seconds / (60 * 60 * 24));  
  
console.log( days_difference + "days left until Christmas!" );  



//my years
let d = new Date();


const gethisyYear = d.getFullYear();
const myBornYear =1998;

const res =(gethisyYear - myBornYear);
console.log( 'I have ' + res + 'years')





//get date
let date= new Date()

//You can use an array of names to return the month as a name:

//const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let text = ""
let getYear = date.getFullYear().toString()
let month = date.getMonth().toString()
let day = date.getDate().toString()
let hours = date.getHours().toString()
let minuts = date.getMinutes().toString()
let seconds = date.getSeconds().toString()


console.log(`Today is ${month},  ${getYear}, ${day} the time is ${hours} hour ${minuts} min and ${seconds} seconds `)

console.log('Today is ' + month+  ',' + getYear +', the time is '+ hours+ 'hour' +minuts+ 'min and' +seconds+ 'seconds' )
text= getYear.concat("-", month, "-", day, " the time is ", hours, " h ",  minuts, " min ", seconds, " sec " ) 
console.log(text)
