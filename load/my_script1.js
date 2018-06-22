// debugger
console.log('my_script1');
var obj = new my_script1();


function my_script1 () {
	
	obj = this;
	self = this;
	
	console.log('use my_script1');

	my_scr2 = new my_script2();
}