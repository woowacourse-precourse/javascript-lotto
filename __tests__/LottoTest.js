/* eslint-disable */

const Lotto = require('../src/Lotto');
const { ERROR_MESSAGE } = require('../src/constants');

describe('로또 클래스 테스트', () => {
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

  test('각 로또 번호 중 1-45 사이에 존재하지 않는 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 46, 0]);
    }).toThrowError(ERROR_MESSAGE.NUM_IN_RANGE_ERROR);
  });
});
