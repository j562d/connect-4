var Turn = "Red"

//  $('td').on('click', function() {
//    console.log("Hello");
//  });

function changeTurn(){
  if(Turn == "Red"){
    Turn = "Blue";
  } else {
    Turn = "Red";
  }
}


  $('td').on('click', function() {
    $(this).css('background-color', Turn);
    $(this).off('click');
    changeTurn();
  });





