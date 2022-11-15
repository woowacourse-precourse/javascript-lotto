const LotteryMachine = require('../src/LotteryMachine');
const MissionUtils = require('@woowacourse/mission-utils');
const { ERROR_MESSAGE } = require('../src/constants');
const { makeErrorMsg } = require('../src/utils');

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

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('로또 기계 클래스 테스트', () => {
  test.only('구매금액을 입력하고 구매 금액만큼의 로또를 발행한다', () => {
    const answers = ['8000'];
    mockQuestions(answers);

    const logSpy = getLogSpy();
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);
    const logs = [
      '8개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '[3, 5, 11, 16, 32, 38]',
      '[7, 11, 16, 35, 36, 44]',
      '[1, 8, 11, 31, 41, 42]',
      '[13, 14, 16, 38, 42, 45]',
      '[7, 11, 30, 40, 42, 43]',
      '[2, 13, 22, 32, 38, 45]',
      '[1, 3, 5, 14, 22, 45]',
    ];
    LotteryMachine.issueTicket();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test.only('구매금액으로 입력받은 값이 숫자가 아니면 예외가 발생한다.', () => {
    const answers = ['8000j'];
    mockQuestions(answers);

    expect(() => {
      LotteryMachine.issueTicket();
    }).toThrow(makeErrorMsg(ERROR_MESSAGE.MONEY_NUMBER));
  });

  test.only('구매금액이 천원 단위가 아니면 예외가 발생한다.', () => {
    const answers = ['8200'];
    mockQuestions(answers);

    expect(() => {
      LotteryMachine.issueTicket();
    }).toThrow(makeErrorMsg(ERROR_MESSAGE.MONEY_UNIT));
  });
});
