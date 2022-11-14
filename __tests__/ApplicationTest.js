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
  test('기능 테스트 - 1', () => {
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

  test('기능 테스트 - 2', () => {
    mockRandoms([
      [1, 2, 3, 4, 7, 8],
      [3, 5, 15, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ]);
    mockQuestions(['3000', '1,2,3,4,7,10', '8']);
    const logs = [
      '3개를 구매했습니다.',
      '[1, 2, 3, 4, 7, 8]',
      '[3, 5, 15, 16, 32, 38]',
      '[7, 11, 16, 35, 36, 44]',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 1,000,000.0%입니다.',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('기능 테스트 - 3', () => {
    mockRandoms([
      [2, 9, 11, 17, 26, 45],
      [3, 5, 15, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 15, 22, 32, 40],
      [4, 11, 16, 35, 42, 44],
    ]);
    mockQuestions(['5000', '2,9,17,22,31,45', '11']);
    const logs = [
      '5개를 구매했습니다.',
      '[2, 9, 11, 17, 26, 45]',
      '[3, 5, 15, 16, 32, 38]',
      '[7, 11, 16, 35, 36, 44]',
      '[1, 8, 15, 22, 32, 40]',
      '[4, 11, 16, 35, 42, 44]',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 1,000.0%입니다.',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('기능 테스트 - 4', () => {
    mockRandoms([[2, 9, 11, 17, 26, 45]]);
    mockQuestions(['1000', '2,9,17,26,31,45', '12']);
    const logs = [
      '1개를 구매했습니다.',
      '[2, 9, 11, 17, 26, 45]',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 150,000.0%입니다.',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('예외 테스트: 입력 받은 금액이 숫자가 아니면 예외가 발생한다.', () => {
    mockQuestions(['1000j']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(
      '[ERROR] 문자, 특수기호를 제외한 1 ~ 45 사이의 숫자만 입력해야 합니다.'
    );
  });

  test('예외 테스트: 입력 받은 금액이 1,000원 미만이면 에외가 발생한다.', () => {
    mockQuestions(['500']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR] 1,000원 미만의 금액으로 로또를 구매할 수 없습니다.');
  });

  test('예외 테스트: 입력 받은 금액이 1,000원 단위가 아니면 예외가 발생한다.', () => {
    mockQuestions(['90001']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR] 1,000원 단위의 금액만 입력 가능합니다.');
  });

  test('예외 테스트: 로또 번호의 개수가 6개가 아니면 예외가 발생한다.', () => {
    mockRandoms([[2, 9, 11, 17, 26, 45]]);
    mockQuestions(['1000', '1,2,9,17,26,31,45']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
  });

  test('예외 테스트: 로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    mockRandoms([
      [2, 9, 11, 12, 17, 45],
      [1, 14, 25, 27, 29, 44],
      [8, 19, 23, 17, 18, 41],
      [12, 18, 21, 27, 33, 35],
    ]);
    mockQuestions(['4000', '1,2,9,17,17,31']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR] 서로 다른 숫자만 입력해야 합니다.');
  });

  test('예외 테스트: 로또 번호에 1 미만 45 초과된 숫자가 포함되면 예외가 발생한다.', () => {
    mockRandoms([
      [2, 9, 11, 12, 17, 45],
      [1, 14, 25, 27, 29, 44],
      [8, 19, 23, 17, 18, 41],
    ]);
    mockQuestions(['3000', '1,2,9,12,17,46']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR] 1 ~ 45 범위 이내의 숫자만 입력해야 합니다.');
  });

  test('예외 테스트: 보너스 번호가 문자나 기호라면 예외가 발생한다.', () => {
    mockRandoms([
      [2, 9, 11, 12, 17, 45],
      [1, 14, 25, 27, 29, 44],
      [8, 19, 23, 17, 18, 41],
    ]);
    mockQuestions(['3000', '1,2,9,12,17,44', 'wow']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(
      '[ERROR] 문자, 특수기호를 제외한 1 ~ 45 사이의 숫자만 입력해야 합니다.'
    );
  });

  test('예외 테스트: 보너스 번호가 1 미만 45 초과된 숫자가 포함되면 예외가 발생한다.', () => {
    mockRandoms([
      [2, 9, 11, 12, 17, 45],
      [1, 14, 25, 27, 29, 44],
      [8, 19, 23, 17, 18, 41],
    ]);
    mockQuestions(['3000', '1,2,9,12,17,44', '0']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR] 1 ~ 45 범위 이내의 숫자만 입력해야 합니다.');
  });

  test('예외 테스트: 보너스 번호가 당첨 번호와 중복된다면 예외 발생한다.', () => {
    mockRandoms([
      [2, 9, 11, 12, 17, 45],
      [1, 14, 25, 27, 29, 44],
      [8, 19, 23, 17, 18, 41],
    ]);
    mockQuestions(['3000', '1,2,9,12,17,44', '12']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(
      '[ERROR] 당첨 번호에 포함된 숫자를 보너스 번호로 지정할 수 없습니다.'
    );
  });
});
