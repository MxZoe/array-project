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


$(document).ready(function(){
  $("#formOne").submit(function(event){
    let userNumber = parseInt($("#numberInput").val());
    let substituteAnswer = substitute(userNumber);
    $("#result").html(substituteAnswer);
    
    event.preventDefault();
  })

});