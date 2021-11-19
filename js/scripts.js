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

//business logic
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

function beepBoop(sequence){
  let noPunctuation = sequence.replace(/[\D]/g, " ");
  let numberArray = noPunctuation.split(" ");
  substitutedArray = numberArray.map(function(number){
    return " " + hasNumber(number);
  });
  return substitutedArray;
} 

//UI logic
$(document).ready(function(){
  $("#formOne").submit(function(event){
    let userNumber = $("#numberInput").val();
    let answer = beepBoop(userNumber);
    $("#result").html(answer);
    
    event.preventDefault();
  })

});