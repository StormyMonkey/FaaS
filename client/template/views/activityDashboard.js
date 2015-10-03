$("[name='switch-state']").bootstrapSwitch();

if (Meteor.isClient) {
    Template.activityDashboard.rendered = function () {
        $("#engine-switch").bootstrapSwitch();
    };
}

Template.activityDashboard.helpers({
        days: function() {
            var dates = ActivityData.find({type: 'session'}).map(function(session){
                    return moment(session.start).format('LL');
                }
            );
            dates = _.uniq(dates);
            var test = _.map(dates, function(value, index){ return {date: value, id: index}; });
            return test;
        },
        session: function(elem) {
            return ActivityData.find({type: 'session'});
        },
        circularOptions : function() {
            console.log("Graph circular Options");
            console.log(this);
            return {
                'canvasSize': 250,
                'arcWidth': 10,
                'sessionValueKey': 'progressValue',
                'tweenDuration': 300,
                //'outerDivClass': 'dailyGraphOuter'+this.id,
                'innerDivClass': 'dailyGraph'+this.id,
                'containerId': 'dailyGraph'+this.id,
                'sessionValueKey': 'dailyGraphValue'+this.id,
                'sessionTextKey': 'dailyGraphText'+this.id,
            }
        },
        fillGraph : function(data) {
            console.log("Fill graph");
            console.log(data.hash.date_id);
            Session.set('dailyGraphValue'+data.hash.date_id, 8);
            Session.set('dailyGraphText'+data.hash.date_id, 'Progress');
        },
});
