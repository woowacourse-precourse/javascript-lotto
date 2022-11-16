const Purchase = require('../src/Purchase');
const { ERROR_MESSAGE } = require('../src/constants');

describe('구입금액 클래스 테스트', () => {
  test('입금 금액이 1000원으로 떨어지지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new Purchase('1200');
    }).toThrowError(ERROR_MESSAGE.NOT_DIVIDE_BY_THOUSAND_ERROR);
  });

  test('입금 금액이 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Purchase('1500원');
    }).toThrowError(ERROR_MESSAGE.NOT_NUMBER_ERROR);
  });
});
