const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const Lotto = require('../src/Lotto');

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

  test('예외: 잘못된 금액', () => {
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

describe('로또 구매 및 출력', () => {
  test('경우 1', () => {
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
});

describe('당첨 번호 입력', () => {
  test('정상', () => {
    const answer = [1, 2, 3, 4, 5, 6];
    mockQuestions([answer.join(',')]);
    expect(App.inputWinningNumbers()).toEqual(answer);
  });

  test('예외: 구분자가 쉼표가 아닌 경우', () => {
    const answer = [1, 2, 3, 4, 5, 6];
    mockQuestions([answer.join('&')]);
    expect(() => App.inputWinningNumbers()).toThrow('[ERROR]');
  });

  test('예외: 구분자가 쉼표와 공백으로 이루어진 경우', () => {
    const answer = [1, 2, 3, 4, 5, 6];
    mockQuestions([answer.join(', ')]);
    expect(() => App.inputWinningNumbers()).toThrow('[ERROR]');
  });
});

describe('당첨 통계 계산', () => {
  test('수익률 계산 1', () => {
    const manualLotto = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    const money = manualLotto.length * 1000;
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const app = new App();

    app.money = money;
    manualLotto.forEach((numbers) => { app.lottoList.push(new Lotto(numbers)); });
    app.calculateStatistics(winningNumbers, bonusNumber);
    const rate = app.getRateOfReturn().toFixed(1);

    expect(rate).toEqual('62.5');
  });

  test('수익률 계산 2', () => {
    const manualLotto = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    const money = manualLotto.length * 1000;
    const winningNumbers = [12, 17, 15, 17, 25, 26];
    const bonusNumber = 7;
    const app = new App();

    app.money = money;
    manualLotto.forEach((numbers) => { app.lottoList.push(new Lotto(numbers)); });
    app.calculateStatistics(winningNumbers, bonusNumber);
    const rate = app.getRateOfReturn().toFixed(1);

    expect(rate).toEqual('0.0');
  });

  test('수익률 계산 3', () => {
    const manualLotto = [
      [1, 2, 3, 4, 5, 6].reverse(),
      [1, 2, 3, 4, 5, 7].reverse(),
    ];
    const money = manualLotto.length * 1000;
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const answer = ((2_000_000_000 + 30_000_000) / money) * 100;
    const app = new App();

    app.money = money;
    manualLotto.forEach((numbers) => { app.lottoList.push(new Lotto(numbers)); });
    app.calculateStatistics(winningNumbers, bonusNumber);
    const rate = app.getRateOfReturn().toFixed(1);

    expect(rate).toEqual(answer.toFixed(1));
  });
});
