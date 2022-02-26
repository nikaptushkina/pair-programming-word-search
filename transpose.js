// FUNCTION
const transpose = function(matrix) {
  
  let array = [];
  for (let i = 0; i < matrix[0].length; i++) {
  array.push([]);
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        array[col][row] = matrix[row][col];
    } 
  }
  return array;
};

module.exports = { transpose };