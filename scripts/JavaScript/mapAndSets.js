///A JavaScript Set is a collection of unique values.

//Each value can only occur once in a Set.



// Create a Set
const letters = new Set(["a","b","c"]);


//create a Set and add values:

//Example
// Create a Set
const letters1 = new Set();

console.log(letters1)

// Add Values to the Set
letters1.add("a");
letters1.add("b");
letters1.add("c");

console.log(letters1)




//A Map holds key-value pairs where the keys can be any datatype.

//A Map remembers the original insertion order of the keys.

//You can create a Map by passing an Array to the new Map() constructor:

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);


  //da dodavame elementi vo map mozime so set() metodot)

  const fruits1 = new Map();

// Set Map Values
fruits1.set("apples", 500);
fruits1.set("bananas", 300);
fruits1.set("oranges", 200);


//The get() method gets the value of a key in a Map:

console.log(fruits1.get("apples"));    // Returns 500


//The has() method returns true if a key exists in a Map:


console.log(fruits1.has("oranges")); 

//regular expression.   /    / 
//I  case-insensitive
// [0-9]	Find any of the digits between the brackets	



// (x|y)	Find any of the alternatives separated with |

//Do a global search for any of the specified alternatives (red|green):



///Do a global search for digits in a string
//ako sakame da najdime nekoi cifri vo string odime so /d 


//\b Најдете совпаѓање на почетокот на зборот како овој

//pr : /\bWORD/

//ili na krajot na zborot  /WORD\b/


// Quantifiers koj sho gi definiraat kolicinite 

//n+ ===  Matches any string that contains at least one n

//n*	Matches any string that contains zero or more occurrences of n 

//n?	Matches any string that contains zero or one occurrences of n



//TEST( ) METHOD // TRUE ILI FALSE 

//GO KORISITME DOKOLKU SAKME DA PREBARUVAME NEKOJ KARAKTER VO STRINGOT

console.log(/e/.test("The best things in life are free!"))  //true 


//Using exec()    //и го враќа пронајдениот текст 


console.log(/c/.exec("For a complete reference"))


