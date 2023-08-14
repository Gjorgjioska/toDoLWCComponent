import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class ClickableEmail extends NavigationMixin(LightningElement) {
@api recordId;
@api email

    navigateToRecord(event) {
        Event.preventDefault();
        this[NavigationMixin.GenerateUrl]({
            type:'standars__recordPage',
            attributs: {
                recordId:this.recordId,
                actionName:'view'
            }
        }).then(url=>{window.open(url)});
       


    }
}