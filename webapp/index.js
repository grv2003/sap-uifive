sap.ui.define(
  ["sap/ui/core/ComponentContainer"],
  function (ComponentContainer) {
    "use strict";
    new ComponentContainer({
      name: "sap.ui.demo.walkthrough",
      settings: {
        id: "walkthrough",
      },
      async: true,
    }).placeAt("content");
  }
);

//Use sap.ui.define to define a new module.
//sap.ui.define([dependency library], function(doSomething))
//With "use strict":
//Using a variable without declaring it, is not allowed.
