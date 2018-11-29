$( document ).ready(function( $ ) {
				$( '#slider-proyects' ).sliderPro({
					// width: 1200,
					// height: 500,
					width: 1400,
					height: 600,
					fade: false,
					arrows: false,
					buttons: true,
					smallSize: 800,
					mediumSize: 1000,
					largeSize: 3000,
					autoplay: true,
					keyboard: true, 
					imageScaleMode: 'cover',
					shuffle: false,
					responsive: true,
					orientation: 'horizontal',
				 	autoSlideSize: false,
				 	slideDistance: 150,
				 	breakpoints: {
							800: {
								autoSlideSize: false,
								arrows: false,
								buttons: false
							},
							500: {
								autoSlideSize: false,
								arrows: false,
								buttons: false
							}
					}
				});
});