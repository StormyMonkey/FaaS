//users = new Mongo.Collection('users');


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
                    gender: message.gender,
                }
            });
        }
    },

});

Meteor.publish("ownUserData", function () {
    return Meteor.users.find({}, {fields: {'birthdate': 1, weight: 1, gender: 1}});
});
