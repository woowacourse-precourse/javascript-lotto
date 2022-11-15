const User = require('../src/User');

describe('유저 클래스 테스트', () => {
  test('금액은 숫자만 가능하다', () => {
    expect(() => {
      new User('1000b');
    }).toThrow('[ERROR]');
  });
  test('금액은 1000원 단위여야한다', () => {
    expect(() => {
      new User('120002');
    }).toThrow('[ERROR]');
  });
  test('금액은 1000원보다 커야 한다', () => {
    expect(() => {
      new User('0');
    }).toThrow('[ERROR]');
  });
});
