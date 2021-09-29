let numString = "";
let result;
let operator;
let firstOperator;
let display = $(".display");
let haveOperator = false;
let haveDot = false;
let haveOperatorDot = false;
let haveEqual = false;
let firstEqual = false;
let delOperator = false;
let isNumEnd = false;

$(".number").click(function() {
  let displayText = display.text();
  let currentNum = $(this).text();
  if(haveEqual){
    display.empty();
    haveEqual = false;
  }
  if(displayText ==="0"){
    display.empty();
  }
  isNumEnd = false;
  display.append(currentNum);
  haveOperator=false;
});


$(".dot").click(function() {
  let displayText = display.text()
  if(!haveDot && !isNumEnd){
    display.append(".");
  }
  if(isNumEnd){
    display.append("0.");
  }
  haveDot=true;
});

$(".btn-operator").click(function() {
  let displayText = display.text()
  let thisText = $(this).text();

  if (!haveOperator){
    display.append(thisText);
    operator = thisText;
    haveOperator=true;
    haveDot=false;
    isNumEnd=true;
  }

  if(haveEqual){
    display.empty().append(result + operator);
    haveEqual = false;
  }
 
  if(haveOperator && thisText !== operator && isNumEnd){
    operator = thisText;
    display.text(displayText.slice(0,-1)).append(operator);
  }
});

$(".equal").click(function() {
  let displayText = display.text();
    if(!haveOperator){
      result = eval(displayText);
      display.append("=" + result);
      haveEqual=true;
      haveOperator = true; 
      isNumEnd = true;
    } 
});


$(".btn-clear").click(function() {
  display.text("0");
  haveEqual = false;
  haveDot = false;
  // haveOperator = false;
   
 });