if (Meteor.isClient) {
    Template.activityConfiguration.helpers({
      activity: function() {
        var activity = Activity.findOne({_id: FlowRouter.getParam('id')});
        console.log("found post", activity);
        return activity;
      }
    })
}
