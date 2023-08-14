const calculateButton = document.getElementById('calculate-button');
calculateButton.addEventListener('click', calculate);

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', reset);
   
   function calculate() {
        let input1 = document.getElementById("input1").value;
        let input2 = document.getElementById("input2").value;
        let operator = document.getElementById("operator").value;
        switch (operator) {
            case '+':   
               document.getElementById("result").innerHTML = parseFloat(input1) + parseFloat(input2);
                break;
            case '-':
                document.getElementById("result").innerHTML = parseFloat(input1) - parseFloat(input2);
        
                 break;
            case '*':
                document.getElementById("result").innerHTML = parseFloat(input1) * parseFloat(input2);
                break;
            case '/':
                document.getElementById("result").innerHTML = parseFloat(input1) / parseFloat(input2);
                break;
            default:
                document.getElementById("result").innerHTML = 'Invalid operator';
        }
    }


 function reset(){


    //i za input 1 i za inpu2 custom funk za brishejne 
     document.getElementById("input1").value = "";
     document.getElementById("input2").value = "";
     document.getElementById("operator").value = '+';
     document.getElementById("result").textContent = '';



 }





// function calculate() {

//     let input1 = document.getElementById("input1").value;
//     let input2 = document.getElementById("input2").value;
//     let result = parseFloat(input1) + parseFloat(input2);
//     document.getElementById("result").innerHTML = result;
// }
// function test(){


//     //i za input 1 i za inpu2 custom funk za brishejne 
//     document.getElementById("result").innerHTML = "";
// }




// function multiplication() {
//     let input1 = document.getElementById("input1").value;
//     let input2 = document.getElementById("input2").value;
//     let result1 = parseInt(input1) * parseInt(input2);
//     document.getElementById("result1").innerHTML = result1;
// }

// // const resetForm1 = document.getElementById("resetForm1")

// // resetForm1.addEventListener("click", (e) => resetForm1(e, "myForm1"))

// // function resetForm01() {
// //     alert('dsfsfs')
// //         // e.preventDefault() // da ne se refresira
// //         document.getElementById('myForm1').reset()


// // }

// function division() {
//     let input1 = document.getElementById("input1").value;
//     let input2 = document.getElementById("input2").value;
//     let result = parseInt(input1) / parseInt(input2);
//     document.getElementById("result").innerHTML = result;
// }



// function subtraction() {
//     let input1 = document.getElementById("input1").value;
//     let input2 = document.getElementById("input2").value;
//     let result = parseInt(input1) - parseInt(input2);
//     document.getElementById("result").innerHTML = result;
// }






// // Функцијата parseInt() се користи за конвертирање на вредностите 
// на низата на input1 и input2 во цели броеви, потоа врши собирање на овие цели броеви
//  и го доделува резултатот на променливата result.
//Методот getElementById се користи за избор на елементот според неговиот id, 

//innerHTML потоа се користи за поставување на содржината на HTML во тој 
//елемент на вредноста на променливата result.