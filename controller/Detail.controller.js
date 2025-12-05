sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("naruto.gridlist.controller.Detail", {

        onInit: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("Detail").attachPatternMatched(this._onMatched, this);
        },

        _onMatched: function (oEvent) {
            var encodedPath =oEvent.getParameter("arguments").path;
            

            var decodedPath = decodeURIComponent(encodedPath); 

            var data = this.getView()
                .getModel()
                .getProperty(decodedPath);

            this.getView().setModel(new JSONModel(data), "detail");
        },

        onImagePress: function () {
            var oView = this.getView();

            if (!this._oImageDialog) {
                this._oImageDialog = new sap.m.Dialog({
                    title: "Zoomed Image",
                    contentWidth: "90%",
                    contentHeight: "90%",
                    stretch: true,   
                    content: [
                        new sap.m.Image({
                            src: "{detail>/image}",
                            width: "100%",
                            height: "100%",
                            densityAware: false
                        })
                    ],
                    endButton: new sap.m.Button({
                        text: "Close",
                        press: function () {
                            this._oImageDialog.close();
                        }.bind(this)
                    })
                });

                oView.addDependent(this._oImageDialog);
            }

            this._oImageDialog.open();
        },

        onBack: function () {
            window.history.back();
        }
    });
});
