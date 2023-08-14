import LightningDatatable from 'lightning/datatable';
import customNameTemplate from './customName.html';
import customNumberTemplate from './customNumber.html';
import customNumberEditTemplate from './customNumberEdit.html';

export default class MyCustomTypeDatatable extends LightningDatatable {
    static customTypes = {
        customName: {
            template: customNameTemplate,
            standardCellLayout: true,
            typeAttributes: ['accountName'],
        },
        customNumber: {
            template: customNumberTemplate,
            editTemplate: customNumberEditTemplate,
            standardCellLayout: true,
            typeAttributes: ['status', 'min'],
        }
        // Other types here
    }
}