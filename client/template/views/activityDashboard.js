
if (Meteor.isClient) {
    Template.activityDashboard.rendered = function () {
        $("#engine-switch").bootstrapSwitch();
        if($("#switch-state").prop('checked', true)){
            Session.set('privacyEngine', 'yes');
        }else{
            Session.set('privacyEngine', 'no');
        }
    };
}

Template.activityDashboard.helpers({
    sessiondata: function() {
        var dates;
        var isRealData;
        console.log(Session.get('privacyEngine'));
        if(Session.get('privacyEngine') === false
            || Session.get('privacyEngine') === 'yes'){
            isRealData = 1;
        }else{
            isRealData = 0;
        }
        console.log(Session.get('privacyEngine'));
        if(isRealData){
            dates = ActivityData.find({
                    type: 'session'
                },
                {
                    sort: { start: -1}
                }).map(function(session) {
                return moment(session.start).format('LL');
            });
        }else{
            dates = ActivityData.find({
                    type: 'session',
                fake: isRealData
                },
                {
                    sort: { start: -1}
                }).map(function(session) {
                return moment(session.start).format('LL');
            });
        }
        console.log("dates: ", dates);
        dates = _.uniq(dates);
        sessions = _.map(dates, function(value, index) {
            var sessions = getSessions(value, isRealData)
            var activityvalues = _.pluck(sessions, 'activity_value');
            var daily =  _.reduce( activityvalues , function(sum, num){ return sum + num; }, 0);
            return {
                date: value,
                id: index,
                sessions: sessions,
                dailyActivity: daily
            }
        });
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
        Session.set('dailyGraphValue' + data.hash.date_id, data.hash.progress);
        Session.set('dailyGraphText' + data.hash.date_id, 'Progress');
    },
    isValidSession: function(session) {
        if (_.notNull(session.start) && _.notNull(session.end)) {
            return true;
        } else {
            return false;
        }
    },
    isPrivacyEngine: function() {
        if(Session.get('privacyEngine') === 'yes'){
            return true;
        }else{
            return false;
        }
    }
});

Template.activityDashboard.events({
    'change #switch-state' : function(event){
        if(event.currentTarget.checked){
            Session.set('privacyEngine', 'yes');
        }else{
            Session.set('privacyEngine', 'no');
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


getSessions = function(day, isRealData) {
    console.log("day");
    console.log(day);
    var sessionsCursor;
    if(isRealData){
        sessionsCursor = ActivityData.find({type: 'session'});
    }else{
        sessionsCursor = ActivityData.find({type: 'session', fake: 0});
    }
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
