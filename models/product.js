define(["marionette"],
        function (Marionette) {

        	var product = Backbone.Model.extend({
				 defaults: {
				    "color":  "blue",
				    "quantity":1
				  }
			});

        	return product;
});