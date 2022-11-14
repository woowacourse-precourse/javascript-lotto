const MissionUtils = require("@woowacourse/mission-utils");
const Vender = require("../src/Vender");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("로또 구매 클래스 테스트", () => {
  test("기능 테스트", () => {
    mockRandoms([
      [7, 15, 25, 26, 30, 44],
      [4, 8, 14, 17, 23, 24],
      [3, 6, 9, 21, 25, 41],
      [1, 30, 36, 37, 40, 42],
      [10, 15, 18, 22, 34, 36],
    ]);

    const logs = [
      "5개를 구매했습니다.",
      "[7, 15, 25, 26, 30, 44]",
      "[4, 8, 14, 17, 23, 24]",
      "[3, 6, 9, 21, 25, 41]",
      "[1, 30, 36, 37, 40, 42]",
      "[10, 15, 18, 22, 34, 36]",
    ];
    const logSpy = getLogSpy();
    const vender = new Vender(5000);
    vender.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("예외 - 로또 구매 시 1000원 단위에 값이 아닌 경우", () => {
    expect(() => {
      new Vender(1100);
    }).toThrow("[ERROR]");
  });

  test("예외 - 로또 구매 시 구매할 수 없는 값이 들어온 경우", () => {
    expect(() => {
      new Vender(0);
    }).toThrow("[ERROR]");
  });

  test("예외 - 로또 구매 시 숫자가 아닌 다른 값이 들어온 경우", () => {
    expect(() => {
      new Vender("1000a");
    }).toThrow("[ERROR]");
  });
});
