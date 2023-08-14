public with sharing class TodoController {
    @AuraEnabled(cacheable=true)
    public static List<Task> getTasks() {
        return [ 
                SELECT Subject, Priority, OwnerId, Owner.Name, Duplicate_task__c
                FROM Task 
        //        WHERE OwnerId =:UserInfo.getUserId()
                WITH SECURITY_ENFORCED
            ];  
    }

    @AuraEnabled(cacheable=false)
    public static Task insertTask(String subject) {
        try {
            Task task = new Task(
                Subject = subject,
                OwnerId = UserInfo.getUserId(),
                Status = 'Not Started',
                Priority = 'Low'
            );
            insert task;
            return task;
        } catch(Exception e) {
            System.debug(e.getMessage());
        }
        return null;
    }
 
        @AuraEnabled(cacheable=false)
            public static Boolean deleteTask(Id recordId) {
                try {
                    Database.delete(recordId);
                    return true;
                } catch(Exception e) {
                    System.debug(e.getMessage());
                }
                return false;
            }

        @AuraEnabled(Cacheable=false)
        public static Task updateTask(String taskId, String Subject) {            
            try {
                Task  t = [SELECT Id, Subject FROM Task WHERE Id =: taskId];
                t.subject = Subject;
                update t;
                return t;
            } catch (Exception e) {
                System.debug(e.getMessage());
            }
            return null;
        }


        
        @AuraEnabled(Cacheable=false)
        public static Task updatePriority(String taskId, String priority ) {   
               
            try {
                Task  p = [SELECT Id, Priority FROM Task WHERE Id =: taskId];
                p.priority = priority;
                update p;
                return p;
            } catch (Exception e) {
                System.debug(e.getMessage());
            }
            return null;
        }
    }
    

