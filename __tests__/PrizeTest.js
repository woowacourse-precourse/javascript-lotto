const Prize = require("../src/Prize");
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

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("로또 테스트", () => {
  test("1등과 2등이 당첨 되었을 때 당첨 회수 일치 여부 확인 테스트", () => {
    mockQuestions(["1,2,3,4,5,6", "7"]);
    const logs = [
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 1개",
    ];
    const logSpy = getLogSpy();
    const lotto1 = new Lotto([1, 2, 3, 4, 5, 6]);
    const lotto2 = new Lotto([2, 3, 4, 5, 6, 7]);
    const prize = new Prize([lotto1, lotto2]);
    prize.calcualteWins();
    prize.announceResult();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("1등과 2등이 당첨 되었을 때 당첨 금액 일치 여부 확인 테스트", () => {
    mockQuestions(["1,2,3,4,5,6", "7"]);
    const logs = [
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 1개",
    ];
    const logSpy = getLogSpy();
    const lotto1 = new Lotto([1, 2, 3, 4, 5, 6]);
    const lotto2 = new Lotto([2, 3, 4, 5, 6, 7]);
    const prize = new Prize([lotto1, lotto2]);
    prize.calcualteWins();
    prize.announceResult();
    const prizeMoney = prize.calcualteResult();
    expect(prizeMoney).toEqual(2030000000);
  });
});
