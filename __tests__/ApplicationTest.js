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
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);
    mockQuestions(["8000", "1,2,3,4,5,6", "7"]);
    const logs = [
      "8개를 구매했습니다.",
      "[8, 21, 23, 41, 42, 43]",
      "[3, 5, 11, 16, 32, 38]",
      "[7, 11, 16, 35, 36, 44]",
      "[1, 8, 11, 31, 41, 42]",
      "[13, 14, 16, 38, 42, 45]",
      "[7, 11, 30, 40, 42, 43]",
      "[2, 13, 22, 32, 38, 45]",
      "[1, 3, 5, 14, 22, 45]",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 62.5%입니다.",
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
    }).toThrow("[ERROR] 숫자만 입력 가능합니다.");
  });
});

describe("로또 등수 결과 확인 테스트", () => {
  test("1등인 경우", () => {
    const app = new App();
    const result = app.checkLottoResultRank([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], 7)

    expect(result).toEqual('1등');
  });

  test("2등인 경우", () => {
    const app = new App();
    const result = app.checkLottoResultRank([1, 2, 3, 4, 5, 7], [1, 2, 3, 4, 5, 6], 7)

    expect(result).toEqual('2등');
  });

  test("3등인 경우", () => {
    const app = new App();
    const result = app.checkLottoResultRank([1, 2, 3, 4, 5, 10], [1, 2, 3, 4, 5, 6], 7)

    expect(result).toEqual('3등');
  });

  test("4등인 경우", () => {
    const app = new App();
    const result = app.checkLottoResultRank([1, 2, 3, 4, 11, 10], [1, 2, 3, 4, 5, 6], 7)

    expect(result).toEqual('4등');
  });

  test("5등인 경우", () => {
    const app = new App();
    const result = app.checkLottoResultRank([1, 2, 3, 12, 11, 10], [1, 2, 3, 4, 5, 6], 7)

    expect(result).toEqual('5등');
  });

  test("당첨되지 않은 경우", () => {
    const app = new App();
    const result = app.checkLottoResultRank([15, 14, 13, 12, 11, 10], [1, 2, 3, 4, 5, 6], 7)

    expect(result).toEqual('none');
  });
})

describe("로또 결과 및 수익 확인 테스트", () => {
  test("테스트 1", () => {
    const app = new App();
    app.checkAllLottoResultAndRevenue([[1, 2, 3, 4, 5, 6]], [1, 2, 3, 4, 5, 6], 7)

    expect(app.result).toEqual({'1등': 1, '2등': 0, '3등': 0, '4등': 0, '5등': 0, 'none': 0});
    expect(app.revenue).toEqual(2000000000);
  });

  test("테스트 2", () => {
    const app = new App();
    app.checkAllLottoResultAndRevenue([[1, 2, 3, 4, 5, 7], [1, 2, 3, 4, 11, 10], [10, 11, 12, 13, 14, 15, 16]], [1, 2, 3, 4, 5, 6], 7)

    expect(app.result).toEqual({'1등': 0, '2등': 1, '3등': 0, '4등': 1, '5등': 0, 'none': 1});
    expect(app.revenue).toEqual(30050000);
  });
})