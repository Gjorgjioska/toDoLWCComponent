import { LightningElement } from 'lwc';

export default class HelloForEach extends LightningElement {

    contacts= [
       { id:1,
        Name:'Any Taylor',
        Title:'VP of Eng'
       },
       
        { id:2,
            Name:'Michael Jon ',
            Title:'VP of Sales'
       },
       { id:3,
        Name:'Jenifer My',
        Title:'CEO'
       }

    ]



}

// Every item in a list must have a key. When a list changes, the
//  framework uses the key to identify each item so that it can 
//  rerender only the item that changed. The key must be a string 
//  or a number, it can't be an object. You can’t use index as a value
//   for key