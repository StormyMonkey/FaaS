
Meteor.methods({

    updateBasicInformation: function(message) {

        var userid = Meteor.userId;
        var users = Meteor.users;

        if (Meteor.isServer) {
            logger.info("updating user information", userid);
        }

        if (!users.findOne(userid)) {
            throw new Meteor.Error('invalid-user-data', 'user does not exist', userid);

        } else {
            users.update(userid, {
                $set: {
                    birthdate: message.birthdate,
                    weight: message.weight,
                }
            });
        }
    },
    updateActivityConfiguration: function(message) {
        var userid = Meteor.userId;
        var users = Meteor.users;

        if (Meteor.isServer) {
            logger.info("updating user activity information", userid);
        }

        if (!users.findOne(userid)) {
            throw new Meteor.Error('invalid-user-data', 'user does not exist', userid);

        } else {
            users.update(userid, {
                $set: {
                    activity_configuration: {
                        activity: {
                            id: message.id._id,
                            settings: {
                                amb: message.settings.amb,
                                reg: message.settings.reg,
                                rand: message.settings.rand,
                            }
                        },
                    }
                }
            });
        }
    },
    setGender: function(gender){
        if (gender === 'm' || gender === 'f'){
            var userid = Meteor.userId;
            Meteor.users.update(userid, {
                $set: {
                    gender: gender,
                }
            });
        }
    },
});

if(Meteor.isServer){
    Meteor.publish("ownUserData", function () {
        return Meteor.users.find({}, {fields: {'birthdate': 1, weight: 1, gender: 1}});
    });
}
