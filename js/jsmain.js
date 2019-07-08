function display(num){
  var ipText = document.getElementById("ip-text");
  var ipVal = ipText.value;
  ipVal = ipVal+num;
  ipText.value = ipVal;
}
function displayDot(){
  var ipText = document.getElementById("ip-text");
  var ipVal = ipText.value;
  if (ipVal.indexOf('.')<=-1){
    ipVal = ipVal+".";
    ipText.value = ipVal;
  }
}
function isInt(n){
   return n % 1 === 0;
}

var num1;
var op;

function plus(){
  var ipText = document.getElementById("ip-text");
  num1 = ipText.value;
  ipText.value = "";
  op = "+";
}
function minus(){
  var ipText = document.getElementById("ip-text");
  num1 = ipText.value;
  ipText.value = "";
  op = "-";
}
function multiply(){
  var ipText = document.getElementById("ip-text");
  num1 = ipText.value;
  ipText.value = "";
  op = "*";
}
function divide(){
  var ipText = document.getElementById("ip-text");
  num1 = ipText.value;
  ipText.value = "";
  op = "/";
}
function eq(){
  var ipText = document.getElementById("ip-text");
  var num2 = ipText.value;
  var final;
  if ( op == "+" ){
      final = Number(num1) + Number(num2);
    }
  else if ( op == "-" ){
    final = Number(num1) - Number(num2);
  }
  else if ( op == "*" ){
    final = Number(num1) * Number(num2);
  }
  else{
    final = Number(num1) / Number(num2);
    }
  if (isNaN( final )){
    ipText.value = "";
   }
  else {
    ipText.value = final;
   }
}
function delet(){
  var ipText = document.getElementById("ip-text");
  var ipVal = ipText.value;
  ipVal = ipVal.substring(0, ipVal.length - 1);
  ipText.value = ipVal;
}
function ac(){
  var ipText = document.getElementById("ip-text");
  ipText.value = "";
}
