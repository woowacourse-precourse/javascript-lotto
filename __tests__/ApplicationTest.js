const App = require('../src/App');
const Lotto = require('../src/Lotto');
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

  test('예외 테스트 - 구입금액[숫자]', () => {
    mockQuestions(['1000j']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR] 구입금액은 숫자여야 합니다.');
  });

  test('예외 테스트 - 구입금액[1000단위]', () => {
    mockQuestions(['2300']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR] 구입금액은 1000단위여야 합니다.');
  });

  test('예외 테스트 - 구입금액[0]', () => {
    mockQuestions(['0']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR] 구입금액은 0이상 이여야 합니다.');
  });

  test('예외 테스트 - 로또[숫자]', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 'ab']);
    }).toThrow('[ERROR] 로또 번호는 숫자여야 합니다.');
  });

  test('예외 테스트 - 로또[범위]', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 49]);
    }).toThrow('[ERROR] 로또 번호는 1부터 45 사이여야 합니다.');
  });

  test('예외 테스트 - 당첨번호[길이]', () => {
    mockRandoms([[8, 21, 23, 41, 42, 43]]);
    mockQuestions(['1000', '1,2,3,4,5,6,7']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
  });

  test('예외 테스트 - 보너스번호[중복]', () => {
    mockRandoms([[8, 21, 23, 41, 42, 43]]);
    mockQuestions(['1000', '1,2,3,4,5,6', '5']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR] 로또 번호는 중복되지 않아야 합니다.');
  });

  test('보너스 테스트 - 맞았을 때(2등)', () => {
    mockRandoms([[8, 21, 23, 41, 42, 43]]);
    mockQuestions(['1000', '8,21,23,41,42,6', '43']);
    const logs = [
      '1개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('로또 결과 테스트 - (3등)', () => {
    mockRandoms([[8, 21, 23, 41, 42, 43]]);
    mockQuestions(['1000', '8,21,23,41,42,6', '40']);
    const logs = [
      '1개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '4개 일치 (50,000원) - 1개',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
