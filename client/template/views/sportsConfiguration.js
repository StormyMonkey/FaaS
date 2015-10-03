if (Meteor.isClient) {
    Template.sportsConfiguration.helpers({
        activities: function() {
            return Activity.find({}).map( function(activity, index) {
                activity.nr = index;
                return activity;
            });
        },
    });

    Meteor.startup(function() {
        var slider = new Slider('#ex1', {
            formatter: function(value) {
                return 'Current value: ' + value;
            }
        });
    });
}
