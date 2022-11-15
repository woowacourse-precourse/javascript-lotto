const WinningTicket = require('../src/WinningTicket');
const winningTicket = new WinningTicket();

describe('당첨 티켓 테스트', () => {
  test('당첨 번호 예외 처리 테스트', () => {
    const wrongWinningNumbers = [
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5, 6, 7],
      [1, 2, 3 ,3 ,4 ,5],
      [0, 1, 2, 5, 7, 9],
      [1, 6, 30, 58, 45, 31],
      [],
      [1,, 2, 4, 6, 5],
      [-1, 5, 6, 7, 3, 21]
      ['a', 'b', 'c', 'd', 'e', 'f'],
    ];
    wrongWinningNumbers.forEach((numbers) => {
      expect(() => {
        winningTicket.setWinningNumbers(numbers)
      }).toThrow();
    })
  });

  test('보너스 번호 예외 처리 테스트', () => {
    const wrongBonusNumber = [-1, 6, 0, 46, 'a', [4, 5]];
    wrongBonusNumber.forEach((number) => {
      expect(() => {
        winningTicket.setWinningNumbers([1, 2, 3, 4, 5, 6])
        winningTicket.setBonusNumber(number);
      }).toThrow();
    })
  });
});