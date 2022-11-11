const { Console, Random } = require('@woowacourse/mission-utils');

const testFunction = {
  mockQuestions(answers) {
    Console.readLine = jest.fn();
    answers.reduce((acc, input) => {
      return acc.mockImplementationOnce((question, callback) => {
        callback(input);
      });
    }, Console.readLine);
  },

  mockRandoms(numbers) {
    Random.pickUniqueNumbersInRange = jest.fn();
    numbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, Random.pickUniqueNumbersInRange);
  },

  getLogSpy() {
    const logSpy = jest.spyOn(Console, 'print');
    logSpy.mockClear();
    return logSpy;
  },
};

module.exports = testFunction;
