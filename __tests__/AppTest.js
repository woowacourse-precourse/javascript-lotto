const App = require('../src/App.js');
const MissionUtils = require('@woowacourse/mission-utils');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe('구입금액 입력 테스트', () => {
  test('1000으로 나누어떨어지지 않는 수를 입력했을 때', () => {
    expect(() => {
      const app = new App();
      app.isValidatePurchaseAmount('100');
    }).toThrow('[ERROR]');
  });

  test('문자를 입력했을 때', () => {
    expect(() => {
      const app = new App();
      app.isValidatePurchaseAmount('*(*)');
    }).toThrow('[ERROR]');
  });

  test('공백을 입력했을 떄', () => {
    expect(() => {
      const app = new App();
      app.isValidatePurchaseAmount(' ');
    }).toThrow('[ERROR]');
  });

  test('0을 입력했을 떄', () => {
    expect(() => {
      const app = new App();
      app.isValidatePurchaseAmount('0');
    }).toThrow('[ERROR]');
  });

  test('음수을 입력했을 떄', () => {
    expect(() => {
      const app = new App();
      app.isValidatePurchaseAmount('-1000');
    }).toThrow('[ERROR]');
  });
});
