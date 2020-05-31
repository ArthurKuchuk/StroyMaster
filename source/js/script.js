$('.slider-projects').slick({
  lazyLoad: 'ondemand',
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		//focusOnSelect: true,
		infinite: false,
		//adaptiveHeight: false,
		responsive: [
		{
		  breakpoint: 1000,
		  settings: {
			slidesToShow: 2,
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 1,
		  }
		},
		]
	});
	