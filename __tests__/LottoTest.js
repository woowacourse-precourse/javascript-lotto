const Lotto = require('../src/Lotto');
const { ERROR_MESSAGE } = require('../src/constants');

describe('로또 클래스 테스트1', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrowError(ERROR_MESSAGE.WINNING_NUMBER_LENGTH_ERROR);
  });
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrowError(ERROR_MESSAGE.WINNING_NUMBER_NOT_DIFFERENT_NUMBER_ERROR);
  });
});

describe('로또 클래스 테스트2', () => {
  test('각 로또 번호 중 1-45 사이에 존재하지 않는 자연수가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 46, 0]);
    }).toThrowError(ERROR_MESSAGE.NUM_IN_RANGE_ERROR);
  });
  test('보너스 숫자가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      let lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.validateBonusNumber('1500원');
    }).toThrowError(ERROR_MESSAGE.NOT_NUMBER_ERROR);
  });
});

describe('로또 클래스 테스트3', () => {
  test('보너스 숫자가 1~45 범위에 존재하지 않으면 예외가 발생한다', () => {
    expect(() => {
      let lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.validateBonusNumber('46');
    }).toThrowError(ERROR_MESSAGE.NUM_IN_RANGE_ERROR);
  });
  test('보너스 숫자가 전에 고른 6개의 수와 겹치면 예외가 발생한다', () => {
    expect(() => {
      let lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.validateBonusNumber('6');
    }).toThrowError(ERROR_MESSAGE.BONUS_NUMBER_NOT_DIFFERENT_NUMBER_ERROR);
  });
});
