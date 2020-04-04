module.exports = function solveSudoku(matrix) {
  let notPossible = {}, impossibleDigits;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      if (matrix[row][col] === 0) {
        notPossible = {};
        for (let i=0; i < 9; i++) {
          if (matrix[row][i] > 0) {
            notPossible[matrix[row][i]] = true;
          }
          if (matrix[i][col] > 0) {
            notPossible[matrix[i][col]] = true;
          }
        }
        for (let colBox = col % 3; colBox < col % 3 +3; colBox++) {
          for ( let rowBox = row % 3; rowBox < row % 3 + 3; rowBox++) {
            if (matrix[colBox][rowBox]) {
              notPossible[[colBox][rowBox]] = true;
            }
          }
        }
      }
    }
  }
}