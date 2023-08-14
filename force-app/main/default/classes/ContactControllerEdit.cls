public with sharing class ContactControllerEdit {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts( ) {
        return [
            SELECT AccountId, Id, FirstName, LastName, Title, Phone, Email
            FROM Contact
        //   WHERE AccountId = :accId
            WITH SECURITY_ENFORCED
            LIMIT 10
            ];
    }
}