///FOR LOOPS
const cars= ['Audi', 'BMW', 'Golf', 'Porsche', 'Skoda', 'Ford'];
console.log(cars[2])
//koga sakam da izvrsam nekoj kod od novo i odnovo se do nekoja tocka 
//koristam for loop
console.log(cars.length)
//lenght pocnuva od 1 
//se dodeka  e pomalo od nizata i ke zasatani tolku kolku sho nas ni treba
//odnosno dolzinata -1, taka ke zastani
for ( let i=0; i < cars.length; i++) {
    console.log(cars[i])
    if(i === 3) break; // ke ja zapri nizata koga ke dojdi do ovoj element 
    
}
///FOR  OF will loop  trought property values 
const names =['John', 'Bob', 'Joe', 'Krist'];
//gi zema site value i gi assign vo ovaa NAME VARIJABLA
for (name of names) {
    console.log(name)
}
//Looping over a String
const language = "JavaScript"
for (lng of language){
    console.log(lng)
}
//FOR IN will loop trought property name оf one object
const user = {'firstName': 'John', 'lastName': 'Doe'}
//propertis vo ovaj obj mi se firstName i lastName
///  variable in object
for (let us in user) {
    console.log(user[us])
}
//WHILE Loop
// while loop were going to declare our index outside of the loop 
//while izvrsuva блок од код се додека одреден condition  is true.
let i = 0;
while(i < 10){
    i++
   // if(i === 5)  break/// ja prekinuvam nizata  kompletno 
    // tuka go imam i continue 
    if (i === 5 ) continue
    console.log(i);
}
// do while  //ќе го изврши блокот код еднаш, пред да провери дали 
//yсловот е вистинит, потоа ќе ја повторува јамката се додека условот е вистинит.
let ind = 12
do {
    // code block to be executed
    ind++
    if(ind === 11) continue
    console.log(ind);
  }while (ind < 12);
 // for each 
//high order array function 
 const animals = ['cat', 'dog', 'hourse', 'sheep', 'bird']
 animals.forEach( animal => {
    console.log(animal)
 } ) 