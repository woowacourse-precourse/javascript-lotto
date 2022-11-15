const UserMoney = require('./UserMoney');

describe('UserMoney 클래스 테스트', () => {
  test('1000원 단위로 초기화한다.', () => {
    expect(() => new UserMoney(8000)).not.toThrow();
  });

  test('1000원 단위로 초기화하지 않으면 예외가 발생한다.', () => {
    expect(() => new UserMoney(8500)).toThrow();
  });

  test('0원으로 초기화하면 예외가 발생한다.', () => {
    expect(() => new UserMoney(0)).toThrow();
  });

  test('음수로 초기화하면 예외가 발생한다.', () => {
    expect(() => new UserMoney(-1000)).toThrow();
  });
});
