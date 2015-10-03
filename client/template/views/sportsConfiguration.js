if (Meteor.isClient) {
    Template.sportsConfiguration.helpers({
        activities: function() {
            return Activity.find({}).map( function(activity, index) {
                activity.nr = index;

                if (index == 0) {
                    activity.active = 'active';
                }
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
