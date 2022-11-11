const App = require('../App');

describe('로또 구매 금액 예외 테스트', () => {
  test('구입 금액에 숫자가 아닌 입력이 주어지면 예외가 발생한다.', () => {
    const app = new App();

    expect(() => {
      app.validate('105aa6');
    }).toThrow('[ERROR] 구입 금액은 숫자여야 합니다.');
  });

  test('구입 금액이 1000으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
    const app = new App();

    expect(() => {
      app.validate('50006');
    }).toThrow('[ERROR] 구입 금액은 1000단위여야 합니다.');
  });
});
