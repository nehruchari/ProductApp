define(["marionette",
        "text!../templates/summary.tpl"], function(Marionette, summaryTpl ) {
    var HiView = Marionette.ItemView.extend({
      initialize: function(options){
        // Assign dinamic variable to render in template
        this.model = options.model;
      },
      // Set the template with onBefore to avoid a timing issue with initilize.
      onBeforeRender: function(){
        this.template = _.template(summaryTpl, this.model.toJSON());
      },
    });

    return HiView;

});
