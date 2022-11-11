const App = require('../src/App');
const { LOTTO_ERROR_MESSAGE } = require('../src/constants');

describe('로또 구입을 위한 사용자 입력 테스트', () => {
  test('입력이 1000으로 나누어 떨어지지 않을 시 예외 발생', () => {
    expect(() => {
      const app = new App();
      app.validateUserInput('2222');
    }).toThrow(LOTTO_ERROR_MESSAGE.NOT_DIVIDE);
  });
});
