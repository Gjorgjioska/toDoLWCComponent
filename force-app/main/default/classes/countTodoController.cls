public with sharing class countTodoController {
    @AuraEnabled(cacheable=true)
    public static List<AggregateResult> taskOwners() {
        return [SELECT OwnerId, Owner.Name, COUNT(Id) taskCount FROM Task GROUP BY OwnerId, Owner.Name];

    }

} 
