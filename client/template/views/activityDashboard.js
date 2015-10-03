$("[name='switch-state']").bootstrapSwitch();

if (Meteor.isClient) {    
    Template.activityDashboard.rendered = function () {
        $("#engine-switch").bootstrapSwitch();
    };
}