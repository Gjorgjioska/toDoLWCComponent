import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    areDetailsVisible = false;

    handleChange(event) {
        this.areDetailsVisible = event.target.checked;
    }


    
}



//Render DOM Elements Conditionally
//To render HTML conditionally, add the if:true|false