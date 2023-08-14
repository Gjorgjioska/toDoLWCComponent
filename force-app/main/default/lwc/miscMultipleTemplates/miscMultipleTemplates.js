import { LightningElement } from 'lwc';
import templateOne from './templateOne.html';
import templateTwo from './templateTwo.html';

export default class MiscMultipleTemplates extends LightningElement {

    showTemplateOne = true;

    render() {
        return this.showTemplateOne ? templateOne : templateTwo;
    }

    switchTemplate(){ 
        this.showTemplateOne = !this.showTemplateOne; 
    }
}

// The method starts with a ternary operator that checks if the value 
// of the "showTemplateOne" property is "true". If the value is true, 
// then the expression on the left side of the colon (templateOne) is
//  returned. If the value is false, then the expression on the right 
//  side of the colon (templateTwo) is returned.


//You may want to render a component with more than one look and feel,
// but not want to mix the HTML in one file. For example, one version 
//  of the component is plain, and another version displays an image 
//  and extra text. In this case, you can import multiple HTML templates 
//  and write business logic that renders them conditionally. 