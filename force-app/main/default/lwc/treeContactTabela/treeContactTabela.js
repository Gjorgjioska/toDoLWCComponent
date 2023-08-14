import { LightningElement, track, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getContactsForAccounts from '@salesforce/apex/contactHierarchical.getContactsForAccounts'

 const actions = [
     { label: 'Edit', name: 'edit_record' }
 ];

const COLS = [{
    fieldName: 'Name',
    label: 'Account Name'
},
{
    fieldName:'FirstName' + 'LastName' ,
    label: 'Contact First Name',
    cellAttributes : {
        iconName: { fieldName : 'iconName'}
    },
    // typeAttributes: {
    //     template: '{{Contact.FirstName}} {{Contact.LastName}}'
    // }
},

{
    fieldName: 'LastName',
    label: 'Last Name',
    
},
{
    fieldName: 'Phone',
    label: 'Phone',
    type:"Number"
    
},

{
    fieldName: 'Email',
    label: 'Email',
    
   
},
{ 
    type: 'action',
    label: 'Edit Record',
    typeAttributes: { 
      rowActions: actions,
      menuAlignment: 'right' 
    } 
}];

export default class MyTreeGrid extends NavigationMixin(LightningElement) {

    @track myData = [];
    columns = COLS;
    error;
    
    // Декораторот @track се користи за следење на промените во својството myData, кое е иницијализирано 
    // како празна низа. Променливата колони содржи низа од дефиниции на колони за мрежата на дрвото.


    @wire(getContactsForAccounts)
    wiredContacts({error, data}) {
        if (error) {
            // Handle error
            this.error = error;
        } else if (data) {
            // Process record data
            var strData = JSON.parse( JSON.stringify( data ) );
            //The strData variable is a copy of the record data returned by the wire service, converted to a string 
           // and then parsed back into a JavaScript object using JSON.parse. This is a common pattern for 
            //working with record data in Lightning Web Components.


            strData.map((row, index) => {
                if (row['Contacts']) {
                    row._children = row['Contacts']; //define rows with children 
                 //  delete row.Contacts;
                    
                    let iconKey = "iconName";
                    row[iconKey] = 'standard:contact';
                }     
            });
            this.myData = strData;
        }
    }
    
    handleRowAction(event) {
        const action = event.detail.action;
        // event.detail.action содржи информации за дејството на редот што е извршено, вклучувајќи го и името на дејството и сите параметри што му биле пренесени.
        const row = event.detail.row;
        //The event.detail.row property contains information about the row that was clicked
        switch (action.name) {
            case 'edit_record':
                this[NavigationMixin.Navigate]({
                    //Методот NavigationMixin.Navigate е стандарден метод за навигација обезбеден од NavigationMixin mixin,
                     //кој се увезува на врвот на датотеката JavaScript. Овој миксин обезбедува голем број на стандардни методи
                     // за навигација кои може да се користат за навигација помеѓу различни страници и компоненти во апликацијата Lightning.
                    type: 'standard__objectPage',
                    attributes: {
                        objectApiName: 'Contact',
                        actionName: 'edit',
                        recordId: row.Id
                    }
                });
                break;
        }
    }
}


