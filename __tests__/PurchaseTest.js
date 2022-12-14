const { LOTTO_PURCHASE } = require('../src/constant/Lotto');
const Validation = require('../src/model/Validation');

/*eslint-disable */
describe('로또 구입 금액 테스트', () => {
  test('1000원 단위가 아닐 때 예외 발생', () => {
    const input = ['1001', '999', '1000.0', '200030'];
    input.forEach((value) => {
      expect(() => {
        new Validation(LOTTO_PURCHASE.CHECK_VALIDATION, value).showResult();
      }).toThrow('[ERROR]');
    });
  });

  test('숫자가 아닐 때 예외 발생', () => {
    const input = ['1e3', '천원', 'onehundred', '1000!'];
    input.forEach((value) => {
      expect(() => {
        new Validation(LOTTO_PURCHASE.CHECK_VALIDATION, value).showResult();
      }).toThrow('[ERROR]');
    });
  });
});
