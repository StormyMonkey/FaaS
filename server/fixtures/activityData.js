if ( (ActivityData.find({type: 'session'}).count() === 0) && ( Meteor.users.find().count() > 0)) {
    var userId = Meteor.users.findOne({});

    ActivityData.insert({
        userId: userId._id,
        type: 'session',
        activity: 'Running',
        activity_value: 30,
        fake: 0,
        start: new Date('2015-10-01T07:56:00.123Z'),
        end: new Date('2015-10-01T08:40:00.123Z'),
    });
    
    ActivityData.insert({
        userId: userId._id,
        type: 'session',
        activity: 'Skating',
        activity_value: 30,
        fake: 1,
        start: new Date('2015-10-01T07:56:00.123Z'),
        end: new Date('2015-10-01T08:40:00.123Z'),
    });

    ActivityData.insert({
        userId: userId._id,
        type: 'session',
        activity: 'Running',
        activity_value: 23,
        fake: 0,
        start: new Date('2015-10-02T09:20:00.123Z'),
        end: new Date('2015-10-01T09:50:00.123Z'),
    });

    ActivityData.insert({
        userId: userId._id,
        type: 'session',
        activity: 'Swimming',
        activity_value: 80,
        fake: 0,
        start: new Date('2015-09-11T14:56:00.123Z'),
        end: new Date('2015-09-11T15:40:00.123Z'),
    });
}
