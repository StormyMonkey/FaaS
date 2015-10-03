if (Meteor.isClient) {

    Template.basicInfo.events({

        "submit form": function (event) {
            event.preventDefault();

            console.log(event);

            var birthdate = event.target.birthdate.value;
            var weight = event.target.weight.value;

            var basic_information = {
                birthdate: birthdate,
                weight: weight,
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
                    // Prevent default form submit
                    return false;
                }
            });

            FlowRouter.go('/activityconfiguration');
        },
        "click #gender-male": function(e) {
            Meteor.call("setGender", 'm', function(error, result){
                if(error){
                    return Errors.throw(error.reason);
                }
            });
        },
        "click #gender-female": function(e) {
            Meteor.call("setGender", 'f', function(error, result){
                if(error){
                    return Errors.throw(error.reason);
                }
            });
        }
    });

    Template.basicInfo.helpers({
        basicinfo: function() {
            return Meteor.users.findOne(Meteor.userId);;
        },
        isMale: function(gender) {
            return gender === 'm';
        }
    });
}
