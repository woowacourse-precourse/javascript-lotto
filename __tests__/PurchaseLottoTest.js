const App = require('../src/App');
const { LOTTO_ERROR_MESSAGE } = require('../src/constants');

describe('로또 구입을 위한 사용자 입력 테스트', () => {
  test('입력이 1000으로 나누어 떨어지지 않을 시 예외 발생', () => {
    expect(() => {
      const app = new App();
      app.validateUserInput('2222');
    }).toThrow(LOTTO_ERROR_MESSAGE.NOT_DIVIDE);
  });

  test('입력이 숫자가 아닐 경우 예외 발생', () => {
    expect(() => {
      const app = new App();
      app.validateUserInput('1,000');
    }).toThrow(LOTTO_ERROR_MESSAGE.NOT_NUMBER);
  });

  test('입력이 1,000원 미만일 경우 예외 발생', () => {
    expect(() => {
      const app = new App();
      app.validateUserInput('100');
    }).toThrow(LOTTO_ERROR_MESSAGE.UNDER_MONEY);
  });
});
