
$(document).ready(function(){
  checkParams()
  checkParams2()
  checkParams3()

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
  
  $('.little-slider').slick({
    lazyLoad: 'ondemand',
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    asNavFor: '.big-slider',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000
  });
  $('.big-slider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    //focusOnSelect: true,
    infinite: true,
    asNavFor: '.little-slider'
  });
});

/////////////////////////////
let modalOpen = document.querySelector(".modal__open-1");
let modalOpen2 = document.querySelector(".modal__open-2");
let modalOpen3 = document.querySelector(".modal__open-3");
let modalOpen4 = document.querySelector(".modal__open-4");
let modalOpen5 = document.querySelector(".modal__open-5");
let modalOpen6 = document.querySelector(".modal__open-6");
let modalOpen7 = document.querySelector(".modal__open-7");
let modalOpen8 = document.querySelector(".modal__open-8");
let modalOpen9 = document.querySelector(".modal__open-9");

let modalForm = document.querySelector(".modal");
let modalClose = document.querySelector(".modal__close");
let modalFormOverlay = document.querySelector(".modal__overlay");


let showModal = function (elementName) {
  elementName.classList.add("show");
}

let hideModal = function (elementName) {
  elementName.classList.remove("show");
}
let showModalSlider = function (elementName) {
  elementName.classList.add("show-modal-slider");
}

let hideModalSlider = function (elementName) {
  elementName.classList.remove("show-modal-slider");
}

let noScrollBody = function() {
  document.body.style.overflow = "hidden";
}

let scrollBody = function() {
  document.body.style.overflow = "visible";
}

modalOpen.addEventListener("click", () => showModal(modalForm));
modalOpen2.addEventListener("click", () => showModal(modalForm));
modalOpen3.addEventListener("click", () => showModal(modalForm));
modalOpen4.addEventListener("click", () => showModal(modalForm));
modalOpen5.addEventListener("click", () => showModal(modalForm));
modalOpen6.addEventListener("click", () => showModal(modalForm));
modalOpen7.addEventListener("click", () => showModal(modalForm));
modalOpen8.addEventListener("click", () => showModal(modalForm));
modalOpen9.addEventListener("click", () => showModal(modalForm));

modalClose.addEventListener("click", () => hideModal(modalForm));
modalFormOverlay.addEventListener("click", () => hideModal(modalForm));
//////////////////////////////
let sliderOpen = document.querySelector(".slider-open-1");
let sliderOpen2 = document.querySelector(".slider-open-2");
let sliderOpen3 = document.querySelector(".slider-open-3");
let sliderOpen4 = document.querySelector(".slider-open-4");
let sliderOpen5 = document.querySelector(".slider-open-5");
let sliderOpen6 = document.querySelector(".slider-open-6");

let sliderClose = document.querySelector(".slider-close-1");
let sliderClose2 = document.querySelector(".slider-close-2");
let sliderClose3 = document.querySelector(".slider-close-3");
let sliderClose4 = document.querySelector(".slider-close-4");
let sliderClose5 = document.querySelector(".slider-close-5");
let sliderClose6 = document.querySelector(".slider-close-6");

let sliderModal = document.querySelector(".slider-modal-1");
let sliderModal2 = document.querySelector(".slider-modal-2");
let sliderModal3 = document.querySelector(".slider-modal-3");
let sliderModal4 = document.querySelector(".slider-modal-4");
let sliderModal5 = document.querySelector(".slider-modal-5");
let sliderModal6 = document.querySelector(".slider-modal-6");


let sliderOverlay = document.querySelector(".slider__overlay");
let sliderOverlay2 = document.querySelector(".slider__overlay-2");
let sliderOverlay3 = document.querySelector(".slider__overlay-3");
let sliderOverlay4 = document.querySelector(".slider__overlay-4");
let sliderOverlay5 = document.querySelector(".slider__overlay-5");
let sliderOverlay6 = document.querySelector(".slider__overlay-6");


