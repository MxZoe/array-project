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
    let userNumber = $("#numberInput").val();
    let answer = beepBoop(userNumber);
    if(userNumber === ""){
      $("#result").html("Please enter one or more numbers!");
    }
    $("#result").html(answer);
    $("#numberInput").val("");
    event.preventDefault();
  })

});