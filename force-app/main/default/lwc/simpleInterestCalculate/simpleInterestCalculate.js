import { LightningElement,track } from 'lwc';

export default class SimpleInterestCalculate extends LightningElement {

        @track currentOutput;
        principal;
        rateOfInterest;
        noOfYears;

        principalChangeHandler(event) {

           this.principal= parseInt(event.target.value);
        }
        timeChangeHandler(event) {

            this.noOfYears= parseInt(event.target.value);
         }

         rateChangeHandler(event) {

            this.rateOfInterest= parseInt(event.target.value);
         }

         resetButtonHandler() {
            this.principal = null;
            this.noOfYears = null;
            this.rateOfInterest = null;
            this.currentOutput=null;
            const inputFields = this.template.querySelectorAll('lightning-input');
            inputFields.forEach(input => {
                input.value = null;
            });
         
        }
 

         calculateSIHandler(){
            this.currentOutput='Simple Interest in '+(this.principal*this.rateOfInterest*this.noOfYears)/100;
         }


}