const readlineSync = require('readline-sync');
const { validateMove, getValidMoveFromPlayer } = require('../lib/move');
let displayError = require('../lib/ui');

describe('validateMove', () => {
  it('should turn the move string into a tuple', () => {
    const moveInput = '1 1';
    const boardInput = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    const result = validateMove(moveInput, boardInput);

    expect(result).toEqual([1, 1]);
  });
  it('should throw an error if input has incorrect syntax', () => {
    const moveInput = ' 1';
    const boardInput = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

    expect(() => validateMove(moveInput, boardInput)).toThrow(
      'Invalid move! Move must have syntax "row col"'
    );
  });
  it('should throw an error if moves out of bounds', () => {
    const moveInput = '9 1';
    const boardInput = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

    expect(() => validateMove(moveInput, boardInput)).toThrow(
      'Invalid move! Move must be in bounds of board'
    );
  });
  it('throw an error if the space is already occupied', () => {
    const moveInput = '0 0';
    const boardInput = [['X', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

    expect(() => validateMove(moveInput, boardInput)).toThrow(
      'Invalid move! This space is already occupied'
    );
  });
});

jest.mock('readline-sync');
describe('getValidMoveFromPlayer', () => {
  it('should return a tuple of move coordinates with shape [row, col]', () => {
    readlineSync.question.mockReturnValueOnce('1 1');
    const board = [['X', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    const result = getValidMoveFromPlayer(board);

    expect(result).toEqual([1, 1]);
  });
  it.todo('should prompt the user for input in the form of "row col"');
  it('should display an error if there is invalid input', () => {
    displayError = jest.fn();
    const board = [['X', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    readlineSync.question.mockReturnValueOnce('1');
    readlineSync.question.mockReturnValueOnce('1 1');
    getValidMoveFromPlayer(board);

    expect(displayError).toBeCalledTimes(1);
  });
});
