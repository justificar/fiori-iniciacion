sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("logaligroup.invoices.controller.View1", {

            onInit: function () {
                const oJSONModel = new sap.ui.model.json.JSONModel();
                const oView = this.getView();
                oJSONModel.loadData("./model/SelectionScreenMenu.json");
                oView.setModel(oJSONModel, "selectionScreen");
            },

            onFilter: function (oEvent) {

            },

            onClearFilter: function (oEvent) {
                const oModelSelScreen = this.getView().getModel("selectionScreen");
                oModelSelScreen.setProperty("/CountryKey", "");
                oModelSelScreen.setProperty("/ShipName", "");

            }

        });
    });
