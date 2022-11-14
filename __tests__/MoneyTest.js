const Money = require('../src/models/Money');

describe('구입 금액 클래스 테스트', () => {
  test('구입 금액은 숫자만 입력 가능하다.', () => {
    expect(() => {
      const money = new Money();
      money.validRange('abc');
    }).toThrow('[ERROR]');
  });

  test('구입 금액은 0보다 크다.', () => {
    expect(() => {
      const money = new Money();
      money.validRange(-1);
    }).toThrow('[ERROR]');
  });

  test('구입 금액은 1000원 단위이다.', () => {
    expect(() => {
      const money = new Money();
      money.validRange(1001);
    }).toThrow('[ERROR]');
  });
});
