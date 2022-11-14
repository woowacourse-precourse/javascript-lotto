const Price = require('../src/Price');

describe('가격 입력 클래스 테스트', () => {
  test('가격이 1000단위가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Price('12345');
    }).toThrow('[ERROR]');
  });

  test('가격이 정수형이 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Price('1***');
    }).toThrow('[ERROR]');
  });

  test('가격이 0일 경우 예외가 발생한다.', () => {
    expect(() => {
      new Price('0');
    }).toThrow('[ERROR]');
  });

  test('가격이 음수일 경우 예외가 발생한다.', () => {
    expect(() => {
      new Price('-1000');
    }).toThrow('[ERROR]');
  });
});
