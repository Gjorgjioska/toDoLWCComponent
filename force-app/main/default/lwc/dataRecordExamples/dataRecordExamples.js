import { LightningElement } from 'lwc';

export default class HelloExpressions extends LightningElement {
    firstName = '';
    lastName = '';

    handleChange(event) {
        const field = event.target.name;
        if (field === 'firstName') {
            this.firstName = event.target.value;
        } else if (field === 'lastName') {
            this.lastName = event.target.value;
        }
    }

    get uppercasedFullName() {
        return `${this.firstName} ${this.lastName}`.toUpperCase();
    }
}

// <!-- handleChange function sets the firstName and lastName properties
//  to the values that the user enters. 
// Функцијата handleChange ги поставува својствата firstName и lastName 
// на вредностите што ги внесува корисникот.-->

//  <!-- uppercasedFullName() getter combines and uppercases the names. -->