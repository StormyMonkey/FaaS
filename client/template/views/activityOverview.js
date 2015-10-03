if (Meteor.isClient) {
    Template.activityOverview.helpers({
        activities: function() {
            return Activity.find({});
        },
    });
    Template.activityOverview.rendered = function() {
        $('.activity-switch').each(function() {
            $(this).bootstrapSwitch();
        })
    };
}
