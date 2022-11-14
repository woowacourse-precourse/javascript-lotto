const App = require('../src/App');

describe('게임 관련 함수(메소드) 테스트', () => {
  test('구입금액이 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new App().validateAmount('1,000');
    }).toThrow('[ERROR]');
  });

  test('구입금액이 1000단위가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new App().validateAmount('1500');
    }).toThrow('[ERROR]');
  });

  test('구입금액이 0이면 예외가 발생한다.', () => {
    expect(() => {
      new App().validateAmount('0');
    }).toThrow('[ERROR]');
  });
});
