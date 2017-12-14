sap.ui.define([
		"de/integrata/training/16961/lesson/5extd/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("de.integrata.training.16961.lesson.5extd.controller.Detail", {

			/**
			* Called when a controller is instantiated and its View controls (if available) are already created.
			* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			* @memberOf de.integrata.training.16961.lesson.5extd.controller.Detail
			*/
				onInit: function() {
					this.getRouter().getRoute("detailsRoute").attachPatternMatched(this._onRouteMatched, this);
				},

			/**
			* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			* (NOT before the first rendering! onInit() is used for that one!).
			* @memberOf de.integrata.training.16961.lesson.5extd.controller.Detail
			*/
			//	onBeforeRendering: function() {
			//
			//	},

			/**
			* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
			* This hook is the same one that SAPUI5 controls get after being rendered.
			* @memberOf de.integrata.training.16961.lesson.5extd.controller.Detail
			*/
			//	onAfterRendering: function() {
			//
			//	},

			/**
			* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
			* @memberOf de.integrata.training.16961.lesson.5extd.controller.Detail
			*/
			//	onExit: function() {
			//
			//	}
				
			_onRouteMatched: function(oEvent) {
				var sCustomerId =  oEvent.getParameter("arguments").customerId;
				
				this.getView().bindElement({
					model: "dataModel",
					path: "/BapiscudatSet/" + (parseInt(sCustomerId) - 1)
				});
			}
		});

	}
);