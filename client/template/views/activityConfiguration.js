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

                var activity = Activity.findOne({_id: FlowRouter.getParam('id')});
                var amb = $('#ambition-slider').data('slider').getValue();
                var reg = $('#regularity-slider').data('slider').getValue();
                var rand = $('#randomness-slider').data('slider').getValue();

                var activity_configuration = {
                    id: activity,
                    settings: {
                        amb: amb,
                        reg: reg,
                        rand: rand,
                    },
                };

                Meteor.call("updateActivityConfiguration", activity_configuration, function(error, result){
                    if(error){
                        return Errors.throw(error.reason);
                    }
                });

                console.log(activity_configuration);

                FlowRouter.go('/activityconfiguration');
            }
        });
    }

}
