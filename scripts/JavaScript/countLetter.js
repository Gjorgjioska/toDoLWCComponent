function countLetter(text,letter) {

    let count = 0;

    // Функцијата се повторува
 //над секој знак во низата и проверува дали е еднаква на буква. Ако е така, броењето
// се зголемува

    for(let i= 0; i <= text.length; i++) {
        if(text[i] === letter) {
            count ++;
        }

    }
// го враќа бројот на појавувања на букви во text

        return count;


  //    i < text.length vo ovoj uslov jas zadavam do koga da se
  // izvdsuva for loop

}

let text = "His followed carriage proposal entrance directly had elegance. Greater for cottage gay parties natural. Remaining he furniture on he discourse suspected perpetual. Power dried her taken place day ought the. Four and our ham west miss. Education shameless who middleton agreement how. We in found world chief is at means weeks smile.Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.";

let letter = 'h';
const letterFromCounter= countLetter(text, letter);
console.log(`The letter '${letter}' occurs ${letterFromCounter} times in the provided text.`);