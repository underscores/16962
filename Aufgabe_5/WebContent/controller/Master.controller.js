sap.ui.controller("de.integrata.training.16961.lesson.5.controller.Master", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf de.integrata.training.16961.lesson.5.controller.Master
*/
	onInit: function() {
		var oModel = new sap.ui.model.xml.XMLModel("model/bapicusdat.xml");
		sap.ui.getCore().setModel(oModel, "dataModel");
		
		var i18n = new sap.ui.model.resource.ResourceModel({
			bundleUrl: "i18n/i18n.properties"
		});
		sap.ui.getCore().setModel(i18n, "i18n");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf de.integrata.training.16961.lesson.5.controller.Master
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf de.integrata.training.16961.lesson.5.controller.Master
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf de.integrata.training.16961.lesson.5.controller.Master
*/
//	onExit: function() {
//
//	}
	
	toCustomerDetail: function(oControlEvent) {
		var oItem = oControlEvent.getSource();
		var oItemBindingContext = oItem.getBindingContext("dataModel");
		var oDetailPage = sap.ui.getCore().byId("IdCustomerDetails");
		
		oDetailPage.setBindingContext(oItemBindingContext, "dataModel");
	}

});