define(["marionette"], function (Marionette) {
  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      "": "home",
      "summary": "renderSummary"
    }
    
  });

  return Router;
});
