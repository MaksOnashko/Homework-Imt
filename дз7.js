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
1. При клике на кнопку изменить размер шрифта абзаца до 40px.
 */


var paragraph = document.getElementById('paragraph1');

var btnClick = document.getElementsByTagName('button');

btnClick = addEventListener('click', paragFont);
btnClick = addEventListener('dblclick', paragColor);

function paragFont(event){
    paragraph.style.fontSize='40px';

}

//paragraph изменит цвет и размер при двойном клике
function paragColor(){
    paragraph.style.fontSize='10px';
    paragraph.style.color='red';

}


/*
2. При наведении указателя мыши на кнопку менять текст кнопки на "Наведён курсор".
 Если мы указатель уводим, то возвращать изначальный текст кнопки.
 Текст, который был там изначально получить в виде переменной из реального текста кнопки, а не просто написать "Кнопка".

 */

var btnStat = document.getElementsByTagName('button')[0];
var btnText = btnStat.innerText;
console.log('Будет сохранено' + ' ' + btnText);

btnStat.addEventListener('mouseover', mouseOver);
btnStat.addEventListener('mouseout', mouseOut);

function mouseOver(event){

    btnStat.innerHTML='Наведен курсор';
    console.log('Результат при наведении' + ' ' +btnStat.innerHTML);
};

function mouseOut(){

    btnStat.innerHTML=btnText;
    console.log('Вернулся предыдущий текст' + ' ' +btnStat.innerHTML);
};


/*
3. Имитируем примитивную проверку правильности ввода email адреса.
Для поля "input" навесить слушатель на событие change и проверять, если среди введённых символов нет символа "@",
то через alert() вывести предупреждение,
а если символ есть, то ничего не выводим.
 В идеале, если мы снова поменяем текст и там не будет @, то опять выводить alert().

 */


var input = document.getElementsByTagName('input')[0];
input.addEventListener('change', valueChange);

function valueChange(){
    var stat = input.value;
    if(((stat.indexOf('@')) && (stat.indexOf('0'))) == -1){
        alert("Ошибка! Повторите ввод");
    }

};

/*
4. Через слушатели "focus" и "blur" менять фон input.
Например сделать #69F0AE при фокусе и #FF8A80 при потере фокуса.
Cлушатели событий можете добавлять разными способами: прямо в разметку через onclick, onfocus,
в размету через <script> или отдельным файлом. Или по-разному, чтобы закрепить все варианты.

 */

var input =document.getElementsByTagName('input')[0];

input.addEventListener('focus',addFocus );
input.addEventListener('blur',addBlur);

function addFocus(){
    console.log('Фокус отработал');
    input.style.background='#69F0AE';

};

function addBlur(){
    console.log('фокус убран');
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
	btn.textContent = "Наведён курсор";
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
/*var buttonTextOn ='Наведён курсор';
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
