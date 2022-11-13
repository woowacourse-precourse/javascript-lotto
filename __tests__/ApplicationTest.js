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
  test("숫자는 0으로 시작하면 안된다.", () => {
    expect(() => {
      const app = new App();
      app.checkAmountStartZero("08000");
    }).toThrow("[ERROR] 0으로 시작하는 숫자는 입력할 수 없습니다.");
  });

  test("로또 구매를 1000원 단위로 하지 않았을 경우", () => {
    expect(() => {
      const app = new App();
      app.checkPurchaseAmount("8500");
    }).toThrow("[ERROR] 1,000원 단위로만 구매 가능합니다.");
  });

  test("로또 구매 금액은 숫자 문자만 입력 가능하다.", () => {
    expect(() => {
      const app = new App();
      app.checkOnlyNumber("8000.0");
    }).toThrow("[ERROR] 숫자만 입력 가능합니다.");
  });

  test("금액에 따른 로또 생성 횟수 테스트", () => {
    const app = new App();
    app.createRandomLotto(8);

    expect(app.bundleOfLotto.length).toBe(8);
  });

  test("생성된 로또 번호 오름차순 정렬 테스트", () => {
    const app = new App();

    expect(app.getSortedLotto([10, 35, 42, 31, 26, 1])).toStrictEqual([
      1, 10, 26, 31, 35, 42,
    ]);
  });

  test("string 타입 입력값이 배열로 변환되는지 테스트", () => {
    const app = new App();

    expect(app.getArrayedUserInput("1,2,3,4,5,6")).toStrictEqual([
      "1",
      ",",
      "2",
      ",",
      "3",
      ",",
      "4",
      ",",
      "5",
      ",",
      "6",
    ]);
  });

  test("숫자와 , 기호 이 외의 문자는 에러 처리", () => {
    expect(() => {
      const app = new App();
      app.checkUesrInputHaveOnlyNumberAndComma([
        "1",
        ",",
        "2",
        ",",
        "3",
        ",",
        "4",
        ",",
        "5",
        ",",
        " ",
        "6",
      ]);
    }).toThrow("[ERROR] 숫자와 ,(쉼표) 기호만을 입력해주세요.");
  });

  test("입력된 당첨 번호를 쉼표를 기준으로 나눈다.", () => {
    const app = new App();

    expect(app.getSplitedUserInput("1,2,3,4,5,6")).toStrictEqual([
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
    ]);
  });

  test("배열 원소가 number 타입으로 변환되어야한다.", () => {
    const app = new App();

    expect(app.getUserLotto("1,2,3,4,5,6")).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

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
});
