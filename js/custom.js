$(document).ready(function() {  

//=============================== Buat Detect Font ====================================//

if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
   // MSIE
   document.getElementsByTagName("body")[0].setAttribute("style","font-family: Calibri");
}

else {
	document.getElementsByTagName("body")[0].setAttribute("style","font-family: Myriad");
}

jQuery(".bannerBlockA01").addClass("effect2");

// nyembunyiin subscribe default
$(document.getElementsByClassName("smallDiscBlockA01")).hide();

// counter cart
				var counter = 0;
				$('.chartBlockA01 p').attr('id', 'counterCart');
                $('.buy').click( function() {           
                    counter++ ;
                    document.getElementById('counterCart').innerHTML = counter;
                });
				
				$('#message').keydown( function(event) {
					if (event.keyCode== 13 ) { 
						event.preventDefault();
						document.getElementsByClassName('messageBlock')[0].innerHTML += "<p class='name'>Pelanggan</p><p class='message'>" + document.getElementById("message").value + "</p>" + "<i><p class='typing'>Nurlela sedang mengetik...</p><p class='message'></i>";
						$("#message").val('');
						$(".messageBlock").animate({ scrollTop: $(document).height() }, "slow");			
						} 
				});
				
				
				$(".titleChatMini").show();
				$(".liveChat").hide();
				$('.titleChat').click( function(){
					$(".liveChat").hide();
					$(".titleChatMini").show();
				});
				
				$('.titleChatMini').click( function(){
					$(".liveChat").show();
					$(".titleChatMini").hide();
				});
				
				
	
//================================== Buat Read More ====================================//
 $('#info').readmore({
    moreLink: '<a href="#">More examples and options</a>',
    maxHeight: 390,
    afterToggle: function(trigger, element, expanded) {
    if(! expanded) { // The "Close" link was clicked
    $('html, body').animate( { scrollTop: element.offset().top }, {duration: 100 } );
    } 
    }
    });
    $('article').readmore({maxHeight: 710});

//============================= Buat Highlight Menu ====================================//

var str=location.href.toLowerCase();
				jQuery(".gnavAreaWrap ul").addClass("navigation");
				$(".navigation li a").each(function() {
				if (str.indexOf(this.href.toLowerCase()) > -1) {
					$(".gnavAreaWrap ul li ul li.active").removeClass("active");
					$(this).parent().addClass("active");
				}
				});
					$("li.active").parents().each(function(){
				if ($(this).is("li")){
					$(this).addClass("active");
				}
				});
				
//================================== Header Scroll ====================================//

			
		 var nav = $('#headerArea');
		 var logo = $('.logoBlockA01');
		 var gnav = $('.gnavArea');
		 var subscribeBlockA01 = $('.subscribeBlockA01');
		 var smallDiscBlockA01 = $('.smallDiscBlockA01');
			$(window).scroll(function () {
				if ($(this).scrollTop() > 150) {
					nav.removeClass("headerArea");
					nav.addClass("headerAreaScroll");
					
					logo.removeClass("logoBlockA01");
					logo.addClass("logoBlockA01Scroll");
					
					gnav.removeClass("gnavArea");
					gnav.addClass("gnavAreaScroll");
				} else {
					nav.removeClass("headerAreaScroll");
					nav.addClass("headerArea");
					
					logo.removeClass("logoBlockA01Scroll");
					logo.addClass("logoBlockA01");
					
					gnav.removeClass("gnavAreaScroll");
					gnav.addClass("gnavArea");
				}
				
				if ($(this).scrollTop() > 1000) {
					subscribeBlockA01.removeClass("subscribeBlockA01");
					subscribeBlockA01.addClass("subscribeBlockA02");
				} else {
					subscribeBlockA01.addClass("subscribeBlockA01");
					subscribeBlockA01.removeClass("subscribeBlockA02");
				}
				
				if ($(this).scrollTop() > 1100) {
					smallDiscBlockA01.removeClass("smallDiscBlockA01");
					smallDiscBlockA01.addClass("smallDiscBlockA02");
				} else {

					smallDiscBlockA01.addClass("smallDiscBlockA01");
					smallDiscBlockA01.removeClass("smallDiscBlockA02");
				}
			});

			
//================================== Slider Area ====================================//	
		var _SlideshowTransitions = [
		//Fade
		{ $Duration: 1200, $Opacity: 2 }
		];
		var options = {
			$AutoPlay: true,                   
			$AutoPlaySteps: 1,                
			$AutoPlayInterval: 3000,           
			$PauseOnHover: 1,                  

			$ArrowKeyNavigation: true,   		
			$SlideDuration: 500,               
			$MinDragOffsetToSlide: 20,          
			//$SlideWidth: 600,                 
			//$SlideHeight: 300,                            
			$SlideSpacing: 0, 					                
			$DisplayPieces: 1,                                  
			$ParkingPosition: 0,                                
			$UISearchMode: 1,                                   
			$PlayOrientation: 1,                                
			$DragOrientation: 3,                                

			$SlideshowOptions: {                               
				$Class: $JssorSlideshowRunner$,                 
				$Transitions: _SlideshowTransitions,           
				$TransitionsOrder: 1,                          
				$ShowLink: true                                   
			},
			$BulletNavigatorOptions: {                             
				$Class: $JssorBulletNavigator$,                    
				$ChanceToShow: 1,                           
				$AutoCenter: 1,                                 
				$Steps: 1,                                      
				$Lanes: 1,                                      
				$SpacingX: 10,                                 
				$SpacingY: 10,                                 
				$Orientation: 1                              
			},

			$ArrowNavigatorOptions: {
				$Class: $JssorArrowNavigator$,            
				$ChanceToShow: 1,                        
				$Steps: 1                               
			}
		};
		var jssor_slider1 = new $JssorSlider$("sliderBlockA01", options);

		function ScaleSlider() {
			var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
			if (parentWidth)
				jssor_slider1.$ScaleWidth(Math.min(parentWidth, 940));
			else
				window.setTimeout(ScaleSlider, 30);
		}
		ScaleSlider();
		if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
			$(window).bind('resize', ScaleSlider);
		}

});

