if (Activity.find().count() === 0) {
    console.log("Creating Sports fixtures");

    Activity.insert({
        text: "cycling",
        image: "cycle.gif",
    });

    Activity.insert({
        text: "running",
        image: "run.gif",
    });
    Activity.insert({
        text: "swimming",
        image: "swim.gif",
    });
    Activity.insert({
        text: "skating",
        image: "skate.gif",
    });
}
