const { MoneyValidator } = require('../src/utils/Validator');

describe('로또 클래스 테스트', () => {
  test('로또 구입 금액이 숫자가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      MoneyValidator.validate('1e9');
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 입력 금액이 1,000원 단위가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      MoneyValidator.validate('30001');
    }).toThrow('[ERROR]');
  });
});
