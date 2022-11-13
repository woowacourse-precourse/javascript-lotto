const Money = require('../src/Money');

describe('Money 클래스 테스트', () => {
  test('천원단위의 입력이 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Money(1200);
    }).toThrow('[ERROR] ');
  });

  test('천원단위의 입력이 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Money('a1000');
    }).toThrow('[ERROR] ');
  });
});
