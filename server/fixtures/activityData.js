if ( (ActivityData.find({type: 'session'}).count() === 0) && ( Meteor.users.find().count() > 0)) {
    var userId = Meteor.users.findOne({});

    ActivityData.insert({
        userId: userId._id,
        type: 'session',
        activity: 'Cycling',
        activity_value: 20,
        fake: 1,
        start: new Date('2015-10-03T07:56:00.123Z'),
        end: new Date('2015-10-03T08:40:00.123Z'),
    });
    
    ActivityData.insert({
        userId: userId._id,
        type: 'session',
        activity: 'Cycling',
        activity_value: 20,
        fake: 1,
        start: new Date('2015-10-03T07:56:00.123Z'),
        end: new Date('2015-10-03T08:40:00.123Z'),
    });
    
    ActivityData.insert({
        userId: userId._id,
        type: 'session',
        activity: 'Swimming',
        activity_value: 10,
        fake: 1,
        start: new Date('2015-10-03T09:46:00.123Z'),
        end: new Date('2015-10-03T09:59:00.123Z'),
    });
    
    ActivityData.insert({
        userId: userId._id,
        type: 'session',
        activity: 'Running',
        activity_value: 20,
        fake: 1,
        start: new Date('2015-10-03T14:56:00.123Z'),
        end: new Date('2015-10-03T15:30:00.123Z'),
    });
    
    ActivityData.insert({
        userId: userId._id,
        type: 'session',
        activity: 'Cycling',
        activity_value: 10,
        fake: 0,
        start: new Date('2015-10-03T17:56:00.123Z'),
        end: new Date('2015-10-03T18:10:00.123Z'),
    });
    
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
