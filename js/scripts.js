//functional logic
function substitute(number){
  if(number === 1){
    return "Beep"
  } 
  else if(number === 2){
    return "Boop"
  }
  else if(number === 3){
    return "Won't you be my neighbor?"
  } 
  else{
    return number;
  }
}

function hasNumber(number){
  let numberString = number.toString();
  if(numberString.includes("3")){
    return substitute(3);    
  }
  else if(numberString.includes("2")){
    return substitute(2);
  }
  else if(numberString.includes("1")){
    return substitute(1);
  }
  else{
    return number;
  }
}

//business logic
function beepBoop(userNumber){
 // let noPunctuation = userNumber.replace(/[\D]/g, "");
  let numberArray = []
  
  for(let i = 0; i <= userNumber; i++){
    numberArray.push(i);
  }
  substitutedArray = numberArray.map(function(number){
    return " " + hasNumber(number);
  });
  return substitutedArray;
} 

//UI logic
$(document).ready(function(){
  $("#formOne").submit(function(event){
    let userNumber = $("#numberInput").val().trim();
    //check if there is whitespace in the string (indicating multiple numbers jhave been entered)
    if(userNumber.indexOf(" ") > 0){
      $("#result").html("Please do not enter number than one number.")
      $("#numberInput").val("");
      return false;
    }
    //check if the submit form was blank  
    else if(userNumber === ""){
      $("#result").html("Please enter one or more numbers!");
      $("#numberInput").val("");
      return false;
    } 
    //remove any non-digits that may have been entered
    userNumber = userNumber.replace(/[\D]/g, ""); 
    let answer = beepBoop(userNumber);
    $("#numberInput").val("");
    $("#result").html("Your number was  " + userNumber + ".<br>" + answer);
    event.preventDefault();
  })

});