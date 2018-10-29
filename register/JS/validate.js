// JavaScript Document
function validate(){
	if(document.registrasi.namadepan.value="")
	{
		alert("silakan masukan nama depan anda!");
		document.registrasi.namadepan.focus();
		return false;
	}
	if(document.registrasi.namabelakang.value="")
	{
		alert("silakan masukan nama belakang anda!");
		document.registrasi.namabelakang.focus();
		return false;
	}
	var email = document.registrasi.email.value;
  	atpos = email.indexOf("@");
  	dotpos = email.lastIndexOf(".");
 	if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
 	{
     alert("Please enter correct email ID")
     document.registrasi.email.focus() ;
     return false;
	 }
	if( document.registrasi.pass.value == "" ||
           isNaN( document.registrasi.pass.value) ||
           document.registrasi.pass.value.length >= 7 )
   	{
     	alert( "Silakan isi password tidak kurang dari 8" );
     	document.registrasi.pass.focus() ;
     	return false;
   	}
	if(document.registrasi.konfirmasi.value=""||
			isNaN(document.registrasi.konfirmasi.velue) ||
			document.registrasi.konfirmasi.value.length >= 7)
	{
		alert("silakan masuk password konfirmasi tidak kurang dari 8");
		document.registrasi.konfirmasi();
		return false;
	}
	if(document.registrasi.tanggal.value="")
	{
		alert("silakan masukan nama belakang anda!");
		document.registrasi.tanggal.focus();
		return false;
	}
	if( document.registrasi.gender.value == "-1" )
   {
     alert( "silakan masukan jenis kelamin anda" );
     document.registrasi.gender.focus() ;
     return false;
   }  
   if ( ( registrasi.rememberme[0].checked == false ))
   {
   alert ( "Silakan ckeck syarat dan ketentuan yang berlaku!" );
   return false;
   }  
	return(true);

}