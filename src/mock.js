const MissionUtils = require('@woowacourse/mission-utils');

const EMPTY_CALLBACK = () => {};

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

const mockQuestion = (answer) => {
  mockQuestions([answer]);
};

module.exports = { mockQuestions, mockQuestion, EMPTY_CALLBACK };
