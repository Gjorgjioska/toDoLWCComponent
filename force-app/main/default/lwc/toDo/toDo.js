import { LightningElement, track, wire, api } from 'lwc';
import getTasks from '@salesforce/apex/TodoController.getTasks';
import insertTask from '@salesforce/apex/TodoController.insertTask';
import deleteTask from '@salesforce/apex/TodoController.deleteTask';
import updateTask from '@salesforce/apex/TodoController.updateTask';
import updateTaskPriority from '@salesforce/apex/TodoController.updatePriority';
//import { getUserPhotoUrl } from '@salesforce/community/Id';
import getUserPhotoUrl from '@salesforce/apex/userController.getUserPhotoUrl';



import { NavigationMixin } from 'lightning/navigation';
import { refreshApex } from '@salesforce/apex';
import { getListUi } from 'lightning/uiListApi';
import { getRecord } from 'lightning/uiRecordApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';

import { updateRecord } from 'lightning/uiRecordApi';





const FIELDS = ['OwnerId'];

export default class Todo extends NavigationMixin(LightningElement) {
    @api taskId;
    @api editedValue;
    todoTasksResponse;
    processing = true;
    newTask = '';


    // * Array to store all the todo tasks
    @track todoTasks = [];


    refreshTodoList() {
        this.processing = true;
        refreshApex(this.todoTasksResponse)
            .finally(() => this.processing = false)
    }

    insertNewTask(event) {
        this.newTask = event.target.value;
    }
    addTaskToList(event) {
        refreshApex(this.newTask)

        //OGRANIC AKO NEMAME DATA 
        if (this.newTask == '') {
            return;
        }
        this.processing = true;
        insertTask({ subject: this.newTask })
            .then(result => {
                this.todoTasks.unshift({
                    id: this.todoTasks[this.todoTasks.length - 1] ? this.todoTasks[this.todoTasks.length - 1].id + 1 : 0,
                    name: this.newTask,
                    recordId: result.Id,
                    className: 'slds-item Normal',
                });
                this.newTask = '';
                console.log(this.todoTasks, 'this.todoTasks')
            })
            // .then((e) => getTodoTasks())
            .catch(error => console.log(error))
            .finally(() => this.processing = false);
        window.location.reload();

    }

    @track isDuplicateTask = false;
    @wire(getTasks)

    getTodoTasks(response) {
        //    refreshApex(this.getTasks);

        this.todoTasksResponse = response;
        let data = response.data;
        let error = response.error;

        if (data || error) {
            this.processing = false;
        }

        if (data) {
            console.log(data, '<===== data');
            this.todoTasks = [];
            data.forEach(task => {
                getUserPhotoUrl({ ownerId: task.OwnerId })
                    .then((result) => {
                        this.todoTasks.unshift({
                            id: task.Id,
                            name: task.Subject,
                            recordId: task.Id,
                            Priority: task.Priority,
                            className: 'slds-item ' + task.Priority,
                            buttonClassName: 'slds-item ' + task.Priority,
                            ownerId: task.OwnerId,
                            owner: task.Owner.Name,
                            getUserPhotoUrl: result.SmallPhotoUrl,
                            duplicateTask: task.Duplicate_task__c
                        });
                    })
                    .catch((e) => console.log(e))
            });
            console.log(this.todoTasks)
        } else if (error) {
            console.log(error);
            console.log("error");

        }
        //  console.log(duplicateTask, 'Duplicate_task__c tessgbh')

    }

    editTask(event) {
        //  refreshApex(this.getTasks);


        const taskId = event.target.dataset.todoTask.id;
        const subject = event.target.dataset.subject;
        this.taskId = todoTask.id;
        this.subject = subject;
        this.isModalOpen = true;
    }
    handleEditTodo(event) {
        //   refreshApex(this.getTasks);



        event.preventDefault();
        const taskId = event.target.getAttribute('data-taskid');
        const editTodo = this.template.querySelector(`[data-edit-input-id="${taskId}"]`);
        // ovde go pokazuvame inputot kade sto mozi da se vnesi novata vrednost
        editTodo.style.display = "block";
        const textToHide = this.template.querySelector(`[data-text-id="${taskId}"]`);
        const actionsEditDeleteIcons = this.template.querySelector(`[data-actions-id="${taskId}"]`);
        const actionSaveButton = this.template.querySelector(`[data-button-save-id="${taskId}"]`);
        const actionCancelButton = this.template.querySelector(`[data-button-cancel-id="${taskId}"]`);

        // ovde gi krieme tekstot i delete&edit buttonite
        textToHide.style.display = "none";
        actionsEditDeleteIcons.style.display = "none";
        actionSaveButton.style.display = "block";
        actionCancelButton.style.display = "block"
    }

