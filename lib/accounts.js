if (Meteor.isClient) {
    Accounts.ui.config({
        requestPermissions: {
            google: ['https://www.googleapis.com/auth/fitness.activity.write', 'https://www.googleapis.com/auth/fitness.body.write'],
        },
        requestOfflineToken: {
            google: true
        },
    });

    Accounts.onLogin(function() {
        if (!Sessions.get('loggedin')){
            FlowRouter.go('/basicinfo');
        }
        else {
            Sessions.set('loggedin', Meteor.userId());
        }
    });
}
