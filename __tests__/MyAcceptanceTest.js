const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => acc.mockImplementationOnce((question, callback) => {
    callback(input);
  }), MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('My Acceptance test', () => {
  test('오류없이 정상 종료되는 시나리오', () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [1, 2, 4, 5, 6, 7],
      [7, 11, 16, 35, 36, 44],
      [1, 2, 3, 4, 5, 6],
      [1, 3, 5, 14, 22, 45],
    ]);
    mockQuestions(['5000', '1,2,3,4,5,6', '7']);
    const logs = [
      '5개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '[1, 2, 4, 5, 6, 7]',
      '[7, 11, 16, 35, 36, 44]',
      '[1, 2, 3, 4, 5, 6]',
      '[1, 3, 5, 14, 22, 45]',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 1개',
      '총 수익률은 40600100.0%입니다.',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('1000원 단위가 아닌 로또 구입 금액을 입력', () => {
    mockQuestions(['1500']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });

  test('숫자가 아닌 잘못된 로또 구입 금액을 입력', () => {
    mockQuestions(['오천원']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });

  test('중복된 당첨 번호를 입력', () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [1, 2, 4, 5, 6, 7],
      [7, 11, 16, 35, 36, 44],
      [1, 2, 3, 4, 5, 6],
      [1, 3, 5, 14, 22, 45],
    ]);
    mockQuestions(['5000', '1,2,3,4,5,5']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });

  test('6개가 아닌 당첨 번호를 입력', () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [1, 2, 4, 5, 6, 7],
      [7, 11, 16, 35, 36, 44],
      [1, 2, 3, 4, 5, 6],
      [1, 3, 5, 14, 22, 45],
    ]);
    mockQuestions(['5000', '1,2,3,4,5']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });

  test('숫자가 아닌 당첨 번호를 입력', () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [1, 2, 4, 5, 6, 7],
      [7, 11, 16, 35, 36, 44],
      [1, 2, 3, 4, 5, 6],
      [1, 3, 5, 14, 22, 45],
    ]);
    mockQuestions(['5000', '일,이,삼,사,오,육']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });

  test('1~45 범위를 벗어난 당첨 번호를 입력', () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [1, 2, 4, 5, 6, 7],
      [7, 11, 16, 35, 36, 44],
      [1, 2, 3, 4, 5, 6],
      [1, 3, 5, 14, 22, 45],
    ]);
    mockQuestions(['5000', '0,1,2,3,4,5']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });

  test('당첨 번호와 중복된 보너스 번호를 입력', () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [1, 2, 4, 5, 6, 7],
      [7, 11, 16, 35, 36, 44],
      [1, 2, 3, 4, 5, 6],
      [1, 3, 5, 14, 22, 45],
    ]);
    mockQuestions(['5000', '1,2,3,4,5,6', '1']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });

  test('숫자가 아닌 보너스 번호를 입력', () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [1, 2, 4, 5, 6, 7],
      [7, 11, 16, 35, 36, 44],
      [1, 2, 3, 4, 5, 6],
      [1, 3, 5, 14, 22, 45],
    ]);
    mockQuestions(['5000', '1,2,3,4,5,6', 'seven']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });

  test('1~45 범위를 벗어난 보너스 번호를 입력', () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [1, 2, 4, 5, 6, 7],
      [7, 11, 16, 35, 36, 44],
      [1, 2, 3, 4, 5, 6],
      [1, 3, 5, 14, 22, 45],
    ]);
    mockQuestions(['5000', '1,2,3,4,5,6', '46']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });
});
