// ������ ���� ����� �� -1
var arr = [ 1, 4, 0, 5, 0 ,6, 8 ];
arr[ 2 ] = -1;
arr[ 4 ] = -1;
console.log(arr);

// C������ �������������� 
var arr1 = [ 2, 2, 0, 2, -2 ];
var sum = 0;
	for ( var i = 0; i < arr1.length; i++ ){
		sum += arr1[ i ];
}

var result = sum / arr1.length;
console.log(result);

//����� ���-��
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

// �������
var userDrink;
var add;
var count;

do {
  
userDrink = prompt('������� �������. � ������� ���� ���� , ����� , ���.','');
switch (userDrink) {

  case '����':
  case '����':
    alert('�� ����� '+ userDrink);
    add = prompt('� ������ ? ( �� / ��� )','');
    if (add == '��') {
      alert('� ����� ����� �������');
    } else {
      alert('����� �����');
    }
  break;

  case '���':
  case '���':
    add = prompt('����� ���� ���? ( �� / ��� )','');
    if (add == '��') {
      alert('��� �������� �����!');
    } else {
      alert('������� ������� ���-�� ������.');
    }
  break;

  case '�����':
  case '�����':
    alert('��� �������� �����!!'+ userDrink)
    add = prompt('12 ���? ( �� / ��� )','');
    if (add == '��') {
      alert('�� ��������� ������!');
    } else{
      alert('�� ����������� �� �������� ��� ��� ������ ������!');
    }
    add = prompt('��� ��� ���� 6 ������ ������? ( �� / ��� )','');
    if (add == '��') {
      alert('��, ����� �������');
    } else{
      alert('�������� ����� ��� �� �����...');
    }
  break;

  default:
    alert('��������� ������ � ' + userDrink);
}
    count = prompt('�������� ? ( �� / ��� )','') ;
} while (count !== '���');