$(document).ready(
	function(){
		$(".l-cart").addClass("hiddeen");
		$(".search").addClass("hiddeen");
		$(".l-search").addClass("hiddeen");


		$(window).on('resize', function(){
			var width = $(this).width();
			if (width<=490) {
				$('.dot1').click(function(e){
					e.preventDefault();
					$('.col5').css("display", "inline-block");
					$('.col5').addClass("blog-mobile-col5");
					$('.col6').css("display", "none");
					$('.col7').css("display", "none");

					$('.dot1').addClass("dot5");
					$('.dot2').addClass("dot4");
					$('.dot3').addClass("dot4");
					if ($('.dot2').hasClass("dot5")) {
						$('.dot2').removeClass("dot5");
					}
					if ($('.dot3').hasClass("dot5")) {
						$('.dot3').removeClass("dot5");
					}

				});
				$('.dot2').click(function(e){
					e.preventDefault();
					$('.col6').css("display", "inline-block");
					$('.col5').addClass("blog-mobile-col5");
					$('.col5').css("display", "none");
					$('.col7').css("display", "none");

					$('.dot2').addClass("dot5");
					$('.dot1').addClass("dot4");
					$('.dot3').addClass("dot4");
					if ($('.dot1').hasClass("dot5")) {
						$('.dot1').removeClass("dot5");
					}
					if ($('.dot3').hasClass("dot5")) {
						$('.dot3').removeClass("dot5");
					}
				});
				$('.dot3').click(function(e){
					e.preventDefault();
					$('.col7').css("display", "inline-block");
					$('.col7').addClass("blog-mobile-col5");
					$('.col6').css("display", "none");
					$('.col5').css("display", "none");

					$('.dot3').addClass("dot5");
					$('.dot2').addClass("dot4");
					$('.dot1').addClass("dot4");
					if ($('.dot1').hasClass("dot5")) {
						$('.dot1').removeClass("dot5");
					}
					if ($('.dot2').hasClass("dot5")) {
						$('.dot2').removeClass("dot5");
					}
				});	
				var demab = 1;
				$('.about-title').click(function(e){
					e.preventDefault();
					// aboutt();
					demab++;
					if(demab%2==0){
						$('.row4 col1').addClass("footer-mobile");
						$('.about-content').css("display", "inline-block");
						$('.about-icons').css("display", "inline-block");
						$('.nav-title').css("display", "none");
						$('.shop-title').css("display", "none");		
					}else{
						$('.row4 col1').removeClass("footer-mobile");
						$('.about-content').css("display", "none");
						$('.about-icons').css("display", "none");
						$('.nav-title').css("display", "inline-block");
						$('.shop-title').css("display", "inline-block");		
					}
				});		
				var demnav = 1;
				$('.nav-title').click(function(e){
					e.preventDefault();
					// aboutt();
					demnav++;
					if(demnav%2==0){
						$('.row4 col2').addClass("footer-mobile");
						$('.nav-select').css("display", "inline-block");
						$('.about-content').css("display", "none");						
						$('.about-icons').css("display", "none");
						$('.about-title').css("display", "none");
						$('.shop-title').css("display", "none");		
					}else{
						$('.row4 col2').removeClass("footer-mobile");
						$('.nav-select').css("display", "none");
						$('.about-title').css("display", "inline-block");
						$('.shop-title').css("display", "inline-block");		
					}
				});	
				var demad = 1;
				$('.shop-title').click(function(e){
					e.preventDefault();
					// aboutt();
					demad++;
					if(demad%2==0){
						$('.row4 col3').addClass("footer-mobile");
						$('.shop-contact').css("display", "inline-block");
						
						$('.about-content').css("display", "none");						
						$('.about-icons').css("display", "none");
						$('.about-title').css("display", "none");
						$('.nav-title').css("display", "none");		
					}else{
						$('.row4 col3').removeClass("footer-mobile");
						$('.shop-contact').css("display", "none");
						$('.about-title').css("display", "inline-block");
						$('.nav-title').css("display", "inline-block");		
					}
				});	
				var demsm = 1;
				$('.i-search').click(function(e){
					demsm++;
					$(".list-s").addClass('hiddeen');
					if(demsm%2==0){
						$(".search").addClass('showw');
						$(".search").removeClass('hiddeen');
						$(".menu-content").addClass('hiddeen');
						$(".menu-content").removeClass('showw');
					}else{
						$(".search").addClass('hiddeen');	
						$(".search").removeClass('showw');
						$(".menu-content").addClass('showw');
						$(".menu-content").removeClass('hiddeen');
					};
				});
				$('.mobile-banner').click(function(e){
					if($('.search').hasClass('showw')){
						$(".search").addClass('hiddeen');
						$(".search").removeClass('showw');
					}
				});				
			}
			if (width<=375) {
				$('.dot1').click(function(e){
					e.preventDefault();
					$('.col5').css("display", "inline-block");
					$('.col5').addClass("blog-mobile-col6");
					$('.col6').css("display", "none");
					$('.col7').css("display", "none");

					$('.dot1').addClass("dot5");
					$('.dot2').addClass("dot4");
					$('.dot3').addClass("dot4");
					if ($('.dot2').hasClass("dot5")) {
						$('.dot2').removeClass("dot5");
					}
					if ($('.dot3').hasClass("dot5")) {
						$('.dot3').removeClass("dot5");
					}

				});
				$('.dot2').click(function(e){
					e.preventDefault();
					$('.col6').css("display", "inline-block");
					$('.col5').addClass("blog-mobile-col6");
					$('.col5').css("display", "none");
					$('.col7').css("display", "none");

					$('.dot2').addClass("dot5");
					$('.dot1').addClass("dot4");
					$('.dot3').addClass("dot4");
					if ($('.dot1').hasClass("dot5")) {
						$('.dot1').removeClass("dot5");
					}
					if ($('.dot3').hasClass("dot5")) {
						$('.dot3').removeClass("dot5");
					}
				});
				$('.dot3').click(function(e){
					e.preventDefault();
					$('.col7').css("display", "inline-block");
					$('.col7').addClass("blog-mobile-col6");
					$('.col6').css("display", "none");
					$('.col5').css("display", "none");

					$('.dot3').addClass("dot5");
					$('.dot2').addClass("dot4");
					$('.dot1').addClass("dot4");
					if ($('.dot1').hasClass("dot5")) {
						$('.dot1').removeClass("dot5");
					}
					if ($('.dot2').hasClass("dot5")) {
						$('.dot2').removeClass("dot5");
					}
				});	
				var demab = 1;
				$('.about-title').click(function(e){
					e.preventDefault();
					// aboutt();
					demab++;
					if(demab%2==0){
						$('.row4 col1').addClass("footer-mobile");
						$('.about-content').css("display", "inline-block");
						$('.about-icons').css("display", "inline-block");
						$('.nav-title').css("display", "none");
						$('.shop-title').css("display", "none");		
					}else{
						$('.row4 col1').removeClass("footer-mobile");
						$('.about-content').css("display", "none");
						$('.about-icons').css("display", "none");
						$('.nav-title').css("display", "inline-block");
						$('.shop-title').css("display", "inline-block");		
					}
				});		
				var demnav = 1;
				$('.nav-title').click(function(e){
					e.preventDefault();
					// aboutt();
					demnav++;
					if(demnav%2==0){
						$('.row4 col2').addClass("footer-mobile");
						$('.nav-select').css("display", "inline-block");
						$('.about-content').css("display", "none");						
						$('.about-icons').css("display", "none");
						$('.about-title').css("display", "none");
						$('.shop-title').css("display", "none");		
					}else{
						$('.row4 col2').removeClass("footer-mobile");
						$('.nav-select').css("display", "none");
						$('.about-title').css("display", "inline-block");
						$('.shop-title').css("display", "inline-block");		
					}
				});	
				var demad = 1;
				$('.shop-title').click(function(e){
					e.preventDefault();
					// aboutt();
					demad++;
					if(demad%2==0){
						$('.row4 col3').addClass("footer-mobile");
						$('.shop-contact').css("display", "inline-block");
						
						$('.about-content').css("display", "none");						
						$('.about-icons').css("display", "none");
						$('.about-title').css("display", "none");
						$('.nav-title').css("display", "none");		
					}else{
						$('.row4 col3').removeClass("footer-mobile");
						$('.shop-contact').css("display", "none");
						$('.about-title').css("display", "inline-block");
						$('.nav-title').css("display", "inline-block");		
					}
				});					
			}
			if (width<=330) {
				$('.dot1').click(function(e){
					e.preventDefault();
					$('.col5').css("display", "inline-block");
					$('.col5').addClass("blog-mobile-col7");
					$('.col6').css("display", "none");
					$('.col7').css("display", "none");

					$('.dot1').addClass("dot5");
					$('.dot2').addClass("dot4");
					$('.dot3').addClass("dot4");
					if ($('.dot2').hasClass("dot5")) {
						$('.dot2').removeClass("dot5");
					}
					if ($('.dot3').hasClass("dot5")) {
						$('.dot3').removeClass("dot5");
					}

				});
				$('.dot2').click(function(e){
					e.preventDefault();
					$('.col6').css("display", "inline-block");
					$('.col5').addClass("blog-mobile-col7");
					$('.col5').css("display", "none");
					$('.col7').css("display", "none");

					$('.dot2').addClass("dot5");
					$('.dot1').addClass("dot4");
					$('.dot3').addClass("dot4");
					if ($('.dot1').hasClass("dot5")) {
						$('.dot1').removeClass("dot5");
					}
					if ($('.dot3').hasClass("dot5")) {
						$('.dot3').removeClass("dot5");
					}
				});
				$('.dot3').click(function(e){
					e.preventDefault();
					$('.col7').css("display", "inline-block");
					$('.col7').addClass("blog-mobile-col7");
					$('.col6').css("display", "none");
					$('.col5').css("display", "none");

					$('.dot3').addClass("dot5");
					$('.dot2').addClass("dot4");
					$('.dot1').addClass("dot4");
					if ($('.dot1').hasClass("dot5")) {
						$('.dot1').removeClass("dot5");
					}
					if ($('.dot2').hasClass("dot5")) {
						$('.dot2').removeClass("dot5");
					}
				});	
				var demab = 1;
				$('.about-title').click(function(e){
					e.preventDefault();
					// aboutt();
					demab++;
					if(demab%2==0){
						$('.row4 col1').addClass("footer-mobile");
						$('.about-content').css("display", "inline-block");
						$('.about-icons').css("display", "inline-block");
						$('.nav-title').css("display", "none");
						$('.shop-title').css("display", "none");		
					}else{
						$('.row4 col1').removeClass("footer-mobile");
						$('.about-content').css("display", "none");
						$('.about-icons').css("display", "none");
						$('.nav-title').css("display", "inline-block");
						$('.shop-title').css("display", "inline-block");		
					}
				});		
				var demnav = 1;
				$('.nav-title').click(function(e){
					e.preventDefault();
					// aboutt();
					demnav++;
					if(demnav%2==0){
						$('.row4 col2').addClass("footer-mobile");
						$('.nav-select').css("display", "inline-block");
						$('.about-content').css("display", "none");						
						$('.about-icons').css("display", "none");
						$('.about-title').css("display", "none");
						$('.shop-title').css("display", "none");		
					}else{
						$('.row4 col2').removeClass("footer-mobile");
						$('.nav-select').css("display", "none");
						$('.about-title').css("display", "inline-block");
						$('.shop-title').css("display", "inline-block");		
					}
				});	
				var demad = 1;
				$('.shop-title').click(function(e){
					e.preventDefault();
					// aboutt();
					demad++;
					if(demad%2==0){
						$('.row4 col3').addClass("footer-mobile");
						$('.shop-contact').css("display", "inline-block");
						
						$('.about-content').css("display", "none");						
						$('.about-icons').css("display", "none");
						$('.about-title').css("display", "none");
						$('.nav-title').css("display", "none");		
					}else{
						$('.row4 col3').removeClass("footer-mobile");
						$('.shop-contact').css("display", "none");
						$('.about-title').css("display", "inline-block");
						$('.nav-title').css("display", "inline-block");		
					}
				});	
			}
		})
	}
);

