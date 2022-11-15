const PurchaseAmountValidator = require('../src/purchaseAmountValidate');

describe('로또 입력 금액 테스트', () => {
  test('입력 금액이 숫자가 아니면 예외가 발생한다', () => {
    const wrongInputAmounts = ['1000j', 'jjjj', ' '];

    wrongInputAmounts.map(wrongInputAmount => {
      expect(() => {
        new PurchaseAmountValidator(wrongInputAmount);
      }).toThrow('[ERROR]');
    });
  });

  test('입력 금액이 1000원 이하면 예외가 발생한다', () => {
    const wrongInputAmounts = ['1', '100', '999'];

    wrongInputAmounts.map(wrongInputAmount => {
      expect(() => {
        new PurchaseAmountValidator(wrongInputAmount);
      }).toThrow('[ERROR]');
    });
  });

  test('입력 금액이 1000원 단위가 아니면 예외가 발생한다.', () => {
    const wrongInputAmounts = ['1001', '2002', '3003', '4400'];

    wrongInputAmounts.map(wrongInputAmount => {
      expect(() => {
        new PurchaseAmountValidator(wrongInputAmount);
      }).toThrow('[ERROR]');
    });
  });
});
