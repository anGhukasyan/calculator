let result;
let operator;
let display = $(".display");
let haveOperator = false;
let haveDot = false;
let haveOperatorDot = false;
let haveEqual = false;
let isNumEnd = false;
// let array1= [0];
let m = 0;

$(".number").click(function() {
  let displayText = display.text();
  let currentNum = $(this).text();
  if(haveEqual){
    display.empty();
    haveEqual = false;
  }
  if(displayText === "0"){
    display.empty();
  }
  isNumEnd = false;
  display.append(currentNum);
  haveOperator = false;
});


$(".dot").click(function() {
  if(!haveDot && !isNumEnd && !haveOperatorDot){
    display.append(".");
  }
  if(isNumEnd){
    display.append("0.");
  }
  if(haveEqual){
    display.empty().append("0.");
    haveEqual = false;
    isNumEnd = false;
  }
  haveDot = true;
  haveOperatorDot = true;
});

$(".btn-operator").click(function() {
  let displayText = display.text();
  let thisText = $(this).text();
  let lastItem = displayText.slice(-1);
  if(lastItem === "."){
    display.text(displayText.slice(0,-1));
  }
  if (!haveOperator){
    display.append(thisText);
    operator = thisText;
    haveOperator = true;
    haveDot = false;
    isNumEnd = true;
  }

  if(haveEqual){
    display.empty().append(result + operator);
    haveEqual = false;
  }

  if(haveOperator && thisText !== operator && isNumEnd){
    operator = thisText;
    display.text(displayText.slice(0,-1)).append(operator);
  }

  haveOperatorDot = !haveOperatorDot;
});

$(".equal").click(function() {
  let displayText = display.text();
  let lastItem = displayText.slice(-1);
  if (displayText.includes("+") || displayText.includes("-") || displayText.includes("*")|| displayText.includes("/")){
    if(lastItem === "."){
      display.text(displayText.slice(0,-1));
    }
    if(!haveOperator){
      result = +(eval(displayText).toFixed(12));
      display.append(" = " + result);
      haveEqual = true;
      haveOperator = false;
      isNumEnd = true;
      haveDot = false;
      haveOperatorDot = false;
    }
  }
});

$(".backspace").click(function() {
  let displayText = display.text();
  let lastItem = displayText.slice(-1);

  if (displayText.length === 1){
    display = display.text("0");
  }
  else {
    display=display.text(displayText.slice(0,-1));
    if(lastItem ==="+" || lastItem ==="-" || lastItem ==="*" || lastItem ==="/"){
      haveOperator = false;
      isNumEnd = false;
      haveOperatorDot = !haveOperatorDot
    }
    if(lastItem === "."){
      haveDot = false;
      haveOperatorDot = false;
    }
    if(haveEqual){
      display.text("0");
      haveEqual = false;
      haveDot = false;
    }
  }

});



$(".btn-clear").click(function() {
  display.text("0");
  haveEqual = false;
  haveDot = false;
  isNumEnd=false;
});


$(".btn-m-plus").click(function() {
  let mDisplayText = display.text()
  let array1 = mDisplayText.split(/[+,/,=,*]/);
  memoryItem = array1[array1.length - 1]
  if(memoryItem!== ""){
    m += +memoryItem;
  }
  else{
    mDisplayText=mDisplayText.slice(0,-1)
    array1 = mDisplayText.split(/[+,/,=,*]/);
    memoryItem = array1[array1.length - 1]
    m += +memoryItem;
  }


  console.log(m);
});