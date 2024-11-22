;(function($, window, document, undefined){

	// Defaults state
	var State = {
		visible			: "is-visible",
		hidden			: "is-hidden",
		active			: "is-active",
		open				: "is-open",
		close       : "is-close",
		dropdown    : "is-dropdown",
		completed		: "is-completed"
	}

	// Defaults element
	var Elements = {
		body 				: $("body, html"),
		appOverlay	: $(".app-overlay")
	}

	// Initialize
	function _init(){
		dealersFilter();
	}

	function dealersFilter() {

		var $config = this._dealersFilter,
			 	$container = $(".vvsgBayilik .turkey-map__list"),
				$turkey		 = $("#turkiye");

		$config = {
			container : $container,
			list      : $container.find("ul li"),

			turkey    : $turkey,
			g         : $turkey.find("g"),

			id        : null,

			data			: {
				province : "plaka-kodu"
			}
		}

		// List each
		$config.list.each(function(){
			var _this = $(this);
			$config.id = _this.attr("id");

			// "g" each
			$config.g.each(function(){
				var _this = $(this),
						id = _this.data( $config.data.province );
						

				// g == list 
				if ( id == $config.id ) _this.addClass( State.completed );

			});
		});


		// g "click" list "show"
		$config.g.on("click", function(){
			var _this = $(this)

			if ( _this.hasClass( State.completed ) ) {
				var id = _this.data( $config.data.province );

				Elements.body.animate({
					scrollTop : $config.container.position().bottom
				}, 500);

				$config.list.show();
				$config.list.not("#" + id).hide();
			}
		});


		dealersTurkeyMap();
	}

	function dealersTurkeyMap() {
		
		var $config = this._dealersTurkeyMap,
				$container = $(".vvsgBayilik .turkey-map__drawing");

		$config = {
			container 	: $container,
			el        	: $container.find("path"),

			name      	: $(".turkey-map__name"),

			data		: {
				id					: "id",
				provinceName 		: "il-adi",
				plateCode		 	: "plaka-kodu",
				areaCode 			: "alan-kodu"
			}
			
		}

		$config.el.bind({			
			mouseenter : function(){
				var _this = $(this);

				if ( _this.parent().attr( $config.data.id ) == "guney-kibris" ) {
					return false
				}

				$config.name.html("<div>" + _this.parent().data( $config.data.provinceName ) + "</div>");

				_this.on("mousemove", function(event){
					$config.name.css("top", ( event.pageY + 25 ) );
					$config.name.css("left", event.pageX );
				});

			},
			mouseleave : function(){
				$config.name.html("");
			}
			
		})

		$config.el.on("click", function( event ){
			var _this = $(this);

			if ( _this.parent().attr( $config.data.id ) == "guney-kibris" ) return false

			var il_id =  _this.parent().attr( $config.data.id ),
			 		il_adi =  _this.parent().data( $config.data.provinceName ),
			 		plaka_kodu = _this.parent().data( $config.data.plateCode ),
			 		alan_kodu = _this.parent().data( $config.data.areaCode );
		});
	}


	// Initialize ready...
	_init();

})(window.jQuery, window, document);

	// Proje yeni4
	
	$('.vvsg5 .project-carousel3').owlCarousel({
		loop:true,
		autoplay:false,
		center: false,
		items:3,
		margin:40,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1,
				margin:15,
			},
			640:{
				items:2,
				margin:15
			},			
			768:{
				items:2,
				margin:15
			},			
			991:{
				items:3,
				margin:15
			},
			1200:{
				items:3
			}			
			
		}
	});

		