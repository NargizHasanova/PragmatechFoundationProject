// DOM style method
document.querySelector("#kimlikbir").style.backgroundColor = 'gray';
document.querySelector("#kimlikbir").style.color = 'white';
document.querySelector("#kimlikbir").style.border = '2px solid black';
document.querySelector("#kimlikbir").style.padding = '5px';

//nextElementSybling
let bir=document.querySelector("#kimlikbir").nextElementSibling.innerHTML;
document.querySelector(".sonuc").innerHTML=bir;

//onclick,ondblclick methods
function deneme(){
		document.querySelector('#denemeSonuc').innerHTML="siz 'TIKLA' duymesine basdiz!";
	};
function ikidefe(){
		alert('siz iki defe duymeye basdiz!Bir defe basin!!!');
	};
function hesablama(){
		let hesab=5+3;
		document.querySelector('#hesabSonucu').innerHTML=hesab;
	}