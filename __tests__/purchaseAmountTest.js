const purchaseAmountValidator = require('../src/purchaseAmountValidate');

describe('로또 입력 금액 테스트', () => {
  test('입력 금액이 숫자가 아니면 예외가 발생한다', () => {
    const wrongInputAmounts = ['1000j', 'jjjj', ' '];

    wrongInputAmounts.map(wrongInputAmount => {
      expect(() => {
        new purchaseAmountValidator(wrongInputAmount);
      }).toThrow('[ERROR]');
    });
  });
});
