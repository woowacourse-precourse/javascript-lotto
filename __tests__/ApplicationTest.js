const MissionUtils = require('@woowacourse/mission-utils');

const { ERROR_HEADER } = require('../src/lottoOptions');
const App = require('../src/App');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => acc.mockImplementationOnce((question, callback) => {
    callback(input);
  }), MissionUtils.Console.readLine);
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
  test('기능 테스트 1', () => {
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

  test('기능 테스트 2', () => {
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 11, 12, 13],
      [1, 2, 3, 4, 5, 11],
      [1, 2, 3, 18, 19, 20],
      [1, 2, 3, 4, 21, 22],
    ]);
    mockQuestions(['5000', '1,2,3,4,5,6', '11']);
    const logs = [
      '5개를 구매했습니다.',
      '[1, 2, 3, 4, 5, 6]',
      '[1, 2, 3, 11, 12, 13]',
      '[1, 2, 3, 4, 5, 11]',
      '[1, 2, 3, 18, 19, 20]',
      '[1, 2, 3, 4, 21, 22]',
      '3개 일치 (5,000원) - 2개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 1개',
      '총 수익률은 40,601,200.0%입니다.',
    ];

    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('기능 테스트 3', () => {
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 11, 12, 13],
      [1, 2, 3, 4, 5, 11],
      [1, 2, 3, 18, 19, 20],
      [1, 2, 3, 4, 21, 22],
    ]);
    mockQuestions(['5000', '1,41,42,43,44,45', '11']);
    const logs = [
      '5개를 구매했습니다.',
      '[1, 2, 3, 4, 5, 6]',
      '[1, 2, 3, 11, 12, 13]',
      '[1, 2, 3, 4, 5, 11]',
      '[1, 2, 3, 18, 19, 20]',
      '[1, 2, 3, 4, 21, 22]',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 0.0%입니다.',
    ];

    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});

describe('구입금액 예외 테스트', () => {
  test('숫자 이외의 문자', () => {
    mockQuestions(['1000j']);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(`${ERROR_HEADER} 숫자(양수)만 입력할 수 있습니다.`);
  });

  test('빈문자 입력 테스트', () => {
    mockQuestions(['']);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(`${ERROR_HEADER} 아무것도 입력하지 않았습니다.`);
  });

  test('공백 입력 테스트', () => {
    mockQuestions([' 1000']);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(`${ERROR_HEADER} 입력에 공백이 포함되어 있습니다.`);
  });

  test('1000원 미만 입력 테스트', () => {
    mockQuestions(['900']);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(`${ERROR_HEADER} 구입 금액은 1000원 이상이여야 합니다.`);
  });

  test('1000원 단위로 나누어 떨어지지 않는 경우 테스트', () => {
    mockQuestions(['1200']);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(`${ERROR_HEADER} 1000원 단위로 입력하여야 합니다. (최소 구매금액 : 1000원)`);
  });
});
