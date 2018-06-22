// Замена всех нулей на -1
var arr = [ 1, 4, 0, 5, 0 ,6, 8 ];
arr[ 2 ] = -1;
arr[ 4 ] = -1;
console.log(arr);

// Cреднее арефметическое 
var arr1 = [ 2, 2, 0, 2, -2 ];
var sum = 0;
	for ( var i = 0; i < arr1.length; i++ ){
		sum += arr1[ i ];
}

var result = sum / arr1.length;
console.log(result);

//Сумма кол-во
var arr3 = [ 1, -4, 6, 7, -3 ];
var sum = 0;
	for ( var i = 0; i < arr3.length; i++ ){
    if( arr3[ i ] < 0 ){
    sum += arr3[ i ];
    }    
}

var result = sum;
console.log(result);

var arr3 = [ 1, -4, 6, 7, -3 ];
var sum = 0;
	for ( var i = 0; i < arr3.length; i++ ){
    if( arr3[ i ] > 0 ){
    sum += arr3[ i ];
    }    
}

var result = sum;
console.log(result);

var arr3 = [ 1, -4, 6, 7, -3 ];
var sum = 0;
	for ( var i = 0; i < arr3.length; i++ ){
    if( arr3[ i ] > 0 ){
    sum ++;
    }    
}

var result = sum;
console.log(result);
var arr3 = [ 1, -4, 6, 7, -3 ];
var sum = 0;
	for ( var i = 0; i < arr3.length; i++ ){
    if( arr3[ i ] < 0 ){
    sum ++;
    }    
}

var result = sum;
console.log(result);

// Напитки
var userDrink;
var add;
var count;

do {
  
userDrink = prompt('Введите напиток. В наличии есть пиво , виски , ром.','');
switch (userDrink) {

  case 'пиво':
  case 'Пиво':
    alert('Вы пьете '+ userDrink);
    add = prompt('С рыбкой ? ( да / нет )','');
    if (add == 'да') {
      alert('С рыбой очень вкуссно');
    } else {
      alert('Тогда орехи');
    }
  break;

  case 'ром':
  case 'Ром':
    add = prompt('Точно этот ром? ( да / нет )','');
    if (add == 'да') {
      alert('Это отличный выбор!');
    } else {
      alert('Давайте выберем что-то другое.');
    }
  break;

  case 'виски':
  case 'Виски':
    alert('Это отличный выбор!!'+ userDrink)
    add = prompt('12 лет? ( да / нет )','');
    if (add == 'да') {
      alert('Вы настоящий знаток!');
    } else{
      alert('не переживайте мы подберем вам что нибудь другое!');
    }
    add = prompt('Как вам этот 6 летний бурбон? ( да / нет )','');
    if (add == 'да') {
      alert('ОК, тогда поехали');
    } else{
      alert('Извините тогда это не виски...');
    }
  break;

  default:
    alert('Приятного отдыха с ' + userDrink);
}
    count = prompt('Повторим ? ( да / нет )','') ;
} while (count !== 'нет');