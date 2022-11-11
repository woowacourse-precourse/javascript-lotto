const {
  validate,
  isPurchaseInput,
  isLottoNumber,
} = require('../src/Validator');

describe('Validator 클래스 테스트', () => {
  test('로또 구입 금액이 1000원 단위의 숫자가 아니면 예외 발생', () => {
    const inputs = ['2001', 'abcd', '01000'];
    inputs.forEach(input => {
      expect(() => {
        validate(input, isPurchaseInput);
      }).toThrow('[ERROR]');
    });
  });

  test('로또 번호가 1~45 범위의 중복되지 않는 6개의 숫자가 아니면 예외 발생', () => {
    const inputs = [
      [1, 2, 3, 4, 5, 6, 7],
      [0, 1, 2, 3, 4, 46],
      [1, 1, 2, 3, 4, 5],
    ];
    inputs.forEach(input => {
      expect(() => {
        validate(input, isLottoNumber);
      }).toThrow('[ERROR]');
    });
  });
});
