sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("naruto.gridlist.controller.View1", {

        onInit: function () {
            // var oDataModel = new JSONModel();
            // oDataModel.loadData("../model/data.json");
            // this.getView().setModel(oDataModel);
        },

        onSliderMoved: function (oEvent) {
            var fValue = oEvent.getParameter("value");
            this.byId("panelForGridList").setWidth(fValue + "%");
        },

        onItemPress: function (oEvent) {
            var oItem = oEvent.getParameter("listItem");
            var sPath = oItem.getBindingContext().getPath();  

            var encodedPath = encodeURIComponent(sPath);

            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("Detail", { path: encodedPath });
        }
    });
});
