<div>
        <div class="colorText">
            <button>Button</button>
            <p id="paragraph1">I am just paragraph</p>
        </div>

        <div>
            <input>
            
        </div>
</div>

/*
1. ��� ����� �� ������ �������� ������ ������ ������ �� 40px.
 */


var paragraph = document.getElementById('paragraph1');

var btnClick = document.getElementsByTagName('button');

btnClick = addEventListener('click', paragFont);
btnClick = addEventListener('dblclick', paragColor);

function paragFont(event){
    paragraph.style.fontSize='40px';

}

//paragraph ������� ���� � ������ ��� ������� �����
function paragColor(){
    paragraph.style.fontSize='10px';
    paragraph.style.color='red';

}


/*
2. ��� ��������� ��������� ���� �� ������ ������ ����� ������ �� "������ ������".
 ���� �� ��������� ������, �� ���������� ����������� ����� ������.
 �����, ������� ��� ��� ���������� �������� � ���� ���������� �� ��������� ������ ������, � �� ������ �������� "������".

 */

var btnStat = document.getElementsByTagName('button')[0];
var btnText = btnStat.innerText;
console.log('����� ���������' + ' ' + btnText);

btnStat.addEventListener('mouseover', mouseOver);
btnStat.addEventListener('mouseout', mouseOut);

function mouseOver(event){

    btnStat.innerHTML='������� ������';
    console.log('��������� ��� ���������' + ' ' +btnStat.innerHTML);
};

function mouseOut(){

    btnStat.innerHTML=btnText;
    console.log('�������� ���������� �����' + ' ' +btnStat.innerHTML);
};


/*
3. ��������� ����������� �������� ������������ ����� email ������.
��� ���� "input" �������� ��������� �� ������� change � ���������, ���� ����� �������� �������� ��� ������� "@",
�� ����� alert() ������� ��������������,
� ���� ������ ����, �� ������ �� �������.
 � ������, ���� �� ����� �������� ����� � ��� �� ����� @, �� ����� �������� alert().

 */


var input = document.getElementsByTagName('input')[0];
input.addEventListener('change', valueChange);

function valueChange(){
    var stat = input.value;
    if(((stat.indexOf('@')) && (stat.indexOf('0'))) == -1){
        alert("������! ��������� ����");
    }

};

/*
4. ����� ��������� "focus" � "blur" ������ ��� input.
�������� ������� #69F0AE ��� ������ � #FF8A80 ��� ������ ������.
C�������� ������� ������ ��������� ������� ���������: ����� � �������� ����� onclick, onfocus,
� ������� ����� <script> ��� ��������� ������. ��� ��-�������, ����� ��������� ��� ��������.

 */

var input =document.getElementsByTagName('input')[0];

input.addEventListener('focus',addFocus );
input.addEventListener('blur',addBlur);

function addFocus(){
    console.log('����� ���������');
    input.style.background='#69F0AE';

};

function addBlur(){
    console.log('����� �����');
    input.style.background='#FF8A80';

};



//1
var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function(event){
	document.getElementById("paragraph1").style.fontSize = 40 + "px";
});

//2
var btn = document.getElementsByTagName("button")[0];
var btnText = button.innerText;

btn.addEventListener("mouseover", function(event){
	btn.textContent = "������ ������";
});
btn.addEventListener("mouseout", function(event){
	btn.textContent = btnText;
});

//3
var input = document.getElementsByTagName("input")[0];

input.addEventListener("change", function(event){
	if(input.value.indexOf('@', 0) == -1){
  alert("Error!");
  }
})

//4
var input = document.getElementsByTagName("input")[0];

input.addEventListener("focus", function(event){
	input.style.backgroundColor = "#69F0AE";
});

input.addEventListener("blur", function(event){
	input.style.backgroundColor = "#FF8A80";
});


//1 changing p font size to 40 after click
/*
var p;
var button;

p = document.getElementsByTagName('p')[0];
button = document.getElementsByTagName('button')[0];
button.addEventListener('click', function(event) {
  p.style.fontSize = '40px';
});*/


//2 
/*var buttonTextOn ='������ ������';
var buttonTextOff;

buttonTextOff = document.getElementsByTagName('button')[0].innerHTML; //getting button's text
//console.log(buttonTextOff);

button = document.getElementsByTagName('button')[0];//changing button's text while hover
button.addEventListener('mouseover', function(event) {
  document.getElementsByTagName('button')[0].innerHTML=buttonTextOn;
});

button.addEventListener('mouseout', function(event) {//changing button's text while UNhover
  document.getElementsByTagName('button')[0].innerHTML=buttonTextOff;
});*/


//3 
/*var input;
var content;

input = document.getElementsByTagName('input')[0];
input.addEventListener('change', onChange);

function onChange() {
  content = input.value;
  if (content.indexOf('@') == -1) {
    alert('net cobaki'); //alert if @ not found 
  }
}*/


//4 
var input;

input = document.getElementsByTagName('input')[0];
input.addEventListener('focus', onFocus);
input.addEventListener('blur', outFocus);

function onFocus() {
  input.style.backgroundColor = '#69F0AE';
}
function outFocus() {
  input.style.backgroundColor = '#FF8A80';
}
