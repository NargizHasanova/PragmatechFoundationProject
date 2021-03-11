
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
















