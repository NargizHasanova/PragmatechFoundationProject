
const name=234
if (name) {
	console.log('vse okay')
}else {
	console.log('vse ne okay')
}
//if kosulu
name ? console.log('vse okay') : console.log('vse ne okay')

//function
function calcmyage(year){
	const myage = 2021 - year
    if (myage>0) {
	    console.log('you are '+ myage + ' years old')
	}else {
		console.log("ERROR!That's the future!")
	}
}
calcmyage(1969)

//array
let cars=['mercedes','hundai','mazda']
console.log(cars.length)
console.log(cars)
cars[0]='toyota'
console.log(cars)

//cycle
let names=['nara','misa','vasya']
for (let name of names) {
   console.log (name)
}

//object
const person={
	name:'nargiz',
	lastname:'hasanova',
	age:24,
	married:false
}

console.log(person)
console.log(person.married)

//tapsiriq 1-den 10-a qeder reqemleri consolda cixarmaq 
 function numbers(a){
 	console.log(a)
    a++;  
}
numbers(1)
numbers(2)
numbers(3)
numbers(4)
numbers(5)
numbers(6)
numbers(7)
numbers(8)
numbers(9)
numbers(10)

//tapsiriq 3+5=8 yaz,basqa deyerlerde vere bilersen

a=3
b=5
c=a+b
console.log(a+'+'+b+'='+c);

//bir nece deyeri bir deyisenin icine yazmaq
let isim='nara',soyisim='hesenova',age=24
console.log(age);

let reqem=chislo=numberr=33
console.log(chislo);

// sade bir funksiya
function deneme(){
	document.write("HELLO WORLD! <br>")
}
deneme();


// bir deyisene verdiyimiz funksiya(burda artiq funksiyanin adi deyisendedi,funksiyaya ad vermirik)
let hesab = function(){
	document.write("HELLO MAN!<br>");
}
hesab();      //hesab-i cagirmagin bir yolu budu

/*let hesab = function(){
 	document.write("HELLO MAN!<br>")
}()*/        //hesab-i cagirmagin diger yoluda budu

//deyisene funksiya vermeyimizin basqa bir varianti
function greet(){
	let woman="HELLO WOMAN <br>"
    return woman;
}
var example = greet();
document.write(example);

//avtomatik cagirilan funksiya
(function test(){
	document.write("Avtomatik funksiya <br>")
})();


let infoBuro={
	ad:"nergiz",
	soyad:'hesenova',
	yas:24,
	tehsil:'ATU',
	ixtisas:"frontend developer <br>",
	evli:false,
	milliyet:"azerbaycanli"
}
document.write(infoBuro.ixtisas);


let info = new Object();
	info.ad="nergiz";
	info.soyad='hesenova ';
	info.yas=24;
	info.tehsil='ATU';
	info.ixtisas="frontend developer";
	info.evli=false;
	info.milliyet="azerbaycanli";
document.write(info.soyad)



function ornek(){
  this.ad="nergiz";
  this.soyad='hesenova'
}
let bilgiler=new ornek();
document.write(bilgiler.ad)









