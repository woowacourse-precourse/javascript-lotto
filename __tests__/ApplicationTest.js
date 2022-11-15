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
    }).toThrow("[ERROR]");
  });

test("당첨번호(보너스번호 제외) 예외처리 테스트_1", () => {
  expect(() => {
    const app = new App();
    app.winningLottoValidate([1, 2, 3, 4, 5, 6, 7]);
  }).toThrow("[ERROR]");
});

test("당첨번호(보너스번호 제외) 예외처리 테스트_2", () => {
  expect(() => {
    const app = new App();
    app.winningLottoValidate([1, 2, 3, 4, 5, 5]);
  }).toThrow("[ERROR]");
});

test("당첨번호(보너스번호 제외) 예외처리 테스트_3", () => {
  expect(() => {
    const app = new App();
    app.winningLottoValidate([1, 2, 3, 4, 5, 6, 46]);
  }).toThrow("[ERROR]")
});

test("보너스 번호 예외처리 테스트_1", () => {
  expect(() => {
    const app = new App();
    app.winningLottoArr = [[1, 2, 3, 4, 5, 6]] //당첨번호와 중복 확인하기 위해 설정
    app.winningLottoBonusValidate(6);
  }).toThrow("[ERROR]");
});

test("보너스 번호 예외처리 테스트_2", () => {
  expect(() => {
    const app = new App();
    app.winningLottoBonusValidate(50);
  }).toThrow("[ERROR]");
});

test("수익률 계산을 위한 수익 계산테스트_1", () => {
  const app = new App();
  expect(app.yieldCal([0, 0, 0, 0, 1])).toEqual(2000000000);
});

test("수익률 계산을 위한 수익 계산테스트_2", () => {
  const app = new App();
  expect(app.yieldCal([0, 1, 1, 0, 0])).toEqual(1550000)
});

});