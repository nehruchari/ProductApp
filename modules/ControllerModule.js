define(["marionette",
        "../views/DetailView",
        "../views/SummaryView"],
        function (Marionette, DetailView, SummaryView) {

    var Controller = Marionette.Controller.extend({
        initialize : function(options) {
          // store a region that will be used to show the stuff rendered by this component
          this.mainRegion = options.mainRegion;
          this.vent = options.vent;
          var self = this;
          this.vent.on("myapp:saveSummary", function(model){
            self.summaryModel = model;
          });
        },
        start: function() {
            //TODO: code to start
        },

        /**
         * Initialized on start, without hash
         * @method
         */
         home :  function () {
             
            var detailView = new DetailView({
              vent: this.vent,
            });

            
            this.mainRegion.show(detailView);
            
        },

        renderSummary : function () {
          if(!this.summaryModel){
            this.vent.trigger("myapp:home");
            return;
          }

          var summary = new SummaryView({
            model: this.summaryModel
          });

          // Render view in main Region, removing previous view
          this.mainRegion.show(summary);
        }
    });

    return Controller;
});
