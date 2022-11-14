const MoneyValidator = require('../src/validator/MoneyValidator');

describe('로또 클래스 테스트', () => {
  test('로또 구입 금액이 숫자가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      MoneyValidator.validate('1e9');
    }).toThrow('[ERROR]');
  });

  test('로또 입력 금액이 1,000원 단위가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      MoneyValidator.validate('30001');
    }).toThrow('[ERROR]');
  });

  test('로또 입력 금액이 0원일 경우 예외가 발생한다.', () => {
    expect(() => {
      MoneyValidator.validate('0');
    }).toThrow('[ERROR]');
  });

  test('로또 입력 금액이 null일 경우 예외가 발생한다.', () => {
    expect(() => {
      MoneyValidator.validate(null);
    }).toThrow('[ERROR]');
  });

  test('로또 입력 금액이 undefined일 경우 예외가 발생한다.', () => {
    expect(() => {
      MoneyValidator.validate(undefined);
    }).toThrow('[ERROR]');
  });

  test('로또 입력 금액이 공백일 경우 예외가 발생한다.', () => {
    expect(() => {
      MoneyValidator.validate('');
    }).toThrow('[ERROR]');
  });
});
