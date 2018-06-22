/* Задание 1 -  Выведите на экран количество секунд, которое осталось до конца дня. */

function endSecond(){
var now = new Date();
var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
return console.log(Math.round((tomorrow - now) / 1000));
}

endSecond();

/* Задание 2 -  Создайте инпут, в который пользователь вводит дату своего рождения в формате '2014-12-31' (с конкретным годом). По потери фокуса выведите под инпутом сколько дней осталось до его дня рождения. Воспользуйтесь методом Date.parse.*/

var inp = document.getElementById('date');
var span = document.getElementById('res');
inp.addEventListener("blur", function(event){

var inpDate = inp.value; // cчитуем значение value с input
var parsDate = Date.parse(inpDate); // Парсим дату
var month = new Date(parsDate).getMonth()+1; // получаем месяц с parsDate
var day = new Date(parsDate).getDate(); // получаем день с parsDate
var msPerDay = 24*60*60*1000; // перевод с миллисекунд в дни
var today = new Date(); // создаем новый объект даты для сравнения с полученым значение с value
today.setHours(0,0,0,0); // обнуляем часы сегодняшнего дня 
var nextDate = new Date([today.getFullYear(),month,day]); //создаем новый объект с парсеными данными 

if (nextDate < today){ // исключаем год рождения 
	nextDate.setFullYear(today.getFullYear()+1);
}

daysLeft = Math.round((nextDate.getTime() - today.getTime())/msPerDay);// получаем количество дней до дня рождения
res.textContent = 'До дня рождения осталось - ' + daysLeft; //Вывод результата
});


/*Задание 3 -  Создайте таймер обратного отсчета. Используйте setTimeOut или SetInterval */

function time(){
 var timeInp = document.getElementById('time');
  timeInp.innerHTML--;
  if(timeInp == 0){
  	setTimeout(function(){},1000);
  }else{
  	setTimeout(time,1000);
  }

}

setTimeout(time, 1000);