html
<p>1.������� ������� double(), ������� ����� ��������� � �������� ��������� ����� � ��������� ���. ��������� ����� ���� ����� ������� ���������� ����� return, ���� ����� ������� ����� console.log. �������� double(5) ������ 10.
</p>
     <button id="task_1"type="button" name="button">���������</button>
<p>2.������� ������� greet(), ������� ����� prompt() ����� ���������� ��� ������������ � ����������� � ���, ������ �� ����� "������, ����� ����� ���
</p>
     <button id="task_2"type="button" name="button">���������</button>
<p>3.������� ������� exponent() ����� �������, ����� ����� ���� ������� � �� �������� (��������� ��� ����� Function Expression � Function Declaration � �������� ������). ��� ������� ������ ��������� � ������� �����. ��� ��������� �� ���� ��� ���������: ����� � �������. ��������� ���������� � ������� - ��� ��������� ������ ���� �������� ����� ���, �� ������������ �� ���������� ����� ���� (while ��� for).
</p>
     <button id="task_3"type="button" name="button">���������</button><p>4.�������� ������ ��������� ����� ����� �� 50 �� 100, ��������� ���� ���� for. ������ ������� ����� ����� 20. �������� ��������� ������ for �������� ������� � ������ �������� ��� ���������� �������� ����� if. �.�. ������� if (i % 2 == 0) ������ ������������. ���������: � ����� for ����� ������ �� ������ i++, �� � ���-�� ����� i+=3 (� ���� ������ ������� ����� ������ ��� ����� �� 3 �������, ������������ callback)
</p>
     <button id="task_4"type="button" name="button">���������</button>

javaScript
/* ������� 1 */
document.getElementById('task_1').onclick = function(){

	var res;
	double();
	function double(x){
		x= prompt('������� �����','');
  	res=x*2;
  	return res
  
	}
	console.log(res);
}

/* ������� 2 */
document.getElementById('task_2').onclick = function(){

	hi();
	function hi(name){
		name=prompt('��� ���� �����?','');
  	alert('������'+' '+name+'!')
	}
}
/* ������� 3 */
document.getElementById('task_3').onclick = function(){
var x,y;
		x=prompt('������� �����');
    y=prompt('������� �������');

function exponent(x,y){
	var res=1;
	var i=0;
		do{res*=x; i++}while(i<y);
       return res
      
	}
  console.log(exponent(x,y))
}
/* ������� 4 */
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
  		console.log('������� ������� � ������ ��������: ' , arr[b]);
  }
 return arr1;
}
 
}