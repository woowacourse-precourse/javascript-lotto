const MissionUtils = require("@woowacourse/mission-utils");

const App = require("../src/App");
const { FIVE_WITH_BONUS, SIX, THREE } = require("../src/constants");

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

  test("generateLottoWithLottoCount 메소드는 로또 개수를 입력 받아서 그 개수만큼의 로또번호를 담은 배열을 반환한다.", () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ]);

    const app = new App();
    const lottos = app.generateLottoWithLottoCount(3);

    expect(lottos.length).toBe(3);
  });

  test("countSameNumberWithWinningNumber 메소드는 당첨번호와 로또번호를 비교하여 일치하는 숫자의 개수를 반환한다.", () => {
    const app = new App();
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const lotto = [1, 2, 3, 4, 5, 7];
    const count = app.countSameNumberWithWinningNumber(lotto, winningNumber);

    expect(count).toBe(5);
  });

  test("calculateWinningHistory 메소드는 로또번호와 당첨번호를 비교하여 당첨 횟수를 반환한다.", () => {
    const app = new App();
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lottos = [
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
    ];
    const winningHistory = app.winningHistory;

    app.calculateWinningHistory(lottos, winningNumbers, bonusNumber, winningHistory);

    expect(app.winningHistory[FIVE_WITH_BONUS]).toBe(1);
    expect(app.winningHistory[SIX]).toBe(2);
  });

  test("calculateYeild 메소드는 수익률을 계산하여 반환한다. 수익률이 100% 이상일 경우", () => {
    const app = new App();
    app.lottos = [
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
    ];
    const winningHistory = app.winningHistory;
    winningHistory[FIVE_WITH_BONUS] = 1;
    winningHistory[SIX] = 2;

    const yeild = app.calculateYeild(app.lottos, winningHistory);

    expect(yeild).toBe("1343333.33%");
  });

  test("calculateYeild 메소드는 수익률을 계산하여 반환한다. 수익률이 100% 미만일 경우", () => {
    const app = new App();
    app.lottos = [
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
    ];
    const winningHistory = app.winningHistory;
    winningHistory[THREE] = 2;

    const yeild = app.calculateYeild(app.lottos, winningHistory);

    expect(yeild).toBe("3.33%");
  });
});
