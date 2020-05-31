"use strict";
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
  /////////////////////////////
let modalOpen = document.querySelector(".modal__open-1");
let modalOpen2 = document.querySelector(".modal__open-2");
let modalOpen3 = document.querySelector(".modal__open-3");

let modalForm = document.querySelector(".modal");
let modalClose = document.querySelector(".modal__close");
let modalFormOverlay = document.querySelector(".modal__overlay");


let showModal = function(elementName) {
  elementName.classList.add("show");
}

let hideModal = function(elementName) { 
  elementName.classList.remove("show");
}


modalOpen.addEventListener("click", () => showModal(modalForm));
modalOpen2.addEventListener("click", () => showModal(modalForm));
modalOpen3.addEventListener("click", () => showModal(modalForm));

modalClose.addEventListener("click", () => hideModal(modalForm));
modalFormOverlay.addEventListener("click", () => hideModal(modalForm));
////////////////////////////
new WOW().init();