if (Meteor.isClient) {
    Template.activityConfiguration.helpers({
      activity: function() {
        var activity = Activity.findOne({_id: FlowRouter.getParam('id')});
        console.log("found post", activity);
        return activity;
      }
    })

    Template.activitySlider.rendered = function() {
        // Anything here will get executed right when the template
        // is finished rendering.
        $('#ambition-slider').slider();
        $('#regularity-slider').slider();
        $('#randomness-slider').slider();
    };

    if (Meteor.isClient) {
        Template.activitySlider.events({
            "submit form": function (event) {
                event.preventDefault();
                FlowRouter.go('/activityconfiguration');
            }
        });
    }

}
