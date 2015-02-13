(function($)){

	$.fn.pauland_modal_box = function(prop){


			var options = $.extend({
					height : "250",
					width : "500",
					title:"JQuery Modal Box Demo",
					description: "Example of how to create a modal box",
					top: "20%",
					left: "30%",
	}),prop);



			return this.click(function(e){

					add_block_page(){

						var block_page = $('<div class="pauland_modal_box">');

						$(block_page).appendTo('body');



					};
					add_popup_box();
					add_styles();

					$('.pauland_modal_box').fadin();

			});



			return this;


		};




})(JQuery);