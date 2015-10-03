FlowRouter.route('/', {
  name: "start",
  action: function(params, queryParams) {
    BlazeLayout.render('layout', {
      footer: "footer",
      main: "start",
      nav: "header",
    });
  }
});


FlowRouter.notFound = {
  action: function() {
    BlazeLayout.render('layout', {
      footer: "footer",
      main: "notFound",
      nav: "header",
    });
  }
};
