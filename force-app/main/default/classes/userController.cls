public with sharing class userController {
    @AuraEnabled(cacheable=true)
    public static User getUserPhotoUrl(String ownerId) {
        User user = [SELECT SmallPhotoUrl FROM User WHERE Id = :ownerId];
        return user;
    }
}

