import { LightningElement, api} from 'lwc';

export default class ChildComponent extends LightningElement {

    @api message;


    @api childComp(name){
        this.message=name;
    }

    handleClick() {
        //create an obj custom Event 
        //prima 3 param 1-Ime na Eventot, 2-detail tuka pisuvame 
        //se shto sakame da pratime od nashata child comp

        const event = new CustomEvent('btnclick',{
            detail:{
                key:'001hdhhd1',
                value:'ApexHours'

            }
        });
        this.dispatchEvent(event);
    }
}

