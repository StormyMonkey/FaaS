Activity = new Mongo.Collection('Activity');


// server subscriptions handlers
if (Meteor.isServer) {
    // return all activity
    Meteor.publish("allActivity", function() {
        return Activity.find({});
    });
}
