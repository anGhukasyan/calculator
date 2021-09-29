
 // $(".number").click(function() {
 //     let currentNum = $(this).text();
 //     numArr1.push(currentNum);
 //     numArr1.join("");
 //     $(".display").empty().append(numArr1);
 //     if (currentNum === "0" && numArr1.length === 1){
 //        numArr1.pop();
 //     }
 // });
 //
 //
 // let haveDot = false;
 // $(".dot").click(function() {
 //     numArr1.push(".");
 //     numArr1.join("");
 //     if (haveDot !== false){
 //         numArr1.pop();
 //     }
 //     haveDot = true;
 //
 //     if (numArr1.length === 1){
 //         numArr1.unshift(0);
 //         $(".display").append(numArr1);
 //     }
 //     $(".display").empty().append(numArr1);
 // });
 //
 //
 //
//  let haveDot = false;
//  $(".dot").click(function() {
//      if (haveDot === false){
//          numArr1.push(".");
//          numArr1.join("");
//          haveDot = true;
//          $(".display").empty().append(numArr1);
//          // if (numArr1.length === 1){
//          //     numArr1.unshift(0);
//          //     $(".display").append(numArr1);
//          // }
 
 
//      }
 
 
 
//  });
 
 //



//  let numString = "";
//  let result = 0;
//  let haveResult = false;
//  let operation;
//  let writenNumber = false;
//  let writeMultiple = false;
//  let writeDevision = false;

//  function writeNumber(num) {
//      if(haveResult){
//         $(".displayOperating").empty();
//         $(".display").empty();
//         haveResult = false;
//         result = 0;
//      }
//     let currentNum = $(num).text();
//     currentNum = $(".display").text().concat(currentNum);
//     if ($(".display").text() === "0"){
//         currentNum = currentNum.slice(1);
//      }
//      $(".display").empty().append(currentNum);
//      numString = $(".display").text();
//   }
  

//  $(".number").click(function() {
//         writeNumber(this);
//         writenNumber = true;
//  });

//  let haveDot = false;
//  $(".dot").click(function() {
//     let displayText = $(".display").text();
//      if (haveDot === false){
//         displayText = displayText.concat(".");
//         haveDot = true;
//          $(".display").empty().append(displayText);
//      }
//      numString = $(".display").text();
//  });

//  $(".btn-operator").click(function() {
//     if($(this).text()==="+"){
//       operation="+";
//       if(writenNumber){ 
//          result += parseFloat(numString);
//         }
//     }

//     else if($(this).text()==="-"){
//       operation="-";
//       if(writenNumber){ 
//          result -= parseFloat(-numString);
//         }
//     }

//     else if($(this).text()==="x"){
//        operation="*";
//        if(!writeMultiple){
//          result = 1;
//          writeMultiple = true;
//        }

//        if(writenNumber){ 
//          result *= parseFloat(numString);
//         }
   
     
//     }

//     else if($(this).text()==="/"){
//       operation="/";
//       if(!writeDevision){
//         result =  parseFloat(numString)*parseFloat(numString);
//         writeDevision = true;
//       }

//       if(writenNumber){ 
//         result /= parseFloat(numString);
//        }
//     }

//     $(".displayOperating").empty().append(result + operation);
//     $(".display").text(0);
//     haveDot = false;
//     haveResult = false;
//     writenNumber = false;
   
//  });

//  $(".equal").click(function() {
//    if(writenNumber){
//       $(".displayOperating").empty().append( result + operation + numString  + "=");
//       if(operation ==="+"){
//          result += parseFloat(numString);
//        }
//        else if(operation ==="-"){
//          result -= parseFloat(numString);
//        }
//        else if(operation ==="*"){
//          result *= parseFloat(numString);
        
//        }
//        else if(operation ==="/"){
//          result /= parseFloat(numString);
        
//        }
//        $(".display").text(result);
//          haveDot = false;
//          haveResult = true;
//      }
//      writenNumber=false;
//  });



let numString = "";
let haveOperator = false;
let haveDot = false;
let haveOperatorDot = false;
let haveEqual = false;
let result;
let operator;
let firstEqual = false;
let firstOperator;
let display = $(".display");
let delOperator = false;

$(".number").click(function() {
  let currentNum = $(this).text();
  let displayText = display.text();
    if(haveEqual){
      display.empty();
      haveEqual = false;
      haveDot = false;
    }
    if( displayText === "0"){
      display.empty();
    }
    numString = numString.concat(currentNum);
    display.append(currentNum);
    haveOperator = false; 
    haveOperatorDot = false;
    console.log(displayText)
});


$(".dot").click(function() {
  let displayText = display.text()
  let lastItem = displayText.slice(-1);
  if(lastItem ==="+" || lastItem ==="-" || lastItem ==="*" || lastItem ==="/"){
    haveOperatorDot = true;
  }
  if(haveDot===false && haveOperatorDot===false){
    haveDot = true;
    numString = numString.concat(".");
    display.append(".");
  }
});

$(".btn-operator").click(function() {
  let displayText = display.text()
  let thisText = $(this).text();
  let forDot = displayText.slice(displayText.length - 1, displayText.length)
  firstOperator = operator;
  if(forDot !== "."){
      haveDot = false;
      operator = thisText;
  
      if(haveEqual){
        display.empty().append(result + operator);
        haveEqual = false;
      }
      if(!haveOperator){
        display.append(operator);
        haveOperator = true;
      }
    
  else if(operator!==firstOperator && delOperator === false){
    display.text(displayText.slice(0,-1)).append(operator);
  }
  else if(delOperator === true){
    display.append(operator);
    haveOperator = true;
  }
    firstEqual = true;
  }
  console.log(haveOperator)
  
});
$(".equal").click(function() {
  let displayText = display.text();
  if(firstEqual){
    if(!haveOperator){
      result = eval(displayText);
      display.append("=" + result);
      haveEqual=true;
      haveOperator = true;
      firstEqual = false;
    
    }
  }
  haveDot = true;
  
});

$(".backspace").click(function() {
  let displayText = display.text();
  if (displayText.length === 1){
    display=display.text("0");
  }
  //  let lastItem = displayText.slice(-1);
  // // let beckspaceResult = display.text(displayText.slice(0,-1));
  // if(haveEqual===false && displayText!=="0" && lastItem!=="."){
  //   display=display.text(displayText.slice(0,-1))  
  // }
  
  // if(lastItem === ".") {
  //   display=display.text(displayText.slice(0,-1))
  //   haveDot = false;
  // }

  // if(lastItem ==="+" || lastItem ==="-" || lastItem ==="*" || lastItem ==="/"){
  //   delOperator = true;
  // }
  console.log(displayText.length);
  
});

$(".btn-clear").click(function() {
 display.text("0");
 haveEqual = false;
 haveDot = false;
 haveOperator = false;
  
});
