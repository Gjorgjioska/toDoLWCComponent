import { LightningElement, wire } from 'lwc';
import CONTACT_ID_FIELD from '@salesforce/schema/Contact.Id';
import CONTACT_NAME_FIELD from '@salesforce/schema/Contact.Name';
import CONTACT_EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import CONTACT_PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import getContacts from '@salesforce/apex/ContForEmailTabela.getContacts';




const COLUMNS = [ 
 
    {label: 'Contact  Name',
     fieldName: CONTACT_NAME_FIELD.fieldApiName,
      type: 'text'
    },

    {label: 'Contact Email',
     fieldName: CONTACT_EMAIL_FIELD.fieldApiName,
      type: 'clickableEmail',
      typeAttributes: {
        recordId: {fieldName: CONTACT_EMAIL_FIELD.fieldApiName},
      }
    },

      {label: 'Contact Phone',
     fieldName: CONTACT_PHONE_FIELD.fieldApiName,
      type: 'phone'},
]
export default class DatatableEmail extends LightningElement {

    columns= COLUMNS;
   

    @wire(getContacts)
    contacts;

}

////koga chekliknime na emailot da go vidime kontaktot  na nova stranica 