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

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('로또 테스트', () => {
  test('기능 테스트', () => {
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
    mockQuestions(['8000', '1,2,3,4,5,6', '7']);
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
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 62.5%입니다.',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('예외 테스트', () => {
    mockQuestions(['1000j']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });

  test('로또 구매 테스트', () => {
    expect(() => {
      const app = new App();
      const lottos = app.buyLotto(3000);

      if (lottos.length !== 3) {
        throw new Error('[ERROR]');
      }
    }).not.toThrow('[ERROR]');
  });

  test('당첨 번호 예외 테스트', () => {
    const app = new App();

    expect(() => {
      app.validateWinningNumbers('1,2,3,4,5');
    }).toThrow('[ERROR]');
    expect(() => {
      app.validateWinningNumbers('1,2,3a,4,5,6');
    }).toThrow('[ERROR]');
    expect(() => {
      app.validateWinningNumbers('1,2,3,4,5,3');
    }).toThrow('[ERROR]');
    expect(() => {
      app.validateWinningNumbers('1,2,53,4,5,3');
    }).toThrow('[ERROR]');
    expect(() => {
      app.validateWinningNumbers('1,2,3,4.5,6');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호 예외 테스트', () => {
    const app = new App();
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    expect(() => {
      app.validateBonusNumber(winningNumbers, NaN);
    }).toThrow('[ERROR]');
    expect(() => {
      app.validateBonusNumber(winningNumbers, 3);
    }).toThrow('[ERROR]');
    expect(() => {
      app.validateBonusNumber(winningNumbers, 46);
    }).toThrow('[ERROR]');
  });

  test('당첨 결과 카운팅 테스트', () => {
    const app = new App();
    const drawResult = [4, 3, 2, 4, 0, 0];

    expect(app.countLottoRank(drawResult)).toEqual({
      1: 0,
      2: 1,
      3: 1,
      4: 2,
      5: 0,
      0: 2,
    });
  });

  test('수익률 테스트', () => {
    const app = new App();
    const rankCount = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 1,
      0: 7,
    };
    const amount = 8;

    expect(app.calculateProfitRate(rankCount, amount)).toBe(62.5);
  });
});
