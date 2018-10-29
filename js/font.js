$("document").ready(function($){
if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
   // MSIE
   document.getElementsByTagName("body")[0].setAttribute("style","font-family: Calibri");
}

else {
	document.getElementsByTagName("body")[0].setAttribute("style","font-family: Myriad");
}
});