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


var privateRoutes = FlowRouter.group({
    triggersEnter: [requireLogin]
});


privateRoutes.route('/basic-info', {
    name: 'basicInfo',
    action: function(params, queryParams) {
        BlazeLayout.render('layout', {
            footer: 'footer',
            main: 'basicInfo',
            nav: 'header',
        });
    }
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



privateRoutes.route('/commit-configuration', {
    name: 'commmitConfiguration',
    action: function(params, queryParams) {
        BlazeLayout.render('layout', {
            footer: 'footer',
            main: 'commitConfiguration',
            nav: 'header',
        });
    }
});

privateRoutes.route('/activity-dashboard', {
    name: 'activityDashboard',
    action: function(params, queryParams) {
        BlazeLayout.render('layout', {
            footer: 'footer',
            main: 'activityDashboard',
            nav: 'header',
        });
    }
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
    if (Meteor.userId()) {
    } else {
        FlowRouter.go('/');
    }
}
