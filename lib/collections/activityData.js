ActivityData = new Mongo.Collection('ActivityData');

// server subscriptions handlers
if (Meteor.isServer) {
    // return all activity
    Meteor.publish("userSessionData", function() {
        return Activity.ActivityData({userId: Meteor.userId(), type: 'session'});
    });
}
