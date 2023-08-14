//strings vo Js se koristat za skldirajne na tekst
//i manip so nego 


const str="Your perfect holiday on the Baltic Seaincluding breakfast, \
dinner and selected drinks with meals. The recommendation of the house \
for your rest from two days to a week  "

  //methods

  //length
  console.log(str.length)


  //toUpperCase()se povikuva kako funkcija // gi pravi site bukvi golemi

  const str1="Fantastic view of the Baltic Sea"
 console.log(str1)
  console.log(str1.toUpperCase())


  //toLowerCase // mnogu cesto e koristeno posebno koga imme 
  //nekoi search funk kade shto sakame da go zemime inpitot
  // od korisnikot i da go stavime vo mali bukvi i da barame 
  //niz bazata ako e toa potrebno i ako imeme baza na pod 

  const str2= "DISCOERY BATH"

  console.log(str2.toLowerCase())



 //REPLACE 
 // zamena, prima 2 par
 //1.shto da smenime
 //2.so koja vrednost sakame da ja zamenime 

 const str3= "Enjoy and feel good -the first sweat lodge village in Germany welcomes you."
 
console.log(str3.replace("e", "--"))
//ovaj metod mi ja zamenuva samo prvata  a vo celiov string 


//replaceAll // ni pravi zamena na site vrednosti 

const str4= "Celebrate children's birthdays"
console.log(str4.replaceAll("e","??"))


 //slice(ni zema parce) treba da mu kazime kada da pocne i kade da zavrsi

 const str5 = "There are no courses on public holidays."

 console.log(str5.slice(21))
 console.log(str5.slice(0,8))
 //2 INDEKSI - OD KADE DA POCNE I KADE DA ZAVRSI 
 //so dodelen samo 1 parametar ja zema vrednosta od toj indeks
 //pa se do kraj 

//substring // raboti sl kako slice mu zadavame poceten i kraen
// indeks kade da zavrsi
//razlikata e dokolku jas vo substring zadadam pocetna vrednost -10 
//mi pecati od pocetok se bidejki negativnite vrednosti gi smeta kako 0
//-10 ==0 vo substring

const strX = "There are no courses on public holidays."


console.log(strX.substring(-10))




//SUBSTR prima dva par (1. mu kazuvame od kade da pocni 
//                      2.dolzinata(kolkava dolz da bidi stringot)

const str6 = "Gastronomy for bath and sauna visitors"

console.log(str6.substr(0,10))

///ako mu zadadam negativ vrednost pocnuva da broi odnazad 

console.log(str6.substr(-23))


//concat // spojuvajne// pridavajne (konket )//
//na mojot str mu zadavam dr str shto che se prilepi 
const str7= "You are welcome"

console.log(str7.concat("---in Ostsee Resort Damp---"))


// Trim //postkratuvajne na prazni mesta 
//mnogu e  korisno dokolku pravime nekoja validacija na inpit, ako sakame 
//da prov dokolu userot na greska ima vneseno space na pocetok ili kraj i da go izbrisime


const str8 = "       Please take you order    "
console.log(str8)
console.log(str8.trim())

///trimStart // brisi space samo na pocetok 
const str9 = "       Please take you order      "

console.log(str9)

console.log(str9.trimStart())


//trimEnd() brisi spae na krajot 

const str10 = "       Please take you order      "


console.log(str10)

console.log(str10.trimEnd())


///pristapuvajne na el vo stringot 

const str11 = "Take one element from the string"

//1 nacin
console.log(str11[17])

//2nacin //karakterAt // e so metod 

console.log(str11.charAt(17))


///split // podeluvajne
//dokolku moite vrednosti vo  str se podeleni so zapirki, 
//jas dolu vo zagradite mu vikam kako da mi gi podeli, vrz koj karakter
//da gleda za da gi podeli pr zapirki 
const str12 = "    Well-    Good-    Perfect-  NotBad"

console.log(str12)
console.log(str12.split("-"))

console.log(str12.replaceAll(" ", "").split("-"))
console.log(str12[3])

let string18= str12.replaceAll(" ", "").split("-")
console.log(string18[1])
//koga ke vidi zapirka ovoj string go stava vo poseben element


//indexOf 
//METOD KOJ SHTO NI vrajka index, pozicija na prvata
// pojava na elementot vo stringot

const str13 = "Please locate where locate occurs!"

console.log(str13.indexOf("s"))

//lastIndexOf() //go vrajka indexot  od posledniot el koj
//sto se pojavuva vo nizata 

const str14 = "Please locate where locate occurs!"

console.log(str14.lastIndexOf("c"))

//Both indexOf(), and lastIndexOf() return -1 if the text is not found:

// lastIndexOf() пребаруваат наназад (од крајот до почетокот)
//, што значи: ако вториот параметар е 25, пребарувањето 
//започнува на позицијата 25 и бара до почетокот на низата.


const str15  = "Please locate where 'locate' occurs!";
console.log(str15.length)

console.log(str15.lastIndexOf("h", 33))


