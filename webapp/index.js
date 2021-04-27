sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {
  "use strict";
  XMLView.create({
    viewName: "sap.ui.demo.walkthrough.view.App",
  }).then(function (oView) {
    oView.placeAt("content");
  });
});

//Use sap.ui.define to define a new module.
//sap.ui.define([dependency library], function(doSomething))
//With "use strict":
//Using a variable without declaring it, is not allowed.
