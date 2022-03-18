var number = 0;
$('#number').html(number);

$("#n").click(
function () {
		if (number == 0) {
			number=0;
			return $('#number').html(number);
		} else {
			number=number-1;
			return $('#number').html(number); 
		}
	}	
);
$("#p").click(function(){
	 number =number+1;
	return $('#number').html(number);
});
$("#img-1").click(
	function(){
		$("#img-1 , #img-2 ,#img-3 , #img-4").removeClass("active");
		$("#img-1").addClass("active");
		$("#main-img").css("background-image","url(./images/image-product-1.jpg)");

	});
$("#img-2").click(
	function(){
		$("#img-1 , #img-2 ,#img-3 , #img-4").removeClass("active");
		$("#img-2").addClass("active");
		$("#main-img").css("background-image","url(./images/image-product-2.jpg)");

	});
$("#img-3").click(
	function(){
		$("#img-1 , #img-2 ,#img-3 , #img-4").removeClass("active");
		$("#img-3").addClass("active");
		$("#main-img").css("background-image","url(./images/image-product-3.jpg)");

	});
$("#img-4").click(
	function(){
		$("#img-1 , #img-2 ,#img-3 , #img-4").removeClass("active");
		$("#img-4").addClass("active");
		$("#main-img").css("background-image","url(./images/image-product-4.jpg)");

	});
$("#cart-icon").click(function(){
	$("ul#orders").toggle();
});
$("#cart").click(function () {
	if (number!=0) {
	$("#num").show();
	$("#num").html(number);
	$("#empty").hide();
	$("#checkout").show();
	$("#orderinfo").html( number +" X $125.00 "+" =" +"$"+ number*125.00);
	$("#checkout").before("<section class='row d-flex flex-row  '>" + "<img id='img-1' src='./images/image-product-1-thumbnail.jpg'class='col-sm-4 m-1' >"
		+"<section class='col-sm-6 d-flex flex-column m-0 p-0'>" +"<p id='title'>Fall Limited Edition Sneakers</p>"+"<p id='orderinfo'>"+number +" X $125.00 "+" =" +"$"+ number*125.00+ "</p></section>"
		+"</section>");
   }

});
