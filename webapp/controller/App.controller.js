sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";
  return Controller.extend("sap.ui.demo.walkthrough.App", {
    onOpenDialog: function () {
      this.getOwnerComponent().openHelloDialog();
    },
  });
});

//this.getOwnerComponent() pulls the model directly from the component.
//Not indirectly from a view’s parent that was not connected to the view at
//the time of the controller’s onInit method execution
