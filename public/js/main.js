$(".slider-one")
.not(".slick-initialized")
.slick({

	prevArrow:".site-slider.prev",
	nextArrow: ".site-slider.next",
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplaySpeed: 3000
});

function myFunction() 
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "password") 
     return true 
    else alert("Invalid Credentials");
    return false;
}
