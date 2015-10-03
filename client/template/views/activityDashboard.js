
if (Meteor.isClient) {
    Template.activityDashboard.rendered = function () {
        $("#engine-switch").bootstrapSwitch();
    };
}

Template.activityDashboard.helpers({
    sessiondata: function() {
        var dates = ActivityData.find({
            type: 'session'
        }, {sort: { start: -1}}).map(function(session) {
            return moment(session.start).format('LL');
        });
        console.log("dates: ", dates);
        dates = _.uniq(dates);
        sessions = _.map(dates, function(value, index) {
            return {
                date: value,
                id: index,
                sessions: getSessions(value)
            }
        });
        console.log('Sessions to report back to html');
        console.log(sessions);
        return sessions;
    },
    circularOptions: function() {
        //console.log("Graph circular Options");
        //console.log(this);
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
        //console.log("Fill graph");
        //console.log(data.hash.date_id);
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
        console.log('formatDate called');
        console.log(date);
        return moment(date).format('LLL');
    },
});


getSessions = function(day) {
    console.log("day");
    console.log(day);
    var sessionsCursor = ActivityData.find({type: 'session'});
    var sessionsArray = new Array();
    sessionsCursor.forEach(function(session){
        if(moment(session.start).format('LL') === day){
            sessionsArray.push(session);
        }
    });
    console.log(sessionsArray);
    console.log("return sessions: ");
    console.log(sessionsArray);
    return sessionsArray;
}