    handleEditSave(event) {
        event.preventDefault();
        const taskId = event.target.getAttribute('data-taskid');
        const editTodo = this.template.querySelector(`[data-edit-input-id="${taskId}"]`);
        const editedValue = editTodo.value;
        const textToHide = this.template.querySelector(`[data-text-id="${taskId}"]`);
        textToHide.value = editedValue;

        console.log(editedValue, 'editedValue')

        updateTask({ taskId, Subject: editedValue })
            .then((result) => {
                console.log('rezult', result)
                this.isModalOpen = false;
                editTodo.style.display = "none";
                editTodo.value = editedValue;
                let inputValue = editTodo.value;
                console.log('inputValue= inputValue', inputValue)
                //  editTodo.value = editedValue
                // ovde go pokazuvame inputot kade sto mozi da se vnesi novata vrednost
                editTodo.style.display = "none";
                //   const fieldsSubject= event.target.getAttribute('data-subject')
                const textToHide = this.template.querySelector(`[data-text-id="${taskId}"]`);
                const actionsEditDeleteIcons = this.template.querySelector(`[data-actions-id="${taskId}"]`);
                const actionCancelButton = this.template.querySelector(`[data-button-cancel-id="${taskId}"]`);
                const actionSaveButton = this.template.querySelector(`[data-button-save-id="${taskId}"]`);
                // ovde gi krieme tekstot i delete&edit buttonite
                console.log(result.Subject, 'result.Subject')
                textToHide.innerText = editedValue; // stavi ja novata vrednost da se prikazi
                // textToHide.value = result.Subject; // stavi ja novata vrednost da se prikazi
                actionsEditDeleteIcons.style.display = "block";
                actionSaveButton.style.display = "none";
                textToHide.style.display = "block";
                actionCancelButton.style.display = "none"


            })
            .catch(error => {
                console.log(error, 'error')
                // Handle error
            });
    }


    updatePriority(event) {
        //  refreshApex(this.getTasks);



        const taskId = event.target.getAttribute('data-button-priority-id');
        const buttonPriority = event.target.getAttribute('data-priotirty-button-value');
        const button = event.target;


        const parent = button.parentElement
        const siblings = parent?.querySelectorAll('lightning-button-icon[data-priotirty-button-value]')

        siblings?.forEach(element => {
            element.setAttribute('data-active-priority', buttonPriority)
        })


        button.setAttribute('class', 'slds-p-around ' + buttonPriority)

        updateTaskPriority({ taskId, priority: buttonPriority })
            .then(result => {
                localStorage.setItem(`priority-color-${taskId}`, buttonPriority);
                console.log('Task priority updated: ', result);
            })
            .catch(error => {
                console.error('Error updating task priority: ', error);
            });
    }

    handleCancel(event) {

        const taskId = event.target.getAttribute('data-taskid');
        const editTodo = this.template.querySelector(`[data-edit-input-id="${taskId}"]`);
        const todoValueText = this.template.querySelector(`[data-text-id="${taskId}"]`);
        const actionsEditDeleteIcons = this.template.querySelector(`[data-actions-id="${taskId}"]`);
        const actionSaveButton = this.template.querySelector(`[data-button-save-id="${taskId}"]`);
        const actionCancelButton = this.template.querySelector(`[data-button-cancel-id="${taskId}"]`);

        todoValueText.style.display = "block";
        actionsEditDeleteIcons.style.display = "block";

        editTodo.style.display = "none"
        actionSaveButton.style.display = "none";
        actionCancelButton.style.display = "none"

    }

    deleteTaskFromList(event) {
        let idToDelete = event.target.name;
        let todoTasks = this.todoTasks;
        let todoTaskIndex;
        let recordIdToDelete;
        this.processing = true;

        for (let i = 0; i < todoTasks.length; i++) {
            if (idToDelete === todoTasks[i].id) {
                todoTaskIndex = i;
            }
        }

        recordIdToDelete = todoTasks[todoTaskIndex].recordId;
        console.log(recordIdToDelete);

        deleteTask({ recordId: recordIdToDelete })
            .then(result => {
                console.log(result);
                if (result) {
                    todoTasks.splice(todoTaskIndex, 1);
                } else {
                    console.log('Unable to delete task');
                }
                console.log(JSON.stringify(this.todoTasks))

            })
            .catch(error => console.log(error))
            .finally(() => this.processing = false);
        window.location.reload();


    }



    updateNewTask(event) {
        this.updateTask = event.target.value;
    }

    handleSave() {
        updateTask({
            taskId: this.selectedTask.recordId,
            taskName: this.editTaskName
        })
            .then(result => {
                console.log('Task updated successfully:', result);
                // Call refresh method to reload the updated task list
                this.refreshTodoTasks();
                // Close the edit modal dialog
                this.closeModal();
            })
            .catch(error => {
                console.error('Error updating task:', error);
                // Display error message to the user
                this.showToast('Error', 'Failed to update task', 'error');
            });
    }


}
