const { validate, isPurchaseInput } = require('../src/Validator');

describe('Validator 클래스 테스트', () => {
  test('로또 구입 금액이 1000원 단위의 숫자가 아니면 예외 발생', () => {
    const inputs = ['2001', 'abcd', '01000'];
    inputs.forEach(input => {
      expect(() => {
        validate(input, isPurchaseInput);
      }).toThrow('[ERROR]');
    });
  });
});
