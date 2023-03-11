var currentPlayer = 1;
var board = [
  0, 0, 0,
  0, 0, 0,
  0, 0, 0
];

function checkPosition(id) {
  var element = document.getElementById(id);

  if (board[id] !== 0) {
    return;
  }

  if (currentPlayer === 1) {
    element.innerHTML = "X";
  } else {
    element.innerHTML = "O";
  }

  board[id] = currentPlayer;

  if (checkforWin()) {
    var winningPlayer = currentPlayer;
    setTimeout(function() {
      alert("Player " + winningPlayer + " wins!");
    }, 1);
    resetBoard();
  }

  currentPlayer = currentPlayer === 1 ? 2 : 1;
}

function resetBoard() {
  board = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
  ];

  for (var i = 0; i < 9; i++) {
    var element = document.getElementById(i);
    element.innerHTML = "";
  }
}

function checkforWin() {
  var win = false;
  var winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (var i = 0; i < winCombos.length; i++) {
    var combo = winCombos[i];
    var first = board[combo[0]];
    var second = board[combo[1]];
    var third = board[combo[2]];

    if (first !== 0 && first === second && second === third) {
      win = true;
    }
  }

  return win;
}