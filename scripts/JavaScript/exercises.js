




//task 1 

color = ["Blue ", "Green", "Red", "Orange", "Violet"];
n = ["1st","2nd","3rd","4th", "5th"];

for( i = 0; i < color.length; i++) {
    console.log(n[i] +" " + color[i])
}


let s =color.length-1;
for ( i =0; i <color.length; i++) {
   
    console.log(n[i] +" " + color[s])
    s--
}

// da se smeni reverse 
//nozata vo obraten redosled 

const reverseArr = [];
for (i= color.length-1; i>=0; i-- ){
    reverseArr.push(color[i])
}
console.log(reverseArr)


// task 2 
for ( k = 5;  k > 0; k--) {
    let stars = ""
    for(j=0; j< k; j++) {
        stars = stars + "*"
        
    }
    console.log(stars)
}






//task 3 
//sorting list 

const sortArr = [3,4,10,20,11,7]
console.log(sortArr.sort(function(a,b) {return a - b}))

//if else 
for(i=0; i< sortArr.length; i++){
if (sortArr[i] === 3) {
    console.log("Home Page")
} if (sortArr[i] === 4) {
    console.log ("My Profile")
} if (sortArr[i] === 7) {
    console.log("All cases")
} if (sortArr[i] === 10) {
    console.log("Reports")
} if (sortArr[i] === 11) {
    console.log("Settings page")
} if (sortArr[i] === 20) {
    console.log("Page Error")
}
}


///switch 
let text= ""
for (h=0; h < sortArr.length; h++)
{
  /// console.log(sortArr.length)
    switch (sortArr[h]) {
        case 3:
            console.log("Home page")
            break;

        case 4:
          console.log("My profile")
          break;
        case 7:
            console.log("All cases")
            break;
        case 10:
            console.log("Reports")
            break;
        case 11: 
            console.log("Settings page")
            break;
        case 20: 
            console.log("Page Error")
            break;
        default:
            console.log(" ")
      }
}



//task4 

// Write a JavaScript program to display the current day and time in the following 

//Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38

let  daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];


let date = new Date()
let today = daylist[date.getDay()]
let hours = date.getHours()
let min = date.getMinutes()
let sec = date.getSeconds()

console.log(`Today is ${today}`)

console.log(`Current time is  ${hours} : ${min} : ${sec}`)

//task5
//Write a JavaScript program to find 1st January 
//is being a Sunday between 2014 and 2050

for (let year = 2014; year <= 2025; year++) {
    var d = new Date (year, 0,1)
        if( d.getDay() === 0 )
        console.log(`1st January is being a Sunday  ${year}`)
}

//Write a JavaScript program to check two given numbers
// and return true if one of the number is 50 or if their sum is 50

function test50( x,y){

    return ((x===50 || y===50) || (x + y == 50) )

}
console.log(test50(50, 50))
console.log(test50(20, 50))
console.log(test50(20, 20))

//tasks 6
//so cocncat 
let text5 = " "
let firstName = "Марина"
let lastName = "Ѓорѓиоска"
let dateOfBirth = "15.10.1998"
let city = "Прилеп"
let firm = "IW Connect"
text = firstName.concat(" "+lastName + " родена на : "+  dateOfBirth, " во " + city+ "нашата нова вработена во " + firm)


console.log(text)



//tasks 7 
//sekogas koga ima # pec el vo nova niza
//split vrajka array 
//milka#marina#nate
 
const names = "    Marina * Nate * Milka   * Kate"
console.log(names)

console.log(names.replaceAll(" ","").split("*"))





