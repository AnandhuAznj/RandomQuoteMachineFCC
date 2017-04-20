var vakyam=["I don't want to live in a world where everything I say, everything I do, everyone I talk to, every expression of creativity and love or friendship is recorded.","Be curious. Read widely. Try new things. What people call intelligence just boils down to curiosity.","Glory is fleeting, but obscurity is forever.","Not everything that can be counted counts, and not everything that counts can be counted.","If you can't make it good, at least make it look good.","Being the richest man in the cemetery doesn't matter to me. Going to bed at night saying we've done something wonderful, that's what matters to me.","Violence is any day preferable to impotence. There is hope for a violent man to become non-violent. There is no such hope for the importent.","Nearly all men can stand adversity, but if you want to test a man's character, give him power."];
var udayon= ["Edward Snowden","Aaron Swartz","Napoleon Bonaparte","Albert Einstein","Bill Gates","Steve jobs","Mahatma Gandhi","Abraham Lincoln"];

window.onload = puthiyaVakyam();


function puthiyaVakyam(){
  var kalapilaSankhya = Math.floor(Math.random()* (vakyam.length));
  ipoVakyam = document.getElementById('vakyamPradharshippikkuka').innerHTML= vakyam[kalapilaSankhya];
  ipoUdayon = document.getElementById("udayonPradharshippikkuka").innerHTML= udayon[kalapilaSankhya];
  
}