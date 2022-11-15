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

  test('당첨번호가 쉼표로 구분이 안되면 예외가 발생한다.', () => {
    expect(() => {
      new App().validateWinNumbers('123456');
    }).toThrow('[ERROR]');
  });

  test('당첨번호를 쉼표로 구분했을 때, 길이가 6이 아니면 예외가 발생한다.', () => {
    expect(() => {
      new App().validateWinNumbers('1,2,3,45,6');
    }).toThrow('[ERROR]');
  });
});
