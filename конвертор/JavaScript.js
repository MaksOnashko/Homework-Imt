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