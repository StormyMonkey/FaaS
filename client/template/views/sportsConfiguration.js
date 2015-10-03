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

    Template.sportsConfiguration.rendered = function() {
        // Anything here will get executed right when the template
        // is finished rendering.
        $('#ambition-slider').slider();
        $('#regularity-slider').slider();
        $('#randomness-slider').slider();
    };

}
