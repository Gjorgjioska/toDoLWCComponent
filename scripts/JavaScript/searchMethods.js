// search method pominuva niz stringot i ja vrajka pozicijata
//na prvoto  sovpajgajne


//search methodite koristat regular expression

//eg expresion e niza od znaci  koj shto se koristat dokolku
//prebaruvame niz tekst zapocuva so /    /

const str1= "Please locate where 'locate' occurs !"

console.log(str1.search("w"))

//VRAJKA -1
console.log(str1.search("W"))


// може да го направат вашето пребарување
// многу помоќно (нечувствително на големи букви, на пример)

 //i  insenzitiv
console.log(str1.search(/W/i))


// MATCH
//Методот match() враќа array што ги содржи резултатите
// од совпаѓањето

const str2 = "The rain in SPAIN stays mainly in the plain"

 console.log(str2.match(/ain/))


 ///глобално пребарување за „ain“
 console.log(str2.match(/ain/g))


 //глобално пребарување за „ain“ без чувствителност
 // на големи букви
 console.log(str2.match(/ain/gi))

 //If a regular expression  не го вклучува модификаторот g 
 //(глобално пребарување), match() ќе го врати само првото 
 //појавување во низата.


 //Методот include() враќа true ако stringot  содржи
 // одредена вредност.

 
 const str4 = "Hello world, welcome to the universe."

 console.log(str4.includes("world"))

 //isto taka moz da mu dodadime vtor parametar,
 // Проверете дали низата вклучува world почнувајќи од позиција 12:
 
 
console.log(str4.includes("world",12))

//The startsWith() method returns true if a string begins with a specified value.
//Otherwise it returns false:


const str5 = "In our resort there is everything"

console.log(str5.startsWith("our"))
///Може да се одреди почетна позиција за пребарување

console.log(str5.startsWith("our",3 ))


//The endsWith() method returns true if a string ends with a specified value.
//Otherwise it returns false:

const str6 = "Our leisure world will inspire you"
console.log(str6.endsWith("you"))

//endsWith() is not supported in Internet Explorer.
//startsWith() is not supported in Internet Explorer.
//matchAll() does not work in Internet Explorer.



//means match either n is in the first position or  g is in the first position

//[ng]
// ` ninja  ginja vo ovoj sl samo prvata bukva mi e razl`


//this excludes set will match ecerything expect for a P in the first position  ^P


// [a-z] range // if we want to include all of the letters of the alphabet for this first position
//// ако сакаме да ги вклучиме сите букви од азбуката за оваа прва позиција