function aboutt(){

	demab++;
	alert(demab);
	if(demab%2==0){
		$('.row4 col1').addClass("footer-mobile");
		$('.about-content').css("display", "inline-block");
		$('.about-icons').css("display", "inline-block");
		$('.nav-title').css("display", "none");
		$('.shop-title').css("display", "none");		
	}else{
		$('.row4 col1').removeClass("footer-mobile");
		$('.about-content').css("display", "none");
		$('.about-icons').css("display", "none");
		$('.nav-title').css("display", "inline-block");
		$('.shop-title').css("display", "inline-block");		
	}

}
function list_search(){
	$(".list-s").css("visibility", "visible");

	$('#mySearch').on('keyup', function(event) {
	  	event.preventDefault();
	    var tukhoa = $(this).val().toLowerCase();
	    $('.list-s li').filter(function() {
	      $(this).toggle($(this).text().toLowerCase().indexOf(tukhoa)>-1);
	    });

	});	
}
var dems = 1;
function close_search(){
 	$(".search").css("visibility", "hidden");
 	$(".list-s").css("visibility", "hidden");
 	dems--;
}
function searchbox(){
	dems++;
	$(".list-s").css("visibility", "hidden");
	if(dems%2==0){
		$(".search").addClass('showw');
		$(".search").removeClass('hiddeen');
	}else{
		$(".search").addClass('hiddeen');
		$(".search").removeClass('showw');	
	}
}
var demc=1;
function cart(){
	demc++;
	if(demc%2==0){
		$(".l-cart").css("visibility", "visible");
	}else{
		$(".l-cart").css("visibility", "hidden");
	}
}

