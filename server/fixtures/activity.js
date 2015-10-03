if (Activity.find().count() === 0) {
    console.log("Creating Sports fixtures");

    Activity.insert({
        text: "Cycling",
        image: "cycle.gif",
    });

    Activity.insert({
        text: "Running",
        image: "run.gif",
    });
    Activity.insert({
        text: "Swimming",
        image: "swim.gif",
    });
    Activity.insert({
        text: "Skating",
        image: "skate.gif",
    });
}
