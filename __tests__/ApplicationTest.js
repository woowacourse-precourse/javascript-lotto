const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('../src/Lotto');

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
  test.skip('기능 테스트', () => {
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

  test('기능 테스트', () => {
    mockRandoms([[8, 21, 23, 41, 42, 43]]);
    mockQuestions(['1000', '8, 21, 23, 30, 40, 45', '7']);
    const logs = [
      '1개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 500%입니다.',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('로또별 당첨 통계 테스트', () => {
    mockRandoms([[8, 21, 23, 41, 42, 43]]);
    mockQuestions(['1000', '8, 21, 23, 30, 40, 45', '7']);

    const app = new App();
    app.play();
    expect(app.lottoMachine.calculateResult(app.lottos)).toEqual([
      1, 0, 0, 0, 0,
    ]);
  });

  test('수익률은 당첨된 금액을 구입 금액으로 나누어 백분율로 환산한 값이다.', () => {
    const app = new App();
    app.price = 8000;
    app.play();
    expect(app.getProfit([1, 0, 0, 0, 0])).toEqual(62.5);
  });

  test('로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행한다.', () => {
    mockRandoms([
      [43, 42, 41, 21, 23, 8],
      [3, 5, 11, 16, 32, 38],
    ]);
    mockQuestions(['2000']);

    const logSpy = getLogSpy();
    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('2개를 구매했습니다.')
    );
  });

  test('로또를 발행하면 로또를 오름차순으로 출력한다.', () => {
    mockRandoms([[43, 42, 41, 21, 23, 8]]);
    mockQuestions(['1000']);
    const logs = ['1개를 구매했습니다.', '[8, 21, 23, 41, 42, 43]'];

    const logSpy = getLogSpy();
    const app = new App();
    app.play();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('당첨 번호를 입력하면 Lotto 클래스를 활용해 검증한다.', () => {
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
    mockQuestions(['8000', '1,2,3,4,5,6', '0']);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
  });

  test('당첨 번호를 입력하면 Lotto 클래스를 생성한다.', () => {
    mockRandoms([[8, 21, 23, 41, 42, 43]]);
    mockQuestions(['1000', '1,2,3,4,5,6']);

    const app = new App();
    app.play();

    expect(app.lottoMachine).toBeInstanceOf(Lotto);
  });

  test('당첨 번호를 입력하면 Lotto 클래스를 활용해 검증한다', () => {
    mockRandoms([[8, 21, 23, 41, 42, 43]]);
    mockQuestions(['1000', '1,2,3,4,5,5']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR] 로또 번호에는 중복이 존재할 수 없습니다.');
  });

  test('보너스 번호를 입력하면 Lotto 클래스를 활용해 검증한다.', () => {
    mockRandoms([[8, 21, 23, 41, 42, 43]]);
    mockQuestions(['1000', '1,2,3,4,5,6', '0']);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
  });

  test('금액은 1,000원 단위로 나누어 떨어진다.', () => {
    mockQuestions(['1100']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR] 금액은 1,000원 단위로 나누어 떨어져야 합니다.');
  });

  test('금액은 숫자로만 이루어져 있다.', () => {
    mockQuestions(['1000j']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR] 금액은 숫자만 입력할 수 있습니다.');
  });
});
