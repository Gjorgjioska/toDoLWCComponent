import { LightningElement, wire, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

import getNewCases from '@salesforce/apex/CaseController.getNewCasesForAccounts'

const actions = [
    { label: 'Edit', name: 'edit_record' }
];

const COLS = [{
    fieldName: 'Name',
    label: 'Account Name'
},
{
    fieldName: 'CaseNumber',
    label: 'New Cases',
    cellAttributes : {
        iconName: { fieldName : 'iconName'}
    }
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
   //функцијата wire() за преземање податоци од методот на Apex контролер наречен getNewCases. 
    @wire(getNewCases)
    //Добиените податоци потоа се обработуваат во функцијата wiredCases().
    wiredCases({error, data}) {
        //Функцијата прво проверува дали има грешки во преземените податоци и доколку ги има, го поставува својството this.error на објектот на грешка

        if (error) {
            // Handle error
            this.error = error;
    //ако податоците постојат, тие се обработуваат со нивно парсирање во низа со помош на JSON.stringify(), потоа нивно парсирање во објект JavaScript со помош на JSON.parse().
        } else if (data) {
            // Process record data
            var strData = JSON.parse( JSON.stringify( data ) );
            
            strData.map((row, index) => {
                if (row['Cases']) {
                    row._children = row['Cases']; //define rows with children 
                  //  delete row.Cases;
                    
                    let iconKey = "iconName";
                    row[iconKey] = 'standard:case';
                }     
            });
            this.myData = strData;
        }
    }
    
    handleRowAction(event) {
        const action = event.detail.action;
        const row = event.detail.row;
        switch (action.name) {
            case 'edit_record':
                this[NavigationMixin.Navigate]({
                    type: 'standard__objectPage',
                    attributes: {
                        objectApiName: 'Case',
                        actionName: 'edit',
                        recordId: row.Id
                    }
                });
                break;
        }
    }
}

//The NavigationMixin is a built-in mixin in LWC that provides a set of 
// navigation methods that can be used to navigate to different pages in a 
// Salesforce org, such as object record pages or lightning pages.