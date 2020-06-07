
(function(window){
	var sayWord = "Hello";
	var helloSayer={};

	helloSayer.say=function(name) {
  	console.log(sayWord + " " + name);
	}
	window.helloSayer = helloSayer;
})(window);
