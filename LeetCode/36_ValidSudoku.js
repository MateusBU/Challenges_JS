/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let arrayNumbersRow = [0,0,0,0,0,0,0,0,0,];
  let arrayNumbersCol = [0,0,0,0,0,0,0,0,0,];

  for (let i = 0; i < 9; i++) { 
    for (let j = 0; j < 9; j++) {
        if(!isNaN(board[i][j]))
        {
          arrayNumbersRow[board[i][j]-1] += 1;
        }
        if(!isNaN(board[j][i]))
        {
          console.log(board[j][i])
          arrayNumbersCol[board[j][i]-1] += 1;
        }
    }
    if(arrayNumbersRow.some((number) => number > 1) || 
    arrayNumbersCol.some((number) => number > 1))
    {
      return false;
    }
    arrayNumbersRow.fill(0)
    arrayNumbersCol.fill(0)
  }

  for(let k = 0; k < 9; k++) {
    const startRow = [0,0,0,3,3,3,6,6,6]
    const EndRow = [2,2,2,5,5,5,8,8,8]
    const startCol = [0,3,6,0,3,6,0,3,6]
    const EndCol = [2,5,8,2,5,8,2,5,8]

    for (i = startRow[k]; i <= EndRow[k]; i++) { 
      for (j = startCol[k]; j <= EndCol[k]; j++) {
        if(!isNaN(board[i][j]))
        {
          arrayNumbersRow[board[i][j]-1] += 1;
        }
      }
      if(arrayNumbersRow.some((number) => number > 1))
      {
        console.log(arrayNumbersRow)
        return false;
      }
    }
    arrayNumbersRow.fill(0)
  }
  return true;
};

let board = 
[[".",".",".","8",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."],
[".","6",".",".",".",".","3",".","."],
["7",".",".","9","6","4","1",".","."],
["6",".","9",".",".",".",".",".","."],
[".",".",".",".",".",".",".","5","."],
[".",".","9",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".","5"],
[".",".","1",".",".",".",".","2","."]]

console.log(isValidSudoku(board))