var index = 0;
function btnn(){
	index++;
    if(index==3){
    	index=0;
    }	
 	var imgs = ["img/banner1.jpg","img/banner2.jpg","img/banner3.jpg"];
    document.getElementById('slide').src= imgs[index];     
}

function btnp(){
	index--;
    if(index==-1){
    	index=2;
    }
	var imgs = ["img/banner1.jpg","img/banner2.jpg","img/banner3.jpg"];
    document.getElementById('slide').src= imgs[index];
}
function changeImage(){
	index++;
    if(index==3){
    	index=0;
    }  
	var imgs = ["img/banner1.jpg","img/banner2.jpg","img/banner3.jpg"];
    document.getElementById('slide').src= imgs[index]; 
}
setInterval(changeImage,3000);

var demmn = 1;
function showMenu(){
	// demmn++;
	// if(demmn%2==0){
	//     $(".menu-content").css("display", "block");		
	// }else{
	//     $(".menu-content").css("display", "none");		
	// }
	  var x = document.getElementById("nav-menu");
	  if (x.className === "menu-content") {
	    x.className += " responsive";
	  } else {
	    x.className = "menu-content";
	  }
	$('.menu-content').slideToggle(200);
}

function showProduct1(){
	$(".row1").css("display", "inline-block");
	$(".row2").css("display", "none");
	$(".row2").removeClass("product-mobile");
}
function showProduct2(){
	$(".row2").css("display", "inline-block");
	$(".row2").addClass("product-mobile");
	$(".row1").css("display", "none");
}

