sap.ui.define([
		"sap/ui/core/UIComponent",
		"sap/ui/core/routing/Router"
	], function (UIComponent, Router) {
		"use strict";

		return UIComponent.extend("de.integrata.training.16961.lesson.5extd.Component", {

			metadata : {
				rootView: {
					viewName: "de.integrata.training.16961.lesson.5extd.view.App",
					type: "XML"
				},
				routing: {
					config: {
						routerClass: Router,
						viewType: "XML",
						viewPath: "de.integrata.training.16961.lesson.5extd.view",
						controlId: "IdSplitApp",
						controlAggregation: "detailPages",
						transition: "slide",
						async: true
					},
					routes: [
						{
							pattern: "",
							name: "main",
							target: [
								"master"
							]					
						},
						{
							pattern: "{customerId}",
							name: "detailsRoute",
							target: [
								"master",
								"details"
							]
						}
					],
					targets: {
						master: {
							controlAggregation: "masterPages",
							viewName: "Master",
							viewLevel: 1
						},
						details: {
							viewName: "Detail",
							viewLevel: 2
						}
					}
				}
			},
			
			init : function () {

				UIComponent.prototype.init.apply(this, arguments);
				
				var sRootPath = jQuery.sap.getModulePath("de.integrata.training.16961.lesson.5extd");
				
				var i18nModel = new sap.ui.model.resource.ResourceModel({
					bundleUrl: sRootPath + "/i18n/i18n.properties"
				});
				
				this.setModel(i18nModel, "i18n");
				
				var oModel = new sap.ui.model.xml.XMLModel(sRootPath + "/model/bapicusdat.xml")
				this.setModel(oModel, "dataModel");

				this.getRouter().initialize();
			}
		});
	}
);
