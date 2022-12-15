const { LOTTO_PURCHASE } = require('../src/constant/Lotto');
const Validation = require('../src/model/Validation');

/*eslint-disable */
describe('로또 구입 금액 테스트', () => {
  test('숫자가 아닐 때 예외 발생', () => {
    const input = ['1e3', '천원', 'onehundred', '1000!'];
    input.forEach((value) => {
      expect(() => {
        new Validation(value).getStringValidator().isNumber().getMessages();
      }).toThrow('[ERROR]');
    });
  });

  test('최소 단위가 1000원 보다 작을 때', () => {
    const input = ['90', '0', '100', '100.0'];
    input.forEach((value) => {
      expect(() => {
        new Validation(value)
          .getStringValidator()
          .isNumber()
          .isNumberBigger(LOTTO_PURCHASE.MIMIMUM)
          .getMessages();
      }).toThrow('[ERROR]');
    });
  });

  test('1000원 단위가 아닐 때 예외 발생', () => {
    const input = ['1001', '999', '1000.0', '200030'];
    input.forEach((value) => {
      expect(() => {
        new Validation(value)
          .getStringValidator()
          .isNumber()
          .isNumberDivided(LOTTO_PURCHASE.UNIT)
          .isNumberBigger(LOTTO_PURCHASE.MIMIMUM)
          .getMessages();
      }).toThrow('[ERROR]');
    });
  });
});
