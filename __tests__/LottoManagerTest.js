const LottoManager = require('../src/LottoManager');
const { ERROR } = require('../src/constants/constants');

describe('로또 매니저 클래스 테스트', () => {
  test('로또 구매 금액에 숫자 이외의 문자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new LottoManager().validatePurchaseAmount('22Hi77');
    }).toThrow(ERROR.PURCHASE_AMOUNT.NOT_NUMBER);
  });

  test('로또 구매 금액이 로또 금액으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new LottoManager().validatePurchaseAmount(3400);
    }).toThrow(ERROR.PURCHASE_AMOUNT.NOT_DIVISIBLE);
  });

  test('로또 구매 금액이 로또 금액보다 작으면 예외가 발생한다.', () => {
    expect(() => {
      new LottoManager().validatePurchaseAmount(800);
    }).toThrow(ERROR.PURCHASE_AMOUNT.IS_LESS);
  });
});
