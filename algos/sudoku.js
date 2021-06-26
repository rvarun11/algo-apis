const isSafe = (board, row, col, curr) => {
  // if the element already occurs in that row or col
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === curr) return false;
    if (board[row][i] === curr) return false;
  }

  // checking for sub-grid by finding the subgrid start indices
  const gridRowStart = row - (row % 3);
  const gridColStart = col - (col % 3);

  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++)
      if (board[gridRowStart + i][gridColStart + j] === curr) return false;

  return true;
};

const solve = (board) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] == 0) {
        for (let k = 1; k <= 9; k++) {
          if (isSafe(board, i, j, k)) {
            board[i][j] = k;
            if (solve(board)) {
              return true;
            } else {
              board[i][j] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return true;
};

const isBoardValid = (board) => {
  // 1. Size of board should be (9 x 9)
  if (!board || board.length != 9) return false;

  // 2. Values should be Numbers  && should be between 0 & 9
  for (let i = 0; i < 9; i++) {
    if (board[i].length != 9) return false;
    for (let j = 0; j < 9; j++) {
      if (isNaN(board[i][j]) || board[i][j] < 0 || board[i][j] > 9)
        return false;
    }
  }

  return true;
};

const solveSudoku = (board) => {
  // solve_old(board, 0, 0);
  const isValid = isBoardValid(board);
  if (!isValid) return;

  const isSolved = solve(board);
  if (!isSolved) return { message: 'Cannot be solved!' };

  return { message: 'Ok!', board };
};

module.exports = solveSudoku;

// Test Input
// const input = {
//   board: [
//     [5, 3, 0, 0, 7, 0, 0, 0, 0],
//     [6, 0, 0, 1, 9, 5, 0, 0, 0],
//     [0, 9, 8, 0, 0, 0, 0, 6, 0],
//     [8, 0, 0, 0, 6, 0, 0, 0, 3],
//     [4, 0, 0, 8, 0, 3, 0, 0, 1],
//     [7, 0, 0, 0, 2, 0, 0, 0, 6],
//     [0, 6, 0, 0, 0, 0, 2, 8, 0],
//     [0, 0, 0, 4, 1, 9, 0, 0, 5],
//     [0, 0, 0, 0, 8, 0, 0, 7, 9],
//   ],
// };

// solveSudoku(input);

// const solve_old = (board, row, col) => {
//   if (row === 9) return true;
//   if (col === 9) return solve(board, row + 1, 0);
//   if (board[row][col] != 0) solve(board, row, col + 1);

//   for (let n = 1; n <= 9; n++) {
//     if (isSafe(board, row, col, n)) {
//       board[row][col] = n;
//       if (solve(board, row, col + 1)) return true;
//     }
//   }
//   board[row][col] = 0;
//   return false;
// };
