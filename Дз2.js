var a = ( Number( prompt( '������� ������ �����/�����', '�����/�����' )));
var b = ( Number( prompt( '������� ������ �����/�����', '�����/�����' )));
if (a > b) {
alert ( '�������� �� ���� ����� ' + a );
} else if ( a === b) {
alert ( '�����/����� �����! ' + a + '=' + b );
} else {
alert ( '�������� �� ���� ����� ' + b );
}


var num1 = ( Number( prompt( '������� ������ �����/�����', '�����/�����' )));
var num2 = ( Number( prompt( '������� ������ �����/�����', '�����/�����' )));
var num3 = ( Number( prompt( '������� ������ �����/�����', '�����/�����' )));
if  (num1 > num2  && num1 > num3  ) {
alert ( '�������� �� ���� ����� ' + num1 );
} else if ( num2 > num3 && num2 > num1 ) {
alert ( '�������� �� ���� ����� ' + num2 );
} else if ( num3 > num1 && num3 > num2 ) {
alert ( '�������� �� ���� ����� ' + num3 );
} else if ( num1 == num2 == num3 ){
alert ( '�����/����� �����! ' + num1 + '=' + num2 + '=' + num3 );
} else {
alert ( '������������ ����!');
}

//3.���, ������� �������� ������� �� ������� � ������� �� ����������
var Cels; //�� �������
var Fahrn=32; //�� ����������

Cels = Number(prompt('Enter degrees Celsius: ', ' '));
alert(Cels * 1.8 + Fahrn)

//4.���, ������� ����� ��������� �� ������������ ��� ����� � �������� ������� �� �������� �����
var msgInput = 'Please enter ';
var defName = 'number from 0 to 100';
var num1 = Number(prompt (msgInput + 'the first number: ', defName));
var num2 = Number(prompt (msgInput + 'the second number: ', defName));
var num3 = Number(prompt (msgInput + 'the third number: ', defName));
var average; //������� ��������

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

//4.��������� ����� 
var ofCurr; //�� ����� ������
var toCurr; //� ����� ������
var currUsd; //���� �������
var currEur; //���� ����
var currUan; //���� ������
var summ;
var result;

ofCurr = prompt('�� ����� ������ ������ ��������������?', '������� USD/EUR/UAN');
toCurr = prompt('� ����� ������ ������ ��������������?', '������� USD/EUR/UAN');
if ((ofCurr != 'UAN') && (ofCurr != 'USD') && (ofCurr != 'EUR')) {
	alert('������� ������ ��������!')
}

if (ofCurr == toCurr) {
	alert('�� ����� ���������� ��������!')
}

switch (ofCurr) {
	case 'USD':
		currUsd = prompt('������� ���� USD: ', ' ');
	break;
  case 'EUR':
  	currEur = prompt('������� ���� EUR: ', ' ');
 	break;
  case 'UAN':
  	currUan = prompt('������� ���� UAN: ', ' ');
 	break;
 	default:
  	alert('�� �� ������� ����!');
}

summ = Number(prompt('����� ����� ����� ��������������?', '������� ����� �����'));

//����������� ������� � ������ ��� ����
if ((ofCurr == 'USD') || (toCurr == 'UAN')) {
	alert ('��������� ����������� ' + ofCurr + ' � ' + toCurr + '= ' + (summ * currUsd))
} else if ((ofCurr == 'USD') || (toCurr == 'EUR')) {
	alert ('��������� ����������� ' + ofCurr + ' � ' + toCurr + '= ' + (summ * currUsd))
}

//����������� ���� � ������ ��� ������
if ((ofCurr == 'EUR') || (toCurr == 'UAN')) {
	alert ('��������� ����������� ' + ofCurr + ' � ' + toCurr + '= ' + (summ * currEur))
} else if ((ofCurr == 'EUR') || (toCurr == 'USD')) {
	alert ('��������� ����������� ' + ofCurr + ' � ' + toCurr + '= ' + (summ * currEur))
} 

//����������� ������ � ������ ��� ����
if ((ofCurr == 'UAN') || (toCurr == 'USD')) {
	alert ('��������� ����������� ' + ofCurr + ' � ' + toCurr + '= ' + (summ / currUan))
} else if ((ofCurr == 'UAN') || (toCurr == 'EUR')) {
	alert ('��������� ����������� ' + ofCurr + ' � ' + toCurr + '= ' + (summ / currUan))
}
