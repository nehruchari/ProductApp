// Loading dependences and module to execute Marionette App
require( ["marionette",
          "../modules/RouterModule",
          "../modules/ControllerModule",
          "../modules/EventAggregatorModule",
          "../views/HeaderView",
          "../views/FooterView"
          ],
          function (Marionette, RouterModule, ControllerModule, EventAggregatorModule, HeaderView, FooterView) {
    // set up the app instance
    var MyApp = new Marionette.Application();

    // Define regions
    MyApp.addRegions({
      headerRegion: "#header-region",
      toolbarRegion: "#toolbar-region",
      mainRegion: "#main-region",
      footerRegion: '#footer-region'
    });

    // Initialize the app controller
    // Pass reference to Main Region to Controller
    var controller = new ControllerModule({
      mainRegion: MyApp.mainRegion,
      vent:MyApp.vent
    });

    // initialize the router
    MyApp.router = new RouterModule({
      controller : controller
    });

    // Initialize the app router if neccessary
    MyApp.addInitializer(function(options) {});

    MyApp.on("initialize:after", function(){

      // Creating a generic ItemView for Header
      var headerView = new HeaderView();

      // Add Header View to region to be render
      MyApp.headerRegion.show(headerView);

      // Creating a generic ItemView for Footer
      var footerView = new FooterView();

      // Add Header View to region to be render
      MyApp.footerRegion.show(footerView);

      MyApp.vent.on("myapp:home", function(){
        MyApp.router.navigate('', {trigger: true});
      });

      MyApp.vent.on("myapp:navigateToSummary", function(){
        MyApp.router.navigate('#summary', {trigger: true});
      });

      // Start Backbone history a necessary step for bookmarkable URL's
      Backbone.history.start();
    });

    MyApp.start({});
});