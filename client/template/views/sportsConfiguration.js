if (Meteor.isClient) {
    Template.sportsConfiguration.helpers({
        sports: [
            { text: "cycling",
              active: "active" },
            { text: "running" },
            { text: "swimming" }
        ]
    });
}
