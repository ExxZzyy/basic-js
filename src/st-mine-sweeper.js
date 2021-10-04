import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  return matrix.map((rowVal, row) => {
    return rowVal.map((cellVal, cell) => {
      let minesAround = 0;
      if(matrix[row - 1] !== undefined){
        if(matrix[row - 1][cell - 1]) minesAround++;
        if(matrix[row - 1][cell]) minesAround++;
        if(matrix[row - 1][cell + 1]) minesAround++;
      }
      if(matrix[row] !== undefined){
        if(matrix[row][cell - 1]) minesAround++;
        if(matrix[row][cell + 1]) minesAround++;
      }
      if(matrix[row + 1] !== undefined){
        if(matrix[row + 1][cell - 1]) minesAround++;
        if(matrix[row + 1][cell]) minesAround++;
        if(matrix[row + 1][cell + 1]) minesAround++;
      }
      return minesAround;
    })
  })
}
