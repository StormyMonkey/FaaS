if (Meteor.isClient) {
    Template.commitConfiguration.events({
        "submit form": function (event) {
            event.preventDefault();
            FlowRouter.go('/activitydashboard');
        }
    });
}
