var currentPlayer = 1;

var board = [[0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0]];

//drops to bottom row
function dropDisc(x_pos, y_pos) {
    for (var y = 5; y > y_pos; y--) {
        if (board[y][x_pos] === 0) {
            return y;
        }
    }

    return y_pos;
};

//indicates which Player's turn
function turn() {
  document.getElementById('current').innerHTML = 'It is Player ' + currentPlayer + "'s turn";
}

//indicates who won
function winner() {
  document.getElementById('message').innerHTML = 'Player ' + currentPlayer + ' Wins!';
  $('.board button').off('click');
}

//check vertical wins
function checkVertWin() {
for (var y = 0; y <= 2; y++) {
    for (var x = 0; x <= 6; x++) {
        if (board[y][x] != 0 &&
           board[y][x] == board[y+1][x] &&
           board[y][x] == board[y+2][x] &&
           board[y][x] == board[y+3][x]) {
              return (currentPlayer);
              }
             }
            }
};


//check horizontal win
function checkHorizWin() {
for (var y = 0; y <= 5; y++) {
    for (var x = 0; x <= 3; x++) {
        if (board[y][x] != 0 &&
           board[y][x] == board[y][x+1] &&
           board[y][x] == board[y][x+2] &&
           board[y][x] == board[y][x+3]) {
               return (currentPlayer);
              }
             }
            }
};


//check diagonal down win
function checkDiagDownWin() {
for (var y = 0; y <= 2; y++) {
    for (var x = 0; x <= 3; x++) {
        if (board[y][x] != 0 &&
           board[y][x] == board[y+1][x+1] &&
           board[y][x] == board[y+2][x+2] &&
           board[y][x] == board[y+3][x+3]) {
               return (currentPlayer);
              }
             }
            }
};

//check diagional up win
function checkDiagUpWin() {
for (var y = 3; y <= 5; y++) {
    for (var x = 0; x <= 3; x++) {
        if (board[y][x] != 0 &&
           board[y][x] == board[y-1][x+1] &&
           board[y][x] == board[y-2][x+2] &&
           board[y][x] == board[y-3][x+3]) {
               return (currentPlayer);
              }
             }
            }
};

//if spot is aready taken
function positionIsTaken(x_pos, y_pos) {
    var value = board[y_pos][x_pos];

    return value === 0 ? false : true;
};



//click
$(document).ready(function() {

$('.board button').click(function() {
  var y_pos = $('tr').index($(this).closest('tr'));
  var x_pos = $(this).closest('tr').find('td').index($(this).closest('td'));
  y_pos = dropDisc(x_pos, y_pos);

  if (positionIsTaken(x_pos, y_pos)) {
      return;
  }

  addValueToBoard(currentPlayer, x_pos, y_pos);
  printBoard();
  if (checkHorizWin() || checkVertWin() || checkDiagUpWin() || checkDiagDownWin()) {
    winner();
  }
  else {
  changePlayer();
}
  });
});



//pushes 1 or 2 to board array
function addValueToBoard(player, x_pos, y_pos) {
    board[y_pos][x_pos] = player;
};

//adds class to color disc
function printBoard() {
    for (var y = 0; y <= 5; y++) {
        for (var x = 0; x <= 6; x++) {
            if (board[y][x] !== 0) {
                var cell = $("tr:eq(" + y + ")").find('td').eq(x);
                cell.children('button').addClass('chip'+board[y][x]);
            }
        }
    }
};


//changes turn
function changePlayer() {
    if (currentPlayer === 1) {
        currentPlayer = 2;
        turn();
    } else {
        currentPlayer = 1;
        turn();
    };


$('#retry').click(function() {
  location.reload();
});

};



