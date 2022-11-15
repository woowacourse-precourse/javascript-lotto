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
    test("1등 1번, 3등 1번, 4등 1번일 경우의 테스트 실행", () => {
        mockRandoms([
            [8, 21, 23, 41, 42, 43],
            [3, 5, 16, 21, 30, 38],
            [7, 11, 16, 35, 36, 44],
            [3, 5, 11, 21, 41, 38],
            [13, 14, 16, 38, 42, 45],
            [3, 5, 21, 16, 32, 38]
        ]);
        mockQuestions(["6000", "3,5,21,16,32,38", "7"]);
        const logs = [
            "6개를 구매했습니다.",
            "[8, 21, 23, 41, 42, 43]",
            "[3, 5, 16, 21, 30, 38]",
            "[7, 11, 16, 35, 36, 44]",
            "[3, 5, 11, 21, 41, 38]",
            "[13, 14, 16, 38, 42, 45]",
            "[3, 5, 21, 16, 32, 38]",
            "3개 일치 (5,000원) - 0개",
            "4개 일치 (50,000원) - 1개",
            "5개 일치 (1,500,000원) - 1개",
            "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
            "6개 일치 (2,000,000,000원) - 1개",
            "총 수익률은 33359166.7%입니다."
          ];
        const logSpy = getLogSpy();  
        const app = new App();
        app.play();
        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
          });
    });
});

