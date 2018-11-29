$( document ).ready(function( $ ) {
				$( '#my-slider' ).sliderPro({
					width: 900,
					height: 450,
					//fade: true,
					arrows: true,
					buttons: false,
					smallSize: 500,
					mediumSize: 1000,
					largeSize: 3000,
					thumbnailArrows: true,
					fadeThumbnailArrows: true,
					autoplay: true,
					keyboard: true, 
					imageScaleMode: 'contain',
					thumbnailsPosition:  'right',
					shuffle: false,
					responsive: true,
				 	//autoSlideSize: true,
				 	//slideDistance: 150,
				 	breakpoints: {
							800: {
								thumbnailsPosition: 'bottom',
								thumbnailWidth: 200,
								thumbnailHeight: 70,
								autoSlideSize: false,
								thumbnailPointer: false,
								thumbnailArrows: false,
								arrows: false
							},
							500: {
								thumbnailsPosition: 'bottom',
								thumbnailWidth: 100,
								thumbnailHeight: 50,
								autoSlideSize: false,
								thumbnailPointer: false,
								thumbnailArrows: false,
								arrows: false
							}
					}
				});

			});

