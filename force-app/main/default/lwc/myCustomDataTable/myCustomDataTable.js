import  LightningDatatable from 'lightning/datatable';
import clickableEmailTemplate from './clickableEmailTemplate.html';


export default class MyCustomDataTable extends LightningDatatable {

    static customTypes = {
        clickableEmail: {
            template: clickableEmailTemplate,
            standardCellLayout:true,
            typeAttributes: ['recordId'],
        
        },
}
}
 