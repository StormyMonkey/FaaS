if (Meteor.isClient) {
    Template.sportsConfiguration.helpers({
        sports: [
            {   nr: 0,
                text: "cycling",
                active: "active"
            },
            {   nr: 1,
                text: "running"
            },
            {   nr: 2,
                text: "swimming"
            }
        ]
    });

    var slider = new Slider('#ex1', {
    	formatter: function(value) {
    		return 'Current value: ' + value;
    	}
    });

    $('.slider').slider()
}
