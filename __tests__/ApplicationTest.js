const App = require("../src/App");
const Lotto = require("../src/Lotto");
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

describe("어플리케이션 로직 단위 테스트", () => {
  test("일반 기능을 테스트 한다.", () => {
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

  test("buyLotto 단위 테스트, 금액을 입력하면 해당 금액만큼 로또를 생성, 출력한다.", () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45]
    ]);
    mockQuestions(["5000"]);
    const messages = [
      "5개를 구매했습니다.",
      "[8, 21, 23, 41, 42, 43]",
      "[3, 5, 11, 16, 32, 38]",
      "[7, 11, 16, 35, 36, 44]",
      "[1, 8, 11, 31, 41, 42]",
      "[13, 14, 16, 38, 42, 45]"
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.buyLotto();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("showMyLotto 단위 테스트, myLotto 배열 속 객체들 출력한다.", () => {
    const myLottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([7, 8, 14, 17, 30, 31]),
      new Lotto([1, 5, 13, 19, 22, 42]),
      new Lotto([5, 13, 16, 28, 29, 31]),
    ];
    const messages = [
      "4개를 구매했습니다.",
      "[1, 2, 3, 4, 5, 6]",
      "[7, 8, 14, 17, 30, 31]",
      "[1, 5, 13, 19, 22, 42]",
      "[5, 13, 16, 28, 29, 31]",
    ];
    const logSpy = getLogSpy();

    const app = new App();
    app.showMyLotto(myLottos);

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("getWinningNums 단위 테스트, 사용자에게 당첨 번호를 입력받는다.", () => {
    const answer = [1, 2, 3, 4, 5, 6, 7];
    mockQuestions(["1,2,3,4,5,6", "7"]);

    const app = new App();
    expect(app.getWinningNums()).toEqual(answer);
  });

  test("showProfitResult 단위 테스트, 등수 정보와 수익률을 출력한다.", () => {
    const winningInfo = {
      1: 0,
      2: 0,
      3: 1,
      4: 1,
      5: 1
    };
    const prize = 1555000;
    const principal = 600000;
    const messages = [
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 1개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 259.2%입니다.",
    ];
    const logSpy = getLogSpy();
    const app = new App;
    app.showPrizeResult(winningInfo, prize, principal);

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

});
