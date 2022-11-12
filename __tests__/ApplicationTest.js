const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) => acc.mockImplementationOnce((question, callback) => { callback(input); }),
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
});

describe('구입 금액 입력 및 검사', () => {
  test('정상', () => {
    const app = new App();
    mockQuestions(['15000']);
    expect(() => { app.setMoney(); }).not.toThrow();
  });

  test('예외: 입력값이 자연수가 아님', () => {
    const app = new App();
    mockQuestions(['-121687']);
    expect(() => { app.setMoney(); }).toThrow();
  });

  test('예외: 입력값이 숫자조차 아님', () => {
    const app = new App();
    mockQuestions(['사랑해요']);
    expect(() => { app.setMoney(); }).toThrow();
  });

  test('예외: 입력값이 1000의 배수가 아님', () => {
    const app = new App();
    mockQuestions(['121687']);
    expect(() => { app.setMoney(); }).toThrow();
  });
});

describe('로또 구매', () => {
  mockQuestions(['8000']);
  mockRandoms([
    [8, 21, 23, 41, 42, 43].reverse(),
    [3, 5, 11, 16, 32, 38].reverse(),
    [7, 11, 16, 35, 36, 44].reverse(),
    [1, 8, 11, 31, 41, 42].reverse(),
    [13, 14, 16, 38, 42, 45].reverse(),
    [7, 11, 30, 40, 42, 43].reverse(),
    [2, 13, 22, 32, 38, 45].reverse(),
    [1, 3, 5, 14, 22, 45].reverse(),
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
  const logSpy = getLogSpy();
  const app = new App();

  app.setMoney();
  app.buyLotto();
  app.printLottoList();

  logs.forEach((log) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
});
