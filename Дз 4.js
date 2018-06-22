//�������� ������� 4 ������ ������� (� 1 �� 6)

/*1.	�������������� �������. ������������� ������ ���, ����� ������� ��� ��� ������������� ��������, � ����� �������������(0 ������� �������������). �������� ��� ������ [1, -4, 0, 6, 17, -5, 0] � ����� [-4, -5, 1, 0, 6, 17, 0]
*/
var arr = [6, 9, 0, 13, -2, 3, -5, 7];
arr.sort(function(a, b){return a - b});
console.log(arr);

/*2.������ ���������. �������� ��� ������������� �������� ��������� �������  �� ��������. �������� ��� ������ [-1, 3, -5, 2] � ����� [1, 3, 5, 2]
*/
var mod = [-1, 3, -5, 2];

for (var i = 0; i <= mod.length; i++) {
	if (mod[i] <= 0) {
		mod[i] = Math.abs(mod[i]);
	}
}
console.log(mod);

/*3.	������� �������������� �������. �������� ���������, ������������ ������� �������������� �������������/�������������/��������� ��������� �������. 
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
	if (arr[i] > 0) { 							//��� �������������
		sumPlus += arr[i];
		countPlus++;
	}
	if (arr[i] < 0) { 							//��� �������������
		sumMinus += arr[i];
		countMinus++;
	}
	if (arr[i] != 0) { 							//��� �� �������
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

//4.	����� ���-��. �������� ���������, ������������ �����/���������� �������������/������������� ��������� �������
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
console.log ('����� ������������� ��������� = ' + sumPlus + '\n',
						'���-�� ������������� ��������� = ' + numPlus + '\n',
            '����� ������������� ��������� = ' + sumMinus + '\n',
    				'���-�� ������������� ��������� = ' + numMinus + '\n',
						'�������� ������ � [' + arr + ']');
            
/*5.	����������� �������� . �������� ���������, ���������� �������� 2-� ��������  � ���� ������ ��������� �������: ������� ���������� ��������������� ��� ��������, ������� 0, ����� ��������������� ��� ��������, ������ 0, � ����� ��������������� ��� ��������, ������� 0. 
*/
var arr1 = [1, -1, 2, 0, 3];
var arr2 = [-4, 0, 5, -5, 6];
var newArr = [];
var positiveArr;
var zeroArr;
var negativeArr;

//����� ������ 0
positiveArr = arr1.filter(function(number) {
	return number > 0;
});
positiveArr += arr2.filter (function(number) {
 return number > 0;
});

//����� ����� 0
zeroArr = arr1.filter(function(number) {
	return number == 0;
});
zeroArr += arr2.filter (function(number) {
 return number == 0;
});

//����� ������ 0
negativeArr = arr1.filter(function(number) {
	return number < 0;
});
negativeArr += arr2.filter (function(number) {
 return number < 0;
});

newArr = positiveArr.concat(zeroArr, negativeArr);
console.log(newArr);

/*6.	����� ��������� ����� 0. �������� ���������, ������������ ����� ��������� �������, ����������� � ������� ����� ������� �������� �� ��������� 0.
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

console.log('�������� ������: ' + arr);
console.log('����� ��������� ������� ����� 0: ' + result1);

// ����������***

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
library.category_1 = new Category('�����c����');
library.category_2 = new Category('������');
library.category_3 = new Category('�������');

library.category_1.book_1 = new Book('��������������','������ ����','���������������, �������� ���������� � ������',823);
library.category_1.book_2 = new Book('���� ���������','������ �. �. ������','�������',835);
library.category_1.book_3 = new Book('���','������ ����','�����',1138);
library.category_1.book_4 = new Book('��������� �����','��. �. �. ������','�������',2176);

library.category_2.book_1 = new Book('����� � ������ �����','����� �������','������',200);
library.category_2.book_2 = new Book('�����-��������','���� �����','������',144);
library.category_2.book_3 = new Book('�������� �� ����','������� �����','������',408);
library.category_2.book_4 = new Book('������ ����� �����','����� �������','������',136);

library.category_3.book_1 = new Book('����','������ ���������','�������',416);
library.category_3.book_2 = new Book('������ ��������','������ ����','�������',480);
library.category_3.book_3 = new Book('׸���� ������','���� ���-�����','�������',456);
library.category_3.book_4 = new Book('��������������','����� �����','�������',320);

console.log(library);

// ** ���������� 2� ������� ������� ���������� �������
var array_row = +prompt('������� ������ �������','');
var array_col = +prompt('������� ������ �������','');
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
alert('����������� �������� = ' + min + '\n������������ �������� = '+max);









