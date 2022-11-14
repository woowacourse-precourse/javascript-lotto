/* eslint-disable */

const Purchase = require('../src/Purchase');

describe('구매 금액 클래스 테스트', () => {
  test('구매 금액이 1000원으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new Purchase('3700');
    }).toThrow('[ERROR]');
  });

  test('구매 금액이 문자열이나 기호라면 예외가 발생한다.', () => {
    expect(() => {
      new Purchase('1A000');
    }).toThrow('[ERROR]');
  });

  test('구매 금액이 1000원 미만이라면 예외가 발생한다.', () => {
    expect(() => {
      new Purchase('900');
    }).toThrow('[ERROR]');
  });
});
