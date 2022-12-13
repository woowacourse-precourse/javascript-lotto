const LotteryApp = require('../src/LotteryApp');
const MESSAGE = require('../src/constants/lottoMessage');
const MissionUtils = require('@woowacourse/mission-utils');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) => acc.mockImplementationOnce((question, callback) => {
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

describe('LotteryApp 클래스 로또 구매 테스트', () => {
  test.each([
    [
      [[8, 21, 23, 41, 42, 43]],
      ['1개를 구매했습니다.', '[8, 21, 23, 41, 42, 43]'],
      1000,
    ],
    [
      [
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],
        [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45],
      ],
      [
        '8개를 구매했습니다.',
        '[8, 21, 23, 41, 42, 43]',
        '[3, 5, 11, 16, 32, 38]',
        '[7, 11, 16, 35, 36, 44]',
        '[1, 8, 11, 31, 41, 42]',
        '[13, 14, 16, 38, 42, 45]',
        '[7, 11, 30, 40, 42, 43]',
        '[2, 13, 22, 32, 38, 45]',
        '[1, 3, 5, 14, 22, 45]',
      ],
      8000,
    ],
  ])(
    '구입 금액만큼 로또를 구매한다.',
    (randomLotto, outputView, inputMoney) => {
      mockRandoms(randomLotto);

      const logs = outputView;
      const logSpy = getLogSpy();
      const lotteryApp = new LotteryApp();
      lotteryApp.purchaseLottos(inputMoney);
      logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    },
  );

  test('로또 번호를 오름차순 정렬 후 출력한다.', () => {
    mockRandoms([[23, 42, 41, 43, 21, 8]]);

    const logs = ['1개를 구매했습니다.', '[8, 21, 23, 41, 42, 43]'];
    const logSpy = getLogSpy();
    const lotteryApp = new LotteryApp();
    lotteryApp.purchaseLottos(1000);
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});

describe('LotteryApp 클래스 당첨 번호 입력 테스트', () => {
  test('당첨 번호 입력하면 ,(쉼표)로 구분해 배열로 저장한다.', () => {
    mockQuestions(['1,2,3,4,5,7']);
    const lotteryApp = new LotteryApp();
    lotteryApp.askWinningDigit();
    expect(lotteryApp.lotteries.getWinningLotto().getLotto()).toEqual([
      1, 2, 3, 4, 5, 7,
    ]);
  });

  test('보너스 번호를 입력하면 변수에 저장된다.', () => {
    mockRandoms([[1, 2, 3, 4, 5, 6]]);
    mockQuestions(['1,2,3,4,5,7', '6']);
    const lotteryApp = new LotteryApp();
    lotteryApp.askWinningDigit();
    lotteryApp.lotteries.setBonusLotto(6);
    lotteryApp.lotteries.purchaseAuto();
    lotteryApp.lotteries.setRankGroup(5, lotteryApp.lotteries.getStorage()[0])
    expect(lotteryApp.lotteries.getRankGroup().rankSecond).toEqual(1);
  });

  test('보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.', () => {
    mockQuestions(['1,2,3,4,5,7']);
    const lotteryApp = new LotteryApp();
    lotteryApp.askWinningDigit();
    expect(() => {
      lotteryApp.lotteries.setBonusLotto(7);
    }).toThrow(MESSAGE.ERROR.duplicateBonus);
  });

  test('보너스 번호가 1이상 45이하가 아니면 예외가 발생한다.', () => {
    mockQuestions(['1,2,3,4,5,7']);
    const lotteryApp = new LotteryApp();
    lotteryApp.askWinningDigit();
    expect(() => {
      lotteryApp.lotteries.setBonusLotto(46);
    }).toThrow(MESSAGE.ERROR.invalidDigit);
  });

  test('보너스 번호가 숫자가 아닌 문자가 들어오면 예외가 발생한다.', () => {
    mockQuestions(['1,2,3,4,5,7']);
    const lotteryApp = new LotteryApp();
    lotteryApp.askWinningDigit();
    expect(() => {
      lotteryApp.lotteries.setBonusLotto('a');
    }).toThrow(MESSAGE.ERROR.invalidDigit);
  });
});
