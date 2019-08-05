const {
  prettifyRow,
  prettifyBoard,
  generateStartingBoard,
  updateBoard,
} = require('../lib/board');

describe('prettifyRow', () => {
  it('should return a row with seperators given an array of 3 strings', () => {
    const stringArray = ['x', 'o', 'x'];
    const result = prettifyRow(stringArray);

    expect(result).toBe(' x | o | x ');
  });
});

describe('prettifyBoard', () => {
  it('should return a stringified version of our board', () => {
    const boardArray = [['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_']];
    const result = prettifyBoard(boardArray);

    expect(result).toBe(
      ' _ | _ | _ \n---|---|---\n _ | _ | _ \n---|---|---\n _ | _ | _ '
    );
  });
});

describe('generateStartingBoard', () => {
  it('should return an empty board in the form of an array with three arrays inside of it that contain spaces for each string', () => {
    const result = generateStartingBoard();

    expect(result).toEqual([[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]);
  });
});

describe('updateBoard', () => {
  it('return a new board array with the players letter in the chosen location of the array', () => {
    const inputBoard = [['X', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    const selectedSquare = [2, 2];
    const playerInput = 'X';
    const result = updateBoard(inputBoard, selectedSquare, playerInput);

    expect(result).toEqual([['X', ' ', ' '], [' ', ' ', ' '], [' ', ' ', 'X']]);
  });
});
