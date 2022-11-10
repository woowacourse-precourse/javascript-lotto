const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) =>
      acc.mockImplementationOnce((question, callback) => {
        callback(input);
      }),
    MissionUtils.Console.readLine,
  );
};

describe('숫자 입력 테스트', () => {
  afterEach(() => {
    MissionUtils.Console.close();
  });

  test('빈 값이면 예외가 발생한다.', () => {
    mockQuestions(['']);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });

  test('공백이 포함되어 있으면 예외가 발생한다.', () => {
    mockQuestions([' 1000']);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });

  test('문자가 포함되어 있으면 예외가 발생한다.', () => {
    mockQuestions(['1000a']);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });
});
