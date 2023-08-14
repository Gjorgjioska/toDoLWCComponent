public with sharing class contactHierarchical {
    @AuraEnabled(cacheable=true)
    public static List<Account> getContactsForAccounts() {
        return [SELECT Name, (SELECT Id, FirstName, LastName, Email, Phone FROM Contacts) FROM Account];
    }
}