$("[name='switch-state']").bootstrapSwitch();

if (Meteor.isClient) {
    Template.activityDashboard.rendered = function () {
        $("#engine-switch").bootstrapSwitch();
    };
}

Template.activityDashboard.helpers({
    sessiondata: function() {
        var dates = ActivityData.find({
            type: 'session'
        }).map(function(session) {
            return moment(session.start).format('LL');
        });
        console.log("dates: ", dates);
        dates = _.uniq(dates);
        return _.map(dates, function(value, index) {
            return {
                date: value,
                id: index,
                sessions: getSessions(value)
            }
        });
    },
    circularOptions: function() {
        console.log("Graph circular Options");
        console.log(this);
        return {
            'canvasSize': 250,
            'arcWidth': 10,
            'sessionValueKey': 'progressValue',
            'tweenDuration': 300,
            //'outerDivClass': 'dailyGraphOuter'+this.id,
            'innerDivClass': 'dailyGraph' + this.id,
            'containerId': 'dailyGraph' + this.id,
            'sessionValueKey': 'dailyGraphValue' + this.id,
            'sessionTextKey': 'dailyGraphText' + this.id,
        }
    },
    fillGraph: function(data) {
        console.log("Fill graph");
        console.log(data.hash.date_id);
        Session.set('dailyGraphValue' + data.hash.date_id, 8);
        Session.set('dailyGraphText' + data.hash.date_id, 'Progress');
    },
    isValidSession: function(session) {
        if (_.notNull(session.start) && _.notNull(session.end)) {
            return true;
        } else {
            return false;
        }
    }
});

Template.activityDashboardSessionList.helpers({
    formatDate: function(date) {
        return moment(date).format('LLL');
    },
});


getSessions = function(day) {
    var sessions = ActivityData.find({type: 'session'}).map(function(session){
            if (moment(session.start).format('LL') === day ){
                console.log("session", session);
                return session;
            }
        });
    return sessions;
}
