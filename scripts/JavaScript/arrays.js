// vo arr mozime da zacuvame povejke vrednosti 

const cars =  ["Saab", "Volvo", "BMW" ]
console.log(cars)
//access elements in array 
let car = cars[0]

console.log(car)

//Changing an Array Element

let car1 = cars[0]= "Opel"
console.log(cars)

//Array Properties and Methods

// lenght == dolzinata na nizata ni ja dava 


const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)
let length = fruits.length;
console.log(length)


//ako sakam da pristapam do posledniot el vo nizata odam so -1

let fruit = fruits[fruits.length - 1];
console.log(fruit);



//to converts an array to a string 
//toString() 
console.log(fruits.toString())

//The join() method also joins all array elements into a string.

//It behaves just like toString(), but in addition you can specify the separator:


console.log(fruits.join(" * "))

//Popping and Pushing

//the pop() method removes the last element from an array

const colors = ["red", "blue", "black"]
console.log(colors)
let delEl = colors.pop()
console.log(colors) 

//The push() method adds a new element to an array (at the end):
//push mi add nov element na krajot od nizat
const colors1 = ["red", "blue", "black"]

let test = colors1.push("pushElementEnd")
let test2 = colors1.push("pushElementEnd2")

console.log(colors1)


//unshift // vmetnuvame nov elem na pocetokot vo nizata 

let test3 = colors1.unshift("firstElement")

console.log(colors1)

//shift // go brisam prviot element 

let test4 = colors1.shift()
console.log(colors1)


///Merging (Concatenating) Arrays


let girls= ['Ema', 'Tea']
let boys = ['Mek', 'Toni']

let girlsAndBoys= girls.concat(boys)

//JavaScript Array splice()
//The splice() method can be used to add new items to an array:


const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits1)

//prviov par (2) objasnuva kaj sakame noviot el da go add
//vtoriot parametar (0) kolku el sakame da izbrisime
//"Lemon", "Kiwi" novi elementi koi shto sakame da gi add

//Using splice() to Remove Elements

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.splice(0, 1);
console.log(fruits2)

// vo ovoj sl ke ni se izbrisi Banana

//metodot SLICE presekuva del od nizata//Овој пример 
//пресекува дел од низата почнувајќи од елементот на 
//низата 1 (orange):

const fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits3)
const citrus = fruits3.slice(2);
console.log(citrus)

//so dodavajne na nekoja vrednost vo ( ) jas mu kazuva kolku
//elementi da izostavi i da mi go ispecati rest of the array
//The slice() method creates a new array.
//The slice() method does not remove any elements from the source array.




//SORT Array 

//The sort() method sorts an array alphabetically:

const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits4)
fruits4.sort();
console.log(fruits4)

//reverse gi menuva el vo  nizata 
//Можете да го користите за сортирање низа по опаѓачки редослед:
//od posleden do prv 


const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits5)
//fruits5.sort();
fruits5.reverse();
console.log(fruits5)


//NUMERIC SORT
//Sort the array in ascending order:


let points = [40, 100, 1, 5, 25, 10];
console.log(points)

points.sort(function(a, b){return a - b});
console.log(points)


//descending

points.sort(function(a, b){return b - a});

console.log(points)



const items = [
    {  name: 'Bike',    price: 100  },
    {  name: 'TV',      price: 200  },
    {  name: 'Album',   price: 10   },
    {  name: 'Book',    price: 5    },
    {  name: 'Phone',   price: 500  },
    {  name: 'Computer',price: 1000 },
    {  name: 'Keyboard',price: 25   }

]
 //filter 
 //1pr: sakam da gi zemam site itemi so cena  pomala ili ednakva na 100 


 const filterItems = items.filter((item) => {
    return item.price <= 100

 })
 console.log(filterItems)
 //filter ne ni ja menuva orig niza 



 //MAP NI OVZM DA ZEMIME EDEN ARR I DA JA PRETVORIME VO DRUGA VO ODNOS NA NASITE BARAJNA
//Методот map() создава нова низа со извршување на функција на секој елемент од низата.
 //DA RECIME DEKA SAKAM DA GO ZEMAM IMETO NA SEKOJ ITEM VO NIZATA 

 const itemNames = items.map((item1)  => {
    return item1.name
 })
 console.log(itemNames)

 //FIMD METHOD TO FIND SINGLE OBJECT IN AN ARRAY 
 //ako sakam da pristapam do nekoj slecijalen el vo nizata 

 const foundItems = items.find((item2) => {
    return item2.name ==='Book'

 })

 console.log(foundItems)



 // SOME // VRJKA TRUE ILI FALSE 
 //PROVERUVAM DALI nekoj items vo arr ima cena pomala od 100$ 
//ako edna vrednost go ispolnuva ovaj uslov vrajka true
 const hasInexpensiveItems = items.some((item4) => {
        return item4.price < 100

 })

 console.log(hasInexpensiveItems)

//every 
//sekoj element treba da go ispolni uslovot za da dobieme true 

const hasInexpensiveItems1 = items.every((item5) => {
    return item5.price <= 100

})

console.log(hasInexpensiveItems1)



//REDUCE PRAVI operacija vo arrayot i vrajka kombinacija 


const total = items.reduce((currentTotal, item5) => {
    return item5.price + currentTotal

}, 0 )

console.log(total)


//includes 

const itemsInc = [1,2,3,6,5,4,,998,8]

const includesTwo = itemsInc.includes(2)


