//Домашнее задание 4 модуль массивы (с 1 по 6)

/*1.	Преобразование массива. Преобразовать массив так, чтобы сначала шли все отрицательные элементы, а потом положительные(0 считать положительным). Например дан массив [1, -4, 0, 6, 17, -5, 0] – будет [-4, -5, 1, 0, 6, 17, 0]
*/
var arr = [6, 9, 0, 13, -2, 3, -5, 7];
arr.sort(function(a, b){return a - b});
console.log(arr);

/*2.Модуль элементов. Заменить все отрицательные значения элементов массива  их модулями. Например был массив [-1, 3, -5, 2] – будет [1, 3, 5, 2]
*/
var mod = [-1, 3, -5, 2];

for (var i = 0; i <= mod.length; i++) {
	if (mod[i] <= 0) {
		mod[i] = Math.abs(mod[i]);
	}
}
console.log(mod);

/*3.	Среднее арифметическое массива. Написать программу, определяющую среднее арифметическое положительных/отрицательных/ненулевых элементов массива. 
*/
var arr = [3, -6, 0, 8, 15, -9, 0, -13, 0, 4, 7];
var arrAver = new Array (3);
var sumPlus = 0;
var countPlus = 0;
var sumMinus = 0;
var countMinus = 0;
var sumUnZero = 0;
var countUnZero = 0;
	
for (var i=0; i<arr.length; i++){
	if (arr[i] > 0) { 							//для положительных
		sumPlus += arr[i];
		countPlus++;
	}
	if (arr[i] < 0) { 							//для отрицательных
		sumMinus += arr[i];
		countMinus++;
	}
	if (arr[i] != 0) { 							//для не нулевых
		sumUnZero += arr[i];
		countUnZero++;
	}
}
	
	arrAver[0] = sumPlus/countPlus;
	arrAver[1] = sumMinus/countMinus;
	arrAver[2] = sumUnZero/countUnZero;
	
	arrAver.forEach(function(val) {
		console.log(val);
});

//4.	Сумма кол-во. Написать программу, определяющую сумму/количество положительных/отрицательных элементов массива
var arr = [-5, 6, 0, -3, 2];
var sumPlus = 0;
var numPlus = 0;
var sumMinus = 0;
var numMinus = 0;

for (var i = 0; i < arr.length; i++) {
	if (arr[i] >= 0) {
  sumPlus += arr[i];
  numPlus++;
  }
  if (arr[i] < 0) {
  sumMinus += arr[i];
  numMinus++;
  }
}
console.log ('Сумма положительных элементов = ' + sumPlus + '\n',
						'Кол-во положительных элементов = ' + numPlus + '\n',
            'Сумма отрицательных элементов = ' + sumMinus + '\n',
    				'Кол-во отрицательных элементов = ' + numMinus + '\n',
						'Исходный массив – [' + arr + ']');
            
/*5.	Копирование массивов . Написать программу, копирующую элементы 2-х массивов  в один массив следующим образом: сначала копируются последовательно все элементы, большие 0, затем последовательно все элементы, равные 0, а затем последовательно все элементы, меньшие 0. 
*/
var arr1 = [1, -1, 2, 0, 3];
var arr2 = [-4, 0, 5, -5, 6];
var newArr = [];
var positiveArr;
var zeroArr;
var negativeArr;

//числа больше 0
positiveArr = arr1.filter(function(number) {
	return number > 0;
});
positiveArr += arr2.filter (function(number) {
 return number > 0;
});

//числа равны 0
zeroArr = arr1.filter(function(number) {
	return number == 0;
});
zeroArr += arr2.filter (function(number) {
 return number == 0;
});

//числа меньше 0
negativeArr = arr1.filter(function(number) {
	return number < 0;
});
negativeArr += arr2.filter (function(number) {
 return number < 0;
});

newArr = positiveArr.concat(zeroArr, negativeArr);
console.log(newArr);

/*6.	Сумма элементов после 0. Написать программу, определяющую сумму элементов массива, находящихся в массиве после первого элемента со значением 0.
*/
var arr = [1, 6, 0, -7, 9, 8, 3];
var summ;
var newArr;
var result;

for(var i = 0; i < arr.length; i++) {
	if( arr[i] == 0){
  	summ = i;
  }
    newArr = arr.slice(summ);
}
console.log(newArr);

for (var j = 0; j < newArr.length; j++) {
	result += newArr[j];
}
var result1 = newArr.reduce(function (sum, current) {
return sum + current;
});

console.log('Исходный массив: ' + arr);
console.log('Сумма элементов массива после 0: ' + result1);

// Библиотека***

function Book(name, autor, genre, pages) {
  this.name = name;
  this.autor = autor;
	this.genre = genre;
	this.pages = pages;
}
function Category(name) {
  this.name = name;
}
var library = [];
library.category_1 = new Category('Фантаcтика');
library.category_2 = new Category('Сказки');
library.category_3 = new Category('Триллер');

library.category_1.book_1 = new Book('Противостояние','Стивен Кинг','постапокалипсис, элементы фантастики и ужасов',823);
library.category_1.book_2 = new Book('Игра престолов','Джордж Р. Р. Мартин','фэнтези',835);
library.category_1.book_3 = new Book('Оно','Стивен Кинг','ужасы',1138);
library.category_1.book_4 = new Book('Властелин колец','Дж. Р. Р. Толкин','фэнтези',2176);

library.category_2.book_1 = new Book('Алиса в Стране чудес','Льюис Кэрролл','Сказка',200);
library.category_2.book_2 = new Book('Конек-горбунок','Петр Ершов','Сказка',144);
library.category_2.book_3 = new Book('Незнайка на Луне','Николай Носов','Сказка',408);
library.category_2.book_4 = new Book('Сказки барда Бидля','Джоан Роулинг','Сказка',136);

library.category_3.book_1 = new Book('Беда','Джесси Келлерман','Триллер',416);
library.category_3.book_2 = new Book('Мистер Мерседес','Стивен Кинг','Триллер',480);
library.category_3.book_3 = new Book('Чёрный пробел','Клод Луи-Комбе','Триллер',456);
library.category_3.book_4 = new Book('Головокружение','Франк Тилье','Триллер',320);

console.log(library);

// ** заполнение 2х мерного массива случайными числами
var array_row = +prompt('Введите ширину массива','');
var array_col = +prompt('Введите высоту массива','');
var min=999;
var max=-999;
var array= new Array();
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max+1 - min)) + min ;
}
for (var i = 0; i < array_row; i++) {
	array[i] = new Array();
	for (var j = 0; j < array_col; j++) {
		array[i][j] = getRndInteger(-100, 100);

		if(array[i][j]<=min){
			min=array[i][j];
		}
		if(array[i][j]>=max){
			max=array[i][j];
		}
		console.log(array[i][j]);
	}
}
alert('Минимальное значение = ' + min + '\nМаксимальное значение = '+max);









