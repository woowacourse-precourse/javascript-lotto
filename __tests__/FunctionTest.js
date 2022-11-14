const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");
const Result = require("../src/Result");

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

describe("기능 테스트", () => {
  test("발행 로또 개수 출력", () => {
    const logSpy = getLogSpy();
    const log = "10개를 구매했습니다.";
    const money = 10000;

    const app = new App();
    app.setQuantity(money);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });

  test("발행 로또 번호 출력", () => {
    const logSpy = getLogSpy();
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
    ]);
    const logs = [
      "[8, 21, 23, 41, 42, 43]",
      "[3, 5, 11, 16, 32, 38]",
      "[7, 11, 16, 35, 36, 44]",
      "[1, 8, 11, 31, 41, 42]",
      "[13, 14, 16, 38, 42, 45]",
      "[7, 11, 30, 40, 42, 43]",
      "[2, 13, 22, 32, 38, 45]",
    ];
    const quantity = 7;

    const app = new App();
    app.publishLotto(quantity);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("당첨 내역 출력", () => {
    const logSpy = getLogSpy();
    const quantity = [1, 0, 0, 1, 1];
    const number = [
      "3개 일치",
      "4개 일치",
      "5개 일치",
      "5개 일치, 보너스 볼 일치",
      "6개 일치",
    ];
    const reward = [5000, 50000, 1500000, 30000000, 2000000000];
    const logs = [
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 1개",
    ];

    for (let index = 0; index < quantity.length; index++) {
      new Result(quantity[index], number[index], reward[index]);
    }

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("수익률 출력", () => {
    const logSpy = getLogSpy();
    const totalReward = 5000;
    const money = 50000;
    const log = "총 수익률은 10%입니다.";

    const app = new App();
    app.getBenefit(totalReward, money);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
});
