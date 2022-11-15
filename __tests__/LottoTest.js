/* eslint-disable max-lines-per-function */
const Lotto = require('../src/Lotto');

const throwExceptionWinningNumbers = (winningNumbers) => {
  expect(() => {
    new Lotto(winningNumbers);
  }).toThrow('[ERROR]');
};

const throwExceptionBonusNumber = (bonusNumber) => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  expect(() => {
    const lotto = new Lotto(winningNumbers);
    lotto.validate([...winningNumbers, bonusNumber], 7);
  }).toThrow('[ERROR]');
};

describe('로또 클래스 테스트', () => {
  test('당첨 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6, 7];

    throwExceptionWinningNumbers(winningNumbers);
  });

  test('당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 5];

    throwExceptionWinningNumbers(winningNumbers);
  });

  test('당첨 번호가 숫자가 아니면 예외가 발생한다.', () => {
    const winningNumbers = [
      [1, 2, 3, 4, 'a', 6],
      [1, 2, '', 4, 5, 6],
      [1, 2, 3, 4, 5, ' '],
      [1, 'ABC', 3, 4, 5, 6],
    ];

    winningNumbers.forEach((numbers) => throwExceptionWinningNumbers(numbers));
  });

  test('당첨 번호가 0이하의 숫자일 때 예외가 발생한다.', () => {
    const winningNumbers = [0, 1, 2, 3, 4, 5];

    throwExceptionWinningNumbers(winningNumbers);
  });

  test('당첨 번호가 46이상의 숫자일 때 예외가 발생한다.', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 46];

    throwExceptionWinningNumbers(winningNumbers);
  });

  test('당첨 번호에 공백이 포함되어 있을 경우 예외가 발생한다.', () => {
    const winningNumbers = [1, 2, 3, '  4', 5, 46];

    throwExceptionWinningNumbers(winningNumbers);
  });

  test('보너스 번호가 숫자가 아니면 예외가 발생한다.', () => {
    const bonusNumbers = ['a', 'A', ' ', '', '.'];

    bonusNumbers.forEach((bonusNumber) => throwExceptionBonusNumber(bonusNumber));
  });

  test('보너스 번호가 당첨 번호의 숫자와 중복될 경우 예외가 발생한다.', () => {
    const bonusNumber = 6;

    throwExceptionBonusNumber(bonusNumber);
  });

  test('보너스 번호가 0이하의 숫자일 때 예외가 발생한다.', () => {
    const bonusNumber = 0;

    throwExceptionBonusNumber(bonusNumber);
  });

  test('보너스 번호가 46이상의 숫자일 때 예외가 발생한다.', () => {
    const bonusNumber = 46;

    throwExceptionBonusNumber(bonusNumber);
  });

  test('보너스 번호에 공백이 포함되어 있을 경우 예외가 발생한다.', () => {
    const bonusNumber = '7  ';

    throwExceptionBonusNumber(bonusNumber);
  });
});
