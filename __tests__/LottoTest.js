const Lotto = require("../src/Lotto");
const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

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
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
  test("로또 번호에 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "!"]);
    }).toThrow("[ERROR]");
  });
  test("로또 범위 밖의 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });
});

describe("구입금액 입력 테스트", () => {
  test("구입금액이 숫자가 아니면 예외가 발생한다.", () => {
    mockQuestions(["숫자아님"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });
  test("구입금액이 1000원 미만이면 예외가 발생한다.", () => {
    mockQuestions(["900"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });
  test("구입금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    mockQuestions(["1234"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });
});

describe("보너스번호 입력 테스트", () => {
  test("보너스 번호가 숫자가 아니면 예외가 발생한다.", () => {
    mockQuestions(["1000","1,2,3,4,5,6", "j"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });
  test("보너스 번호가 로또 번호 범위 밖의 숫자이면 예외가 발생한다.", () => {
    mockQuestions(["1000","1,2,3,4,5,6", "66"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });
  test("보너스 번호가 당첨번호와 중복도면 예외가 발생한다.", () => {
    mockQuestions(["1000","1,2,3,4,5,6", "3"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });
});

describe("당첨 결과 테스트", () => {
  test("1등 당첨의 경우", () => {
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
    ]);
    mockQuestions(["1000", "1,2,3,4,5,6", "7"]);
    const logs = [
      "[1, 2, 3, 4, 5, 6]",
      "6개 일치 (2,000,000,000원) - 1개",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
  test("2등 당첨의 경우", () => {
    mockRandoms([
      [1, 2, 3, 4, 5, 7],
    ]);
    mockQuestions(["1000", "1,2,3,4,5,6", "7"]);
    const logs = [
      "[1, 2, 3, 4, 5, 7]",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
  test("3등 당첨의 경우", () => {
    mockRandoms([
      [1, 2, 3, 4, 5, 8],
    ]);
    mockQuestions(["1000", "1,2,3,4,5,6", "7"]);
    const logs = [
      "[1, 2, 3, 4, 5, 8]",
      "5개 일치 (1,500,000원) - 1개",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
  test("4등 당첨의 경우", () => {
    mockRandoms([
      [1, 2, 3, 4, 8, 9],
    ]);
    mockQuestions(["1000", "1,2,3,4,5,6", "7"]);
    const logs = [
      "[1, 2, 3, 4, 8, 9]",
      "4개 일치 (50,000원) - 1개",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
  test("5등 당첨의 경우", () => {
    mockRandoms([
      [1, 2, 3, 8, 9, 10],
    ]);
    mockQuestions(["1000", "1,2,3,4,5,6", "7"]);
    const logs = [
      "[1, 2, 3, 8, 9, 10]",
      "3개 일치 (5,000원) - 1개",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});