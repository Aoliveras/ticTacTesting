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
  it.todo('should print the current board and the congradulate player prompt');
});

describe('displayWTie', () => {
  it.todo('should print the current board and the congradulate player prompt');
});

describe('displayError', () => {
  it.todo('should print the current board and the congradulate player prompt');
});
