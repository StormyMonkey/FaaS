Accounts.ui.config({
    requestPermissions: {},
    requestOfflineToken: {
        google: true
    },
});

accountsUIBootstrap3.logoutCallback = function(error) {
    if (error)
        console.log("Error:" + error);

    FlowRouter.go('start');
}
