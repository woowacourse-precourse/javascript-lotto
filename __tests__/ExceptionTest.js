const Exception = require('../src/Exception');

describe('사용자 입력 값에 대한 예외 클래스 테스트', () => {
  test('숫자가 아닌 값을 입력하면 예외가 발생한다', () => {
    expect(() => {
      const exception = new Exception();
      exception.checkIsDigit('abc123');
    }).toThrow('[ERROR]');
  });

  test('로또 구매 금액이 1000 단위가 아니면 예외가 발생한다', () => {
    const exception = new Exception();
    const PURCHASE_AMOUNTS = [123, 123456, 1, 100, 200, 3432];

    PURCHASE_AMOUNTS.forEach((amount) => {
      expect(() => {
        exception.validatevalidatePurchaseAmount(amount);
      }).toThrow('[ERROR]');
    });
  });
});
