if (Meteor.isClient) {
    Template.sportsConfiguration.helpers({
        sports: [
            {   nr: 0,
                text: "cycling",
                image: "cycle.gif",
                active: "active"
            },
            {   nr: 1,
                text: "running",
                image: "run.gif",
            },
            {   nr: 2,
                text: "swimming",
                image: "swim.gif",
            },
            {   nr: 3,
                text: "skating",
                image: "skate.gif",
            },
            {   nr: 4,
                text: "hiking",
                image: "walk.gif",
            }
        ]
    });

    Meteor.startup(function() {
        var slider = new Slider('#ex1', {
        	formatter: function(value) {
        		return 'Current value: ' + value;
        	}
        });
    });

}
