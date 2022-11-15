const Lotto = require('../src/Lotto');
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

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // 아래에 추가 테스트 작성 가능
  test('금액 입력, 출력 기능 테스트', () => {
    mockQuestions(['5000']);
    const logs = ['5개를 구매했습니다.'];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('금액 입력 예외 테스트 - 문자열이 입력될 경우', () => {
    mockQuestions(['문자열이입력']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });

  test('금액 입력 예외 테스트 - 1000단위가 아닌 경우', () => {
    mockQuestions(['1500']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });

  test('당첨, 보너스 번호 입력 기능 테스트', () => {
    mockQuestions(['5000', '1,5,10,15,20,25', '6']);
    const logs = ['\n당첨 통계\n---'];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('당첨 입력 예외 테스트 - ,로 구분되지 않은 경우1', () => {
    mockQuestions(['1500', '1 2 3 4 5 6']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });

  test('당첨 입력 예외 테스트 - ,로 구분되지 않은 경우2', () => {
    mockQuestions(['1500', '123456']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });

  test('당첨 입력 예외 테스트 - 범위를 벗어난 수가 있을 경우1', () => {
    mockQuestions(['1500', '1,2,3,4,5,46']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });

  test('당첨 입력 예외 테스트 - 범위를 벗어난 수가 있을 경우2', () => {
    mockQuestions(['1500', '0,2,3,4,5,6']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });

  test('당첨 입력 예외 테스트 - 범위를 벗어난 수가 있을 경우3', () => {
    mockQuestions(['1500', '-1,2,3,4,5,6']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });

  test('당첨 입력 예외 테스트 - 문자열이 입력될 경우', () => {
    mockQuestions(['1500', '가,나,다,라,마,바']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });
});
