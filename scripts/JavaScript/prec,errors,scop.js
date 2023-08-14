//JavaScript Operator Precedence

//Предноста на операторот го опишува редоследот по кој операциите се извршуваат 
//Множењето (*) и делењето (/) имаат поголем приоритет од собирањето (+) и одземањето (-).

//Throw, and Try...Catch...Finally

////try дефинира блок на код што треба да се изврши (да се обиде).

//catch дефинира блок со код за да се справи со секоја грешка.

//finally дефинира блок на код што треба да се извршува без оглед на резултатот.

// throw  дефинира приспособена грешка.

function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try {
      if(x.trim() == "") throw "empty";
      if(isNaN(x)) throw "not a number";
      x = Number(x);
      if(x < 5) throw "too low";
      if(x > 10) throw "too high";
    }
    catch(err) {
      message.innerHTML = "Input is " + err;
    }
  }

  ///types of error 
  //Syntax Error


  //JavaScript has 3 types of scope:

// Block scope
// Function scope
// Global scope


//Variables declared inside a { } block cannot be accessed from outside the block:
//ostanuvaat vo blokot
function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }


  //Global JavaScript Variables

  //пром која што е креирана надвор од функц е глобална и можи
  //сегде да се повика 

  let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}