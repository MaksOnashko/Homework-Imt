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
/*������� 1 - ���������� ����� � ������� ����� console.log() 2� �����, �.�. <p>Two</p>. ������ �������� ������, �.�. ������ ��������� � �� ������ ��� id ��� ��� ���-��. ����������� �������� getElementsByTagName ��� querySelector, � ����� �� ��������� children. �� ���������, ��� ��������� �� ������� ������ ������, � ������ ������ � ���������� ������ ���� ����� ���������� ������ � ������. */

var elemQuery = document.querySelector("div > div > p:last-child");
console.log(elemQuery);

var elemTagName = document.getElementsByTagName("p")[1];
console.log(elemTagName);

/*������� 2 - � ��� �� �������� � ���� �� ��������� �������� ����� ������ <p>abc</p> � ������� ��������, ����� "abc" ������������ � "ABC". �.�. � ����� ����� ������ <p>ABC</p>. ��� ����� ������������� �������������� ���������� textContent ��� innerHTML. ��� ������ ������� � ������� �� �������, ��� ��������, �������� ������ toUpperCase() � toLowerCase() ).
 */
 
var elemTagName = document.getElementsByTagName("div")[2];
var elemTagNameChild = elemTagName.children[0];
elemTagNameChild.style.textTransform = "uppercase";


/*������� 3 - �� �� ��������, �������� ����� <p>DEF</p> �� <p>Def</p>. ��� ���� ������ ��������� ������ ������ "Def" � ��������� � � �����. ���������� �������� ����� ������, �������� � ��� ����������� � ������� �� ����� � ������ ��������� � ���������� ���������� �������. */

var elemTagName = document.getElementsByTagName("p")[3];
var text = elemTagName.innerText;
var firstLetter = text.substring(0,1);
var textLow = text.substring(1,3).toLowerCase();
elemTagName.textContent = firstLetter + textLow;

/* ������� 4 - ����� console.log() ������� ��� � ������, ��� �� ��������� (��� <p>). */

var tagName = document.getElementsByTagName("p");

for(var i = 0; i < tagName.length; i++){
    console.log(tagName[i]);
}

/* ������� 5 - ����� � ������� � ������� ����� �������� � id="four" */

var idName = document.getElementById("four");
var text = idName.innerText;
console.log(text);

/* ������� 6 - ��������� � ������� "two" �������� ������ ������ �� "30px"*/

var elemClass = document.getElementsByClassName("two");

for(var i = 0; i < elemClass.length; i++){
  elemClass[i].style.fontSize = "30px";
}

/* ������� 7 - �������� � name="five" �������� ���� ������ �� ������� */

var elemName = document.getElementsByName("five")[0];
elemName.style.color = "red";

/* ������� 8 - ��� �� ��������, ��� ������� �� ������� �������� � ������� "Three". �������� ����� ����� � �������� ����� <p class="two">Two</p>. */

var elemTagName = document.getElementsByTagName("div")[4];
var newP = document.createElement("p");
newP.textContent = "Three";
elemTagName.insertBefore(newP,elemTagName.children[2]);

/* ������� 9 - ��������� ��� ���� �������<p id="four">Four</p><p name="five">Five</p>�� �����. ��� ����� ������� �� ������������ "div" � ������� ��� ��� �������� ���������.
 */
var elemTagName = document.getElementsByTagName("div")[5];
var elemTagNameChild = elemTagName.children;
 
 for(var i = 0; i < elemTagNameChild.length; i++){
   elemTagNameChild[i].style.background = "yellow";
 }
 