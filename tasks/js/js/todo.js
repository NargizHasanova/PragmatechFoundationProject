    let showSeher=document.querySelector('.showSeher');
	let showGunorta=document.querySelector('.showGunorta');
	let showAxsam=document.querySelector('.showAxsam');
	let hideSeher=document.querySelector('.hideSeher');
	let hideGunorta=document.querySelector('.hideGunorta');
	let hideAxsam=document.querySelector('.hideAxsam');
	let plusBtnS=document.querySelector('.showSeher i');
	let plusBtnG=document.querySelector('.showGunorta i');
	let plusBtnA=document.querySelector('.showAxsam i');


showSeher.addEventListener('click',function (){
	if (plusBtnS.className == 'fas fa-plus-circle') {
		hideSeher.style.display = 'block';
		plusBtnS.className='fas fa-minus-circle';
	}
	else{
	    hideSeher.style.display = 'none';
	    plusBtnS.className='fas fa-plus-circle';
	}
});

showGunorta.addEventListener('click',function (){
	if (plusBtnG.className == 'fas fa-plus-circle') {
		hideGunorta.style.display = 'block';
		plusBtnG.className='fas fa-minus-circle';
	}
	else{
	    hideGunorta.style.display = 'none';
	    plusBtnG.className='fas fa-plus-circle';
	}
});
showAxsam.addEventListener('click',function (){
	if (plusBtnA.className == 'fas fa-plus-circle') {
		hideAxsam.style.display = 'block';
		plusBtnA.className='fas fa-minus-circle';
	}
	else{
	    hideAxsam.style.display = 'none';
	    plusBtnA.className='fas fa-plus-circle';
	}
});


