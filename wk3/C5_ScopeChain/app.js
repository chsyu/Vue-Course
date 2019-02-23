// scope and scope chain
function b1(){
	// let myVar;
	console.log(myVar);
}

function a1(){
	let myVar = 1;
	b1();
	console.log(myVar);
}

let myVar = 2;
console.log(myVar);
a1();

function a2(){
	let myVar = 1;
	function b2(){
		// let myVar;
		console.log(myVar);
	}
	b2();
	console.log(myVar);
}

let myVar = 2;
console.log(myVar);
a2();

// variables lifting
let firstname = 'Simon';
let addSurname = () => {
	let surname = 'Holmes';
	let fullname = firstname + ' ' + surname;
	let firstname = 'David';
	console.log(fullname);
}
