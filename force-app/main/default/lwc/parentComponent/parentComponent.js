import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {

   message="I am from Parent Component";

    handleClick(){
        this.message="Message Changed"
       this.template.querySelector('c-child-component').childComp(this.message);
    }
    handleEvent(event){
        let key=event.detail.key
        let value = event.detail.value
        this.message = key+ ' '+ value;
    }
}