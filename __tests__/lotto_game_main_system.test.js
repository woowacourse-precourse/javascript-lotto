const LottoGameMainSystem = require('../src/components/LottoGameMainSystem');
const MissionUtils = require('@woowacourse/mission-utils');
const {
  LottoNumberData,
  LottoRanking,
} = require('../src/components/lotto-data/LottoNumberData');

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

const resetLottoNumberData = () => {
  for (let lottoNumber in LottoNumberData) {
    if (lottoNumber === 'Issued' || lottoNumber === 'Winning') {
      LottoNumberData[lottoNumber] = [];
      continue;
    }
    LottoNumberData[lottoNumber] = 0;
  }
  for (let ranking in LottoRanking) {
    LottoRanking[ranking] = 0;
  }
};

describe('lottoGameMainSystem 클래스 테스트', () => {
  beforeEach(() => {
    resetLottoNumberData();
    mockRandoms([
      [2, 5, 11, 12, 33, 39],
      [2, 11, 12, 33, 39, 42],
      [2, 12, 33, 39, 43, 44],
      [12, 17, 24, 34, 41, 42],
      [11, 33, 39, 40, 42, 45],
    ]);
  });

  it('하나만 당첨되었을 경우 (5등)', () => {
    mockQuestions(['5000', '1,3,4,40,42,45', '6']);
    const logs = [
      '5개를 구매했습니다.',
      '[2, 5, 11, 12, 33, 39]',
      '[2, 11, 12, 33, 39, 42]',
      '[2, 12, 33, 39, 43, 44]',
      '[12, 17, 24, 34, 41, 42]',
      '[11, 33, 39, 40, 42, 45]',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 100.0%입니다.',
    ];
    const logSpy = getLogSpy();
    const lottoGameMainSystem = new LottoGameMainSystem();
    lottoGameMainSystem.runGame();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
  it('여러개 당첨되었을 경우 (1,2,4등)', () => {
    mockQuestions(['5000', '2,5,11,12,33,39', '42']);
    const logs = [
      '5개를 구매했습니다.',
      '[2, 5, 11, 12, 33, 39]',
      '[2, 11, 12, 33, 39, 42]',
      '[2, 12, 33, 39, 43, 44]',
      '[12, 17, 24, 34, 41, 42]',
      '[11, 33, 39, 40, 42, 45]',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 1개',
      '총 수익률은 40601100.0%입니다.',
    ];
    const logSpy = getLogSpy();
    const lottoGameMainSystem = new LottoGameMainSystem();
    lottoGameMainSystem.runGame();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  it('당첨이 하나도 되지 않았을 경우', () => {
    mockQuestions(['5000', '1,3,4,6,7,8', '38']);
    const logs = [
      '5개를 구매했습니다.',
      '[2, 5, 11, 12, 33, 39]',
      '[2, 11, 12, 33, 39, 42]',
      '[2, 12, 33, 39, 43, 44]',
      '[12, 17, 24, 34, 41, 42]',
      '[11, 33, 39, 40, 42, 45]',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 0.0%입니다.',
    ];
    const logSpy = getLogSpy();
    const lottoGameMainSystem = new LottoGameMainSystem();
    lottoGameMainSystem.runGame();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
