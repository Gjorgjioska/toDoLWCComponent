import { LightningElement, wire, track } from 'lwc';
import taskOwners from '@salesforce/apex/countTodoController.taskOwners';
import { getListUi } from 'lightning/uiListApi';





const columns = [
    { label: 'Owner Name', fieldName: 'ownerName', type: 'text' },
    { label: 'Task Count', fieldName: 'taskCount', type: 'number' }
];

export default class CountToDo extends LightningElement {
    columns = columns;
    taskCounts = [];


    @wire(taskOwners)

    wiredTaskOwners({ error, data }) {
        if (data) {
            this.taskCounts = data.map(result => {
                console.log(result, 'rezzzult')

                console.log(data, 'dataa')

                return {
                    // id: task.Id,
                    ownerId: result.OwnerId,
                    ownerName: result.Name,
                    taskCount: result.taskCount
                };
            });
        } else if (error) {
            console.error(error);
        }
    }

}
console.log(taskOwners, 'console.log(taskOwners)')