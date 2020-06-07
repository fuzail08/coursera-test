(function(window){

var sayWord = "Good Bye";
var byeSayer={};
byeSayer.say=function (name) {
  console.log(sayWord + " " + name);
};
window.byeSayer = byeSayer;
})(window);
