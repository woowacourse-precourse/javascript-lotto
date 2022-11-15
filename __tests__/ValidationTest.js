const Validation = require('../src/Validation');

describe('Validation 클래스 테스트', () => {
  test('구입 금액이 0원보다 작으면 예외가 발생', () => {
    expect(() => {
      Validation.checkInputPrice(-3000);
    }).toThrow('[ERROR]');
  });

  test('구입 금액이 숫자가 아니면 예외가 발생', () => {
    expect(() => {
      Validation.checkInputPrice('1000q');
    }).toThrow('[ERROR]');
  });

  test('구입 금액이 1000원 단위가 아니면 예외가 발생', () => {
    expect(() => {
      Validation.checkInputPrice(1500);
    }).toThrow('[ERROR]');
  });

  test('올바른 구입 금액 테스트 케이스', () => {
    expect(Validation.checkInputPrice(1000)).toBe(true);
  });
});
