const MissionUtils = require('@woowacourse/mission-utils');
const User = require('../src/User');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe('사용자 입력값 테스트', () => {
  test('구입금액이 1,000원 단위가 아니면 예외가 발생한다.', () => {
    mockQuestions(['8100']);
    expect(() => {
      const user = new User();
    }).toThrow('[ERROR]');
  });
});
