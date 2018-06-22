Html
<div>
    <div>
        <p>One</p>
        <p>Two</p>
    </div>
    
    <div>
        <p>abc</p>
        <p>DEF</p>
    </div>
</div>

<div>
    <div>
        <p id="one" class="two">One</p>
        <p class="two">Two</p>
    </div>
    
    <div>
        <p id="four">Four</p>
        <p name="five">Five</p>
    </div>
</div>

JS
/*Задание 1 - Необходимо найти и вывести через console.log() 2й абзац, т.е. <p>Two</p>. Менять разметку нельзя, т.е. нельзя добавлять в неё классы или id или ещё что-то. Пользуйтесь методами getElementsByTagName или querySelector, а также их свойством children. Не забывайте, что некоторые из методов вернут массив, а значит доступ к результату должен быть через квадратные скобки и индекс. */

var elemQuery = document.querySelector("div > div > p:last-child");
console.log(elemQuery);

var elemTagName = document.getElementsByTagName("p")[1];
console.log(elemTagName);

/*Задание 2 - В той же разметке с теми же условиями сделайте текст абзаца <p>abc</p> в верхнем регистре, чтобы "abc" превратилось в "ABC". Т.е. в итоге абзац станет <p>ABC</p>. Для этого дополнительно воспользуйтесь свойствами textContent или innerHTML. Как менять регистр с нижнего на верхний, или наоборот, смотрите методы toUpperCase() и toLowerCase() ).
 */
 
var elemTagName = document.getElementsByTagName("div")[2];
var elemTagNameChild = elemTagName.children[0];
elemTagNameChild.style.textTransform = "uppercase";


/*Задание 3 - Та же разметка, измените абзац <p>DEF</p> на <p>Def</p>. При этом нельзя создавать просто строку "Def" и вставлять её в абзац. Необходимо получить текст абзаца, провести с ним манипуляции и вернуть на место с первой заглавной и остальными прописными буквами. */

var elemTagName = document.getElementsByTagName("p")[3];
var text = elemTagName.innerText;
var firstLetter = text.substring(0,1);
var textLow = text.substring(1,3).toLowerCase();
elemTagName.textContent = firstLetter + textLow;

/* Задание 4 - Через console.log() вывести все её абзацы, они же параграфы (тег <p>). */

var tagName = document.getElementsByTagName("p");

for(var i = 0; i < tagName.length; i++){
    console.log(tagName[i]);
}

/* Задание 5 - Найти и вывести в консоль текст элемента с id="four" */

var idName = document.getElementById("four");
var text = idName.innerText;
console.log(text);

/* Задание 6 - Элементам с классом "two" поменять размер шрифта на "30px"*/

var elemClass = document.getElementsByClassName("two");

for(var i = 0; i < elemClass.length; i++){
  elemClass[i].style.fontSize = "30px";
}

/* Задание 7 - Элементу с name="five" изменить цвет текста на красный */

var elemName = document.getElementsByName("five")[0];
elemName.style.color = "red";

/* Задание 8 - Как вы заметили, для красоты не хватает элемента с текстом "Three". Создайте такой абзац и вставьте после <p class="two">Two</p>. */

var elemTagName = document.getElementsByTagName("div")[4];
var newP = document.createElement("p");
newP.textContent = "Three";
elemTagName.insertBefore(newP,elemTagName.children[2]);

/* Задание 9 - Поменяйте фон этих абзацев<p id="four">Four</p><p name="five">Five</p>на жёлтый. Для этого найдите их родительский "div" и меняйте фон его дочерним элементам.
 */
var elemTagName = document.getElementsByTagName("div")[5];
var elemTagNameChild = elemTagName.children;
 
 for(var i = 0; i < elemTagNameChild.length; i++){
   elemTagNameChild[i].style.background = "yellow";
 }
 