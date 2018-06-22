
/* Объединяет все компоненты 
 * и добавляет их в index.html
 */
var preloader = Loader();

function Loader () {
	console.log('Loader');

	var srcFilePath = [];
	var i = 0;
	initLoad();   
    includeScripts();



	function initLoad () {
		srcFilePath = [
			{src: 'my_script2.js'},
			{src: 'my_script1.js'},
			
		];
	};

	 function includeScripts() {       
		addScript(srcFilePath[i].src);        
    };

	function addScript (_src) {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = _src;
		document.getElementById('indxHead').appendChild(script);
		script.onload = function () {
			i++;
			if( i < srcFilePath.length) addScript(srcFilePath[i].src);			
		}; 
	};
}


