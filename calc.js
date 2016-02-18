var OP = 0;
var NE = 0;
var RESULT = 0;

function dec2bin(i){
  if(i >= 0){
    return i.toString(2);
  }else{
    return (~i.toString(2));
  }
}

 function num(numero){
   var out = document.getElementById('rslt');
   OP = OP + (numero*Math.pow(2, NE));
   NE++;
   out.innerHTML = dec2bin(OP);
 }
 function suma(){
   RESULT = OP;
   OP = 0;
   NE = 0;
 }

 function resultado(){
   RESULT = RESULT + OP;
   OP = 0;
   NE = 0;
   var out = document.getElementById('rslt');
   out.innerHTML = dec2bin(RESULT);
 }

 function clr(){
   OP = RESULT = NE = 0;
   var out = document.getElementById('rslt');
   out.innerHTML = RESULT;
 }
