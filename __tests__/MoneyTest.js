const Money = require('../src/Model/Money');

describe('머니 클래스 테스트', () => {
  test('머니가 문자를 포함하면 오류발생', () => {
    expect(() => {
      new Money('가1000');
    }).toThrow('[ERROR]');
  });
  test('머니가 1000으로 나눠지지 않으면 오류발생', () => {
    expect(() => {
      new Money(1234);
    }).toThrow('[ERROR]');
  });

  test('머니가 0미만인 경우 오류발생', () => {
    expect(() => {
      new Money(-1000);
    }).toThrow('[ERROR]');
  });

  test('머니가 0인 경우 오류발생', () => {
    expect(() => {
      new Money(0);
    }).toThrow('[ERROR]');
  });
});