//================================== Search Form ====================================//

$(window).load(function(){
			$('.columnBlockA02').find('form').append('<div class="hideresults"></div><div class="popup"></div>');
			
			$('.columnBlockA02').find('form').submit(function(e){
				e.preventDefault();
				var q = $(this).find('.cari').attr('value');
				//Maybe some AJAX-y results here would be cool!
				$('.columnBlockA02').find('.popup').html( 'Mohon maaf, hasil pencarian ' + q + ' tidak ditemukan' ).show();
				$('.hideresults').show();
			});
			
			$('.columnBlockA02').find('.hideresults').click(function(e){
				$(this).hide();
				$('.columnBlockA02').find('.popup').hide();
				$('.columnBlockA02').find('.cari').val('');
			});
			$('.columnBlockA02').find('.cari').blur(function(e){
				$('.columnBlockA02').find('.cari').val('');
				$('.columnBlockA02').find('.popup').hide();
				$('.columnBlockA02').find('.hideresults').hide();
			});
	});
			

$(function(){
	$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html,body').animate({
				  scrollTop: target.offset().top-150
				}, 1000);
				return false;
			  }
			}
		  });
});

function openDiscBlockA01() {
    $('.smallDiscBlockA01').hide();
	$('.smallDiscBlockA02').hide();
	if ($(window).scroll().scrollTop() > 1000 ) 
		{ 
			$('.subscribeBlockA02').show(); 
			} 
	else { 
			$('.subscribeBlockA01').show(); 
			}
}

function hidingBtn() {
    $('.subscribeBlockA01').hide();
	$('.subscribeBlockA02').hide();
	if ($(window).scroll().scrollTop() > 1100 ) 
		{ 
			$('.smallDiscBlockA02').show(); 
			} 
	else { 
			$('.smallDiscBlockA01').show(); 
			}
}