sliderOpen.addEventListener("click", () => showModal(sliderModal));
sliderOpen2.addEventListener("click", () => showModal(sliderModal2));
sliderOpen3.addEventListener("click", () => showModal(sliderModal3));
sliderOpen4.addEventListener("click", () => showModal(sliderModal4));
sliderOpen5.addEventListener("click", () => showModal(sliderModal5));
sliderOpen6.addEventListener("click", () => showModal(sliderModal6));

sliderOpen.addEventListener("click", () => noScrollBody());
sliderOpen2.addEventListener("click", () => noScrollBody());
sliderOpen3.addEventListener("click", () => noScrollBody());
sliderOpen4.addEventListener("click", () => noScrollBody());
sliderOpen5.addEventListener("click", () => noScrollBody());
sliderOpen6.addEventListener("click", () => noScrollBody());

sliderClose.addEventListener("click", () => hideModal(sliderModal));
sliderClose2.addEventListener("click", () => hideModal(sliderModal2));
sliderClose3.addEventListener("click", () => hideModal(sliderModal3));
sliderClose4.addEventListener("click", () => hideModal(sliderModal4));
sliderClose5.addEventListener("click", () => hideModal(sliderModal5));
sliderClose6.addEventListener("click", () => hideModal(sliderModal6));

sliderOverlay.addEventListener("click", () => hideModal(sliderModal));
sliderOverlay2.addEventListener("click", () => hideModal(sliderModal2));
sliderOverlay3.addEventListener("click", () => hideModal(sliderModal3));
sliderOverlay4.addEventListener("click", () => hideModal(sliderModal4));
sliderOverlay5.addEventListener("click", () => hideModal(sliderModal5));
sliderOverlay6.addEventListener("click", () => hideModal(sliderModal6));

sliderClose.addEventListener("click", () => scrollBody());
sliderClose2.addEventListener("click", () => scrollBody());
sliderClose3.addEventListener("click", () => scrollBody());
sliderClose4.addEventListener("click", () => scrollBody());
sliderClose5.addEventListener("click", () => scrollBody());
sliderClose6.addEventListener("click", () => scrollBody());

sliderOverlay.addEventListener("click", () => scrollBody());
sliderOverlay.addEventListener("click", () => scrollBody());
sliderOverlay.addEventListener("click", () => scrollBody());
sliderOverlay.addEventListener("click", () => scrollBody());
sliderOverlay.addEventListener("click", () => scrollBody());
sliderOverlay.addEventListener("click", () => scrollBody());

////////////////////////////
new WOW().init();
//////////////////////////////
$(document).ready(function () {

  $(".big-slider__img").click(function () {
    var img = $(this);	
    var src = img.attr('src'); // 
    $("body").append("<div class='popup'>" + 
      "<div class='popup_bg'></div>" + 
      "<div class='popup__wrapper'><button class='popup_close'></button><img src=" + src + " class='popup_img' /></div>" +
      "</div>");
    $(".popup_bg").click(function () {	   
      $(".popup").fadeOut(800);	
      setTimeout(function () {	
        $(".popup").remove();
      }, 1);
    });
    $(".popup_close").click(function () {	   
      $(".popup").fadeOut(800);	
      setTimeout(function () {	
        $(".popup").remove();
      }, 1);
    });
  });
});
//////////////////


function checkParams() {
  var name = $('#modal__name').val();
  var phone = $('#modal__phone').val();
   
  if(name.length != 0 && phone.length != 0) {
      $('#modal__button-submit').removeAttr('disabled');
  } else {
      $('#modal__button-submit').attr('disabled', 'disabled');
  }
}
function checkParams2() {
  var name = $('#form-two__name').val();
  var phone = $('#form-two__tel').val();
   
  if(name.length != 0 && phone.length != 0) {
      $('#form-two__button').removeAttr('disabled');
  } else {
      $('#form-two__button').attr('disabled', 'disabled');
  }
}

function checkParams3() {
  var name = $('#form-one__name').val();
  var phone = $('#form-one__tel').val();
   
  if(name.length != 0 && phone.length != 0) {
      $('#form-one__button').removeAttr('disabled');
  } else {
      $('#form-one__button').attr('disabled', 'disabled');
  }
}

////////////////////////
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});