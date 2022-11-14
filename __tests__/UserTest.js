const MissionUtils = require("@woowacourse/mission-utils");
const User = require("../src/User");
const MAX_INTEGER = Number.MAX_SAFE_INTEGER;

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

describe("User 단위 테스트", () => {
  //   test("기능 테스트", () => {
  //     mockRandoms([
  //       [8, 21, 23, 41, 42, 43],
  //       [3, 5, 11, 16, 32, 38],
  //     ]);
  //     const logs = ["[8, 21, 23, 41, 42, 43]", "[3, 5, 11, 16, 32, 38]"];
  //     const logSpy = getLogSpy();
  //     const user = User;
  //     user.showLottoNumbers();
  //     logs.forEach((log) => {
  //       expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  //     });
  //   });

  test("로또 구입 금액 유효성 검사 테스트", () => {
    const user = User;
    const result1 = user.isValidPurchase(8000);
    const result2 = () => {
      user.isValidPurchase(230);
    };
    const result3 = () => {
      user.isValidPurchase(MAX_INTEGER);
    };
    const result4 = () => {
      user.isValidPurchase(-8000);
    };

    expect(result1).toEqual(true);
    expect(result2).toThrow("[ERROR]");
    expect(result3).toThrow("[ERROR]");
    expect(result4).toThrow("[ERROR]");
  });
});
