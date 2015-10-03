FlowRouter.route('/', {
    name: 'start',
    action: function(params, queryParams) {
        BlazeLayout.render('layout', {
            footer: 'footer',
            main: 'start',
            nav: 'header',
        });
    }
});

FlowRouter.route('/about', {
    name: 'about',
    action: function(params, queryParams) {
        BlazeLayout.render('layout', {
            footer: 'footer',
            main: 'about',
            nav: 'header',
        });
    }
});

FlowRouter.route('/contact', {
    name: 'contact',
    action: function(params, queryParams) {
        BlazeLayout.render('layout', {
            footer: 'footer',
            main: 'contact',
            nav: 'header',
        });
    }
});


var privateRoutes = FlowRouter.group({
    triggersEnter: [requireLogin]
});


privateRoutes.route('/basicinfo', {
    name: 'basicInfo',
    action: function(params, queryParams) {
        BlazeLayout.render('layout', {
            footer: 'footer',
            main: 'basicInfo',
            nav: 'header',
        });
    },
    subscriptions: function(params) {
        this.register('ownUserData', Meteor.subscribe('ownUserData'));
    },
});

privateRoutes.route('/activityconfiguration/:id', {
    name: 'activityConfiguration',
    action: function(params, queryParams) {
        BlazeLayout.render('layout', {
            footer: 'footer',
            main: 'activityConfiguration',
            nav: 'header',
        });
    },
    //subscriptions: function(params) {
    //    this.register('allActivity', Meteor.subscribe('allActivity'));
    //},
});

privateRoutes.route('/activityconfiguration', {
    name: 'activityOverview',
    action: function(params, queryParams) {
        BlazeLayout.render('layout', {
            footer: 'footer',
            main: 'activityOverview',
            nav: 'header',
        });
    },
    //subscriptions: function(params) {
    //    this.register('allActivity', Meteor.subscribe('allActivity'));
    //},
});



privateRoutes.route('/commitconfiguration', {
    name: 'commmitConfiguration',
    action: function(params, queryParams) {
        BlazeLayout.render('layout', {
            footer: 'footer',
            main: 'commitConfiguration',
            nav: 'header',
        });
    }
});

privateRoutes.route('/activitydashboard', {
    name: 'activityDashboard',
    action: function(params, queryParams) {
        BlazeLayout.render('layout', {
            footer: 'footer',
            main: 'activityDashboard',
            nav: 'header',
        });
    },
    subscriptions: function(params) {
        this.register('userSessionData', Meteor.subscribe('userSessionData'));
    },
});


FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render('layout', {
            footer: 'footer',
            main: 'notFound',
            nav: 'header',
        });
    }
};


function requireLogin(context, redirect, stop) {
    if (Meteor.userId()) {} else {
        FlowRouter.go('/');
    }
}
