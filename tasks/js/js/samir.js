
let leftBtn=document.querySelector('#btn-left')
let rightBtn=document.querySelector('#btn-right');
let slideImgSrc=document.querySelector('.slide-frame img');
let title=document.querySelector('.desc p')
let index=0;

slides=[
	{
		img:'img/first-aid1.jpg',
		title:'this is the first page'
	},
	{
		img:'img/first-aid2.jpg',
		title:'this is the second page'
	},
	{
		img:'img/first-aid3.jpg',
		title:'this is the third page'
	}
]
// imgs=['img/first-aid1.jpg','img/first-aid2.jpg','img/first-aid3.jpg'];
// titleTexts=[
// 'this is the first page',
// 'this is the second page',
// 'this is the third page'
// ]

slideImgSrc.setAttribute('src', slides[0].img);
title.innerHTML=slides[0].title;
leftBtn.addEventListener('click',function(){
	if (index>0) {
		index--;
		slideImgSrc.setAttribute('src', slides[index].img);
		title.innerHTML=slides[index].title;
	}
	console.log(index)
} );

rightBtn.addEventListener('click',function(){
	if (index<slides.length) {
		index++;
		slideImgSrc.setAttribute('src',slides[index].img);
		title.innerHTML=slides[index].title;
	}
	console.log(index)
} );