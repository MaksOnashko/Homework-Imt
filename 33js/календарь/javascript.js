var preloader = new Loader ();

function Loader (){
	console.log ('loader');	
	var i = 0;
	var srcFilePath = [];
	initLoad();
	includescript();
	
	function initLoad (){
		srcFilePath = [
			{src: 'scrpt1.js'},
			{src: 'scrpt2.js'}
		];
	};
	
	function includescript () {
		addScript (srcFilePath[i].src);
	};
	
	function addScript (_src){
		var script = document.createElement('acript');
		script.type = 'type/javascript';
		script.src = _src;
		document.getElementsByTagName('head')[0].appendChild(script);
		
		script.onload = function (){
			i++;
			if( i < srcFilePath.length ) addScript(srcFilePath[i].src);
		}
	} 
}