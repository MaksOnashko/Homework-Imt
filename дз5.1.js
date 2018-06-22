html
<p>1.Создать функцию double(), которая будет принимать в качестве аргумента число и удваивать его. Удвоенное число либо пусть функция возвращает через return, либо сразу выводит через console.log. Например double(5) выдаст 10.
</p>
     <button id="task_1"type="button" name="button">Выполнить</button>
<p>2.Создать функцию greet(), которая через prompt() будет спрашивать имя пользователя и здороваться с ним, выводя на экран "Привет, здесь будет имя
</p>
     <button id="task_2"type="button" name="button">Выполнить</button>
<p>3.Создать функцию exponent() таким образом, чтобы можно было вызвать её до создания (вспомните что такое Function Expression и Function Declaration и выберете способ). Эта функция должна возводить в степень число. Она принимает на вход два параметра: число и степень. Поскольку возведение в степень - это умножение самого себя заданное число раз, то организовать всё умножением через цикл (while или for).
</p>
     <button id="task_3"type="button" name="button">Выполнить</button><p>4.Создайте массив случайных целых чисел от 50 до 100, используя цикл цикл for. Размер массива пусть будет 20. Выведите отдельным циклом for элементы массива с чётным индексом без применения проверки через if. Т.е. вариант if (i % 2 == 0) нельзя использовать. Подсказка: у цикла for можно писать не только i++, но и что-то вроде i+=3 (в этом случае счётчик будет каждый раз расти на 3 единицы, использовать callback)
</p>
     <button id="task_4"type="button" name="button">Выполнить</button>

javaScript
/* задание 1 */
document.getElementById('task_1').onclick = function(){

	var res;
	double();
	function double(x){
		x= prompt('Введите число','');
  	res=x*2;
  	return res
  
	}
	console.log(res);
}

/* задание 2 */
document.getElementById('task_2').onclick = function(){

	hi();
	function hi(name){
		name=prompt('Как тебя зовут?','');
  	alert('Привет'+' '+name+'!')
	}
}
/* задание 3 */
document.getElementById('task_3').onclick = function(){
var x,y;
		x=prompt('Введите число');
    y=prompt('Введите степень');

function exponent(x,y){
	var res=1;
	var i=0;
		do{res*=x; i++}while(i<y);
       return res
      
	}
  console.log(exponent(x,y))
}
/* задание 4 */
document.getElementById('task_4').onclick = function(){
farr(20,farr1)
	function farr(all,callback){
		var arr = new Array(all);
  
  	for(var a = 0; a < arr.length; a++){
  		arr[a] = Math.floor(Math.random()*(100 - 50)) + 50;
  	}
  console.log(arr);
  return callback(arr);
}

	function farr1(arr){
	var arr1 = [];
		for(var b = 0; b < arr.length; b +=2 ){
  		console.log('элемент массива с чётным индексом: ' , arr[b]);
  }
 return arr1;
}
 
}