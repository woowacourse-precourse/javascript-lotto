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

  // 추가 테스트 작성
  test('"1,2,3,4,5,6"형식의 당첨번호를 숫자 배열로 반환한다.', () => {
    const app = new App();
    const winningNumbersInput = '1,2,3,4,5,6';
    const winningNumbers = app.winningNumbersToArray(winningNumbersInput);
    expect(winningNumbers).toEqual([1,2,3,4,5,6]);
  });

  test('1등부터 5등까지 1개씩 나오는 경우', () => {
    mockRandoms([
      [1, 2, 3, 41, 43, 42],
      [1, 2, 3, 4, 38, 32],
      [1, 2, 3, 4, 5, 44],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 6],
    ]);
    mockQuestions(['5000', '1,2,3,4,5,6', '7']);
    const logs = [
      '5개를 구매했습니다.',
      '[1, 2, 3, 41, 42, 43]',
      '[1, 2, 3, 4, 32, 38]',
      '[1, 2, 3, 4, 5, 44]',
      '[1, 2, 3, 4, 5, 7]',
      '[1, 2, 3, 4, 5, 6]',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 1개',
      '총 수익률은 40631100.0%입니다.',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('당첨번호 입력 시 형식에 맞지 않으면 예외가 발생한다.', () => {
    mockQuestions(['1000', '1,2,3,,4,5,6']);
    mockRandoms([
      [11, 12, 13, 14, 15, 16],
    ]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });

  test('보너스번호 입력 시 당첨번호와 중복되면 예외가 발생한다.', () => {
    mockQuestions(['1000', '1,2,3,4,5,6', '6']);
    mockRandoms([
      [10, 20, 30, 40, 42, 45],
    ]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });

  test('보너스번호 입력 시 1~45범위의 숫자가 아니라면 예외가 발생한다.', () => {
    mockQuestions(['1000', '1,2,3,4,5,6', '46']);
    mockRandoms([
      [10, 20, 30, 40, 42, 7],
    ]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });  
});
