Template.basicInfo.events({

    "submit form": function (event) {
        event.preventDefault();

        console.log(event);

        var birthdate = event.target.birthdate.value;
        var weight = event.target.weight.value;
        var gender = event.target.gender;

        var basic_information = {
            birthdate: birthdate,
            weight: weight,
            gender: "w",
        }
        console.log(basic_information);

        Meteor.call("updateBasicInformation", basic_information, function(error, result){
            if(error){
                return Errors.throw(error.reason);
            }
            else {
                // Clear form
                event.target.birthdate = "";
                event.target.weight = "";
                event.target.gender = "";

                // Prevent default form submit
                return false;
            }
        });

        FlowRouter.go('/activityconfiguration');
    }
});
