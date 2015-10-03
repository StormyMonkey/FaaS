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

FlowRouter.route('/basic-info', {
  name: "basic-info",
  action: function(params, queryParams) {
    BlazeLayout.render('layout', {
      footer: "footer",
      main: "basic-info",
      nav: "header",
    });
  }
});

FlowRouter.route('/sports-configuration', {
  name: "sports-configuration",
  action: function(params, queryParams) {
    BlazeLayout.render('layout', {
      footer: "footer",
      main: "sports-configuration",
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
