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
        FlowRouter.go('/basic-info');
    });
}
