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
  if(haveEqual){
    display.empty().append("0.");
    haveEqual = false;
  }
  if(delOperator){
    console.log("del")
  }
  haveDot=true;
  console.log(delOperator);
});

$(".btn-operator").click(function() {
  let displayText = display.text()
  let thisText = $(this).text();
  let lastItem = displayText.slice(-1);
  if(lastItem ==="."){
    display.text(displayText.slice(0,-1));
  }
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
  firstEqual = true;
});

$(".equal").click(function() {
  let displayText = display.text();
  if(firstEqual){
    if(!haveOperator){
      result = eval(displayText);
      display.append("=" + result);
      haveEqual=true;
      haveOperator = false;
      isNumEnd = true;
      haveDot=false;
      firstEqual = false;
    }
  }
});

$(".backspace").click(function() {
  let displayText = display.text();
  let lastItem = displayText.slice(-1);
  // let beckspaceResult = display.text(displayText.slice(0,-1));
  if (displayText.length === 1){
    display=display.text("0");
  }
  else {
    display=display.text(displayText.slice(0,-1))
    if(lastItem ==="+" || lastItem ==="-" || lastItem ==="*" || lastItem ==="/"){
      haveOperator=false;
      isNumEnd=false;
      delOperator=true;
      if(!haveDot){
        haveDot=false;
      }

    }
    if(lastItem ==="."){
      haveDot=false;
    }
    if(haveEqual){
      display.text("0");
      haveEqual = false;
      haveDot = false;
      // isNumEnd=false;
    }
    // isNumEnd=true;
  }
  // console.log(displayText.length);

});



$(".btn-clear").click(function() {
  display.text("0");
  haveEqual = false;
  haveDot = false;
  isNumEnd=false;

});