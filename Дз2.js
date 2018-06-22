var a = ( Number( prompt( 'Введите первое число/цифру', 'число/цифра' )));
var b = ( Number( prompt( 'Введите второе число/цифру', 'число/цифра' )));
if (a > b) {
alert ( 'Максимум из двух чисел ' + a );
} else if ( a === b) {
alert ( 'Числа/цифры равны! ' + a + '=' + b );
} else {
alert ( 'Максимум из двух чисел ' + b );
}


var num1 = ( Number( prompt( 'Введите первое число/цифру', 'число/цифра' )));
var num2 = ( Number( prompt( 'Введите второе число/цифру', 'число/цифра' )));
var num3 = ( Number( prompt( 'Введите третье число/цифру', 'число/цифра' )));
if  (num1 > num2  && num1 > num3  ) {
alert ( 'Максимум из трех чисел ' + num1 );
} else if ( num2 > num3 && num2 > num1 ) {
alert ( 'Максимум из трех чисел ' + num2 );
} else if ( num3 > num1 && num3 > num2 ) {
alert ( 'Максимум из трех чисел ' + num3 );
} else if ( num1 == num2 == num3 ){
alert ( 'Числа/цифры равны! ' + num1 + '=' + num2 + '=' + num3 );
} else {
alert ( 'Неправильный ввод!');
}

//3.код, который переведёт градусы по Цельсию в градусы по Фаренгейту
var Cels; //по Цельсию
var Fahrn=32; //по Фаренгейту

Cels = Number(prompt('Enter degrees Celsius: ', ' '));
alert(Cels * 1.8 + Fahrn)

//4.код, который будет принимать от пользователя три числа и выводить среднее по значению число
var msgInput = 'Please enter ';
var defName = 'number from 0 to 100';
var num1 = Number(prompt (msgInput + 'the first number: ', defName));
var num2 = Number(prompt (msgInput + 'the second number: ', defName));
var num3 = Number(prompt (msgInput + 'the third number: ', defName));
var average; //среднее значение

if ((num1 < num2) && (num2 < num3)) {
var average = num2;
 	 alert(average);

} else if ((num1 < num2) && (num1 > num3)) {
var average = num1;
	alert(average);

} else if ((num3 < num1) && (num3 > num2)) {
var average = num3;
  	alert (average)
}

//4.Конвертер валют 
var ofCurr; //из какой валюты
var toCurr; //в какую валюту
var currUsd; //курс доллара
var currEur; //курс евро
var currUan; //курс гривны
var summ;
var result;

ofCurr = prompt('Из какой валюты хотите конвертировать?', 'Введите USD/EUR/UAN');
toCurr = prompt('В какую валюту хотите конвертировать?', 'Введите USD/EUR/UAN');
if ((ofCurr != 'UAN') && (ofCurr != 'USD') && (ofCurr != 'EUR')) {
	alert('Введите верное значение!')
}

if (ofCurr == toCurr) {
	alert('Вы ввели одинаковые значения!')
}

switch (ofCurr) {
	case 'USD':
		currUsd = prompt('Введите курс USD: ', ' ');
	break;
  case 'EUR':
  	currEur = prompt('Введите курс EUR: ', ' ');
 	break;
  case 'UAN':
  	currUan = prompt('Введите курс UAN: ', ' ');
 	break;
 	default:
  	alert('Вы не указали курс!');
}

summ = Number(prompt('Какую сумму нужно конвертировать?', 'Введите целое число'));

//конвертация доллара в гривны или евро
if ((ofCurr == 'USD') || (toCurr == 'UAN')) {
	alert ('Результат конвертации ' + ofCurr + ' в ' + toCurr + '= ' + (summ * currUsd))
} else if ((ofCurr == 'USD') || (toCurr == 'EUR')) {
	alert ('Результат конвертации ' + ofCurr + ' в ' + toCurr + '= ' + (summ * currUsd))
}

//конвертация евро в гривны или доллар
if ((ofCurr == 'EUR') || (toCurr == 'UAN')) {
	alert ('Результат конвертации ' + ofCurr + ' в ' + toCurr + '= ' + (summ * currEur))
} else if ((ofCurr == 'EUR') || (toCurr == 'USD')) {
	alert ('Результат конвертации ' + ofCurr + ' в ' + toCurr + '= ' + (summ * currEur))
} 

//конвертация гривны в доллар или евро
if ((ofCurr == 'UAN') || (toCurr == 'USD')) {
	alert ('Результат конвертации ' + ofCurr + ' в ' + toCurr + '= ' + (summ / currUan))
} else if ((ofCurr == 'UAN') || (toCurr == 'EUR')) {
	alert ('Результат конвертации ' + ofCurr + ' в ' + toCurr + '= ' + (summ / currUan))
}
