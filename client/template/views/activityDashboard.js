$("[name='switch-state']").bootstrapSwitch();

if (Meteor.isClient) {    
    Template.activityDashboard.rendered = function () {
        $("#engine-switch").bootstrapSwitch();
    };
}

Template.activityDashboard.helpers({
        days: function() {
            var days = new Array();
            var day  = new Object();
            day['id']   = 1;
            day['date'] = '12.03.2015';
            days.push(day);
            day  = new Object();
            day['id']   = 2;
            day['date'] = '11.03.2015';
            days.push(day);
            console.log("days");
            console.log(days);
            return days;
        },
        session: function(elem) {
            console.log("this");
            console.log(this);
            console.log("elem");
            console.log(elem);
            var sessions = new Array();
            var session  = new Object();
            session['id'] = 1;
            session['activity'] = 'running';
            session['activity_value'] = 30;
            session['start']    = '16:04';
            session['end']      = '17:06';
            sessions.push(session);
            session  = new Object();
            session['id'] = 1;
            session['activity'] = 'running';
            session['activity_value'] = 20;
            session['start']    = '18:04';
            session['end']      = '19:06';
            sessions.push(session);
            console.log(sessions);
            return sessions;
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
                'sessionTextKey': 'dailiyGraphText'+this.id,
            }
        },
        fillGraph : function(id) {
            console.log("Fill graph");
            console.log(id);
            Session.set('dailyGraphValue'+id.id, 8);
        }
        /*pie : function() {
            console.log("PieChart");
            // TODO get all sessions for this day
            
            console.log(this);
            return {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                width: "100",
                height: "100",
                title: {
                    text: null
                },
                tooltip: {
                    pointFormat: '<b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            },
                            connectorColor: 'silver'
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    //name: 'genre',
                    data: [
                        ['running'         ,   45.0],
                        ['walk'            ,      26.0],
                        ['no activity',          29.0]
                    ]
                }]
            };
        },*/
});
