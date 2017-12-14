sap.ui.jsview("de.integrata.training.16961.lesson.2.view.Motivation", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf de.integrata.training.16961.lesson.2.view.Motivation
	*/ 
	getControllerName : function() {
		return "de.integrata.training.16961.lesson.2.controller.Motivation";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf de.integrata.training.16961.lesson.2.view.Motivation
	*/ 
	createContent : function(oController) {
		
		var oSlider1 = new sap.m.Slider();
		oSlider1.setWidth("300px");
		oSlider1.attachChange(oController.onSliderChange);
		
		var oSlider2 = new sap.m.Slider({
			width: "300px",
			change: oController.onSliderChange
		});
		
 		return new sap.m.Page({
			title: "Title",
			content: [
				oSlider1,
				oSlider2
			]
		});
	}

});