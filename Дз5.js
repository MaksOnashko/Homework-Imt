������� ������ � �������� �������.

var arrNumb = [2, 3, 5, 7, 11, 13, 22, 44, 66, 10, 9, 4, 353]; 
var arrSimple = [];
var countDiv = 0;
var k = 0 ;

for(var i = 0; i < arrNumb.length; i++) {
countDiv = 0;
for(var j = 1; j <= arrNumb[i] && countDiv <= 2; j++) {
if(arrNumb[i] % j == 0) countDiv++;
if(countDiv > 2) break;
}

if(countDiv == 2) {
arrSimple[k] = arrNumb[i];
k++;
} 
}

console.log(arrSimple);

console.log('1 ������: ', double(4));
console.log('2 ������: ', '������, ' + greet());
console.log('3 ������: ', exponent(3, 2));
arrRand(20, arrChet);
  
// 1 ������
function double(x){
	return x * 2;
}

// 2 ������
function greet(){
	return prompt ('��� ��� �����');
}

// 3 ������
function exponent(num, exp){
	for(var i = 0; i < exp; i++){
  	return num * num;
  }
  
}

 // 4 ������
function arrRand(count, callback){
	var arr = new Array(count);
  
  for(var i = 0; i < arr.length; i++){
  	arr[i] = Math.floor(Math.random()*(50 - 100)) + 100;
  }
  console.log('������ ��������� ����� ����� �� 50 �� 100: ' , arr);
  return callback(arr);
}

function arrChet(arr){
var add = [];
	for(var j = 0; j < arr.length; j += 2 ){
  	console.log('�������� ������� � ������ ��������: ' , arr[j]);
  }
 return add;
}
