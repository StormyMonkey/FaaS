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
                'sessionTextKey': 'dailiyGraphText'+this.id,
            }
        },
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
