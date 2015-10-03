Template.header.helpers({
    activeRouteClass: function ( /* route names */ ) {
        var args = Array.prototype.slice.call(arguments, 0);
        args.pop();

        var active = _.any(args, function (name) {
            return Router.current() && Router.current().route.getName() === name
        });

        return active && 'active';
    },
    userSignedIn: function (){
        if (!!Meteor.userId()){
            return true;
        }
        return false;
    },
    userIcon: function(){
        var user = Meteor.user();
        return user.services.google.picture;
    }
});
