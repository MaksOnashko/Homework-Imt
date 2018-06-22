/* ������� 1 -  �������� �� ����� ���������� ������, ������� �������� �� ����� ���. */

function endSecond(){
var now = new Date();
var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
return console.log(Math.round((tomorrow - now) / 1000));
}

endSecond();

/* ������� 2 -  �������� �����, � ������� ������������ ������ ���� ������ �������� � ������� '2014-12-31' (� ���������� �����). �� ������ ������ �������� ��� ������� ������� ���� �������� �� ��� ��� ��������. �������������� ������� Date.parse.*/

var inp = document.getElementById('date');
var span = document.getElementById('res');
inp.addEventListener("blur", function(event){

var inpDate = inp.value; // c������ �������� value � input
var parsDate = Date.parse(inpDate); // ������ ����
var month = new Date(parsDate).getMonth()+1; // �������� ����� � parsDate
var day = new Date(parsDate).getDate(); // �������� ���� � parsDate
var msPerDay = 24*60*60*1000; // ������� � ����������� � ���
var today = new Date(); // ������� ����� ������ ���� ��� ��������� � ��������� �������� � value
today.setHours(0,0,0,0); // �������� ���� ������������ ��� 
var nextDate = new Date([today.getFullYear(),month,day]); //������� ����� ������ � ��������� ������� 

if (nextDate < today){ // ��������� ��� �������� 
	nextDate.setFullYear(today.getFullYear()+1);
}

daysLeft = Math.round((nextDate.getTime() - today.getTime())/msPerDay);// �������� ���������� ���� �� ��� ��������
res.textContent = '�� ��� �������� �������� - ' + daysLeft; //����� ����������
});


/*������� 3 -  �������� ������ ��������� �������. ����������� setTimeOut ��� SetInterval */

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