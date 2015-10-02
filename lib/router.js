Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
});

Router.route('/', {
    onBeforeAction: function() {
        this.redirect('start');
    }
});

Router.route('/start', {
    name: 'start',
    template: 'start',
});
