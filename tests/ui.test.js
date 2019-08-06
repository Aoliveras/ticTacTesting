const {
  displayTurn,
  displayWin,
  displayTie,
  displayError,
} = require('../lib/ui');

describe('displayTurn', () => {
  it('should print the current board and the player turn prompt', () => {
    console.log = jest.fn();

    const inputBoard = [['X', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    const playerInput = 'X';
    displayTurn(inputBoard, playerInput);

    expect(console.log).toBeCalledTimes(2);
    expect(console.log).toBeCalledWith(`${playerInput} it is your turn`);

    console.log.mockClear();
  });
});

describe('displayWin', () => {
  it('should print the current board and the congradulate player prompt', () => {
    console.log = jest.fn();

    const inputBoard = [['X', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    const playerInput = 'X';
    displayWin(inputBoard, playerInput);

    expect(console.log).toBeCalledTimes(2);
    expect(console.log).toBeCalledWith(`Congratulations! ${playerInput} wins`);

    console.log.mockClear();
  });
});

describe('displayTie', () => {
  it('should print the current board and the tie game prompt', () => {
    console.log = jest.fn();

    const inputBoard = [['X', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    displayTie(inputBoard);

    expect(console.log).toBeCalledTimes(2);
    expect(console.log).toBeCalledWith(`It's a tie! No one wins`);

    console.log.mockClear();
  });
});

describe('displayError', () => {
  it('should print the message belonging to the error passed in as the argument', () => {
    console.error = jest.fn();
    const error = new Error();
    displayError(error);

    expect(console.error).toBeCalledTimes(1);

    console.error.mockClear();
  });
});
