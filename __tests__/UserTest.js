const User = require('../src/User');

describe('구입 금액 입력 테스트', () => {
  test('구입 금액은 1,000원 단위여야 한다.', () => {
    expect(() => {
    new User(1100);
    }).toThrow('[ERROR]');
  });

  test('구입 금액은 1,000원 단위여야 한다.2', () => {
    expect(() => {
      new User(1001);
    }).toThrow('[ERROR]');
  });

  test('적어도 로또 하나를 살 수 있는 돈은 있어야 한다.', () => {
    expect(() => {
      new User(0);
    }).toThrow('[ERROR]');
  });

  test('구입 금액은 숫자여야 한다.', () => {
    expect(() => {
      new User('100a');
    }).toThrow('[ERROR]');
  });

  test('구입 금액은 음수일 수 없다.', () => {
    expect(() => {
      new User(-5000);
    }).toThrow('[ERROR]');
  });

  test('구입 금액은 숫자여야 한다.2', () => {
    expect(() => {
      new User('10O00');
    }).toThrow('[ERROR]');
  });

  test('유효한 큰 숫자 테스트', () => {
    let user = new User(1000000000);
    expect(user.getSeedMoney().toString()).toBe('1000000000');
  });

  test('유효한 큰 숫자 테스트2', () => {
    let user = new User(99999999000);
    expect(user.getSeedMoney().toString()).toBe('99999999000');
  });
});
