const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe('로또 테스트', () => {
  test('입력받은 보너스 번호가 숫자가 아닌 경우 예외 테스트', () => {
    mockQuestions(['1000', '1,2,3,4,5,6', 'a']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });

  test('입력받은 보너스 번호가 1~45 사이의 숫자가 아닌 경우 예외 테스트', () => {
    mockQuestions(['1000', '1,2,3,4,5,6', '0']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });

  test('입력받은 보너스 번호가 당첨 번호에 포함된 경우 예외 테스트', () => {
    mockQuestions(['1000', '1,2,3,4,5,6', '6']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });
});
