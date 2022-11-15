const User = require('../src/User');

describe('유저 클래스 테스트', () => {
  const user = new User();

  test('로또 구매 금액이 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      user.validateInteger('abc');
    }).toThrow('[ERROR]');
  });

  test('로또 구매 금액이 1000으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
    expect(() => {
      user.validateUnit('8200');
    }).toThrow('[ERROR]');
  });
});
