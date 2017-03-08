define(["marionette",
        "../models/product",
        "text!../templates/detail.tpl"], function(Marionette, Product, detailTpl ) {
    var FormView = Marionette.ItemView.extend({
          initialize: function(options){
            // Store EventAgreegator
            this.vent = options.vent;
            this.model = new Product();
            this.model.on("change:color", this.updateImage, this);
          },
          
          events: {
              
              'change #color,#quantity':'dropDownChange',
              'click #next':'showShippingWrap',
              'change #size-selection input[type=radio]':'setSize',
              'click #finish':'displaySummary'
          },

          setSize : function(e){
            this.model.set("size",$(e.currentTarget).val());
          },

          showShippingWrap:function(e){
            e.preventDefault();
            if(!this.model.get("size")){
              this.$("#errMsg").show();
            }else{
              this.$("#errMsg").hide();
              this.$("#shipaddress").show();
              $(e.currentTarget).hide();
            }
            
          },

          dropDownChange : function(e){
            var dd = e.currentTarget;
            var key = $(dd).attr("data-key");
            this.model.set(key,$(dd).val());
          },

          displaySummary : function(){
            var address = {};
            
            address.zipcode = this.$("#zipcode").val();
            if(!address.zipcode){
              this.$("#adrErrMsg").show();
              return;
            }

            address.addOne = this.$("#addOne").val();
            address.addTwo = this.$("#addTwo").val();
            address.city = this.$("#city").val();
            address.state = this.$("#state").val();
            this.model.set("address",address);
            // Trigger event to activate other View and Router
            this.vent.trigger("myapp:saveSummary", this.model);
            this.vent.trigger("myapp:navigateToSummary");
          },

          updateImage : function(){
            this.$("#productId").attr("src","images/"+this.model.get("color")+".jpg");
          },

          onBeforeRender: function(){
            
            this.template = _.template(detailTpl, this.model.toJSON());
            
          }
    });

    return FormView;

});
