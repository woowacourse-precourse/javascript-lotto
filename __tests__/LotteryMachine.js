const MissionUtils = require('@woowacourse/mission-utils');
const LotteryMachine = require('../src/LotteryMachine');
const Lotto = require('../src/Lotto');
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
  test('구매금액을 입력하고 구매 금액만큼의 로또를 발행한다', () => {
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

  test('구매금액으로 입력받은 값이 숫자가 아니면 예외가 발생한다.', () => {
    const answers = ['8000j'];
    mockQuestions(answers);

    expect(() => {
      LotteryMachine.issueTicket();
    }).toThrow(makeErrorMsg(ERROR_MESSAGE.MONEY_NUMBER));
  });

  test('구매금액이 천원 단위가 아니면 예외가 발생한다.', () => {
    const answers = ['8200'];
    mockQuestions(answers);

    expect(() => {
      LotteryMachine.issueTicket();
    }).toThrow(makeErrorMsg(ERROR_MESSAGE.MONEY_UNIT));
  });

  test('로또 번호와 당첨 번호를 비교하여 로또의 등수와 당첨금을 계산한다', () => {
    const winningNumbers = {
      winnerNumbers: [1, 2, 3, 4, 5, 6],
      bonusNumber: 7,
    };
    const lottos = [
      new Lotto([8, 21, 23, 41, 42, 43]),
      new Lotto([3, 5, 11, 16, 32, 38]),
      new Lotto([7, 11, 16, 35, 36, 44]),
      new Lotto([1, 8, 11, 31, 41, 42]),
      new Lotto([13, 14, 16, 38, 42, 45]),
      new Lotto([7, 11, 30, 40, 42, 43]),
      new Lotto([2, 13, 22, 32, 38, 45]),
      new Lotto([1, 3, 5, 14, 22, 45]),
    ];

    const winningStatistics = {
      ranking: {
        firstPlace: 1,
        secondPlace: 0,
        thirdPlace: 0,
        fourthPlace: 0,
        fifthPlace: 0,
      },
      totalLottoNum: 8,
      totalWinnings: 5000,
    };

    const lotteryMachine = new LotteryMachine();
    lotteryMachine.updateWinnerNumber(winningNumbers);
    const calculationResult = lotteryMachine.readQrCode(lottos);

    expect(winningStatistics).toEqual(calculationResult);
  });

  test('발행한 로또들의 당첨 내역과 수익률을 출력한다.', () => {
    const logs = [
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 62.5%입니다.',
    ];
    const logSpy = getLogSpy();
    const winningStatistics = {
      ranking: {
        firstPlace: 1,
        secondPlace: 0,
        thirdPlace: 0,
        fourthPlace: 0,
        fifthPlace: 0,
      },
      totalLottoNum: 8,
      totalWinnings: 5000,
    };
    LotteryMachine.printWinResult(winningStatistics);
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
