let result;
let operator;
let display = $(".display");
let haveOperator = false;
let haveDot = false;
let haveOperatorDot = false;
let haveEqual = false;
let isNumEnd = false;
let mClear=false;
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
function mNumber(arr,expression){
  arr = expression.split(/[+,/,= ,*]/);
  memoryItem = arr[arr.length - 1];
}
                             

$(".btn-m").click(function() {
  let mDisplayText = display.text();
  let array1 = [];
  mNumber(array1,mDisplayText);
  if(memoryItem === ""){
      mNumber(array1,mDisplayText.slice(0,-1));  
  }
  if(memoryItem.indexOf('-') > -1) {
    array1 = memoryItem.split("-");
    memoryItem = array1[array1.length - 1];
      if (memoryItem ===""){
        mNumber(array1,mDisplayText.slice(0,-1));
      }
      else if(isNumEnd){
       memoryItem=-memoryItem
      }
  }

  if($(this).hasClass("btn-m-plus")){
    m += +memoryItem;
  }
  else {
    m -= +memoryItem;
  }
  mClear=false;
});


$(".btn-m-recall").click(function() {
  let displayText = display.text();
  if(!mClear){
    if(!isNumEnd || displayText.includes("=")){ 
      display.empty().append(m);
      haveEqual=false;
    }
    else if(isNumEnd) {
      display.append(m);
      haveOperator = false;
    }
  }
 
});

$(".btn-m-clear").click(function() {
  m=0;
  mClear = true;
});


