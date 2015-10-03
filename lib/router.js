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

privateRoutes.route('/sports-configuration', {
    name: 'sportsConfiguration',
    action: function(params, queryParams) {
        BlazeLayout.render('layout', {
            footer: 'footer',
            main: 'sportsConfiguration',
            nav: 'header',
        });
    }
});

privateRoutes.route('/commit-configuration', {
    privateRoutesname: 'commmitConfiguration',
    action: function(params, queryParams) {
        BlazeLayout.render('layout', {
            footer: 'footer',
            main: 'commitConfiguration',
            nav: 'header',
        });
    }
});


privateRoutes.notFound = {
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
