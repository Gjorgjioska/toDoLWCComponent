public with sharing class ContForEmailTabela {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        return [ 
                        SELECT Name, Email, Phone 
                         FROM Contact
                         WITH SECURITY_ENFORCED
                     ];    }
}


