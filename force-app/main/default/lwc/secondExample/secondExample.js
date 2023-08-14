import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {
    @track greeting = 'World';
    changeHandler(event) {

    //changeHandler koga i da ja smenive vrednosta vo input boksot
    // changeHandler ke bide povikan
     
        this.greeting=event.target.value;

        //event.target.value whatever you typed in THE CHECK BOX 
        //ke bide zacuvano vo this.greeting 
    }

}
 

// @track decorator makes the property reactiv 
// so whenewer the value of the properry changes 
// it will rendered the component

// @track decorator го прави property реактивен
// па секогаш кога вредноста на property се менува
// ќе ја рендерира компонентата
