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

describe("로또 테스트", () => {
  test("기능 테스트", () => {
    mockRandoms([
      [1, 3, 5, 14, 22, 45],
      [1, 2, 3, 4, 5, 45],
    ]);
    mockQuestions(["2000", "1,2,3,4,5,6", "7"]);
    const logs = [
      "2개를 구매했습니다.",
      "[1, 3, 5, 14, 22, 45]",
      "[1, 2, 3, 4, 5, 45]",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 1개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 75250.0%입니다.",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("예외 테스트", () => {
    mockQuestions(["1000j"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("(당첨 번호 입력시 쉼표 x) 예외 테스트", () => {
    mockQuestions(["1000", '1 2 3 4 5 6']);
    mockRandoms([[1, 3, 5, 14, 22, 45]]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("(당첨 번호 입력시 문자) 예외 테스트", () => {
    mockQuestions(["1000", '1,2,3,a,5,6']);
    mockRandoms([[1, 3, 5, 14, 22, 45]]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("(보너스 문자 입력 시) 예외 테스트", () => {
    mockQuestions(["1000", '1,2,3,4,5,6', '100']);
    mockRandoms([[1, 3, 5, 14, 22, 45]]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("(보너스 문자 입력 시) 예외 테스트", () => {
    mockQuestions(["1000", '1,2,3,4,5 ,6']);
    mockRandoms([[1, 3, 5, 14, 22, 45]]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });
});
